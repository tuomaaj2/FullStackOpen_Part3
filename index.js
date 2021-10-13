require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const Persons = require('./models/numbers')

morgan.token('resp', function getData (req) {
    if(req.method === 'POST'){
        return JSON.stringify(req.body)
    }
    return " "
  })

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :resp'))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  next(error)
}


let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]


app.get('/api/persons', (req, res) => {
  Persons.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/info', (req, res) => {
  Persons.find({}).then(persons => {
    res.write(`<p>Phonebook has info for ${persons.length} people</p>`)
    res.write(new Date().toString())
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Persons.findById(req.params.id)
  .then(person => {
    if (person) {
      res.json(person)
    } else {
      res.status(404).end()
    }
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Persons.findByIdAndRemove(req.params.id)
  .then(result => {
    res.status(204).end()
  })
  .catch(error => next(error))
})
  
app.post('/api/persons', (req, res) => {
    const body = req.body
    
    if (!body.name) {
      return res.status(400).json({ 
        error: 'name missing' 
      })
    }
    const person = new Persons({
      name: req.body.name,
      number: req.body.number
    })
    person.save().then(savedPerson => {
      res.json(savedPerson)
    })
})

app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Persons.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})