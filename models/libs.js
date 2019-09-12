const db = require('../data/dbConfig');
const tb = 'libs';

exports.find = () => db(tb);

exports.findById = id => {
  return db(tb)
          .where({ id })
          .first();
};

exports.new = lib => {
  return db(tb)
          .insert(lib)
          .then(([ id ]) => this.findById(id));
};

exports.rm = id => {
  return db(tb)
          .where({ id })
          .del();
};

exports.update = (id, lib) => {
  return db(tb)
          .where({ id })
          .update(lib)
          .then(() => this.findById(id));
};

exports.words = lib_id => {
  return db('words')
          .where({ lib_id });
};