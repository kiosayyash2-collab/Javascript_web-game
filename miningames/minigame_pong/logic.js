//logic for computer player

document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("demo").value;
    if(username == 'ayyash'){
     document.getElementById("myh1").textContent = `hello ${username} ,wellcome back mr.admin!`;
     document.getElementById("myh2").textContent = `hello ${username} welcome to our website!, is so simple and dont have any style, just html and js`;

    }else{
      document.getElementById("myh1").textContent = `hello ${username}`;
    document.getElementById("myh2").textContent = `hello ${username} welcome to my page!, is so simple and dont have any style, just html and js`;
    }
}