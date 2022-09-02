# AgentJS Sandbox

Setup for recording example applications with the JavaScript agent.
For now there is now installation, simply clone the repository:

```sh
git clone https://github.com/land-of-apps/agent-js-sandbox.git
cd agent-js-sandbox
```

## Juice-Shop

```sh
node juice/setup.mjs [--agent-branch=branch] [--juice-tag=tag]
cd juice-shop
npx appmap-agent-js --scenario=process
```

## NextJS Blog

```sh
node nextjs/setup.mjs [--agent-branch=branch]
cd nextjs-blog
npx appmap-agent-js
```
