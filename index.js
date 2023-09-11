const imgbox=document.querySelector('#imgbox');
const qrimage=document.querySelector("#qrimage");
const qrtext=document.querySelector("#qrtext");

function generateqr(){
 if(qrtext.value.length>0){

 
    qrimage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.ariaValueMax;
    imgbox.classList.add("show-img");
 }
 else{
    qrtext.classList.add("error");
    setTimeout(() => {
        qrtext.classList.remove("error")
    }, 1000);
 }

}
