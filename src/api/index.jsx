export const endpoint = import.meta.env.MODE === "development" && import.meta.env.VITE_BYPASS_CHECK === '0' ?
    "http://localhost:3001/api/v1/github/lastcommit" :
    "https://microapi.octocat.tk/api/v1/github/lastcommit"