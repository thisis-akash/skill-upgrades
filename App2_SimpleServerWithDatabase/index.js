const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();

/* Our app makes a request to this url, networking setup by docker compose
   automatically routes it to our service/container named redis-server
   Node app is unaware of what redis-server means, we assume this will run as
   a container/service setup by docker-compose and thus networking will be taken care of */
const client = redis.createClient({
  host: 'redis-server', 
  port: 6379,           
});                     
client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send('Number of visits ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

// Simple route to simulate process exit to test out restart feature
app.get('/sim-exit', (req, res) => {
  process.exit(0);
});

app.listen(8081, () => {
  console.log('listening on port 8081');
});
