const path = require("path")
require("dotenv").config()

module.exports = {
	development: {
		client: "postgresql",
		connection: process.env.DATABASE_URL_DEVELOPMENT,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
	test: {
		client: "postgresql",
		connection: DATABASE_URL_TEST,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
	staging: {
		client: "postgresql",
		connection: DATABASE_URL_STAGING,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
	production: {
		client: "postgresql",
		connection: DATABASE_URL_PRODUCTION,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
	},
};