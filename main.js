var sindex = 0;
var cycle = false;

function start() {
    var query = getParameterByName('q');
    if (query) search(query.replaceAll("+", "%2B"));

    document.getElementById('keywords').focus();

    window.setInterval(function () {
        updatetime();
    }, 200);
}

function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    var text = document.getElementById("keywords").value.replaceAll("+", "%2B");
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (key == 13) { // Search functions
        search(text);
    }
    if (key == 9) { // Tab Completion Functions
        e.preventDefault();
        e.stopPropagation();
        if (text[0] === ';') {
            switch (option) {
                case 't':
                    var streamers = ['admiralbahroo', 'moonmoon_ow', 'witwix'];
                    if (!subtext || cycle) {
                        cycle = true;
                        if (sindex > streamers.length - 1) sindex = 0;
                        document.getElementById("keywords").value = ';t ' + streamers[sindex++];
                        return;
                    }
                    for (var streamer of streamers) {
                        if (subtext === streamer.substr(0, subtext.length)) {
                            document.getElementById("keywords").value = ';t ' + streamer;
                            return;
                        }
                    }
                    break;
            }
        }
    }
    if(key == 32){ //Space to go to search
        document.getElementById("keywords").focus();
    }
    sindex = 0;
    cycle = false;
}

function search(text) {
    var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
    var subtext = text.substr(2 + option.length);
    if (text[0] === ';') {
        if (text.indexOf(' ') > -1) {
            switch (option) {
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
            switch (option) {
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
    } else {
        window.location = "https://duckduckgo.com/?q=" + text;
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
    return decodeURIComponent(results[2]);
}