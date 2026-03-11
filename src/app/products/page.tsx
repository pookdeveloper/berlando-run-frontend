import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatPrice } from '@/lib/utils'

interface ProductsPageProps {
  searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({ searchParams }: ProductsPageProps): Promise<Metadata> {
  const params = await searchParams
  const category = params.category
  
  if (category) {
    const categoryNames: Record<string, string> = {
      'trail-shorts': 'Trail Shorts',
      'technical-tees': 'Technical Tees',
      'outerwear': 'Outerwear',
    }
    const categoryName = categoryNames[category] || 'Products'
    
    return {
      title: `${categoryName} - Berlando Run`,
      description: `Shop ${categoryName} designed for trail running performance and freedom.`,
    }
  }

  return {
    title: 'Products - Berlando Run',
    description: 'Premium trail running apparel designed for freedom of movement and exploration.',
  }
}

// Force dynamic rendering (no static generation at build time)
export const dynamic = 'force-dynamic'

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const category = params.category

  const categoryToEnum: Record<string, string> = {
    'trail-shorts': 'TRAIL_SHORTS',
    'technical-tees': 'TECHNICAL_TEES',
    'outerwear': 'OUTERWEAR',
  }

  const products = await prisma.product.findMany({
    where: {
      featured: true,
      ...(category && categoryToEnum[category] ? { category: categoryToEnum[category] as any } : {}),
    },
    include: {
      images: {
        orderBy: {
          order: 'asc',
        },
        take: 1,
      },
      variants: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const categoryNames: Record<string, string> = {
    'trail-shorts': 'Trail Shorts',
    'technical-tees': 'Technical Tees',
    'outerwear': 'Outerwear',
  }

  const categoryDescriptions: Record<string, string> = {
    'trail-shorts': 'Engineered for maximum freedom of movement on technical terrain.',
    'technical-tees': 'Merino-blend performance tees for temperature regulation and comfort.',
    'outerwear': 'Weather protection without compromise. Technical shells for alpine conditions.',
  }

  const pageTitle = category ? categoryNames[category] : 'Shop Collection'
  const pageDescription = category
    ? categoryDescriptions[category]
    : 'Each piece is engineered for maximum freedom of movement. Premium materials, minimal design, technical performance.'

  return (
    <div className="min-h-screen bg-stone">
      {/* Header Section */}
      <div className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-mono text-sm uppercase tracking-wider text-black/60">
            {category ? 'Shop' : 'Shop Collection'}
          </h1>
          <p className="mt-4 text-4xl font-light tracking-tight text-black lg:text-5xl">
            {pageTitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-black/70">
            {pageDescription}
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => {
            const image = product.images[0]

            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="aspect-square w-full overflow-hidden bg-stone transition-opacity group-hover:opacity-75">
                  {image ? (
                    <Image
                      src={image.url}
                      alt={image.alt || product.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-black/5">
                      <span className="font-mono text-sm text-black/30">No image</span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-black/60">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-black">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-black/70 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-2 text-lg font-medium text-black">
                    {formatPrice(Number(product.price))}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {products.length === 0 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center">
            <p className="font-mono text-sm uppercase tracking-wider text-black/40">
              No products available
            </p>
            <p className="mt-2 text-black/60">
              Check back soon for new releases
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
