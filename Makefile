.PHONY: all build-backend build-frontend start stop clean

all: build start

build: build-backend build-frontend

build-backend:
	@echo "Building Flask backend Docker image..."
	docker-compose build flask-backend

build-frontend:
	@echo "Building React frontend Docker image..."
	docker-compose build react-frontend

start: run

run:
	@echo "Starting Docker containers..."
	docker-compose -f docker-compose.yml up

stop:
	@echo "Stopping Docker containers..."
	docker-compose down

clean:
	@echo "Cleaning up Docker containers and images..."
	docker-compose down --rmi all -v --remove-orphans