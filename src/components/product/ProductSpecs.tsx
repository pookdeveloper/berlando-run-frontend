'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { ProductUseCase } from '@prisma/client'

interface ProductSpecsProps {
  weight?: number | null
  material?: string | null
  temperature?: string | null
  useCases?: ProductUseCase[]
}

export function ProductSpecs({
  weight,
  material,
  temperature,
  useCases = [],
}: ProductSpecsProps) {
  const specs = [
    weight && { label: 'Weight', value: `${weight}g` },
    material && { label: 'Material', value: material },
    temperature && { label: 'Temperature Range', value: temperature },
    useCases.length > 0 && {
      label: 'Use Cases',
      value: useCases.map((uc) => uc.replace(/_/g, ' ')).join(', '),
    },
  ].filter(Boolean) as Array<{ label: string; value: string }>

  if (specs.length === 0) return null

  return (
    <Accordion type="single" collapsible defaultValue="specs" className="w-full">
      <AccordionItem value="specs" className="border-t border-black/10">
        <AccordionTrigger className="flex w-full items-center justify-between py-6 text-left hover:no-underline group">
          <span className="text-sm font-medium text-black">Technical Specifications</span>
          <ChevronDown className="h-4 w-4 text-black transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </AccordionTrigger>
        <AccordionContent className="pb-6 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <dl className="space-y-4">
            {specs.map((spec) => (
              <div key={spec.label} className="flex items-start justify-between text-sm">
                <dt className="font-mono text-black/60">{spec.label}</dt>
                <dd className="text-right text-black">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
