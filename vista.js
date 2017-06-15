(function () {

	console.log("running vista script...");

	vistaTagi();
	vistaNzz();

	function vistaTagi() {
		if (isHost("tagesanzeiger")) {
			console.log("...tagesanzeiger");
			$("#overlay_wrap").remove();
			$("body").removeClass("modal-open");
		}
	}

	function vistaNzz() {
		if (isHost("nzz")) {
			console.log("...nzz");
			deleteCookie("creid", "/", ".nzz.ch");
			deleteCookie2("creid", "", -1);
		}
	}

	function isHost(name) {
		return document.location.hostname.indexOf(name) > -1;
	}

	function deleteCookie(sKey, sPath, sDomain) {
		console.log("deleteCookie...");
		document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	}

	function deleteCookie2(name, value, days) {
		console.log("deleteCookie2...");

		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		}

		else var expires = "";
		//document.cookie = name + "=" + value + expires + "; path=/";
		document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.nzz.ch";
	}

})();


