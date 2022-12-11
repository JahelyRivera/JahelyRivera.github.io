$(document).ready(function(){
    $('div.BannerPagina a:first').addClass('active');
    $('.Secciones article').hide();
    $('.Secciones article:first').show();

    $('div.BannerPagina a').click(function(){
        $('div.BannerPagina a').removeClass('active');
        $(this).addClass('active');
        $('.Secciones article').hide();

        var activeTab =$(this).attr('href');
        $(activeTab).show();
        return false;
    })
});