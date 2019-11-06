module.exports = {
	up: (knex) => (
        Promise.all([])
        .then(() => Promise.all([

            knex.schema.createTable("users", t => {
                t.integer("id");
                t.string("email").notNull();
                t.string("password");
                t.timestamp('created_at').defaultTo(knex.fn.now());
                t.timestamp('updated_at').defaultTo(knex.fn.now());
                t.timestamp('deleted_at').nullable();
            }),

        ]))
	),
	down: (knex) => (
		Promise.all([
			knex.raw("DROP TABLE users CASCADE"),
		])
	)
};
