var pool = require("./db_configuration");

module.exports.ADD_TASK = async(req, res, next) => {
    try {
        var task_name = req.body.task;
        var exp = req.body.exp;
        console.log(req.body)
        if (task_name && exp) {
            let sql = `INSERT INTO mytodo(task_name, date, isActive) VALUES ('${task_name}','${exp}','1')`;
            await pool.query(sql);
            res.status(200).json({
                message: "Saved",
                status: 1,
            });
        } else {
            res.status(200).json({
                message: "Missing req.",
                status: 0,
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Something went wrong",
            status: 0,
            message: err.message,
        });
    }
};