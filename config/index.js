var config = {
		local: {
			mode: 'local',
			port:3000,
			STATIC_PATH: "/static",
			
		},
		
		staging: {
			mode: 'staging',
			port:4000,
			STATIC_PATH: "/static",
			
		},
		production:{
			mode: 'production',
			port: 5000,
			STATIC_PATH: "/static",
			
		}
};
module.exports = function(mode) {
	return config[mode||process.argv[2]|| 'local'] || config.local;
};