
function SendLinkByMail(insertedBody) {
    var subject= "Interesting Information";
    var body = "Hi! \r\nHere are my improvement suggestions:\r\n\r\n" + insertedBody;
    var uri = "mailto:someone@example.com?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=";
    uri += encodeURIComponent(body);
    window.open(uri, "_parent");
}

$('#fb_yes').click(function() {
    $('#feedback_1').fadeOut(function() {
        $('#feedback_2').fadeIn();
    });
})

$('#fb_no').click(function() {
    $('#feedback_1').fadeOut(function() {
        $('#feedback_3').fadeIn();
    });
})

$('#fb_submit').click(function() {
    body = $('#feedback_2>textarea').val();
    SendLinkByMail(body)
});