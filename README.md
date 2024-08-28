# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### DEV

```bash
npm start
```

#### Script

```bash
cd build
git init
git cmp '1'
git remote add origin https://github.com/cspidar/cspidar.github.io.git
git push --set-upstream origin master --force
cd ..
```

### Build & Deploy

```bash
./deploy.sh
```

### TITLE




### Deploy URL

- repo: https://github.com/cspidar/cspidar.github.io
- site: https://cspidar.github.io/

### 영문 배포 후부터 레포 분리 예정