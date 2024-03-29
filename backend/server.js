import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import protuctRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import colors from 'colors'
import morgan from 'morgan'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', protuctRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `'Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
  )
)
