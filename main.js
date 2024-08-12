let u= localStorage.getItem('login')
a=u.toUpperCase()
deii.innerHTML=`WELCOME ${a}`

function logout()
{
    localStorage.clear();
    window.location='./index.html'
}
var totalCash=0;

function addIncome()
{
    

    let ctype=intype.value
    let cash=income.value;
    totalCash+= Math.floor(income.value)
    alert("added successfully")
    console.log(totalCash);
    alert("your current balance is " + totalCash)
  
    var currentdate = new Date();
var datetime =  currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();
     result.innerHTML +=` <tbody id="result">
                <tr>
                 
                    <td>${ctype}</td>
                    <td>${cash}</td>
                    <td>${totalCash}</td>
                    <td>${datetime}</td>

                   
                </tr>
                
            </tbody>`
             d.innerHTML=`<h3>Balance is : ${totalCash}</h3>`

}


function addExpense()
{
    let etype=xptype.value
    let ecash=exincome.value;
    totalCash-= Math.floor(exincome.value)
    alert("added successfully")
    console.log(totalCash);
    
    alert("your current balance is " + totalCash)
    var currentdate = new Date();
    var datetime =  currentdate.getDay() + "/" + currentdate.getMonth() 
    + "/" + currentdate.getFullYear() + " @ " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();

     result2.innerHTML +=` <tbody id="result2">
                <tr>
                    <td>${etype}</td>
                    <td>${ecash}</td>
                    <td>${totalCash}</td>
                     <td>${datetime}</td>
                 
                </tr>
            </tbody>`
       d.innerHTML=`<h3>Balance is : ${totalCash}</h3>`
}


