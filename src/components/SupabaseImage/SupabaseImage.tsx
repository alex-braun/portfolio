import { useState, useEffect } from 'react'
import { Image, Skeleton } from '@mantine/core'
import { getImageUrl } from '../../services/imageService'

interface SupabaseImageProps {
  /** Path to the image in Supabase storage (e.g., 'profile/avatar.jpg') */
  path: string
  /** Fallback image URL if Supabase image fails to load */
  fallbackSrc?: string
  /** Show loading skeleton while image loads */
  showSkeleton?: boolean
  /** Custom loading component */
  loadingComponent?: React.ReactNode
  /** Alt text for the image */
  alt?: string
  /** Height of the image */
  h?: number | string
  /** Width of the image */
  w?: number | string
  /** How the image should fit within its container */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  /** Border radius */
  radius?: number | string
  /** Additional CSS class name */
  className?: string
  /** Additional styles */
  style?: React.CSSProperties
}

export function SupabaseImage({
  path,
  fallbackSrc,
  showSkeleton = true,
  loadingComponent,
  alt,
  h,
  w,
  fit,
  radius,
  className,
  style,
}: SupabaseImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadImage = async () => {
      try {
        setIsLoading(true)
        setHasError(false)

        const { data, error } = await getImageUrl(path)
        
        if (!isMounted) return

        if (error || !data) {
          console.warn(`Failed to load image from Supabase: ${path}`, error)
          setHasError(true)
        } else {
          setImageUrl(data)
        }
      } catch (error) {
        if (!isMounted) return
        console.error(`Error loading image: ${path}`, error)
        setHasError(true)
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadImage()

    return () => {
      isMounted = false
    }
  }, [path])

  // Show loading state
  if (isLoading && showSkeleton) {
    return loadingComponent || <Skeleton height={h || 200} radius="xs" />
  }

  // Show fallback or error state
  if (hasError || !imageUrl) {
    if (fallbackSrc) {
      return (
        <Image 
          src={fallbackSrc} 
          alt={alt} 
          h={h}
          w={w}
          fit={fit}
          radius={radius}
          className={className}
          style={style}
        />
      )
    }
    
    // Return a placeholder if no fallback
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=="
        alt={alt || 'No image available'}
        h={h}
        w={w}
        fit={fit}
        radius={radius}
        className={className}
        style={style}
      />
    )
  }

  return (
    <Image 
      src={imageUrl} 
      alt={alt} 
      h={h}
      w={w}
      fit={fit}
      radius={radius}
      className={className}
      style={style}
    />
  )
}
