// create / use database 
use fenda_biquini;

// create collection explicit mode
db.createCollection('test', {capped: true, max: 2, size: 2});

// test inserting data
db.test.insertOne({'name': 'Teste 1'});

// read documents
db.test.find({});

// create collection implicit mode
db.test1.insertOne({age:10});

// read documents
db.test1.find({});

// create collection
db.clients.insert([{'name':'Patrick', 'age':38},{'name':'Bob Esponja'}]);

// update data
db.clients.updateOne({'name': 'Bob Esponja'},{$set: {'age':38}});

// update data
db.clients.updateMany({'age':38},{$set: {'age': 40}});

// read data in specific conditions
db.clients.find({'age':40});

// limiting results
db.clients.find({'age':40}).limit(n);

// multiple conditions
db.clients.find({'age':40, 'name':'Lula Molusco'});

// within a given range
db.clients.find({'age':{$in:[30, 41]}});

// or operator
db.clients.find({$or: [{'name': 'Lula Molusco'},{'age':40}]})

// less than ($lt) or less than or equal ($lte)
db.clients.find({'age': {$lt:50}});

// delete one, many
db.clients.deleteOne({});

//documentation: https://www.mongodb.com/docs/manual/reference/operator/query/

//sample data: https://cloud.mongodb.com/v2/631a454e5500090d80e61370#security/database/users
use sample_restaurants;

//aggregate functions - count
db.restaurants.countDocuments({});

//aggregate functions - distinct
db.getCollection('restaurants').distinct('cuisine');

//pipeline $group fields
db.getCollection('restaurants').aggregate([{$group: {_id:'$cuisine', total: {$sum: 1}}}]);


//pipeline $add fields to the aggregation
db.getCollection('restaurants').aggregate([{$addFields: {'teste': true}}]);

// max / min
db.getCollection('restaurants').aggregate([{$group: {_id:'$cuisine', total: {$sum: 1}, id_min: {$min: "$restaurant_id"}}}]);

// and / or operators 
db.getCollection('restaurants').aggregate([{$match: {$or:[{'cuisine': 'American'}, {'borough': 'Brooklyn'}]}}]);