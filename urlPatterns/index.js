var routes = require('../routes/index.js');

module.exports = function(options){
	var urlPatterns = {
		"home": {
			path: "/",
			use: routes
		}	
	};
	
	return urlPatterns;
}