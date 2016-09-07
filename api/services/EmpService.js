module.exports = {
  getEmps: function(next) {
    Emp.find().exec(function(err, emps) {
      if(err) throw err;
      next(emps);
    })
  },
  addEmp: function(name, email, next) {
    console.log(name);  
    Emp.create({name: name, email: email}).exec(function(err, emp) {
      if(err) throw err;
      next(emp);
    })
  },
  removeEmp: function(name, next) {
    Emp.destroy({name: name}).exec(function(err, emp) {
      if(err) throw err;
      next(emp);
    })
  }
}