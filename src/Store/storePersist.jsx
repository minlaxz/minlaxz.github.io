export const storePersist = {
    set: (key, state) => {
        window.localStorage.setItem(key, JSON.stringify(state));
    },
    get: (key) => {
        const result = window.localStorage.getItem(key);
        try {
            return JSON.parse(result);
        } catch (error) {
            /* Not a JSON format, but Redux needs an empty Object not Null */
            return {};
        }
    },
    remove: (key) => {
        window.localStorage.removeItem(key);
    },
    isExist: (key) => {
        return window.localStorage.getItem(key) !== null;
    },
    getAll: () => {
        return window.localStorage;
    },
    clear: () => {
        window.localStorage.clear();
    },
};

export default storePersist;