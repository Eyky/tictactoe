#!/bin/bash
set -e
echo Cleaning...
rm -rf ./dist

echo "Installing grunt"
npm install grunt
 
echo "Installing bower"
npm install bower
 
echo "Npm install"
npm install
 
echo "Bower install"
bower install
 
 
echo "Running grunt"
grunt

cp ./Dockerfile ./dist/

cd dist
npm install --production

echo Building docker image
docker build -t eykyeyky/tictactoe .

echo Pushing image
docker push eykyeyky/tictactoe

echo Run fetcher
ssh root@178.62.64.41 'bash -s' < ../fetcher.sh


echo "Done!"