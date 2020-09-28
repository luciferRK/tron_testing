function sleep(miliseconds) {
                var currentTime = new Date().getTime();
                while (currentTime + miliseconds >= new Date().getTime()) {
                }
            }

function load(){
	let tronweb;
	sleep(1000);
	if(window.tronWeb){
		console.log("GOt tron web");
		tronweb=window.tronWeb;
		document.getElementById('wallet').innerText=tronweb.defaultAddress.base58;
	}
	else{
		console.log("LocalStorage");
	}
	console.log(tronweb);
}

window.onload=load;