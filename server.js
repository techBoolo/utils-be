import express from 'express';
import dnsRoute from './routes/dns.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/dns', dnsRoute)

app.use('/', (req, res, next) => {
  res.status(200).json({ message: 'it works' })
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
