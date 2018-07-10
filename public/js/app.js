$(document).ready(function(){



    $('#scrapeBtn').on('click', scrapeArticles);
    $('.saveBtn').on('click', updateSave);

    function scrapeArticles(){
        event.preventDefault();
        $.get('/scraper');
    }


    function updateSave(){
        event.preventDefault();

        const id = $('.article-info').attr('data-id').trim();
        const path = $('.article-info').attr('data-toggle').trim();

        $.ajax({
            method: 'PUT',
            url: `/${path}/${id}`
        })
    }

});