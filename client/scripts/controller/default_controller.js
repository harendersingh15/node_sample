angular
.module('NodeExpress')
.controller('DefaultController', DefaultController);

DefaultController.$inject = ['$scope'];

 function DefaultController($scope){
	//alert('in')
	$scope.message = 'hello...';
}


