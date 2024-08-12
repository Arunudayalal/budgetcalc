function login() {
    if (uname.value && pass.value) {

        if (uname.value in localStorage) {
            let key = uname.value;

            customer = JSON.parse(localStorage.getItem(key))
            if (customer.password == pass.value) {
                      

                localStorage.setItem('login',uname.value)
                window.location = "./main.html"
                
            }
            else{
                alert("incorrect password")
            }
        }
        else {
            alert("incorrect username")
        }
    }

    else {
        alert("enter all fields")
    }
}
