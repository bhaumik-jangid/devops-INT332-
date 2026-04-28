const express  = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI ||
  'mongodb://mongo_user:mongo_pass@mongodb:27017/appdb?authSource=admin';
mongoose.connect(MONGO_URI)
  .then(() => console.log('[DB] Connected to MongoDB'))
  .catch(err => console.error('[DB] Error:', err));

const Item = mongoose.model('Item', { name: String, createdAt: Date });

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const item = new Item({ name: req.body.name, createdAt: new Date() });
  await item.save();
  res.status(201).json(item);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
