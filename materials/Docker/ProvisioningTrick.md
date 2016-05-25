# Trick to deploy software as a docker image

* Install Docker on the machine
* Pull the image for the software, e.g. <b>Bowtie</b> using the image ``genomicpariscentre/bowtie1``
* Create a file ''/usr/bin/bowtie'' with the following content:
```
#! /bin/bash
uid=`id -u $LOGNAME`
gid=`id -g $LOGNAME`
docker run --rm -u $uid:$gid -v $PWD:$PWD -v $HOME:$HOME -w $PWD genomicpariscentre/bowtie1 bowtie ${@:1}
```
* Create a file ``/etc/sudoers.d/bowtie`` with the following content:
```
%users      ALL=(ALL) NOPASSWD: /usr/bin/bowtie
```
* Now any user can run Bowtie using password-less <i>sudo</i>:
```
[user@host]$ sudo bowtie --version
bowtie version 1.1.1
64-bit
Built on fbc229a23508
Wed Mar 25 10:58:01 UTC 2015
Compiler: gcc version 4.6.3 (Ubuntu/Linaro 4.6.3-1ubuntu5)
Options: -O3 -m64  -Wl,--hash-style=both -DPOPCNT_CAPABILITY -static -static
Sizeof {int, long, long long, void*, size_t, off_t}: {4, 8, 8, 8, 8, 8}
```
