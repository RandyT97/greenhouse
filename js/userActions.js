const baseURL = "http://api.reimaginebanking.com/";
//const customerID = "59eb013da73e4942cdafe3c1";
const key = "a67096375bcf4a60ab80d781a3fabcbc";
//TODO: Organise get and set, possibly create a global constants js file
//TODO: Handle response codes

//Customer Creation
function createCustomer(firstName, lastName, streetNum, streetName, city, state, zip) {
    var cust = {
        "first_name": firstName,
        "last_name": lastName,
        "address":
          {
          "street_number": streetNum,
          "street_name": streetName,
          "city": city,
          "state": state,
          "zip": zip
          }
      }
    $.ajax({
        url: 'http://api.reimaginebanking.com/customers/59ebc981b390353c953a15c1/accounts?key=a67096375bcf4a60ab80d781a3fabcbc',
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        data: JSON.stringify(cust),
          dataType: "json",
          async: false,
          type: 'POST'
    });
}

//Returns customer object given customer id
function getCustomerByID(customerID) {
    $.ajax({
        //url: baseURL + "customers/" + customerID + "?key=" + key,
         url: "http://api.reimaginebanking.com/customers/59ebc981b390353c953a15c1?key=a67096375bcf4a60ab80d781a3fabcbc",
        success: function(results) {
            //returns an Account Object
            return results;
        }
    })
}

//Get accounts given customer id
function getAcctsbyCustID(customerID) {
    $.ajax({
        url: baseURL + "customers/" + customerID + "/accounts"+ "?key=" + key,
        //Returns array of accounts
        success: function(results) {
          console.log('Success');
          putChart(results);
        },
        errors: function(xhr, status, error) {
          console.log("Errored out " + xhr + ", " + status + ", " + error );
        }
    })
}
//Create an empty account under a existing customer id
function createAccount(nickname, type, customerID) {
    var acct = {
        "type": type,
        "balance": 0,
        "nickname": nickname,
        "rewards": 0
    }
    $.ajax({
        url: baseURL + "customers/" + customerID + "/accounts?key=" + key,
        headers: {
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        data: JSON.stringify(acct),
            dataType: "json",
            async: false,
            type: 'POST'
    });

}

//Delete an account given account id
function deleteAccount(accountID) {
    $.ajax({
        url: baseURL + "accounts/" + accountID + "?key=" + key,
        //Needs something to show success upon deletion, getting response codes
    })
}
//Create a deposit given account id and amount
// function createDeposit(medium, amount)

//Account Withdrawal
