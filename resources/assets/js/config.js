export const getHeader = function () {
	const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
	const headers = {
		'Accept': 'application/json',
		'Content-type': 'application/x-www-form-urlencoded',
		'Authorization': tokenData ? 'Bearer ' + tokenData.token : ''
	}
	return headers;
}

export const getUrl = function () {
	// let envi = 'staging';
	// let envi = 'prod';
	let envi = 'dev';

	let url = '';
	switch (envi) {
		case 'staging':			
			url = 'http://192.168.254.122:8000' // staging					
			// url: 'http://192.168.0.250:8000' // prod	
			break;

		case 'prod':			
			url = 'http://192.168.0.250:8000' // prod	
			break;
		
		default: // dev
			url = 'http://localhost:8000'; // dev
			break;
	}
	return url;
}