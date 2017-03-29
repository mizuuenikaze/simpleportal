#!/bin/sh

function die() {
	echo "$1"
	exit 1
}

echo "node env..."
echo $NODE_ENV

# do what moonboots does to generate js and css
echo "puglatizer..."
puglatizer -d ./templates -o ./client/templates.js || die "puglatizer failed"
echo "done."

if [ -z "${NODE_ENV}" -o "${NODE_ENV}" != "production" ]; then
	exit 0;
fi


# the rest is only for production builds

echo "stylus..."
pushd stylesheets || die "failed to go to stylesheets dir"
stylus < app.styl > app.css  || die "failed to stylus css"
popd

browserify -t uglifyify client/app.js | uglifyjs --screw-ie8 -mc > artifacts/portal.js || die "failed to browserify"
cleancss --output artifacts/theme.css stylesheets/*.css || die "failed to minify css"

echo "done."
