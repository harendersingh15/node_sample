exports.UserLogin = function(num1, num2){
	return num1 + num2;
}

module.exports = function(){
	('/sumoftwonumber', function(req, res){
		res.send(req.body.num1 + req.body.num2);
	})
}

