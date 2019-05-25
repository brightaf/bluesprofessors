$.ajax({
    url: "/img",
    success: function (data) {
        $(data).find('a').attr("href", function (i, value) {
            if (value.match(/\.(jpg|jpeg|png|gif)/)) {
                $(".wrapper").append("<img class= gallery src='" + value + "'>");
            }
        });
    }
});