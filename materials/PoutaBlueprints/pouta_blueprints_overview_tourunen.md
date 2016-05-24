% Pouta Blueprints overview
% Olli Tourunen @ Elixir Clouds and VMs workshop, Espoo, 2016-05-23

# Overview

## Pouta Blueprints? 

- web interface to resources provisioned in the cloud
- open source project hosted at [GitHub](https://github.com/CSC-IT-Center-for-Science/pouta-blueprints)
- developed by CSC - IT Center for Science 
- buzzwords: Docker, Angular, RESTful, Ansible, self service, SAML2, notebook
- PB for short

## Concepts

- system admins make _blueprints_, e.g. configurations or templates
- users launch _instances_ of blueprints
    - currently instances can be containers or VMs
- instances are time limited, quota limited, disposable
- users are authenticated (unlike http://tmpnb.org)
- user accounts are either
    - locally added by admin (via activation email)
    - based on SAML2 identity

## PB Service

- CSC runs a Pouta Blueprints server
- open to anyone with HAKA federated identity credentials
- currently in public beta
- blueprints for RStudio and IPython/Jupyter notebooks
- available at https://pb.csc.fi
- deployed in cPouta

# Use case: Notebooks for a course on pb.csc.fi

## The Professor 

"I would like to have an RStudio environment where I can just point my
students to by sharing a link. The environment should contain the latest
version of the exercises I made."
 
## The Professor 

- prepares a notebook for a lecture
    - the notebook can download more material when launched
- uploads it somewhere in the web
- points the students to https://pb.csc.fi

## The Student

- receives a link to the system (and activation token if necessary)
- opens a browser and logs in 
- launches an instance of the course blueprint
- learns something

## The System

- launches a new container instance per student with
  the newest version of the lecture notebook
- manages a pool of VMs running these containers
- removes instances when they expire
- recycles old pool VMs for increased security

# Missing bits

## Permanent storage

- currently all instance data is deleted when the instance lifetime ends
- a permanent session concept would make the service useful for serious work
- many open questions from technical to policy level
- IMHO: if there is storage, it needs to be reliable from the start
- Idea: provide examples how to use external storage 

## User grouping

- currently no grouping of users, just a flat list with admin flag on or off
- groups would be useful for 
    - limiting access and visibility to blueprints
    - creating global blacklists, whitelists

## Group managers

- at the moment only admins can manage blueprints
- currently users that have admin rights are full admins
- in pb.csc.fi CSC admins will have to make all modifications to blueprints -> does not scale
- enter Group managers
    - can create user groups
    - can customize selected properties of blueprints (size, bootstrap url, ...)

## Accounting

- before long, we need to be able to track who is running and how much
- with the additional features above, a single service instance can be used to provide 
  custom, private content for a closed course etc.

# Finally

## Summary

- Pouta Blueprints is open source software for sharing your cloud resources
    - anyone is free to deploy a copy and contribute
- pb.csc.fi is a pilot service operated by CSC
    - users can launch notebooks
    - open for Finnish researchers and students

## Thanks! 

Questions, please!
