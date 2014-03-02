var firebaseRef = new Firebase('https://fb-amherst.firebaseio.com/'),
    chatRoom = firebaseRef.child('chatroom'),
    uid = Math.random().toString(36).substring(2)
    ;

$(function() {
    chatRoom.limit(10).on('value', function (dataSnap) {
        $('#messages').html('');
        dataSnap.forEach(function (messageSnap) {
            var date = moment(messageSnap.val().date).fromNow();
            var message = messageSnap.val().message;
            var uid = messageSnap.val().user;
            var html = "<div class='message'><span class='text'>" + message + "</span>" + "<span class='meta small'>" + uid + "<br />" + date + "</span>" + "</div>";
            $('#messages').prepend(html);
        });
    });

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