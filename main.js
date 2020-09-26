function load(){
	let tronweb;
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