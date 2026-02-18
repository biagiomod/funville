const FIGMA_BASE = "http://localhost:3845/assets/";

/**
 * Returns the Figma dev-server asset URL in development mode.
 * In production, returns `publicPath` — place assets in /public/assets/.
 */
export function figmaAsset(hash: string, publicPath: string): string {
  if (import.meta.env.DEV) {
    return `${FIGMA_BASE}${hash}`;
  }
  return publicPath;
}
