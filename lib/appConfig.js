module.exports = function() {
	switch (process.env.NODE_ENV) {
		case 'production':
			return {
				appHost: '178.62.49.9',
				appPort: 80
			};

		default: 	//development
			return {
				appHost: 'localhost',
				appPort: 3000
			};
	}
}();