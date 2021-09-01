const mongoose = require('./mongoose')

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
