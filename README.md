# Getting Started

This project is a starter of apps that use REACT & TYPESCRIPT.

**Read this before creating a PR:** [Conventions](https://github.com/oussamamessaoudi/Conventions)
## Dependencies 

- React 
- React Dom
- TypeScript
- Styled Components 
- env-cmd (for using environments)
- axios

### Dev:
- eslint
- prettier 

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
|    |    |    |----App
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
