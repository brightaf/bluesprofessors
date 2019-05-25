$.ajax({
    type: 'GET',
    url: "img",
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
        for (let index = 0; index < data.length; index++) {
            $(".wrapper").append("<img class= gallery src='" + "img\/" + data[index] + "'>");
            
        }
    }
});
