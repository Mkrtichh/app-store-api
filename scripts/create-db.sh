#!/bin/bash
#create database

ENVIRONMENT=${1:-"local"}

export NODE_ENV=$ENVIRONMENT

sequelize-cli --config ./config/config.js db:create

echo "ENVIRONMENT $ENVIRONMENT"