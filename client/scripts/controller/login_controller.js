angular
.module('NodeExpress')
.controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$cookies', '$location', 'Users'];

 function LoginController($scope, $cookies, $location, Users){
	//alert('in')
	var ctrl = this;
	
	ctrl.userRegister = userRegister;
	ctrl.loginUser = loginUser;
	
	function loginUser(userInfo){
	
	$http.post({
		method: 'POST',
		url: 'User/sumoftwonumber',
		data: {'num1': 2, 'num2': 5},
	}).success(function(result){
		debugger;
	});
		if(userInfo && userInfo.EmailID && userInfo.Password){
			 Q(Users.AllUsers()).then(function(data){
				_.find(data, function(item){
					 if(item.EmailID === userInfo.EmailID)
					 {
						 if(item.Password === userInfo.Password){
							 location.path('/');
						  }else{
							 window.alert('Password not matched');
							}
					}
					 else{
						 window.alert('EmailID is not Ragistered');
					}
				});
			});
		}
		else{
			window.alert('please enter the valid EmailID/Password');
		}
			
	}
	
	function userRegister(){
		$location.path('/register');
	}
}