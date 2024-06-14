#!/bin/bash

# Define the source and destination paths
SOURCE_DIR="like/webApp"
DEST_DIR="like/_build/html/webApp"

# Copy the webApp folder to the destination directory
mkdir "$DEST_DIR"
cp -rf "$SOURCE_DIR"/* "$DEST_DIR"
rm -rf "$SOURCE_DIR"
echo "webApp folder moved to _build/html/webApp"
