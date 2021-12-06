const router = require("express").Router();
const Account = require("./accounts-model");

const {
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
} = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkAccountId, (req, res, next) => {
  res.json(req.account);
  next();
});

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
