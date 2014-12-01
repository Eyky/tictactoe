#!/bin/bash

echo fetching stuff
docker pull eykyeyky/tictactoe
docker stop tac
docker rm tac
docker run --name tac -d -p 80:8080 eykyeyky/tictactoe
