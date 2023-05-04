#! /usr/bin/bash
echo "Running server"
source /home/pupa/somebodyhire/venv/bin/activate
python3 /home/pupa/LinkedMin/linkedmin/manage.py runserver 0.0.0.0:8000
