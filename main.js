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
	}
	else{
		console.log("LocalStorage");
	}
	console.log(tronweb);
}

load();