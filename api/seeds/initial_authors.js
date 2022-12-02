/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    {id: 1, first: 'Tyler', last: 'Overholts'},
    {id: 2, first: 'Josh', last: 'Beasley'},
    {id: 3, first: 'Ricardo', last: 'Correia'}
  ]);
};
