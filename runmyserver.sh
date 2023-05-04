#! /usr/bin/bash
#Use command: bash ronmyserver.sh
echo "Running WEB-server with default settings"
source /home/pupa/somebodyhire/venv/bin/activate
python3 /home/pupa/LinkedMin/linkedmin/manage.py runserver 0.0.0.0:8000
