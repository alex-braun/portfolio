import { useState, useEffect } from 'react'
import { Avatar, Skeleton } from '@mantine/core'
import { getImageUrl } from '@services/imageService'

interface SupabaseAvatarProps {
  /** Path to the image in Supabase storage (e.g., 'profile/avatar.jpg') */
  path: string
  /** Fallback image URL if Supabase image fails to load */
  fallbackSrc?: string
  /** Show loading skeleton while image loads */
  showSkeleton?: boolean
  /** Custom loading component */
  loadingComponent?: React.ReactNode
  /** Content shown when there's no image (e.g. initials) */
  children?: React.ReactNode
  /** Alt text for the image */
  alt?: string
  /** Size of the avatar */
  size?: number | string
  /** Border radius */
  radius?: number | string
  /** Additional CSS class name */
  className?: string
  /** Additional styles */
  style?: React.CSSProperties
}

export function SupabaseAvatar({
  path,
  fallbackSrc,
  showSkeleton = true,
  loadingComponent,
  children,
  size,
  radius,
  ...restProps
}: Readonly<SupabaseAvatarProps>) {
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
    return loadingComponent || <Skeleton height={size} circle radius={radius} />
  }

  // Show fallback or error state
  if (hasError || !imageUrl) {
    return (
      <Avatar
        src={fallbackSrc}
        size={size}
        radius={radius}
        {...restProps}
      >
        {children}
      </Avatar>
    )
  }

  return (
    <Avatar
      src={imageUrl}
      size={size}
      radius={radius}
      {...restProps}
    >
      {children}
    </Avatar>
  )
}
