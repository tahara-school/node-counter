const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;
const file = 'data.txt';

app.get('/', (req, res) => {
  fs.readFile(file, (err, data) => {
    const count = Number(data);

    if (err) {
      res.send(`エラーが発生しました ${err}`);
      return false;
    }

    fs.writeFile(file, count + 1, (err) => {
      if (err) {
        res.send(`エラーが発生しました ${err}`);
        return false;
      }

      res.send(`あなたは${count}人目のお客様です`);
    });

  });
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}/`);
});
