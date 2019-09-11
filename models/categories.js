const db = require('../data/dbConfig');
const tb = 'categories';

exports.find = () => db(tb);

exports.findById = id => {
  return db(tb)
          .where({ id });
};

exports.libs = category_id => {
  return db('libs')
          .where({ category_id });
};

exports.new = category => {
  return db(tb)
          .insert(category)
          .then(([ id ]) => this.findById(id));
};

exports.rm = id => {
  return db(tb)
          .where({ id })
          .del();
};

exports.update = (id, category) => {
  return db(tb)
          .where({ id })
          .update(category)
          .then(() => this.findById(id));
}