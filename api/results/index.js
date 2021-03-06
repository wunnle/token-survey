const connectToDatabase = require('../../helpers/dbHelper')

module.exports = async (_req, res) => {
  const db = await connectToDatabase()

  console.log('connected')

  const collection = await db.collection('topics')

  const topics = await collection.find({}).toArray()

  const statusCollection = await db.collection('status')

  const statuses = await statusCollection.find({}).toArray()

  res.status(200).send({
    topics,
    isActive: statuses[0].active
  })
}
