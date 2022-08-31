const express = require('express')
const cron = require('node-cron')
const app = express()

const PORT = process.env.PORT || 3000

cron.schedule('*/10 * * * * *', () => {
  console.log('Running backend work')
});

app.listen(PORT, console.log('Listening on port 3000'))



