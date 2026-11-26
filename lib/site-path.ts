export const siteBasePath =
  process.env.GITHUB_PAGES === "true" ? "/Americano" : "";

export function sitePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${siteBasePath}${path}`;
}
