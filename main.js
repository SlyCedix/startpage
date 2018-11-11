function start() {
    document.getElementById('keywords').focus();
    l = getParameterByName('l');
    $('.main li').css( 'color', l);

    window.setInterval(function() {
        updatetime();
    }, 200);
}

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
        var text = document.getElementById("keywords").value;
        var e = getParameterByName('s');
        if (text[0] === ';'){
            if(text.indexOf(' ') > -1){
                var option = text.substr(1,text.indexOf(' ')-1);
                var subtext = text.substr(2 + option.length);
                switch(option){
                    case "g":
                        window.location = "https://www.google.com/search?q=" + subtext;
                        break;
                    case "y":
                        window.location = "https://www.youtube.com/search?q=" + subtext;
                        break;
                    case "rs":
                        window.location = "https://duckduckgo.com/?q=site:reddit.com+" + subtext;
                        break;
                    case "r":
                        window.location = "https://reddit.com/r/" + subtext;
                        break;
                    case "t":
                        window.location = "https://twitch.tv/" + subtext;
                        break;
                    default:
                        window.location = "https://duckduckgo.com/?q=" + subtext;
                        break;
                }
            } else {
                var option = text.substr(1);
                switch(option){
                    case "g":
                        window.location = "https://www.google.com/";
                        break;
                    case "y":
                        window.location = "https://www.youtube.com/";
                        break;
                    case "r":
                    case "rs":
                        window.location = "https://reddit.com/";
                        break;
                    case "t":
                        window.location = "https://twitch.tv/";
                        break;
                }
            }
        } else if (e == 'g') {
            window.location = "https://www.google.com/search?q=" + text;
        } else {
            window.location = "https://duckduckgo.com/?q=" + text;
        }
    }
}

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
    	document.getElementById("keywords").focus();
    }
}

function updatetime() {
    var d = new Date();
    var mins = String(d.getMinutes());
    var hours = String(d.getHours());
    if (hours.length == 1) {
        hours = '0' + hours;
    }
    if (mins.length == 1) {
        mins = '0' + mins;
    }
    var time = hours + ' ' + mins;
    document.getElementById("time").innerHTML = time;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}