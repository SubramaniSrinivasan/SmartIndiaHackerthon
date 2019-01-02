$(function(){

    $('#show').click(function(){
        chrome.storage.sync.get(['url','username','password'],function(result){
            $('#display').html("<tr><th>URL</th><th>Username</th><th>Password</th></tr>");
            for(var i=0;i<result.url.length;i++){
                $('#display').append("<tr>"+"<td>"+result.url[i]+"</td>"+"<td>"+result.username[i]+"</td>"+"<td>"+result.password[i]+"</td>"+"</tr>");
            }
        });
        $('#submit').hide();
    });

});