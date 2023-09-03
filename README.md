# Preface
This takehome assignment is built using Vue3 and Vuetify3, bundled with Vite, written in Typescript. (Here's a [good article](https://github.com/readme/featured/typescript-gradual-types) on gradual typing.)

You are welcome to read my [commit list](https://github.com/lucidkodo/vue3-todo/commits/main) to understand more about the setup process of this application.

The `<script>` within the SFC Vue files in the application are written in many ways to demonstrate the flexibility of writing Vue files.

# Project structure
There are 2 folders within this repo: `/base` and `/buildable`. They are 2 different interpretations of the application.
## `/base`
Consists of raw HTML, CSS, and JS files which you can just download the entire `base` folder, and open the HTML file in browser. No setup required. The Vue structure is very flattened but it works the same.

## `/buildable`
This is the directory that houses the "meat" of this application. It requires a slightly more elaborated steps to set up but it is feature-rich.

# Setup instructions for `/buildable`
This application uses [Node](https://nodejs.org/en/download). There are 2 ways you can get it running on your local machine:
1. using Node (version 18.17.1 or above)
2. using Docker

This application allows you to run a **development** or **production** build locally.

## Clone repo
```bash
git clone git@github.com:lucidkodo/vue3-todo.git
```
## Start development server

### With Node
Install all the packages/dependencies of the application in `/buildable`
```bash
cd vue3-todo/buildable
pnpm install # installs packages
pnpm dev # starts development server

# replace "pnpm" with any other node package manager you have
```

### With Docker
Build the image & wait for the server to be started
```bash
docker compose up -d

# if you do not have the compose plugin,
# replace "docker compose" with "docker-compose" (extra dash)
# so "docker-compose up -d"
```

When you see the screen below,
```bash
$ docker compose up -d
[+] Building 31.5s (10/10) FINISHED
# ...build steps hidden
[+] Running 2/2
 ✔ Network buildable_default  Created
 ✔ Container vue3_todo        Started
```
you should be able to visit localhost @ port 4010 and see the application in action!

(Optional) If you follow the logs, you should see Vite serving the development server!
```bash
$ docker logs --follow <container id>
> buildable@0.0.0 dev /home/app
> vite


  VITE v4.4.5  ready in 1181 ms

  ➜  Local:   http://localhost:4010/
  ➜  Network: http://0.0.0.0:4010/
```

### Exploring Node development environment
Whether you've started the development server using Node or Docker, changes to the source code will trigger a hot-reload and you should be able to see your changes almost immediately.

PS: Only changes to the files in `/src` will trigger a reload. Should you make changes to files *outside* of `/src`, you'll need to stop the server/container and start it again for the changes to be reflected.

## Start production server
Before running a production server, the production build must first be generated.
> Remarks: Do take note that the production build does not have hot-reload feature.
### With Node
Run the build command
```bash
pnpm build # generates a build optimised for production environment
```

Serve the production build
```bash
pnpm preview # serves the production build on port 4011
```

You should see output below
```bash
$ pnpm build

> buildable@0.0.0 build /path/to/vue3-todo/buildable
> vue-tsc && vite build

vite v4.4.5 building for production...
✓ 235 modules transformed.
dist/index.html                   0.58 kB │ gzip:  0.36 kB
dist/assets/index-fd26b50a.css  309.55 kB │ gzip: 37.74 kB
dist/assets/index-b2d0bcd6.js   208.25 kB │ gzip: 72.15 kB
✓ built in 8.57s

$ pnpm preview

> buildable@0.0.0 preview /path/to/vue3-todo/buildable
> vite preview

  ➜  Local:   http://localhost:4011/
  ➜  Network: http://0.0.0.0:4011/

```

### With Docker
Run this command
```bash
docker compose -f docker-compose.prod.yml up -d
# again, replace "docker compose" with "docker-compose" if you need to
```

The production build will be generated and served from the container.
Checking the container logs should show you the below output:
```bash
 > buildable@0.0.0 build /home/app
 > vue-tsc && vite build

 vite v4.4.5 building for production...
 transforming...
 ✓ 235 modules transformed.
 rendering chunks...
 computing gzip size...
 dist/index.html                   0.58 kB │ gzip:  0.36 kB
 dist/assets/index-fd26b50a.css  309.55 kB │ gzip: 37.74 kB
 dist/assets/index-b2d0bcd6.js   208.25 kB │ gzip: 72.15 kB
 ✓ built in 7.08s

 > buildable@0.0.0 preview /home/app
 > vite preview

   ➜  Local:   http://localhost:4011/
   ➜  Network: http://0.0.0.0:4011/

```

## Docker remarks:
You cannot run the development and production server simultaneously. You'll need to stop the container, remove all data when you're switching.
### Stop command with Node
```bash
pnpm stop # if you're running node env
```

### Stop command with Docker
```bash
docker compose down -v && docker compose rm --stop --force -v hitower && docker rmi buildable-hitower
```

# Foot note
Hope this helps! Feel free to contact me should you have any question or face any problem running the application!

Thank you for your time!
