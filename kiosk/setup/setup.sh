#!/bin/bash

# Run this script on a Raspberry Pi to install all
# necessary components.

# NOTE: Expects user 'admin' to exist, with a directory
# named 'billboard' in its home directory containing this
# git repository. Specific details in billboard.service and
# this file *will need to be updated* for your particular
# GNU/Linux system.

# Also see: billboard.service

# Ensure we're running in the project root
if ! cd /home/admin/billboard; then
    echo "/home/admin/billboard not found";
    exit;
fi

# Check if running as root. If not, quit now.
if [ "$EUID" -ne 0 ]
    then echo "Please run as root"
    exit
fi

# Update all packages on the system
apt update
apt upgrade -y

# Install kiosk components
apt install -y npm cage wlr-randr

# Enter project directory and install necessary components
# (e.g electron)
su admin -c 'npm install'

# Copy the service to systemd
cp ./kiosk/setup/billboard.service /etc/systemd/system/

# Copy the pam configuration file to /etc/pam.d
cp ./kiosk/setup/cage /etc/pam.d/cage

# Enable and start the billboard Electron application
systemctl daemon-reload
systemctl enable --now billboard

echo Done, Billboard running on tty1
echo Manual intervention may be required, if something has gone wrong
