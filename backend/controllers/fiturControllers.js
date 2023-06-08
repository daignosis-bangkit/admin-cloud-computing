const { query } = require("express")
const { db } = require("../helper/configSql")

module.exports = {
    traffic: (req, res) => {
        let type = req.query.type
        let time = req.query.time

        let query = `SELECT AVG(${type}) AS average_accuracy FROM tbl_chat WHERE date >= CURDATE() - INTERVAL ? DAY`
        db.query(
            query,
            [time],
            (err,result) => {
                let data = JSON.parse(JSON.stringify(result[0]))
                return res.status(200).send({
                    error: false,
                    data: data.average_accuracy
                })
            }
        )
        
    }
}