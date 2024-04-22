import Express from 'express'

const app  = Express()

app.get('/informacoes', ((req, res) => {
  const nome = req.query.nome
  const idade = req.query.idade

  return res.status(200).send(
    {
      nome,
      idade,
      maiorDeIdade: idade>=18? true:false
    }
  )
})
)

app.get('/hello-world',  ((req, res) => {
  const nome = req.query.nome
  return res.status(200).send(
    {
      message:'Hello world',
      nome
    }
  )
})
)

app.use((req, res) => {
  return res.status(404).send(
    {
      message: 'Não encontrado'
    }
  )
})

app.listen(3333, () => {
  console.log('Servidor aberto na rota: http://localhost:3333')
})

