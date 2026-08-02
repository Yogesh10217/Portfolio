export function withBasePath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

  if (!path || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  if (!basePath) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }

  return `${basePath}/${path}`;
}
