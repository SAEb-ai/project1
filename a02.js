var app = angular.module('myApp', []);
       
app.controller("sample", function($scope){
       
    $scope.initial = "BMSCE";
            
    $scope.change = function() {
        $scope.initial ="BMSIT";
    }

    $scope.enter = function() {
        $scope.buttonClicked =true;
    }
         
});

app.directive("display", function() {
    return {
        templateUrl: './a01.html',
    };
});