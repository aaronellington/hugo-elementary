.PHONY: full build build-npm build-hugo watch watch-npm watch-hugo clean

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean build

## Build the project
build: build-npm build-hugo

build-npm:
	[ -d node_modules ] || npm install
	npm run build

build-hugo:
	cd example && hugo

## Watch the project
watch: build-npm
	make -j2 watch-npm watch-hugo

watch-npm:
	[ -d node_modules ] || npm install
	npm run watch

watch-hugo:
	cd example && hugo serve --themesDir ../..

## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"
