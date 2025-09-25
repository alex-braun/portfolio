import { supabase, STORAGE_BUCKET } from '../lib/supabase'

export interface ImageUrlResult {
  data: string | null
  error: Error | null
}


/**
 * Get a public URL for an image from Supabase storage
 */
export async function getImageUrl(path: string): Promise<ImageUrlResult> {
  try {
    const { data } = supabase.storage
      .from(STORAGE_BUCKET)
      .getPublicUrl(path)

    return { data: data.publicUrl, error: null }
  } catch (error) {
    return { data: null, error: error as Error }
  }
}

/**
 * List all images in a folder
 */
export async function listImages(folder: string = ''): Promise<{
  data: string[] | null
  error: Error | null
}> {
  try {
    const { data, error } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list(folder)

    if (error) {
      return { data: null, error }
    }

    const imagePaths = data
      .filter(file => file.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i))
      .map(file => folder ? `${folder}/${file.name}` : file.name)

    return { data: imagePaths, error: null }
  } catch (error) {
    return { data: null, error: error as Error }
  }
}
