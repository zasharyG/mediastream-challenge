'use strict'

const faker = require('faker')
const _ = require('lodash')

const AMMOUNT = {
  USERS: 50,
  HATS: 30
}

const hats = _.times(AMMOUNT.HATS, n => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  material: faker.commerce.productMaterial(),
  price: faker.commerce.price()
}))

const users = _.times(AMMOUNT.USERS, n => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  hats: _.sampleSize(hats, _.random(0, 5))
}))

console.log(JSON.stringify(users, null, 2))

var nameHats = [];

users.map(d => {
  let hatAll = d.hats
  hatAll.map((h) => {
    let count = nameHats[h.name] = nameHats[h.name] + 1 || 1

    let result = `Hat(${h.id}) sold ${count}.`
    console.log(result)

    nameHats.push(h.id)
  })
})

const resultado = nameHats.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

const hideTop3 = Object.values(resultado).sort(function (a, b) {
  return b - a; 
})

const resultTop = `${hideTop3[0]} + ${hideTop3[1]} + ${hideTop3[2]} => ${hideTop3[0] + hideTop3[1] + hideTop3[2]}`

console.log(resultTop)