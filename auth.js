const queryParam = "api.reimaginebanking.com/customers?key=a67096375bcf4a60ab80d781a3fabcbc";

$.ajax({
    url: queryParam,
    success: function(results){
        //do something 
        console.log(results);
    }
});