#!/bin/sh

SCRIPT_DIR='dirname $0'

echo $SCRIPT_DIR

/usr/local/bin/casperjs $SCRIPT_DIR/shot-tool.js $*
