const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const file = 'data.txt'

app.get('/', (req, res) => {
  try {
    let count = fs.readFileSync(file);
    fs.writeFileSync(file, (Number(count) + 1));
    res.send(`あなたは${count}人目のお客様です`);
  }
  catch(e) {
    res.send(`エラーが発生しまた${e.message}`);
  }
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
