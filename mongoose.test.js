/* Copyright (c) V4EX Inc. SPDX-License-Identifier: GPL-3.0-or-later */

// Purpose: Test mongoose.js.


require('dotenv').config()

const mongoose = require('./mongoose')({ env: process.env })

afterAll(() => {
  mongoose.connection.close()
})

describe('mongoose', () => {
  it('should be able to connect to MongoDB', (done) => {
    mongoose.connection.on('connected', function() {
      // console.log(this)
      expect(mongoose.STATES[mongoose.connection.readyState]).toBe('connected')
      done()
    })
  })
})
