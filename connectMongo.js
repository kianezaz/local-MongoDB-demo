const http = require('http');

//localhost:27017 ensures we connect to the MongoDB local instance
const url = "mongodb://localhost:27017";

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

(async () => {
    await client.connect();

    // Specify database you want to access
    const db = client.db('testDb');
    const collection = db.collection('recipes');

    console.log(`MongoDB Connected: ${url}`);

    console.log("Now adding 2 recipes");

    let inserted = await collection.insertMany([
        {
            name: "Pumpkin Pie",
            tags: ["Dessert", "Seasonal"]
        },
        {
            name: "Omelette",
            tags: ["Breakfast"]
        }
    ]);
    console.log(inserted);

    console.log("Now updating one recipe");
    let update = await collection.updateOne({name: "Pumpkin Pie"}, {$set: {name: "Thanksgiving Special Pumpkin Pie"}});
    console.log(update);

    console.log("Now reading all recipes");
    let recipesFound = await collection.find().toArray();
    console.log(recipesFound);

    console.log("Now deleting all added recipes");
    let deleted = await collection.deleteMany({});
    console.log(deleted);

    console.log("Checking remaining recipes");
    recipesFound = await collection.find().toArray();
    console.log(recipesFound);
})();


/*
const server = http.createServer((req, res) => {
    MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, client) => {
        if (err) {
            return console.log(err);
        }
        console.log("Connected to local instance");
        const db = client.db('recipes');
        if (req.url === '/api/addRecipe') {
            let body = '';
            req.on('data', buffer => {
                body += buffer.toString(); // convert Buffer to string
            });
            req.on('end', () => {
                console.log(body);
                res.end('ok');
            });
            console.log(body);
            const recipe = {
                name: body["name"],
                tags: body["tags"]
            }
            console.log(db);
            db.insertOne(recipe).then(res => {
                return console.log(`Document was inserted with id ${res.insertedId}`);
            })
        }
    });
})

server.listen(3000);

console.log("Listening on port 3000");
*/