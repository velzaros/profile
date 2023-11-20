// event on click
$('.page-scroll').on('click', function(e) {
    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap element
    var elementTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elementTujuan.offset().top - 52
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});