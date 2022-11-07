.PHONY: install
install:
	(cd frontend && npm install)
	npm install


.PHONY: start
start:
	(cd frontend && npm start) & npm start
	