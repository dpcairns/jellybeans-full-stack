const client = require('../lib/client');
// import our seed data:
const jellybeans = require('./jellybeans.js');
const usersData = require('./users.js');

run();

async function run() {

  try {
    await client.connect();

    const users = await Promise.all(
      usersData.map(user => {
        return client.query(`
                      INSERT INTO users (email, hash)
                      VALUES ($1, $2)
                      RETURNING *;
                  `,
        [user.email, user.hash]);
      })
    );
      
    const user = users[0].rows[0];

    await Promise.all(
      jellybeans.map(jellybean => {
        return client.query(`
                    INSERT INTO jellybeans (flavor, color, is_favorite, user_id)
                    VALUES ($1, $2, $3, $4);
                `,
        [jellybean.flavor, jellybean.color, jellybean.is_favorite, user.id]);
      })
    );
    

    console.log('seed data load complete');
  }
  catch(err) {
    console.log(err);
  }
  finally {
    client.end();
  }
    
}
