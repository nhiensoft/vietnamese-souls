import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function GoogleAnalytics() {
  const location = useLocation()
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID
  const injected = useRef(false)
  const ready = useRef(false)

  useEffect(() => {
    if (!id || injected.current) return
    injected.current = true
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    script.onload = () => {
      window.dataLayer = window.dataLayer ?? []
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer!.push(args)
      }
      window.gtag('js', new Date())
      window.gtag('config', id, {
        page_path: window.location.pathname + window.location.search,
      })
      ready.current = true
    }
    document.head.appendChild(script)
  }, [id])

  useEffect(() => {
    if (!id || !ready.current || !window.gtag) return
    window.gtag('config', id, {
      page_path: location.pathname + location.search,
    })
  }, [id, location.pathname, location.search])

  return null
}
