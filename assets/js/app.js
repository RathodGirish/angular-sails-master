'use strict';

var todoApp = angular.module('todoApp', ['ngRoute', 'ui.bootstrap'])
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/todo', {
      templateUrl: '/templates/todo.html',
      controller: 'TodoCtrl'
    }).when('/emp', {
      templateUrl: '/templates/emp.html',
      controller: 'EmpCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])

todoApp.controller('TodoCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService) {
  $scope.formData = {};
  $scope.todos = [];

  TodoService.getTodos().then(function(response) {
    console.log(response);
    $scope.todos = response;
  })

  $scope.addTodo = function() {
    console.log($scope.formData);
    TodoService.addTodo($scope.formData).then(function(response) {
      console.log(response);
      $scope.todos.push($scope.formData)
      $scope.formData = {};
    })
  }

  $scope.removeTodo = function(todo) {
    console.log(todo);
    TodoService.removeTodo(todo).then(function(response) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1)
      console.log(response);
    })
  }
}])

todoApp.controller('EmpCtrl', ['$scope', '$rootScope', 'EmpService', function($scope, $rootScope, EmpService) {
  $scope.formData = {};
  $scope.emps = [];

  EmpService.getEmps().then(function(response) {
    console.log(response);
    $scope.emps = response;
  })

  $scope.addEmp = function() {
    console.log($scope.formData);
    EmpService.addEmp($scope.formData).then(function(response) {
      console.log(response);
      $scope.emps.push($scope.formData)
      $scope.formData = {};
    })
  }

  $scope.removeEmp = function(emp) {
    console.log(emp);
    EmpService.removeEmp(emp).then(function(response) {
      $scope.emps.splice($scope.emps.indexOf(emp), 1)
      console.log(response);
    })
  }
}])

