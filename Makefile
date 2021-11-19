clean:; rm -rfv dist

dist/index.js: grammar.ohm semantics.js build.sh
	mkdir -p $(@D)
	./build.sh >$@

.PHONY: test
test: dist/index.js test.js
	npx tape test.js
