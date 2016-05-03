#
# Makefile for the Linux TCP/IP (INET) layer.
#

obj-m += tcp_plusnew.o

all:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) modules

clean:
	make -C /lib/modules/$(shell uname -r)/build M=$(PWD) clean
