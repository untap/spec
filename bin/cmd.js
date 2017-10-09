#!/usr/bin/env node

var fs = require('fs')
var parser = require('@tap-format/parser')
var formatAsSpec = require('../')

var stream = process.stdin

if (process.argv[2]) {
  stream = fs.createReadStream(process[argv[2]])
}

var input$ = parser.observeStream(stream)

formatAsSpec(input$).forEach(console.log.bind(console))

