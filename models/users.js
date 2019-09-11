const db = require('../data/dbConfig');
const tb = 'users';

exports.findById = user_id => {
  return db(tb)
          .where({ user_id })
          .first();
};

exports.libs = user_id => {
  return db('libs')
          .where({ user_id });
};

exports.new = user => {
  return db(tb)
          .insert(user);
};

exports.rm = user_id => {
  return db(tb)
          .where({ user_id })
          .del();
};

exports.update = (user_id, user) => {
  return db(tb)
          .where({ user_id })
          .update(user)
          .then(() => this.findById(user_id));
};