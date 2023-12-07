#!/bin/bash
docker run -d --name main-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=qwerty123 -e POSTGRES_DB=test postgres:13.0
docker exec -i main-postgres psql --username postgres test < ./dump.sql

