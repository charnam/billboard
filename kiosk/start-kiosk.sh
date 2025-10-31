#!/bin/sh
# This file is run by systemd on billboard service start.
# (runs on system boot by default, can be managed via
#  'sudo systemctl stop/start/restart billboard')

# Start the Cage Wayland compositor
# allowing TTY switching (with -s)
cage -s -- ./kiosk/cage-init.sh;
