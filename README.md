# cloud-vm-workshop
Material for the ELIXIR EXCELERATE workshop "Using clouds and VMs in bioinformatics training" 23.-25.5.2016 Espoo, Finland

This workshop focuses on a dialogue between bioinformatics trainers and infrastructure specialists in order to provide an optimal software and hardware infrastructure for training. Bioinformatics analysis typically involves a large number of software and reference data, making the installation process a time-consuming task. This problem is aggravated in a course setting, where every participant needs to have an identical installation, sufficient hardware to run it, and, ideally, access to an identical set-up after the course. If participants use their own laptops, a lot of valuable course time is too often wasted on installation problems.

Ready-to-run virtual machine (VM) images and Docker containers containing pre-installed analysis software are gaining momentum in bioinformatics. They can be run on participant’s own computer, or better still on cloud platforms, which typically provide more computing power and memory, required for example for NGS analysis jobs. The additional benefit of using a VM/Docker and cloud is the easy scaling for running tens or hundreds of simultaneous jobs in a course setting. Bioinformatics and especially NGS analysis pose some additional challenges which will also be tackled: the VM images can get inconveniently large and they need to be updated often in order to keep reference data and analysis tools up to date.

Taken together, this workshop aims to enable trainers and infrastructure specialists to share their experiences on using VMs and clouds, and to bring everybody abreast with the full potential of these technologies. The ELIXIR infrastructure providers will also gain valuable knowledge on the special needs that bioinformatics training poses. 

#### Tentative program

**Monday 23.5.2016**

9-12 Presentations, discussion and hands-ons

Vera Hansper, Kalle Happonen, Aleksi Kallio, Seija Sirkiä (ELIXIR-FI)
- Hosting virtual machines in cloud
- What is a VM and a hypervisor
- What is a VMI, how to make one and how to use it
- Introduction to CSC's OpenStack [cPouta cloud](https://research.csc.fi/pouta-user-guide) and Horizon
- Introduction to CSC's [Pouta Blueprints software](https://github.com/CSC-IT-Center-for-Science/pouta-blueprints), a frontend to manage cloud resources and lightweight user accounts
- Hands-on using Pouta Blueprints to 1) launch instances on OpenStack cloud and 2) start RStudio
- Hands-on using Horizon: start a VM, set up network and floating IP, add volumes, add users, install some bioinfo software, take a snaphot, use the snapshot

12-13 Lunch

13-17 Presentations and discussions

- Bioinformatics Cloud and VMs in France. *Christophe Blanchet (ELIXIR-FR)*

- Cloud activities in bioinformatics in Italy. *Stefano Nicotri / Giacinto Donvito (ELIXIR-IT)* 

- Using clouds and VMs in bioinformatics training in Sweden. Bioimg.org, a catalogue of virtual machine images for life sciences. *Ola Spjuth, UPPMAX*  

-I FedCloud for bioinformatics somopoulos (Aristotle University of Thessaloniki): 

Pedro Fernandes (ELIXIR-PT)
-agrant

Abdulrahman Azab (ELIXIR-NO)
Docker

Markus van Dijk (ELIXIR-NL)
Using cloud and Docker for bioinformatics in Netherlands

**Tuesday 24.5.2016**

9-12 Hands-ons and discussions

Christophe Blanchet (ELIXIR-FRANCE)
French bioinformatics cloud

Stefano Nicotri (ELIXIR-IT)?
Cloud activities in bioinformatics in Italy

12-13 Lunch

13-17 Hands-ons and discussions

Pedro Fernandes (ELIXIR-PT)
Vagrant

Abdulrahman Azab (ELIXIR-NO)
Docker

**Wednesday 25.5.2016**

9-12 Hands-ons and discussions

Diego Scardaci (EGI)
Basic tools to exploit the EGI FedCloud

12-13 Lunch

13-17 Hands-ons and discussions

Fotis Psomopoulos (Aristotle University of Thessaloniki), Kimmo Mattila (ELIXIR-FI)
How to use bioinformatic applications running on the EGI FedCloud

