const { MongoClient } = require('mongodb');
const assert = require('assert');
require('dotenv').config();

// Database configuration
const config = {
  dbUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017',
  dbName: process.env.DB_NAME || 'acne_detection_db',
  testCollection: 'users' // Change to your collection name
};

class MongoDBTester {
  constructor() {
    this.client = null;
    this.db = null;
    this.testUserId = null;
  }

  async connect() {
    console.log('\nConnecting to MongoDB...');
    this.client = new MongoClient(config.dbUri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000
    });

    try {
      await this.client.connect();
      await this.client.db('admin').command({ ping: 1 });
      this.db = this.client.db(config.dbName);
      console.log('✓ Connected successfully to MongoDB');
      return true;
    } catch (err) {
      console.error('Connection failed:', err.message);
      return false;
    }
  }

  async cleanup() {
    if (this.db) {
      await this.db.collection(config.testCollection).deleteMany({});
      console.log('✓ Test collection cleaned up');
    }
  }

  async testCRUDOperations() {
    console.log('\nTesting CRUD operations...');
    const collection = this.db.collection(config.testCollection);

    // Create
    const user = {
      username: 'test_user',
      email: 'test@example.com',
      acneRecords: [],
      createdAt: new Date()
    };
    
    const insertResult = await collection.insertOne(user);
    assert.ok(insertResult.acknowledged);
    this.testUserId = insertResult.insertedId;
    console.log('✓ Document created');

    // Read
    const foundUser = await collection.findOne({ _id: this.testUserId });
    assert.strictEqual(foundUser.username, 'test_user');
    console.log('✓ Document retrieved');

    // Update
    const updateResult = await collection.updateOne(
      { _id: this.testUserId },
      { $set: { 'acneRecords.0': { type: 'cystic', severity: 3, date: new Date() } } }
    );
    assert.strictEqual(updateResult.modifiedCount, 1);
    console.log('✓ Document updated');

    // Verify update
    const updatedUser = await collection.findOne({ _id: this.testUserId });
    assert.ok(updatedUser.acneRecords.length === 1);
    console.log('✓ Update verified');

    // Delete
    const deleteResult = await collection.deleteOne({ _id: this.testUserId });
    assert.strictEqual(deleteResult.deletedCount, 1);
    console.log('✓ Document deleted');
  }

  async testQueries() {
    console.log('\nTesting queries...');
    const collection = this.db.collection(config.testCollection);
    
    // Insert test data
    const testUsers = [
      { username: 'user1', age: 25, acneScore: 2, type: 'patient' },
      { username: 'user2', age: 30, acneScore: 5, type: 'patient' },
      { username: 'doctor1', age: 40, type: 'dermatologist' }
    ];
    
    await collection.insertMany(testUsers);

    // Basic find
    const patients = await collection.find({ type: 'patient' }).toArray();
    assert.strictEqual(patients.length, 2);
    console.log('✓ Basic find query');

    // Comparison query
    const severeCases = await collection.find({ acneScore: { $gt: 3 } }).toArray();
    assert.strictEqual(severeCases.length, 1);
    assert.strictEqual(severeCases[0].username, 'user2');
    console.log('✓ Comparison query');

    // Projection
    const usernames = await collection.find(
      { type: 'patient' },
      { projection: { username: 1, _id: 0 } }
    ).toArray();
    
    assert.deepStrictEqual(usernames, [
      { username: 'user1' },
      { username: 'user2' }
    ]);
    console.log('✓ Projection query');
  }

  async testIndexes() {
    console.log('\nTesting indexes...');
    const collection = this.db.collection(config.testCollection);
    
    // Create index
    await collection.createIndex({ username: 1 }, { unique: true });
    console.log('✓ Index created');

    // Verify index
    const indexes = await collection.indexes();
    const usernameIndex = indexes.find(idx => idx.key.username === 1);
    assert.ok(usernameIndex);
    assert.ok(usernameIndex.unique);
    console.log('✓ Index verified');

    // Test unique constraint
    try {
      await collection.insertOne({ username: 'user1' });
      assert.fail('Should have thrown duplicate key error');
    } catch (err) {
      assert.ok(err.code === 11000);
      console.log('✓ Unique constraint enforced');
    }
  }

  async runAllTests() {
    if (!await this.connect()) {
      return;
    }

    try {
      await this.cleanup();
      await this.testCRUDOperations();
      await this.cleanup();
      await this.testQueries();
      await this.testIndexes();
      
      console.log('\n✅ All MongoDB tests passed successfully!\n');
    } catch (err) {
      console.error('\n❌ Test failed:', err);
    } finally {
      await this.client.close();
    }
  }
}

// Run the tests
new MongoDBTester().runAllTests();