function timeoutAsync(milliseconds) {
    var deferred = $.Deferred();
    setTimeout(function () {
        deferred.reject();
    }, milliseconds);
    return deferred.promise();
}



function abcAsync() {
    var promise = timeoutAsync(2000);
    promise.done(function () {
        alert('done!')
    });
    promise.fail(function () {
        alert('kut!fail!')
    });
    return promise;
}

// abcAsync();

/// <reference path="Scripts/jquery-1.8.2.js" />
var worker = new Worker('myWork.js');
worker.onmessage = function (e) {
    $('#result').append(e.data + '<br />');
}
worker.onerror = function (e) {
    $('#result').append('Error: ' + e.data + '<br />');
}
$('document').ready(function () {
    $('#btnSend').on('click', function () {
        worker.postMessage($('#message').val());
    });
    $('#message').keypress(function () {
        worker.postMessage($('#message').val());
    });
});