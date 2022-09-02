# juice-setup

Setup for recording the juice shop with the javascript agent:

## Juice-Shop

```sh
git clone https://github.com/land-of-apps/juice-setup.git
cd juice-setup
node juice/setup.mjs [--agent-branch=branch] [--juice-tag=tag]
cd juice-shop
npx appmap-agent-js --scenario=process
```

## NextJS Blog

```sh
git clone https://github.com/land-of-apps/juice-setup.git
cd juice-setup
node nextjs/setup.mjs [--agent-branch=branch]
cd nextjs-blog
npx appmap-agent-js
```
