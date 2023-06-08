const CryptoJs = require("crypto-js");
const uuid = require("uuid");
const randomstring = require("randomstring");
const { db } = require("../helper/configSql");
const { createToken } = require("../helper/createToken");

module.exports = {
  login: (req, res) => {
    let { username, password } = req.body;
    password = CryptoJs.MD5(password + process.env.PASS_KEY).toString();
    db.query(
      "SELECT * FROM tbl_admin where username = ? && password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          return res.status(500).send({
            error: true,
            message: `Internal server error: ${err.message}`,
          });
        } else {
          if (result.length !== 1)
            return res.status(401).send({
              error: true,
              message: `Unauthorized: Wrong password or email is not registered`,
            });

          let dataUser = JSON.parse(JSON.stringify(result[0]));
          const token = createToken(dataUser);
          return res.status(200).send({
            error: false,
            message: "Login success",
            data: {
              ...dataUser,
              token,
            },
          });
        }
      }
    );
  },
};
