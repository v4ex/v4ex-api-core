/* Copyright (c) V4EX Inc. SPDX-License-Identifier: GPL-3.0-or-later */

// Purpose: Provide mongoose instance.


module.exports = ({ env }) => {
  
  const mongoose = require('mongoose')
  mongoose.connect(env.CORE_MONGO_URI)


  return mongoose
}
