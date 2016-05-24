FROM ubuntu:14.04
MAINTAINER Nicolas Delhomme (nicolas.delhomme@slu.se)
RUN groupadd -g 2000 training && useradd -m -u 2000 -g 2000 training
RUN echo 'training:training' | chpasswd
#RUN mkdir /mnt/nfs
RUN chsh -s /bin/bash training
RUN echo "alias ll='ls -la -G'" >> /home/training/.profile

#########
### Aptitude packages
#########
RUN     apt-get update
RUN	apt-get install -y \
	build-essential wget libghc-zlib-dev \
	libncurses-dev git unzip ftp libzmq3-dev \
	nano python2.7-dev python-numpy ftp sqlite3 \
	python-matplotlib apache2 openssl openssh-server && \
	mkdir build && \
	usermod -G training,www-data training
WORKDIR /build

#########
### HTSlib tools: Samtools, Bcftools
#########
RUN wget https://github.com/samtools/samtools/releases/download/1.3/samtools-1.3.tar.bz2 \
	https://github.com/samtools/bcftools/releases/download/1.3/bcftools-1.3.tar.bz2 \
	https://github.com/samtools/htslib/releases/download/1.3/htslib-1.3.tar.bz2 && \
	tar -xf htslib-1.3.tar.bz2
WORKDIR htslib-1.3
RUN ./configure && make && make install
WORKDIR /build
RUN tar -xf bcftools-1.3.tar.bz2
WORKDIR bcftools-1.3
RUN make && make install
WORKDIR /build
RUN tar -xf samtools-1.3.tar.bz2
WORKDIR samtools-1.3
RUN make && make install
WORKDIR /build

#########
### STAR
#########
RUN wget https://github.com/alexdobin/STAR/archive/2.5.1b.tar.gz && \
	tar -xf 2.5.1b.tar.gz
WORKDIR STAR-2.5.1b/bin/Linux_x86_64_static
RUN cp STAR /usr/local/bin
WORKDIR /build

#########
### kallisto
#########
RUN wget https://github.com/pachterlab/kallisto/releases/download/v0.42.5/kallisto_linux-v0.42.5.tar.gz && \
	tar -xf kallisto_linux-v0.42.5.tar.gz
WORKDIR kallisto_linux-v0.42.5
RUN cp kallisto /usr/local/bin
WORKDIR /build

#########
### BEDtools
#########
RUN wget https://github.com/arq5x/bedtools2/releases/download/v2.25.0/bedtools-2.25.0.tar.gz && \
	tar -xf bedtools-2.25.0.tar.gz && cd bedtools2 && \
	make && make install

#########
### Java tools: Trimmomatic, FastQC
#########
RUN wget http://www.bioinformatics.babraham.ac.uk/projects/fastqc/fastqc_v0.11.5.zip && \
	unzip fastqc_v0.11.5.zip && \
	chmod +x FastQC/fastqc && \
	cp -r FastQC /usr/share/ && \
	ln -s /usr/share/FastQC/fastqc /usr/bin/ && \
	wget http://www.usadellab.org/cms/uploads/supplementary/Trimmomatic/Trimmomatic-0.36.zip && \
	unzip Trimmomatic-0.36.zip && \
	cp -r Trimmomatic-0.36 /usr/share/ && \
	echo '#!/bin/bash\njava -jar /usr/share/Trimmomatic-0.36/trimmomatic-0.36.jar $@' > /usr/bin/trimmomatic && \
	chmod +x /usr/bin/trimmomatic

#########
### SortmeRNA
#########
RUN wget http://bioinfo.lifl.fr/RNA/sortmerna/code/sortmerna-2.1-linux-64.tar.gz && \
	tar -xf sortmerna-2.1-linux-64.tar.gz
WORKDIR sortmerna-2.1-linux-64
RUN cp sortmerna /usr/local/bin && cp indexdb_rna /usr/local/bin && \
	cp -r rRNA_databases/ /usr/share/
