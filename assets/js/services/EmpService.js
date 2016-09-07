todoApp.service('EmpService', function($http, $q) {
  return {
    'getEmps': function() {
      var defer = $q.defer();
      $http.get('/emp/getEmps').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addEmp': function(emp) {
      console.log(emp);
      var defer = $q.defer();
      $http.post('/emp/addEmp', emp).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeEmp': function(emp) {
      console.log(emp);
      var defer = $q.defer();
      $http.post('/emp/removeEmp', emp).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }})