export const getImageUrl = (path) => {
  // For production build, use relative path
  if (import.meta.env.PROD) {
    return path;
  }
  // For development, use the assets path
  return new URL(`../assets/${path}`, import.meta.url).href;
};
