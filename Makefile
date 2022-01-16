clean:; rm -rfv dist

dist/index.js: src/grammar.ohm src/semantics.js build.sh
	mkdir -p $(@D)
	./build.sh >$@

.PHONY: test
test: dist/index.js test/test.js
	npx tape test/test.js
