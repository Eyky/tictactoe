#!/bin/bash
 
echo Pushing image
docker push eykyeyky/tictactoe

echo Run fetcher
ssh root@178.62.64.41 'bash -s' < ../fetcher.sh
