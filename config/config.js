module.exports = {
	knex: {
		client: 'postgresql',
		connection: {
			database: 'farm4',
			user:     '',
			password: ''
		},
		pool: {
			min: 2,
			max: 10
		},
		// debug: true,
		migrations: {
			directory: __dirname + '/../sql/migrations',
		},
		seeds: {
			directory: '%%%configFolder%%%/../sql/seeds'
		}
    },
    port: 4321,
};
