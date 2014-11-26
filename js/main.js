function getAndParse (url, cb) {
    var xhr;
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onload = function() {
        cb(xhr.responseXML);
    };
    xhr.onerror = function() {
        console.log("Error: Could not get xml file " + url);
    };
    xhr.open("GET", url);
    xhr.responseType = "document";
    xhr.send();
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}