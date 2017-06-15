(function () {
	
	function removeItem(sKey, sPath, sDomain) {
		console.log('removing cookie...', sKey, sPath, sDomain);
    		document.cookie = encodeURIComponent(sKey) + 
                  "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + 
                  (sDomain ? "; domain=" + sDomain : "") + 
                  (sPath ? "; path=" + sPath : "");
}
	
	console.log('removing overlay wrap...');
	$("#overlay_wrap" ).remove();
	
	console.log('removing modal-open...');
	$("body").removeClass("modal-open");
	
	
	removeItem("creid", "/", ".nzz.ch");

})();


