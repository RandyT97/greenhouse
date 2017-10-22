 id = '59ebc981b390353c953a15c1';
$('#login').click(function()
{
  var id = $('#identification').val();
  console.log(id);
})

getAcctsbyCustID(id);

var count = +1;

function putChart(accs) {
  var accts = accs;
  for(var i = 0; i < accts.length; i++) {
    var tr = '<tr><td>' + count + '</td><td> ' + accts[i].type + '</td><td> ' + "$" + accts[i].rewards +
    '</td><td> ' + "$" + accts[i].balance + '</td></tr>';
    $('#table').append(tr);
    count++;
  }
}
