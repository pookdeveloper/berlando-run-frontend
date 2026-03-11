# Mock Data System

Este directorio contiene datos mock para desarrollo local sin necesidad de base de datos.

## Archivos

- `products.ts` - Productos mock (2 productos con imágenes y variantes)
- `runClubs.ts` - Run clubs mock (5 clubes en Europa)
- `events.ts` - Eventos mock (3 eventos próximos)
- `challenges.ts` - Desafíos mock (2 desafíos activos)
- `journalPosts.ts` - Posts de journal mock (3 artículos)
- `index.ts` - Exportaciones centralizadas y configuración

## Uso

Los mocks se activan automáticamente en desarrollo mediante la variable de entorno:

```bash
NEXT_PUBLIC_USE_MOCKS=true
```

### En Desarrollo Local

Los mocks están habilitados por defecto en `.env.local`. No necesitas base de datos.

### En Producción

Los mocks están deshabilitados. La aplicación usa Neon Postgres en Vercel.

## Desactivar Mocks en Local

Si quieres usar la base de datos real en local:

1. Actualiza `.env.local`:
   ```bash
   NEXT_PUBLIC_USE_MOCKS=false
   DATABASE_URL="postgresql://..."
   ```

2. Asegúrate de tener la base de datos corriendo
3. Reinicia el servidor de desarrollo

## Estructura de Datos

Todos los mocks siguen la misma estructura que los modelos de Prisma para garantizar compatibilidad.

### Ejemplo: Product

```typescript
{
  id: '1',
  name: 'Alpha Trail Short 7"',
  slug: 'alpha-trail-short-7',
  description: '...',
  price: 98.00,
  category: 'TRAIL_SHORTS',
  featured: true,
  images: [...],
  variants: [...],
  createdAt: Date,
  updatedAt: Date,
}
```

## Agregar Nuevos Mocks

1. Crea un nuevo archivo en `/src/mocks/`
2. Exporta un array con los datos mock
3. Agrega la exportación a `index.ts`
4. Actualiza las páginas para usar los mocks cuando `USE_MOCKS === true`

## Mantenimiento

Los datos mock se basan en `/prisma/seed.ts`. Cuando actualices el seed, considera actualizar los mocks también.
