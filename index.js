const express = require('express')
const app = express()
app.use(express.static('build'))

const PORT = process.env.PORT || 3001 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const morgan = require('morgan')
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'));

const cors = require('cors')
app.use(cors())

let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1
    },
    {
        name: 'Ada Lovelace',
        number: '39-44-5323523',
        id: 2
    },
    {
        name: 'Dan Abramov',
        number: '12-43-234345',
        id: 3
    },
    {
        name: 'Mary Poppendieck',
        number: '39-23-6423122',
        id: 4
    }
]

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name || !body.number){
        return res.status(400).json({
            error: 'Name and number must both be entered for new person'
        })
    }
    if (persons.find(p => p.name === body.name) ) {
        return res.status(400).json({
        error: 'Name already exists'
        })
    }
    const addedPerson = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 101) + 5
    }
    persons = persons.concat(addedPerson)
    res.json(addedPerson)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const person = persons.find(p => p.id === id)
    console.log(person)
    if (person) {
        res.json(person)
    } else {
        res.status(404).send('No such person in phonebook. Try with another id.')
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const deleted = persons.find(p => p.id === id)
    if (deleted) {
        console.log(`Deleted person ${deleted}`)
        persons = persons.filter(p => p.id !== id)  
    } else {
        res.status(404).send('No such person in phonebook')
    }
})

app.get('/api/info', (req, res) => {
    const timeNow = new Date()
    res.send(`<div><p>Phonebook has info for ${persons.length} people</p>
    <p>${timeNow}</p></div`)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)