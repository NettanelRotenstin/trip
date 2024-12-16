import express  from "express"
import cors from 'cors'
import setRouter from "./Routes/settings.route"
import expRouter from "./Routes/expense.route"

const app = express()

 app.use(cors())

 app.use(express.json())

 app.use('/settings',setRouter)

 app.use('/expense',expRouter)

 app.listen(3232,()=>{
    console.log('[server] running on port 3232')
 })