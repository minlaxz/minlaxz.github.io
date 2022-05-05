import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    /**
     * @param {string} query
     * @returns {boolean}
     * @description Returns true if the media query matches
     * @example
     *  const isDesktop = useMediaQuery('(min-width: 768px)');
     */

    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;