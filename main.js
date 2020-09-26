function load(){
	if(window.tronWeb){
		tronWeb=window.tronWeb;
		//sessionStorage.setItem('tronobj',JSON.stringify(tronWeb));
	}
	else{
console.log("LocalStorage");
		//tronWeb=JSON.parse(sessionStorage.tronobj);
	}
	console.log(tronWeb);
}

load();