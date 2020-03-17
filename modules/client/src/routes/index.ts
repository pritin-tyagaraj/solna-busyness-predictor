import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  const reactContent = '<b>hello world!</b>'
  res.status(200).render('pages/', { reactContent })
})

export default router