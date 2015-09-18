module.exports = function() {
	switch (process.env.NODE_ENV) {
		case 'development':
			return {
				appHost: 'localhost',
				appPort: 3000
			};

		case 'production':
			return {
				appHost: '192.168.1.66',
				appPort: 80
			};

		default:
			throw new Error('unknown environment ' + process.env.NODE_ENV);
	}
}();