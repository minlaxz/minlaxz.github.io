import { useState, useCallback } from "react";


const useToggle = (initialState = false) => {
    const [state, setState] = useState < boolean > (initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
};

export default useToggle;