/* index.js
*
    Creates a connection object to MongoDB.  The db used is hosted in MongoDB Atlas and the url needs to
    be specified in the global const.

    There is a sequence to each transaction.  Here is a rough outline:
    1. connect() method returns a client object
    2. client is queried for a db with db()
    3. db is queried for a collection with collection()
    4. collection object may now be used to insertOne(), find(), updateOne(), deleteOne() or deleteMany() on collection
    5. client connection is closed with close()

    mongodb is the 3rd party module used.  "mongoose" is another popular alternative.

    When searching for a specific record such as with dbUpdate() or dbDelete(), the "_id" field is used.
    This is generated by the MongoDb during insertOne() and automatically inserted as a field in the record.

*
*/

const mongodb = require('mongodb');
const user = 'mongouser';
const passwd = 'mongopasswd';
const dbName = 'felixchat';
const url = "mongodb+srv://" + user + ":" + passwd + "@cluster0.8gvlt.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
const dbColName = 'chatrooms';

// Private helper functions
let dbClient = async () => {
    return await mongodb.MongoClient.connect(url, { useUnifiedTopology: true })
        .then((res) => { return res; })
        .catch((err) => { console.log('DB connection failed', err) });
}; 

let dbCol = async (client) => {
    const db = await client.db(dbName);
    const col = await db.collection(dbColName);
    return col;
};

// Test db server connect when module initializes
dbClient()
    .then((res) => { 
        console.log("Connected successfully to server");
        res.close();
     })
    .catch((err) => { console.log("MongoDB not responding"); });

// API implementations
let dbCreate = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {users, title, chat} = request;
    let newRec = { 'users': users, 'title': title, 'chat': chat };
    let results = await col.insertOne(newRec)
        .then((res) => {return res; })
        .catch((err) => { console.log('DB insertOne failed', err); });
    client.close();

    return results;
};

let dbList = async () => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.find({}).toArray() 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find all failed', err); });
    client.close();

    return results;
};

let dbJoin = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id, users} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.updateOne({ '_id' : oid}, { $set: {'users': users}}) 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbLeave = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id, users} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.updateOne({ '_id' : oid}, { $set: {'users': users}}) 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbMembers = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.find({ '_id': oid}).toArray() 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from id failed', err); });
    client.close();

    return results;
};

let dbUpdate = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id, chat} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.updateOne({ '_id' : oid}, { $set: {'chat': chat}}) 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbDelete = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.deleteOne({'_id' : oid})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteOne failed', err); });
    client.close();

    return results;
};

let dbFile = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id, file} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.updateOne({ '_id' : oid}, { $set: {'files': file}}) 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB updateOne failed', err); });
    client.close();

    return results;
};

let dbChat = async (request) => {
    const client = await dbClient();
    const col = await dbCol(client);
    const {id} = request;
    let oid = new mongodb.ObjectID(id);
    let results = await col.find({ '_id': oid}).toArray() 
        .then((res) => {return res; })
        .catch((err) => { console.log('DB find from id failed', err); });
    client.close();

    return results;
};

let dbDeleteAll = async () => {
    const client = await dbClient();
    const col = await dbCol(client);
    let results = await col.deleteMany({})
        .then((res) => {return res; })
        .catch((err) => { console.log('DB deleteMany failed', err); });
    client.close();

    return results;
};

module.exports = { dbCreate, dbList, dbJoin, dbLeave, dbMembers, dbUpdate, dbDelete, dbFile, dbChat, dbDeleteAll };
