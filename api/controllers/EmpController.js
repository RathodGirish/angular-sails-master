/**
 * EmpController
 *
 * @description :: Server-side logic for managing Emps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getEmps: function(req, res) {
        EmpService.getEmps(function(emps) {
            res.json(emps)
        })
    },
    addEmp: function(req, res) {
        console.log(req.body);
        var empName = (req.body.name) ? req.body.name : undefined
        var empEmail = (req.body.email) ? req.body.email : undefined
        EmpService.addEmp(empName,empEmail, function(success) {
            res.json(success)
        })
    },
    removeEmp: function(req, res) {
       var empName = (req.body.name) ? req.body.name : undefined
        EmpService.removeEmp(empName, function(success) {
            res.json(success)
        })
    }
}

