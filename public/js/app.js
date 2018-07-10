$(document).ready(function(){



    $('#scrapeBtn').on('click', scrapeArticles);
    $('.saveBtn').on('click', saveArticle);



    function scrapeArticles(){
        event.preventDefault();
        $.get('/scraper');
    }

    function saveArticle(){
        const id = $('.article-info').attr('data-id').trim();
        console.log(id);
        event.preventDefault();
        // $.put(`saved/${id}`);
        $.ajax({
            method: 'PUT',
            url: `/saved/${id}`
        })
    }

});