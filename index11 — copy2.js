let inp = document.querySelector('#inp');
let ip1  = document.querySelector('.ip1');
let ip2  = document.querySelector('.ip2');
let ip3  = document.querySelector('.ip3');

function func () {
	let arr = inp.value.split(' ');
	let result = arr.map(upPer);
	function upPer (value) {
		return value[0].toUpperCase() + value.substr(1);
	}
	ip1.value = result[0];
	ip2.value = result[1];
	ip3.value = result[2];

}


inp.addEventListener('blur',func );



