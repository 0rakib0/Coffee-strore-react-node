const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const cors = require('cors')
const port = process.env.POST || 5000
require('dotenv').config()

app.use(cors())
app.use(express.json())





const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PSS}@cluster0.zoyeiku.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("CoffeeDB");
        const coffeeCollection = database.collection("coffees");


        app.get('/coffee', async(req, res) =>{
            const cursor = coffeeCollection.find()
            const data = await cursor.toArray()
            res.send(data)

        })

        app.post('/coffee', async(req, res) =>{
                const coffees = req.body;
                const result = await coffeeCollection.insertOne(coffees)
                res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


console.log(process.env.DB_USER)

app.get('/', (req, res) => {
    res.send('Hello word')
})

app.listen(port, () => {
    console.log(`My Server Running On port ${port}`)
})