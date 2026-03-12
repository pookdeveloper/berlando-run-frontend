interface MaterialStoryProps {
  materialStory?: string | null
  productStory?: string | null
}

export function MaterialStory({ materialStory, productStory }: MaterialStoryProps) {
  if (!materialStory && !productStory) return null

  return (
    <div className="border-t border-border pt-16">
      <div className="mx-auto max-w-7xl">
        {materialStory && (
          <div className="mb-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Material Story
                </h2>
                <h3 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                  Engineered for performance
                </h3>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-foreground/80">
                  {materialStory}
                </p>
              </div>
            </div>
          </div>
        )}

        {productStory && (
          <div className="border-t border-border pt-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center">
                <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Product Story
                </h2>
                <h3 className="mt-4 text-3xl font-light tracking-tight text-foreground lg:text-4xl">
                  Designed for freedom
                </h3>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-foreground/80">
                  {productStory}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
