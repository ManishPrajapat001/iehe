import { useEffect, useState, useMemo } from "react"

export function useOnScreen(reference) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    ), [])


    useEffect(() => {
        observer.observe(reference.current)
        return () => observer.disconnect()
    }, [observer, reference])

    return isIntersecting;
}