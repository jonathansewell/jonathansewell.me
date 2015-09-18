module.exports = function() {
	switch (process.env.NODE_ENV) {
		case 'development':
			return {
				appHost: 'localhost',
				appPort: 3000
			};

		case 'production':
			return {
				appHost: '178.62.49.9',
				appPort: 80
			};

		default:
			throw new Error('unknown environment ' + process.env.NODE_ENV);
	}
}();