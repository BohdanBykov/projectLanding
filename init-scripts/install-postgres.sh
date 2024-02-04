#!/bin/bash
# run database
docker run -d --name main-postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=test postgres:13.0 

# load dump
docker exec main-postgres psql --username postgres test < ./dump.sql 

# load dump alternative way
docker cp dump.sql main-postgres:/dump.sql
docker exec -it main-postgres bash
psql -U postgres -d test
\i /dump.sql
