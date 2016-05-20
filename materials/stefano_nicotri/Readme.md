# Materials for the INFN cloud demo

The demo shows:

1. How to create a large VM with automatic configuration of a "class" of N students, with N a parameter customizable by the trainer. The students have a large shared space in which they (or the trainer) could put datasets or applications. This is done through OpenStack Heat orchestrator using a [template](https://github.com/ekorpela/cloud-vm-workshop/blob/master/materials/stefano_nicotri/bio_class.yaml) and [a simple set of input parameters](https://github.com/ekorpela/cloud-vm-workshop/blob/master/materials/stefano_nicotri/bio_class_env.yaml)
1. How to create a pool of N VM running a RStudio Docker with public IP. This is done creating multiple OpenStack instances with [user data script](https://github.com/ekorpela/cloud-vm-workshop/blob/master/materials/stefano_nicotri/RStudio_Docker_user_data.sh)
1. (video) How to automate further such procedure, with future perspectives (INDIGO DataCloud project)

The video is too heavy to push it to GitHub, but it can be found [here](http://www.ba.infn.it/~nicotri/Elixir_Workshop/demo_mesos_bioworkshop.mp4)
