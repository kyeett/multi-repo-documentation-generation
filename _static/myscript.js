
function SendLinkByMail(project, metadata, improvements) {
    var subject= "Improvement suggestions for '"+ project +"'";
    var body = "Hi! \r\n\r\nDocumentation info (please keep):\r\n" + metadata + "\r\nHere are my improvement suggestions:\r\n\r\n" + improvements + "\r\n";
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
    project = $('#fb_project').text();
    metadata = $('#fb_metadata').html().replace(/TAB/g, '\t');
    improvements = $('#feedback_2>textarea').val();
    SendLinkByMail(project, metadata, improvements)
});

//alert($('#fb_metadata').html().replace(/<br>/g, '\t'));

