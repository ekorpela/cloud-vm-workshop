#!/bin/bash

sudo sed -i 's/^.*ssh/ssh/' /root/.ssh/authorized_keys
sudo apt-get update
#sudo apt-get -y upgrade && sudo apt-get -y dist-upgrade && sudo apt-get -y autoremove
sudo apt-get -y install docker.io
sudo docker run -d -p 80:8787 rocker/rstudio
