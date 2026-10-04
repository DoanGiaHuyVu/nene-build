const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>ne-ne</title>
        <style>
          body { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            justify-content: center; 
            height: 100vh; 
            margin: 0; 
            font-family: sans-serif; 
          }
          button { 
            padding: 10px 20px; 
            font-size: 16px; 
            cursor: pointer; 
            background-color: limegreen; 
            color: white; 
            border: none; 
            border-radius: 8px; 
          }
        </style>
      </head>
      <body>
        <h1>Hello from ne-ne v3</h1>
        <p>Version 2</p>
        <button onclick="alert('Button clicked!')">Continue</button>
      </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
