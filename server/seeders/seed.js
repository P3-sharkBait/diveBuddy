const db = require('../config/connection');
const { User, Log, Product} = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json')


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});

    await User.create(userSeeds);
    await Product.create(productSeeds)
   
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
