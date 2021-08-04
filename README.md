Building Pages for minlaxz.github.io

using React and Vite as build tool

[github.minlaxz.me](https://github.minlaxz.me) is pointed to [minlaxz.github.io](https://minlaxz.github.io) using [CNAME](https://github.com/minlaxz/minlaxz.github.io/blob/5b8dc6e5f5cee8b5f51c5a282d9b3c8ca3a64e4c/CNAME#L1)

That way for eg. [minlaxz.github.io/repo]() is available at [github.minlaxz.me/repo]()

- [ ] **Changing domain to [minlaxz.dev]()**
- [ ] Deploy to Cloudflare Pages
    - [ ] Test Routing without `HashRouter` using another branch not to touch `main` as it is used with Github Actions
    - [ ] Test custom domains/ sub-domain
    - [ ] Test Cloudflare KV Store
    - [ ] Test Branch delpoyment
    - [ ] Test Production and Development
- [x] Deploy to GitHub Pages
    - [x] Add [Github Actions](.github/workflows/deploy-pages-on-pr-to-main.yml) for auto deployment
    - [x] Actions will build from `main` and deploy at `gh-pages`
    - [x] Source code and Static files are seperated on each branch
    - [x] ~~yarn add -D gh-pages~~
    - [x] ~~yarn depoly or predeploy~~
    - [x] ~~yarn add -D serve~~
    - [x] ~~serve -s dist~~
    - [x] Added `HashRouter` for front-end routing
    - [x] [CNAME](https://github.com/minlaxz/minlaxz.github.io/blob/5b8dc6e5f5cee8b5f51c5a282d9b3c8ca3a64e4c/CNAME#L1) pointed to [minlaxz.github.io]()
- [ ] Listing repos with `axios` and `useEffect` 🤷


