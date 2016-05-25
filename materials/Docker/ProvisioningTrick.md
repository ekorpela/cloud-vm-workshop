# Trick to deploy software as a docker image

* Install Docker on the machine
* Pull the image for the software, e.g. ``genomicpariscentre/bowtie1``
* Create a file ''/usr/bin/bowtie'' with the following content:
```
#! /bin/bash
uid=`id -u $LOGNAME`
gid=`id -g $LOGNAME`
docker run --rm -u $uid:$gid -v $PWD:$PWD -v $HOME:$HOME -w $PWD genomicpariscentre/bowtie1 bowtie ${@:1}
```
