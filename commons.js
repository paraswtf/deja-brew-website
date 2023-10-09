window.onresize = function () {
	iframeLoaded();
};

function iframeLoaded() {
	var iFrameID = document.getElementById("footer-iframe");
	if (iFrameID) {
		// Setting the iframe height dynamically with its content height
		iFrameID.height = "";
		iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
	}
}
