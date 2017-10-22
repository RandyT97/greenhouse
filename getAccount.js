



var id = 0;

// Getting the ID from sign in.
$('#login').click(function()
{
  id = $('#identification').val();
  console.log(id);
})


//var count = +0;
var custID = getAcctsbyCustID(id);



for(var i = 0; i < custID.length; i++)
{
  var tr = '<tr><td>' + i + '</td><td> ' + custID[i].type + '</td><td> ' + custID[i].rewards + '</td><td> ' + "$" + custID[i].balance + '</td></tr>';
  $('#table').append(tr);
  //count = count + 1;
}
