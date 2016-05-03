function writePlayer(movieURL, width, height) {
	var lfStr = "";
		lfStr += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"';
		lfStr += ' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"';
		lfStr += ' width="' + width + '"';
		lfStr += ' height="' + height + '"';
		lfStr += ' id="package_flash"';
		lfStr += ' valign="top">';
		lfStr += '<param name="allowScriptAccess" value="always" />';
		lfStr += '<param name="movie" value="' + movieURL + '" />';
		lfStr += '<param name="quality" value="high" />';
		lfStr += '<param name="scale" value="exactfit" />';
		lfStr += '<embed src="' + movieURL + '"';
		lfStr += ' quality="high"';	
		lfStr += ' width="' + width + '"';
		lfStr += ' height="' + height + '"';
		lfStr += ' name="package_flash"';
		lfStr += ' valign="top"';
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		if(is_chrome)
			lfStr += ' wmode="opaque"';
		lfStr += ' allowscriptaccess="always"';
		lfStr += ' type="application/x-shockwave-flash"';
		lfStr += ' pluginspage="http://www.macromedia.com/go/getflashplayer" />';
		lfStr += '</object>';
		document.write(lfStr);
}