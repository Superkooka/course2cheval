.PHONY: build
build:
	yarn tsc -p tsconfig.json
	cp src/index.html build/index.html