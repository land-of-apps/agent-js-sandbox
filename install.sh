git clone https://github.com/bkimminich/juice-shop.git
cd juice-shop
git checkout tags/v13.3.0
npm install
npm install @appland/appmap-agent-js
ln -s ../appmap.yml appmap.yml
# npx appmap-agent-js --scenario=mocha
