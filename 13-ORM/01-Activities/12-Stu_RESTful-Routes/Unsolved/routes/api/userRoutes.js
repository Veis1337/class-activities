const router = require('express').Router();
const User = require('../../models/User');
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes
// GET a user
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    // if(!userData){
    //   throw new Error("User Not Found");
    // }
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// UPDATE a user
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err)
  }
});
// DELETE a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;