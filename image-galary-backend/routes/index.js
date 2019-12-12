module.exports = (db, route) => {
  route.post("/uploadFile", (req, res) => {
    db.files
      .create({
        url: req.body.url
      })
      .then(data => {
        console.log("data inserted into db");
        db.files
          .findAll({
            raw: true
          })
          .then(result => {
            console.log("all url list", result);
            res.json(result);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  });

  // get methond to return all files in will mout
  route.get("/allFiles", (req, res) => {
    db.files
      .findAll({
        raw: true
      })
      .then(result => {
        console.log("all url list", result);
        res.json(result);
      })
      .catch(err => console.error(err));
  });
};
