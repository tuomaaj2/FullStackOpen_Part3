const mongoose = require('mongoose')

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.5lfpo.mongodb.net/phoneBookDB?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Number = mongoose.model('Number', personSchema)

if (process.argv.length === 3) {
  Number
    .find({})
    .then(result => {
      console.log('phonebook:')
      result.forEach(numb => {
        console.log(numb.name, numb.number)
      })
      mongoose.connection.close()
      process.exit(1)
    })
} else {

  const number = new Number({
    name: process.argv[3],
    number: process.argv[4],
  })

  number.save().then(() => {
    console.log(`added ${number.name} number ${number.number} to phonebook`)
    mongoose.connection.close()
  })
}