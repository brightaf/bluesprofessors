$.ajax({
    url: "img/content.json",
    success: function (imageDirectory) {
        for (var index = 0; index < imageDirectory.images.length; index++) {
            $(".wrapper").append("<img class=gallery src='img/" + imageDirectory.images[index] + "'>")
        }

    }
});