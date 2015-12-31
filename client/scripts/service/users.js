angular
.module('NodeExpress')
.factory('Users', Users);

function Users()
{
	return{
		AllUsers : AllUsers
	}
	
	function AllUsers() {
		return [
			{
				'Name' : 'harender',
				'EmailID' : 'hsingh',
				'Password' : '123'
			},
			{
				'Name' : 'nitin',
				'EmailID' : 'nkumar',
				'Password' : '123'
			},
			{
				'Name' : 'admin',
				'EmailID' : 'admin',
				'Password' : '123'
			}			
		]
	}
}