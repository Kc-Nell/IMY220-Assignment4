// Kirsten Nell u20780193 Assignment 4

$(document).ready(() => {

    $('button#left').on('click', function() {
        // capture message
        var message = $.trim($('#message').val());

        // clear textarea for new message
        $('#message').val(' ');

        // print message
        if(message != ""){
            // regex for youtube links
            var urlRegex = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;

            // embed link
            message = message.replace(urlRegex, function (url) {
                return url + ' <iframe width="100%" height="315" src="http://www.youtube.com/embed/'+ message.match(urlRegex)[1] +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            });

            $('div.messages').append(
                $('<div></div>', {
                    html: message,
                    class: 'left-message col-4 offset-4 rounded mb-3'
                })
            );
        }
    });

    $('button#right').on('click', function() {
        // capture message
        var message = $.trim($('#message').val());

        // clear textarea for new message
        $('#message').val(' ');

        // print message
        if(message != ""){
            // regex for youtube links
            var urlRegex = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/;

            // embed link
            message = message.replace(urlRegex, function (url) {
                return url + ' <iframe width="100%" height="315" src="http://www.youtube.com/embed/'+ message.match(urlRegex)[1] +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
            });

            $('div.messages').append(
                $('<div></div>', {
                    html: message,
                    class: 'right-message col-4 offset-4 rounded mb-3'
                })
            );
        }
    });

});