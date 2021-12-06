const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget } = req.body
  if(name === undefined || budget === undefined) {
    next({
      status: 400,
      message: 'name and budget are required'
    })

  } else if(typeof name !== 'string') {
    next({
      status: 400,
      message: 'name of account must be a string'
    })

  } else if(name.trim().length < 3 || name.trim().length > 100) {
    next({
      status: 400,
      message: 'name of account must be between 3 and 100'
    })

  } else if(typeof budget !== 'number' || isNaN(budget)) {
    next({
      status: 400,
      message: 'budget of account must be a number'
    })

  } else if(budget < 0 || budget > 1000000) {
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
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}
