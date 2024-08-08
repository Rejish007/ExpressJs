import express, { response } from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'



const port = 5000;
const app = express();

app.use(express.json());


// app.get('/', async (req, res, next) => {

//   next();

//   // try {
//   //   const data = await axios.get('https://jsonplaceholder.typicode.com/users');
//   //   return res.status(400).json({ status: 'scuss', data: response.data });

//   // } catch (error) {
//   //   return res.status(200).json({ status: 'error', data: `${error}` })

//   // }

// });
// app.use((req, res) => {
//   return res.status(404).json({ message: 'api' });
// });

// app.use((req, res) => {
//   return res.status(404).json({ message: 'api not found' });
// });


// app.listen(port, (e) => {

// })
app.get('./', (req, res) => {
  return res.status(200).json({ data: "hello " });

})


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);




app.listen(port, (e) => {
  console.log('connect')
})