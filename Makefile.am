#
# Custom makefile for a ampersand based frontend
#

mukportaldir = $(prefix)/muk
mukportal_DATA = artifacts/portal.js artifacts/theme.css

# Make does not offer a recursive wildcard function, so here's one:
rwildcard=$(wildcard $1$2) $(foreach d,$(wildcard $1*),$(call rwildcard,$d/,$2))


client/templates.js: $(call rwildcard,templates/,*.pug)
	puglatizer -d ./templates -o $@

stylesheets/app.css: stylesheets/app.styl
	stylus < $^ > $@

artifacts/portal.js: client/templates.js $(call rwildcard,client/,*.js)
	browserify -t uglifyify client/app.js | uglifyjs --screw-ie8 -mc > $@

artifacts/theme.css: stylesheets/app.css stylesheets/cover.css
	cleancss --output $@ $^

if NODE_PROD
all-local: artifacts/portal.js artifacts/theme.css
else
all-local: client/templates.js
endif
