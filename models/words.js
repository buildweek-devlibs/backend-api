const db = require('../data/dbConfig');
const tb = 'words';

exports.findById = id => {
  return db(tb)
          .where({ id })
          .first();
};

exports.new = word => {
  return db(tb)
          .insert(word)
          .then(([ id ]) => this.findById(id));
};

exports.rm = id => {
  return db(tb)
          .where({ id })
          .del();
};

exports.update = (id, word) => {
  return db(tb)
          .where({ id })
          .update(word)
          .then(() => this.findById(id));
};