function registration()
{
    if(uname.value && email.value && pass.value)
    {
      let user ={
        username : uname.value,
        email : email.value,
        password : pass.value

      }
      localStorage.setItem(user.username, JSON.stringify(user))
      alert("Registration success")
      window.location="./index.html"
    }
    else{
        alert("Enter all fields")
    }
}