WORKDIR /usr/share/rRNA_databases
COPY scripts/indexdb.sh /usr/share/rRNA_databases/
COPY scripts/makeDbList.sh /usr/share/rRNA_databases/
RUN ./indexdb.sh
ENV SORTMERNA_DB="/usr/share/rRNA_databases/rfam-5s-database-id98.fasta,/usr/share/rRNA_databases/index/rfam-5s-database-id98:/usr/share/rRNA_databases/silva-euk-28s-id98.fasta,/usr/share/rRNA_databases/index/silva-euk-28s-id98:/usr/share/rRNA_databases/silva-euk-18s-id95.fasta,/usr/share/rRNA_databases/index/silva-euk-18s-id95:/usr/share/rRNA_databases/silva-arc-16s-id95.fasta,/usr/share/rRNA_databases/index/silva-arc-16s-id95:/usr/share/rRNA_databases/silva-bac-16s-id90.fasta,/usr/share/rRNA_databases/index/silva-bac-16s-id90:/usr/share/rRNA_databases/silva-arc-23s-id98.fasta,/usr/share/rRNA_databases/index/silva-arc-23s-id98:/usr/share/rRNA_databases/silva-bac-23s-id98.fasta,/usr/share/rRNA_databases/index/silva-bac-23s-id98:/usr/share/rRNA_databases/rfam-5.8s-database-id98.fasta,/usr/share/rRNA_databases/index/rfam-5.8s-database-id98"
ADD scripts/merge-paired-reads.sh /usr/local/bin/
ADD scripts/unmerge-paired-reads.sh /usr/local/bin/
RUN chmod a+rx /usr/local/bin/merge-paired-reads.sh /usr/local/bin/unmerge-paired-reads.sh
RUN echo "export SORTMERNA_DB=$SORTMERNA_DB" >> /home/training/.profile
WORKDIR /build

#########
### BWA
#########
RUN wget http://downloads.sourceforge.net/project/bio-bwa/bwa-0.7.13.tar.bz2 && \
	tar -xf bwa-0.7.13.tar.bz2
WORKDIR bwa-0.7.13

#########
### Pip installs: HTSeq, PySam, MACS2, Qiime
#########
RUN make && \
	cp bwa /usr/local/bin/ && \
	pip install htseq && \
	pip install PySam && \
	pip install MACS2 && \
	pip install tornado && \
	pip install qiime
WORKDIR /build

#########
### USeq and Sissrs
#########
RUN mkdir /data && \
    wget http://downloads.sourceforge.net/project/useq/USeq_8.9.6.zip && \
    unzip USeq_8.9.6.zip && mv USeq_8.9.6 /usr/share/USeq && \
    wget http://dir.nhlbi.nih.gov/papers/lmi/epigenomes/sissrs/sissrs_v1.4.tar.gz && \
    tar -xf sissrs_v1.4.tar.gz && \
    cp sissrs.pl /usr/local/bin

#########
### JBrowse to easily view biological data formats
#########
RUN rm /var/www/html/index.html && \
    ln -sf /home/training /var/www/html/home
WORKDIR /var/www/html
RUN curl -O http://jbrowse.org/releases/JBrowse-1.12.0.zip && \
    unzip JBrowse-1.12.0.zip
WORKDIR /var/www/html/JBrowse-1.12.0
RUN ./setup.sh && \
    mkdir -p data/bam && \
    chown -R www-data:www-data /var/www/html && \
    chmod a+rwx /var/www/html/JBrowse-1.12.0/data/bam && \
    touch data/tracks.conf && \
    chmod a+rw	/var/www/html/JBrowse-1.12.0/data/tracks.conf
