# local-MongoDB-demo

## Setting up MongoDB locally

1. Install MongoDB Community Edition [here](https://docs.mongodb.com/manual/administration/install-community/).

2. Run MongoDB (i.e. the `mongod` process) as the appropriate service type depending on your operating system. On macOS, this would be `brew services start mongodb-community@5.0`.

3. Now you can interact with your local database. Run `mongo` to interact with it through the command line. In node, we install the appropriate dependencies and use the connection string "mongodb://localhost:27017" to create an instance of the client. Yet another way to interact with the local database is through MongoDB Compass, which is an interactive tool for querying, optimizing, and analyzing your MongoDB data.

4. When done, stop running `mongod`. On MacOS, this would be `brew services stop mongodb-community@5.0`.

## CRUD Operations

Documentation for MongoDB CRUD operations can be found [here](https://docs.mongodb.com/drivers/node/current/fundamentals/crud/).