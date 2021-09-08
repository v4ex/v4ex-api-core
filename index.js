/* Copyright (c) V4EX Inc. SPDX-License-Identifier: GPL-3.0-or-later */

// Purpose: Module entry.


module.exports = ({ env }) => {
  if (env === undefined) {
    require('dotenv').config()
    env = process.env
  }

  const mongoose = require('./mongoose')({ env })

  return {
    mongoose
  }
}
