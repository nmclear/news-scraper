$(document).ready(function(){


$('#scrapeBtn').on('click', scrapeArticles);



    function scrapeArticles(){
        event.preventDefault();


        $.get('/scraper', function(){
            console.log('scrape button clicked');
        });
    }




});