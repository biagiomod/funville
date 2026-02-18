const FIGMA_BASE = "http://localhost:3845/assets/";

export function figmaAsset(hash: string, publicPath: string): string {
  if (import.meta.env.DEV) {
    // Return Figma URL but allow graceful fallback in <img onError>
    return `${FIGMA_BASE}${hash}`;
  }
  return publicPath;
}