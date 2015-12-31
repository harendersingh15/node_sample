angular
.module('NodeExpress')
.controller('RagisterController', RagisterController);

RagisterController.$inject = ['$scope', '$cookies', '$location', 'Users'];

 function RagisterController($scope, $cookies, $location, Users){
	//alert('in')
	var ctrl = this;
	
	ctrl.newUser = {};
	ctrl.registerNewUser = registerNewUser;
	ctrl.isValidUser = isValidUser;
		
	function registerNewUser(newUser){
		if(ctrl.isValidUser(newUser, Users.AllUsers())){
			Q(Users.AllUsers()).then(function(data){
				
			});
			$location.path('/');
		}else{
			window.alert('Some error occur while new ragistration');
		}
	}
	
	function isValidUser(newUser, allUsers)
	{
		if(_.isObject(newUser)){
			if(newUser.EmailID && newUser.Password)
				if(allUsers.indexOf(newUser.EmailID) < 0)
					return true;
		}
		else {
			return false;
		}
	}
	
	
}