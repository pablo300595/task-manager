const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user.route')
const taskRouter = require('./routers/task.route')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})
