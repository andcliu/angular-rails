var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	$scope.firstName = "Andrew";
	$scope.lastName = "Liu";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});