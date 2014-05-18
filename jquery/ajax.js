var display_content = function (response) {
    $("#next_button").html(response);
    $("#next_button a").on("click", monitor_links);
}

var monitor_links = function (e) {
    e.preventDefault();
    //reads the link by attribute and brings up content
    var url = $(this).attr("href");
    $.ajax({
        url: url,
        method: $(this).attr('data-method'),
        success: display_content,
        error: function () {
            $(link).parent('tr').remove();
        }
    });

};

$("#menu a").on("click", monitor_links);