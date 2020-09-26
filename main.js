function load(){
	let tronweb;
	while(!window.tronWeb.ready){}
	if(window.tronWeb){
		console.log("GOt tron web");
		tronWeb=window.tronWeb;
	}
	else{
		console.log("LocalStorage");
	}
}

load();