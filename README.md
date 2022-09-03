# AgentJS Sandbox

Setup for recording example applications with the JavaScript agent. There is now installation, simply clone the repository:

```sh
git clone https://github.com/land-of-apps/agent-js-sandbox.git
cd agent-js-sandbox
```

## Juice-Shop

```sh
node bin/juice-shop.mjs [agent-branch] [juice-tag]
cd juice-shop
npx appmap-agent-js --scenario=process
```

## NextJS Blog

```sh
node bin/nextjs-blog.mjs [agent-branch]
cd nextjs-blog
npx appmap-agent-js
```
