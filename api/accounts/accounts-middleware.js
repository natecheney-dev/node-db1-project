const Account = require('./accounts-model')
const db = require('../../data/db-config.js')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  if (name === undefined || budget === undefined) {
    next({
      status: 400,
      message: 'name and budget are required'
    })

  } else if (typeof name !== 'string') {
    next({
      status: 400,
      message: 'name of account must be a string'
    })

  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({
      status: 400,
      message: 'name of account must be between 3 and 100'
    })

  } else if (typeof budget !== 'number' || isNaN(budget)) {
    next({
      status: 400,
      message: 'budget of account must be a number'
    })

  } else if (budget < 0 || budget > 1000000) {
    next({
      status: 400,
      message: 'budget of account is too large or too small'
    })

  } else {
    req.body.name = req.body.name.trim()
    next()
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  try {
    const exists = await db('accouts')
      .where("name", req.body.name.trim())
      .first()
    if (exists) {
      next(
        {
          status: 400,
          message: "that name is taken"
        })
    }
    else{
      next()
    }
  }
  catch (err) {
    next(err)
  }
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
