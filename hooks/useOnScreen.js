import { useState, useEffect } from "react"

const useOnScreen = (ref, rootMargin = '0px') => {
    /**
    * @param {React.Ref} ref
    * @returns {boolean}
    * @description Returns true if the element is on screen
    * @example
    *   const ref = useRef();
    *   const onScreen = useOnScreen(ref, { rootMargin: '-300px' });
    *   <div ref={ref}>
    */

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting), { rootMargin }
        );
        if (ref.current) { observer.observe(ref.current); }
        return () => observer.unobserve(ref.current);
    }, []);
    // Empty array ensures that effect is only run on mount and unmount
    return isIntersecting
}

export default useOnScreen;
