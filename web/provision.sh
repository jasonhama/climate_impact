#!/usr/bin/env bash

# use noninteractive mode since this is automated
export DEBIAN_FRONTEND=noninteractive

# suppress erroneous error messages from dpkg-preconfigure
sudo -E rm -v /etc/apt/apt.conf.d/70debconf

# update the package database 
sudo -E apt-get update

# install git
sudo -E apt-get install -y git

# install Node.js v4.x
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo -E apt-get install -y nodejs

# install build-essential for Node modules w/native code
sudo -E apt-get install -y build-essential

# allow Node.js servers to bind to low ports
sudo -E apt-get install -y chase
sudo -E apt-get install -y libcap2-bin
sudo -E setcap cap_net_bind_service=+ep $(chase $(which node))

# install pm2 utility for managing node servers
sudo -E npm install -g pm2 --loglevel error

# install the tsd utility for installing
# Visual Studio Code typings files
# gives statement completion and parameter hinting
sudo -E npm install -g tsd --loglevel error
