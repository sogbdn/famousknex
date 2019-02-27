exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('milestones', function(table) {
			table.integer('id');
			table.string('description');
			table.date('date_achieved');
			table.integer('famous_person_id');
		})
	]);
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('milestones');
};
