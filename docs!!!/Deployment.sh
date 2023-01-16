#!/bin/bash

clear

alias scp='noglob scp'

echo " ______   _______  _______  ___      _______  __   __  __   __  _______  __    _  _______    _______  _______  ______    _______ ";
echo "|      | |       ||       ||   |    |       ||  | |  ||  |_|  ||       ||  |  | ||       |  |       ||   _   ||    _ |  |       |";
echo "|  _    ||    ___||    _  ||   |    |   _   ||  |_|  ||       ||    ___||   |_| ||_     _|  |    _  ||  |_|  ||   | ||  |_     _|";
echo "| | |   ||   |___ |   |_| ||   |    |  | |  ||       ||       ||   |___ |       |  |   |    |   |_| ||       ||   |_||_   |   |  ";
echo "| |_|   ||    ___||    ___||   |___ |  |_|  ||_     _||       ||    ___||  _    |  |   |    |    ___||       ||    __  |  |   |  ";
echo "|       ||   |___ |   |    |       ||       |  |   |  | ||_|| ||   |___ | | |   |  |   |    |   |    |   _   ||   |  | |  |   |  ";
echo "|______| |_______||___|    |_______||_______|  |___|  |_|   |_||_______||_|  |__|  |___|    |___|    |__| |__||___|  |_|  |___|  ";

read hi

num=1

while [[ $num != 0 ]]
do
	echo "******************************************************"
	echo "*                                                    *"
	echo "*    1- you want to modify your site ?               *"
	echo "*    2- upload a new one ?                           *"
	echo "*    0- exit :(                                      *"
	echo "*                                                    *"
	read -p '******************************* Make your choice : ' num

	if [[ $num = 1 ]]
	then
		echo "please if /Users/msoulaim/Desktop/www2 existe rename it"
		read hi
		mkdir /Users/msoulaim/Desktop/www2
		echo "you will find your file in /Users/msoulaim/Desktop/www2"
		echo "now you can modifie it"
		scp -P1998 moha@10.12.254.253:/var/www/moha.com/* /Users/msoulaim/Desktop/www2
		echo "done !!!"
		read hi
		clear
	elif [[ $num = 2 ]]
	then
		echo "you should set you web app in /Users/msoulaim/Desktop/www2"
		read hi
		scp -P1998 /Users/msoulaim/Desktop/www2/* moha@10.12.254.253:/var/www/moha.com/
		echo "done"
		read hi
		clear
	fi
done
