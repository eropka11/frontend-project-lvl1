install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npm eslint .