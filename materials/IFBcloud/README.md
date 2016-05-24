# The IFB cloud for bioinformatics training

The French Institute of Bioinformatics (IFB) is a national service infrastructure in bioinformatics and the French node of ELIXIR. The IFB’s principal mission is to provide core bioinformatics resources to the French life science community (academic and private partners) coupled to the required computing and storage capacity in a national bioinformatics cloud. To address the most common needs, a selection of major scientific software tools was made and they were installed in pre-configured virtual images (cloud appliances), ready to run on the IFB’s cloud. To date, 36 appliances cover different domains of the life sciences, for example users can deploy a standard bioinformatics compute node (that can also be deployed as a virtual cluster of several VMs), a complete R environnement (with R-studio and shiny), the IGV genomes browser or different flavours of a Galaxy portal. IFB maintains a catalogue of these appliances (RAINBio) that  helps the cloud users to filter the virtual images list according to their needs in terms of tools or scientific topics (based on the EDAM ontology). IFB is also using the lightweight virtualization based on Docker containers to provide life science researchers and engineers with bioinformatics tools and pipelines ready to run in the cloud or locally to personalized their virtual research environment. Finally, IFB places also special emphasis both to train users about the cloud itself (IBIs course series), and on the usage of the cloud to train about bioinformatics by supporting bionformatics master courses, tutorial and acientific schools. 

There will be to parts to the session.

1. A general introduction to the French bioinformatic cloud to analyse life science data

2. Practical work to introduce basic and advanced usage of the IFB cloud
  * Howto launch virtual machines
  * Managing your data in the cloud ;
  * Howto to connect to your VMS (SSH, web, remote desktop)
  * Personalizing your VMs (approver, galaxy, docker)

Slides : https://github.com/ekorpela/cloud-vm-workshop/blob/master/materials/IFBcloud/IFB%20cloud%20training%20ELIX-FI.pdf

**Before the practice session, you will need to install these prerequisites on your laptop:**
http://www.france-bioinformatique.fr/en/cloud/doc-du-cloud/prerequis

Useful links:
  * French Institute of Bioinformatics : http://www.france-bioinformatique.fr
  * IFB Cloud : http://www.france-bioinformatique.fr/en/cloud
    * Sign in (we will provide you with a temporary training account) : https://cloud.france-bioinformatique.fr/cloud 
  * Docs :  http://www.france-bioinformatique.fr/en/cloud/doc-du-cloud
  * RAINBIO : http://cloud.france-bioinformatique.fr/rainbio
  * BioShaDock :  http://docker-ui.genouest.org/app/
  * Example data : http://www.france-bioinformatique.fr/sites/default/files/pages/dataset_ibi.zip
