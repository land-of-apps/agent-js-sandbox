git clone https://github.com/bkimminich/juice-shop.git
cd juice-shop
npm install

# npm install @appland/appmap-agent-js
# npx @appland/appmap-agent-js --scenario juice

mkdir node_modules/@appland
ln -s ../../../../appmap-agent-js ./node_modules/@appland/appmap-agent-js

ln ../appmap.yml appmap.yml 
cp ../appmap.yml appmap.yml


node ./node_modules/@appland/appmap-agent-js/bin/bin.mjs
