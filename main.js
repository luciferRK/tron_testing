function load(){
	let tronweb;
	setTimeout(function(){
		if(window.tronWeb){
			console.log("GOt tron web");
			tronweb=window.tronWeb;
		}
		else{
			console.log("LocalStorage");
		}
		console.log(tronweb);
	},1000);
}

load();