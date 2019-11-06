
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, email: 'abc@gmail.com'},
        {id: 2, email: 'xyz@hotmail.com'},
        {id: 3, email: 'something'}
      ]);
    });
};
