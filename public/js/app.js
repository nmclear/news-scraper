$(document).ready(() => {



    $('#scrapeBtn').on('click', scrapeArticles);
    $('.saveBtn').on('click', updateSave);
    $('#newCommentBtn').on('click', newComment);
    // $('.commentBtn').on('click', viewComment);

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

    function newComment(){
        event.preventDefault();
        const id = $('.article-info').attr('data-id').trim();

        const comment = {
            author: $('#newCommentAuthor').val().trim(),
            title: $('#newCommentTitle').val().trim(),
            body: $('#newComment').val().trim()
        }

        $.post(`/comment/${id}`, comment);
        $('#newComment').val('');
    }

    // function viewComment(){
    //     // event.preventDefault();
    //     console.log('hello');
    //     const id = $('.article-info').attr('data-id').trim();
    //     console.log('id: ' + id);
    //     // $.get(`/comment/${id}`)
    // }
});