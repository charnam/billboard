#!/bin/sh

# If you want to rotate your display, then do so here.
# Note that this script is blocking. If you want to run
# tasks in the background, you should append an '&' to
# fork the process.

wlr-randr --output HDMI-A-1 --transform 270
