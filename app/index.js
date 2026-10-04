const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const restaurants = {
  'Pizza Palace': 0,
  'Burger Barn': 0,
  'Sushi Spot': 0
};

app.get('/', (req, res) => {
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Restaurant Voting</title>
      <style>
        body { font-family: sans-serif; text-align: center; margin-top: 50px; }
        .restaurant { margin: 20px; padding: 15px; border: 1px solid #ccc; display: inline-block; width: 200px; }
        .vote-count { font-size: 24px; font-weight: bold; }
        button { cursor: pointer; padding: 10px 20px; font-size: 16px; }
      </style>
    </head>
    <body>
      <h1>Vote for your favorite restaurant!</h1>
  `;

  for (const [name, votes] of Object.entries(restaurants)) {
    html += `
      <div class="restaurant">
        <h2>${name}</h2>
        <p class="vote-count">${votes} votes</p>
        <form action="/vote" method="POST">
          <input type="hidden" name="restaurant" value="${name}">
          <button type="submit">Vote</button>
        </form>
      </div>
    `;
  }

  html += `
    </body>
    </html>
  `;
  res.send(html);
});

app.post('/vote', (req, res) => {
  const { restaurant } = req.body;
  if (restaurants.hasOwnProperty(restaurant)) {
    restaurants[restaurant]++;
  }
  res.redirect('/');
});

if (require.main === module) {
  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on 0.0.0.0:${port}`);
  });
}

module.exports = { app };
