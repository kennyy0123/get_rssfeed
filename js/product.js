function call_hackernews(page_number){
    $.ajax({
        'type': 'get',
        'dataType': 'xml',
        'url': 'https://news.ycombinator.com/rss?p="' + page_number +'',
        success: function(response){
            var channel_response = $(response).find("item")
            var title, url;
            $(channel_response).each(function(index, value) {
                title = $(value).children('title').text();
                url = $(value).children('link').text();
                $('.HackerNews').append('<a href="'+ url +'"> [HN]: ' + title + ' </a><br/>');
            });
        }
    });
}

function call_producthunt() {
    $.ajax({
        'type': 'get',
        'dataType': 'xml',
        'url': 'https://www.producthunt.com/feed',
        success: function(response){
            var title, url;
            var product_response = $(response).find('entry');
            $(product_response).each(function(index,value){
                title = $(value).children('title').text();
                url = $(value).find('link').attr('href');
                $('.ProductHunt').append('<a href="'+ url +'"> [PH]: ' + title + ' </a><br/>');
            });
            console.log(product_response);
        }
    });
}


call_hackernews(1);
call_producthunt();
