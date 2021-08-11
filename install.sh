git clone https://github.com/bkimminich/juice-shop.git
cd juice-shop
npm install
npm install @appland/appmap-agent-js
mkdir tmp
mkdir tmp/appmap
cp ../appmap.yml appmap.yml
npx @appland/appmap-agent-js --scenario juice