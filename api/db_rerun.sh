#!/usr/bin/env bash

echo "drop database puffride" | mysql
echo "create database puffride" | mysql

cat /Users/wizard/forkedRepos/puffride/api/puffride_ddl.sql | mysql

cat /Users/wizard/forkedRepos/puffride/api/inserts.sql | mysql

echo "show tables from puffride" | mysql

#mysqldump puffride
