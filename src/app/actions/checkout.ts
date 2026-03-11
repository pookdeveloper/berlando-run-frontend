'use server'

import { stripe } from '@/lib/stripe'
import { CartItem } from '@/stores/cartStore'

export async function createCheckoutSession(items: CartItem[]) {
  try {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: `Size: ${item.size}${item.color ? `, Color: ${item.color}` : ''}`,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
      shipping_address_collection: {
        allowed_countries: ['ES', 'FR', 'DE', 'GB', 'PT', 'IT', 'NL', 'BE'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1000,
              currency: 'eur',
            },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 2000,
              currency: 'eur',
            },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 2,
              },
            },
          },
        },
      ],
    })

    return { url: session.url }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return { error: 'Failed to create checkout session' }
  }
}
