

function kiemtra(){
    var user = document.getElementById('user').value;
    var loi = document.querySelectorAll('.loi');
    var pass = document.getElementById('pass').value;
    var linkuser = false;
    var linkpass= false;
    console.log(user);
    if(!(/^[a-z]{1,}ps{1}[0-9]{5}@fpt.edu.vn{1}$/.test(user))){
        loi[0].classList.add('loi1')
        document.getElementById('baoloi-user').innerHTML="Dùng Email fpoly."
    } else if(user != 'daibtps19407@fpt.edu.vn'){
        loi[0].classList.add('loi2')
        document.getElementById('baoloi-user').innerHTML="Sai tài khoảng Email."
        document.getElementById('baoloi-user').style.color="#ad1919"
    } else {
        loi[0].classList.add('dung');
        linkuser = true;
    }
    if( pass != 'matkhau'){
        loi[1].classList.add('loi2');
        document.getElementById('baoloi-pass').innerHTML="Sai Mật khẩu."
        linkpass = false;
    } else {
        linkpass = true;
    }

    if (linkpass == true && linkuser == true){
        location.replace("http://127.0.0.1:5500/BuiTaDai_ps19407/html/home.html");
    }
}