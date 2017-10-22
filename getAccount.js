var id = '59ebc981b390353c953a15c1';
console.log(id);
// Getting the ID from sign in.
$('#login').click(function()
{
  id = $('#identification').val();
  console.log(id);
})

getAcctsbyCustID(id);

function suckABigFatDick(penis) {
  var accts = penis;
  console.log(penis);

  for(var i = 0; i < accts.length; i++) {
    var tr = '<tr><td>' + i + '</td><td> ' + accts[i].type + '</td><td> ' + accts[i].rewards +
    '</td><td> ' + "$" + accts[i].balance + '</td></tr>';
    $('#table').append(tr);
  }
}
