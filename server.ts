import express, { Request, Response } from 'express'

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json());

// Routes
app.get('/', (req: Request, res:Response) => {
    res.send('Hello, Typescript Server!')
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})