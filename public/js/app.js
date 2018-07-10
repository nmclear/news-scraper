$(document).ready(function(){



    $('#scrapeBtn').on('click', scrapeArticles);
    // $('.saveBtn').on('click', saveArticle);
    // $('.unsaveBtn').on('click', unsaveArticle);

    $('.saveBtn').on('click', updateSave);

    function scrapeArticles(){
        event.preventDefault();
        $.get('/scraper');
    }

    // function saveArticle(){
    //     const id = $('.article-info').attr('data-id').trim();

    //     event.preventDefault();
    //     $.ajax({
    //         method: 'PUT',
    //         url: `/save/${id}`
    //     })
    // }

    // function unsaveArticle(){
    //     const id = $('.article-info').attr('data-id').trim();
    //     event.preventDefault();
    //     $.ajax({
    //         method: 'PUT',
    //         url: `/unsave/${id}`
    //     })
    // }

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