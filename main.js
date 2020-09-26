function load(){
	if(window.tronWeb){
		tronWeb=window.tronWeb;
		sessionStorage.setItem('tronobj':JSON.stringify(tronWeb));
	}
	else{
		tronWeb=JSON.parse(sessionStorage.tronobj);
	}
	console.log(tronWeb);
}

load();