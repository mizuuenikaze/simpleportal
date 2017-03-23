#!/bin/sh

function die() {
	echo "$1"
	exit 1
}

# do what moonboots does to generate js and css
echo "puglatizer..."
puglatizer -d ./templates -o ./client/templates.js || die "puglatizer failed"
echo "done."

echo "stylus..."
pushd stylesheets || die "failed to go to stylesheets dir"
stylus < app.styl > app.css  || die "failed to stylus css"
popd
echo "done."
