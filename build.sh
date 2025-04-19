#!/usr/bin/bash

START_DIR="$(pwd)"
OUT_DIR="$START_DIR/docs/.vitepress/dist"
HEADER_PATH="$OUT_DIR/_headers"

rm -rf docs/contents || true
git clone https://github.com/sounddrill31/course-notes-python docs/contents -b main
cd docs
if [[ "$1" == "cf" ]]; then
    sed -i 's/base.*,//g' .vitepress/config.mts
fi
npm install
npx vitepress build 
cd ..

echo "Built from $START_DIR"
echo "Output will be in $OUT_DIR"

curl https://raw.githubusercontent.com/sounddrill31/course-notes-python/refs/heads/vitepress/headers > "$HEADER_PATH"
echo "Saved _headers in $HEADER_PATH"

echo "---"
echo "Displaying $HEADER_PATH"
cat "$HEADER_PATH"
echo "---"