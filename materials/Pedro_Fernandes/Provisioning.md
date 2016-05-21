#Provisioning in a reproducible way

The real power of using virtual machines comes from allowing for reproducible working environments available.
A Vagrantfile can do more than specifying an "empty" Linux system, it can carry an "inventored" set of applications, 
listed "manually" (the Vagrantfile is a Ruby script). It can also specify that the inventory is automatically managed.
Consider using Puppet or Chef to do that.

Have a look at this sections of the ARANGS16 course, 
https://github.com/rvosa/arangs2016/blob/master/docs/2016-05-10/puppet/Worksheet.md

Actually easier, as in the ARANGS course if you install Git before, above in the Vagrantfile, so that you can use git 
clone and take advantage of what we used in the course.
