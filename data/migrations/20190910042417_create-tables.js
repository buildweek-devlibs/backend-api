exports.up = knex => {
  return knex
          .schema
          .createTable('users', tb => {
            tb
              .string('name');
            
            tb
              .string('email')
              .notNullable();

            tb
              .date('birthdate');

            tb
              .text('bio');

            tb
              .integer('user_id')
              .unsigned()
              .notNullable();

            tb
              .primary([ 'email', 'user_id' ]);
          })
          .createTable('categories', tb => {
            tb
              .increments();
            
            tb
              .string('category')
              .notNullable()
              .unique();

            tb
              .text('description');

            tb
              .boolean('approved')
              .defaultTo(false);
          })
          .createTable('libs', tb => {
            tb
              .increments();

            tb
              .string('name')
              .notNullable();
            
            tb
              .text('lib')
              .notNullable();
            
            tb
              .integer('category_id')
              .unsigned()
              .notNullable()
              .references('categories.id');

            tb
              .integer('user_id')
              .unsigned()
              .notNullable()
              .references('users.user_id')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');

            tb
              .boolean('approved')
              .defaultTo(false);
          })
          .createTable('words', tb => {
            tb
              .increments();

            tb
              .string('type')
              .notNullable();
            
            tb
              .string('word');

            tb
              .integer('lib_id')
              .unsigned()
              .notNullable()
              .references('libs.id')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          });
};

exports.down = knex => {
  return knex
          .schema
          .dropTableIfExists('words')
          .dropTableIfExists('libs')
          .dropTableIfExists('categories')
          .dropTableIfExists('users');
};