WORKDIR /
RUN rm /var/www/html/JBrowse-1.12.0.zip && \
    rm -rf /build/*
# ADD scripts/add_JBrowse_tracks.sh /usr/local/bin/add_JBrowse_tracks.sh
# add these commands:
# bin/prepare-refseqs.pl --fasta /home/training/share/Day1/data/mapping/ref/Dmel.BDGP5.fa --key BDGP5
# the gff3 file was prepared using gffread (cufflinks)
# gffread share/Day1/data/mapping/ref/Drosophila_melanogaster.BDGP5.68.gtf -L -o Drosophila_melanogaster.BDGP5.68.gff3
# but we do not need to have it in the docker
# bin/flatfile-to-json.pl --gff /home/training/share/Day1/data/mapping/ref/Drosophila_melanogaster.BDGP5.68.gff3 --trackType CanvasFeatures --trackLabel BDGP5-genes
# cd data
# chown -R www-data:www-data .
# cd /home/training/
# mkdir JBrowse-drop
# cd JBrowse-drop/
# ln -s /var/www/html/JBrowse-1.11.6/bin/add-bam-track.pl .
# ln -s /var/www/html/JBrowse-1.11.6/data/bam .
# chown training:training .
# chmod a+w data/trackList.json 
# tracks.conf is not needed, but trackList.json is, which we could replace in the install above

#########
### Other
#########
WORKDIR /build
RUN wget http://downloads.sourceforge.net/project/bowtie-bio/bowtie/1.1.1/bowtie-1.1.1-linux-x86_64.zip && \
    unzip bowtie-1.1.1-linux-x86_64.zip && find bowtie-1.1.1 -executable -type f -exec cp {} /usr/local/bin \; && \
    wget http://ccb.jhu.edu/software/tophat/downloads/tophat-1.4.1.Linux_x86_64.tar.gz && \
    tar -xf tophat-1.4.1.Linux_x86_64.tar.gz && find tophat-1.4.1.Linux_x86_64 -executable -type f \
    -exec cp {} /usr/local/bin \; && \
    wget http://hannonlab.cshl.edu/fastx_toolkit/fastx_toolkit_0.0.13_binaries_Linux_2.6_amd64.tar.bz2 && \
    tar -xf fastx_toolkit_0.0.13_binaries_Linux_2.6_amd64.tar.bz2 && \
    cp bin/* /usr/local/bin && rm -r /build/* && \
    echo "export BOWTIE_INDEXES=/home/training/share/Day1/data/ernest_turro" >> /home/training/.bashrc

#########
### MMSeq
#########
RUN wget -O mmseq-latest.zip https://github.com/eturro/mmseq/archive/latest.zip && \
	unzip mmseq-latest.zip && cd mmseq-latest && \
	cd bin && for f in `ls *-linux`; do mv $f `basename $f -linux`; done && \
	mv * /usr/local/bin

#########
### GateOne SSH interface
#########
RUN git clone https://github.com/liftoff/GateOne/ && \
    cd GateOne && python setup.py install && \
    python run_gateone.py --configure && cd ..

#########
### FLASH, BLAST, genepair, SPAdes, TETranscripts
#########
RUN wget http://downloads.sourceforge.net/project/flashpage/FLASH-1.2.11.tar.gz && \
    tar -xf FLASH-1.2.11.tar.gz && cd FLASH-1.2.11 && make && \
    cp flash /usr/local/bin && cd /build && \
    wget ftp://ftp.ncbi.nlm.nih.gov/blast/executables/blast+/LATEST/ncbi-blast-2.3.0+-x64-linux.tar.gz && \
    tar -xf ncbi-blast-2.3.0+-x64-linux.tar.gz && cp ncbi-blast-2.3.0+/bin/* /usr/local/bin && \
    wget http://spades.bioinf.spbau.ru/release3.7.1/SPAdes-3.7.1-Linux.tar.gz && \
    tar -xf SPAdes-3.7.1-Linux.tar.gz && cp SPAdes-3.7.1-Linux/bin/* /usr/local/bin && \
    git clone https://github.com/bschiffthaler/genepair && cd genepair && make && \
    cp bin/genepair /usr/local/bin && cd /build && pip install TEToolkit && \
    git clone https://github.com/ucdavis-bioinformatics/assemblathon2-analysis && \
    cd assemblathon2-analysis && chmod +x *.pl && cp *.pl /usr/local/bin && \
    cp FAlite.pm /etc/perl


#########
### GATK
#########
ADD GenomeAnalysisTK.jar /usr/share/GenomeAnalysisTK.jar
ADD assemblathon_stats.pl /usr/local/bin

ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf
RUN mkdir /home/training/share
RUN apt-get install -y supervisor emacs vim tmux && usermod -aG sudo training
RUN rm /var/www/html/home && ln -sf /home/ /var/www/html/home && ln -sf /data/ /var/www/html/data
VOLUME /home/training/share /home/training/public
EXPOSE 80 8888 8787 4200 443
CMD ["/usr/bin/supervisord","-c","/etc/supervisor/conf.d/supervisord.conf"]
