const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        const coffeeCollection = client.db("CoffeeDB").collection("coffees");
        const UserCollection = client.db("CoffeeDB").collection("Users");


        app.get('/coffee', async (req, res) => {
            const cursor = coffeeCollection.find()
            const data = await cursor.toArray()
            res.send(data)

        })

        app.get('/coffee/:id', async (req, res) => {
            const Id = req.params.id;
            console.log(Id)
            const quary = { _id: new ObjectId(Id) }
            console.log(quary)
            const result = await coffeeCollection.findOne(quary)
            res.send(result)
        })

        app.delete('/coffee/:id', async (req, res) => {
            const Id = req.params.id;
            const quary = { _id: new ObjectId(Id) }
            const result = await coffeeCollection.deleteOne(quary)
            res.send(result)

        })

        app.put('/coffee/:id', async (req, res) => {
            const Id = req.params.id;
            const UpdatedData = req.body
            const filter = { _id: new ObjectId(Id) }
            const options = { upsert: true }
            const coffee = {
                $set: {
                    name: UpdatedData.name,
                    supplier: UpdatedData.supplier,
                    price: UpdatedData.price,
                    details: UpdatedData.details,
                    photo: UpdatedData.photo,
                    category: UpdatedData.category
                }
            }
            const result = await coffeeCollection.updateOne(filter, coffee, options)
            res.send(result)


        })

        app.post('/coffee', async (req, res) => {
            const coffees = req.body;
            const result = await coffeeCollection.insertOne(coffees)
            res.send(result)
        })

        app.get('/user', async(req, res) =>{
            const cursor = UserCollection.find()
            const Data = await cursor.toArray()
            res.send(Data)
        })

        app.post('/user', async (req, res) => {
            const user = req.body;
            const result = await UserCollection.insertOne(user)
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