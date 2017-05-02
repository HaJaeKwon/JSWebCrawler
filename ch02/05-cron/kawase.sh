# !/bin/zsh

PATH=/usr/local/bin:/usr/bin:/bin
NODE_PATH=/usr/lib/node_modules

cd $(dirname ${0}) 
node kawase-usd_krw.js
