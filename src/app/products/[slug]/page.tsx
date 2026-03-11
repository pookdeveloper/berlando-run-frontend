import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { formatPrice } from '@/lib/utils'
import { ProductGallery } from '@/components/product/ProductGallery'
import { VariantSelector } from '@/components/product/VariantSelector'
import { AddToCart } from '@/components/product/AddToCart'
import { ProductSpecs } from '@/components/product/ProductSpecs'
import { MaterialStory } from '@/components/product/MaterialStory'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await prisma.product.findUnique({
    where: { slug },
    select: {
      name: true,
      description: true,
      images: {
        take: 1,
        orderBy: { order: 'asc' },
      },
    },
  })

  if (!product) {
    return {
      title: 'Product Not Found - Berlando Run',
    }
  }

  const image = product.images[0]

  return {
    title: `${product.name} - Berlando Run`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: image ? [{ url: image.url, alt: image.alt }] : [],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      images: {
        orderBy: { order: 'asc' },
      },
      variants: {
        orderBy: { size: 'asc' },
      },
    },
  })

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-stone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductGallery images={product.images} productName={product.name} />

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <p className="font-mono text-xs uppercase tracking-wider text-black/60">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-light tracking-tight text-black sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-medium text-black">
              {formatPrice(Number(product.price))}
            </p>

            <div className="mt-6 border-t border-black/10 pt-6">
              <p className="text-base text-black/80">{product.description}</p>
            </div>

            <VariantSelector variants={product.variants} />

            <AddToCart
              productId={product.id}
              productName={product.name}
              productPrice={Number(product.price)}
              productImage={product.images[0]?.url || ''}
              productSlug={product.slug}
              variants={product.variants}
            />

            <ProductSpecs
              weight={product.weight}
              material={product.material}
              temperature={product.temperature}
              useCases={product.useCases}
            />

            <MaterialStory
              materialStory={product.materialStory}
              productStory={product.productStory}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
