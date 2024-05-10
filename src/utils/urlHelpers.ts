export const getPathname = () => {
  if (typeof window !== 'undefined') return window.location.pathname
}
