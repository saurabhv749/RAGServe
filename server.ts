import { config } from 'dotenv'
config()
import express, { Express } from 'express'
import { createVectorStore } from './assistant'
import indexRoutes from './routes/index';
import assistantRoutes from './routes/assistant';

createVectorStore();

const app: Express = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json());

// Routes
app.use('/', indexRoutes)
app.use("/assistant", assistantRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})