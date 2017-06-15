(function () {

	vistaTagi();
	vistaNzz();

	console.log(navigator);
	console.log(document);

	function vistaTagi() {
		if (isHost("tagesanzeiger")) {
			$("#overlay_wrap").remove();
			$("body").removeClass("modal-open");
		}
	}

	function vistaNzz() {
		if (isHost("nzz")) {
			console.log("ascsdas");
			deleteCookie("creid", "/", ".nzz.ch");
		}
	}

	function isHost(name) {
		return document.location.hostname.indexOf(name) > -1;
	}

	function deleteCookie(sKey, sPath, sDomain) {
		document.cookie = encodeURIComponent(sKey) +
			"=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
			(sDomain ? "; domain=" + sDomain : "") +
			(sPath ? "; path=" + sPath : "");
	}

})();


