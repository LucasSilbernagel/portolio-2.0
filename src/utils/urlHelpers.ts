export const getCurrentUrl = () => {
  if (typeof window !== 'undefined') return window.location.href
}

export const getPathname = () => {
  if (typeof window !== 'undefined') return window.location.pathname
}
