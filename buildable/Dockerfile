# image base
FROM node:18.17.1 as base

# set up pnpm (yarn alternative)
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# declare workdir
WORKDIR /home/app

# copy everything from root to workdir
COPY . /home/app

# install packages
RUN pnpm install


# --DEV
FROM base as local

# starts development server locally
CMD pnpm dev


# --PROD
FROM base as prod

CMD pnpm build && pnpm preview
