$.ajax({
    type: 'GET',
    url: "img/content.json",
    // dataType: 'application/json',
    // contentType: 'application/json',
    success: function (imageDirectory) {
        for (var index = 0; index < imageDirectory.images.length; index++) {
            $(".wrapper").append("<img class=gallery src='img/" + imageDirectory.images[index] + "'>")
        }

    }
});

// $(".wrapper").append("<img class=gallery src='img/" + data.images + "'>");


// $(data).find('a').attr("href", function (i, value) {
//     if (value.match(/\.(jpg|jpeg|png|gif)/)) {
//         $(".wrapper").append("<img class= gallery src='" + value + "'>");
//     }
// });