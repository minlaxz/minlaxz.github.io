import * as repoConst from "@/Constants/repo";

const endpoint = import.meta.env.MODE === "development" && import.meta.env.VITE_BYPASS_CHECK === '0'
    ? "http://localhost:3001/api/v1/github/lastcommit"
    : "https://microapi.octocat.tk/api/v1/github/lastcommit"


export const mainBranchEndpoint = `https://api.github.com/repos/${repoConst.user}/${repoConst.repo}/branches/${repoConst.mainBranch}`;
export const devBranchEndpoint = `https://api.github.com/repos/${repoConst.user}/${repoConst.repo}/branches/${repoConst.develBranch}`;
export default endpoint;

