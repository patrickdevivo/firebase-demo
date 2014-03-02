$(document).ready(function() {
    var firebaseRef = new Firebase('https://fb-amherst.firebaseio.com/'),
        chatRoom = firebaseRef.child('chatroom');

    chatRoom.limit(10).on('value', function (dataSnap) {
        $('#messages').html('');
        dataSnap.forEach(function (messageSnap) {
            html = "<div class='message'>" + messageSnap.val() + "</div>";
            $('#messages').append(html);
        });
    });

    $('#send').on('click', function (e) {
        e.preventDefault();
        var message = $('#message').val();
        chatRoom.push(message);
        $('#message').val('');
    });
})