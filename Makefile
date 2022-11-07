.PHONY: install
install:
	npm install
	cd frontend
	npm install


.PHONY: start
start:
	npm start
	cd frontend
	npm start
