import type { ImageMetadata } from 'astro';

const modules = import.meta.glob('../assets/projects/**/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, ImageMetadata>;

const byFile = new Map<string, ImageMetadata>();

for (const [path, image] of Object.entries(modules)) {
  const file = path.split('/').pop();
  if (file) byFile.set(file, image);
}

export function projectImage(src: string): ImageMetadata {
  const file = src.split('/').pop() ?? src;
  const image = byFile.get(file);
  if (!image) {
    throw new Error(`No project image for ${src}`);
  }
  return image;
}
