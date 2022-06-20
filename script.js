$.getJSON("https://api-alquranid.herokuapp.com/surah", function(value) {

    console.log(value);

    $.each(value.data, function(i, value){
        $('#list-surah').append('<div class="col-lg-2 col-md-3 col-6 md -4"><div class="card"><div class="card-body"><h6><a onClick="sessionStorage.somekey = '+ value.nomor +'; consule.log(sessionStroge.somekey);" data-fajax="false" href="isi-ayat.html">'+ value.nomor +'. '+ value.nama +'</a></h6></div></div></div>');
    });

    
});

let data=sessionStorage.getItem('somekey');
$.getJSON("https://api-alquranid.herokuapp.com/surah/"+data, function(value){
   

    $.each(value.data, function(i, value){
        $('#isi-ayat').append('<div class="ayat text-center"><h5 class="fw-bolder">'+ value.nomor +' '+ value.ar +'</h5><p>'+ value.tr +'</p><i>'+ value.id +'</i></div>');
    });

});

