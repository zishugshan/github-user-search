$(document).ready(function (){
    var user = ""
    $("#form").submit(function(event){
        event.preventDefault()

        var username = $("#username").val()
        searchUsers(username)
    })

    $("#username").change(function (){
        var username = $("#username").val()
        searchUsers(username)
    })
    function searchUsers(username){

        $("#result").empty()

        $.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=100",function(data){
            console.log(data)
            data.items.forEach(item => {
                user = `<a target="_blank" href="${item.html_url}"><img style="margin-left: 10px;" class="img-thumbnail ml-4" width="106" height="106" src="${item.avatar_url}"/></a>`
                $("#result").append(user)
                
            });
        })
       
    }
    searchBtn.addEventListner("click",function(){
        searchUsers(username)
    })
})