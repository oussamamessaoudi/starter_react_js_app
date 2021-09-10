# Getting Started

This project is a starter of apps that use REACT & TYPESCRIPT.

**Read this before creating a PR:** [Conventions](https://github.com/oussamamessaoudi/Conventions)
## Dependencies 

- React 
- React Dom
- React Router Dom
- TypeScript
- Styled Components 
- env-cmd (for using environments)
- axios
- faker

### Dev:
- eslint
- prettier 

## Optional dependencies

- [Bootstrap](https://www.npmjs.com/package/react-bootstrap) [use Boostrap 4]
- [Lodash](https://www.npmjs.com/search?q=keywords:lodash-modularized) [use the modularized dependencies]
- [moment.js](https://www.npmjs.com/package/moment)

**NB**: _When using **Library** [bootstrap, charts, ...], try to create a HOC to have code less coupled with a library._ 

## Structure of project 

```
ROOT
|----public
|    |*---index.html 
|----src
|    |----main
|    |    |----react
|    |    |    |----_core
|    |    |    |    |----Controller
|    |    |    |    |    |----Client
|    |    |    |    |    |    |----Authentification
|    |    |    |    |    |    |    |*---models.ts
|    |    |    |    |    |    |    |*---server.ts
|    |    |    |    |    |    |    |*---standalone.ts
|    |    |    |    |    |    |*---index.ts
|    |    |    |    |    |    |*---utils.ts
|    |    |    |    |    |*---index.ts
|    |    |    |    |----Env
|    |    |    |    |    |*---index.ts
|    |    |    |    |----utils
|    |    |    |    |    |----Hooks
|    |    |    |    |    |    |*---index.ts
|    |    |    |----App
|    |    |    |    |----_components 
|    |    |    |    |    |----Loading
|    |    |    |    |    |    |*---index.tsx
|    |    |    |    |    |****ADDING COMPONENTS
|    |    |    |    |----Dashboard(Page 1)
|    |    |    |    |    |*---index.tsx
|    |    |    |    |----Login(Page 2)
|    |    |    |    |    |*---index.tsx
|    |    |    |    |    |*---Controller.tsx
|    |    |    |    |****CREATING PAGES
|    |    |    |    |*---index.tsx (starter of the App)
|    |    |----ressources
|    |    |    |----images
|    |    |    |    |*---logo.svg
|    |    |    |    |****HERE WE PUT IMAGES
|    |----test
|    |*---index.ts
|----environments
|    |*---.env.standalone
|    |*---.env.local
|    |*---.env.dev
|*---.eslintrc.json
|*---.prettierrc.json
|*---package.json
|*---package-lock.json
```
