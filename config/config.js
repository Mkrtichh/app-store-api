require('dotenv').config({path: __dirname + '/../.env'});

module.exports = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "migrationStorage": process.env.DB_MIGRATION_STORAGE || 'json',
    "seederStorage": process.env.DB_SEEDER_STORAGE || 'json',
    "logging": process.env.DB_LOGGING
};