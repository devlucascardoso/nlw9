import express from 'express'

const app = express()

app.get('/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'AD 1' },
    { id: 2, name: 'AD 2' },
    { id: 3, name: 'AD 3' },
    { id: 4, name: 'AD 4' }
  ])
})

app.listen(5432)
