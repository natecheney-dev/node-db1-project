const db = require('../../data/db-config')

const getAll = () => {
 return db('accounts')
}

function getById(id) {
  return db('accounts')
    .where( "id", id )
    .first();
}

const create = async account => {

}

const updateById = async (id, account) => {

}

const deleteById = id => {

}
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
