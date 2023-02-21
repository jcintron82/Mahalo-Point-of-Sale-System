const employee = require("../DBschemas/employees");

module.exports = {
  updateMetrics: (req, res) => {
    const lifetimeSales = req.body[0];
    const employeeID = req.body[1];
    const dailySales = req.body[2];
    const filter = { _id: employeeID };
    const update = { lifetimeSales: parseInt(lifetimeSales) + parseInt(dailySales) };
    employee.findOneAndUpdate(filter, update, (err, data) => {
        if (err) throw err 
        else {
            console.log(data)
        }
    });
    res.send({ message: 'Metrics Updated' });
  },
};
