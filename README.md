# juice-setup

Setup for recording the juice shop with the javascript agent:

```sh
git clone https://github.com/land-of-apps/juice-setup.git
cd juice-setup
node setup.mjs [--agent-branch=branch] [--juice-tag=tag]
cd juice-shop
npx appmap-agent-js --scenario=process
```
