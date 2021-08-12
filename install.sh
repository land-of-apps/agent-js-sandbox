git clone https://github.com/bkimminich/juice-shop.git
cd juice-shop
npm install
npm install @appland/appmap-agent-js
ln -s ../appmap.yml appmap.yml
mkdir tmp
mkdir tmp/appmap
npx @appland/appmap-agent-js --scenario juice