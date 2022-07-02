const db = require('../config/connection');
const { User, Log } = require('../models');
const userSeeds = require('./userSeeds.json');
const logSeeds = require('./logSeeds.json');

db.once('open', async () => {
  try {
    await Log.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < logSeeds.length; i++) {
      const {_id, username} = await Log.create(logSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            logs: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
