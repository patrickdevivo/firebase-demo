var firebaseRef = new Firebase('https://fb-amherst.firebaseio.com/'),
    chatRoom = firebaseRef.child('chatroom')
    uid = Math.random().toString(36).substring(2)
    ;

$(function() {
    $('#send').on('click', function (e) {
        e.preventDefault();
        var message = $('#message').val();
        var now = new Date();
        chatRoom.push({
            message: message,
            date: now.toString(),
            user: uid
        });
        $('#message').val('');
    });
})