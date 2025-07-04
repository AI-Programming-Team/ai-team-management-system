#!/bin/bash
set -e
apt-get update
apt-get install -y <packages>
pip install -r requirements.txt
npm install
