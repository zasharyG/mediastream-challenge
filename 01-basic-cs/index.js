'use strict'

const _ = require('lodash') // https://lodash.com/docs/4.17.4
const assert = require('assert')

const database = require('./database.json')

const total = 0 // TODO

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`)

console.log('Success!')

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: Es analizar como cambia el tiempo de ejecucion de un algoritmo a medida que aumenta la entrada.
 *   - space complexity: Es el espacio requerido por el algoritmo sin incluir las entradas.
 */
