function Calculate(){
var mebleg=document.getElementById("mebleg").value;
var ay=document.getElementById("ay").value;
var faiz=document.getElementById("faiz").value;
if(mebleg!==null){
    if(ay!==null){
        if(faiz!==null){
            var Mebleg=Math.floor((mebleg * (faiz * 0.01))/ay + (mebleg/ay))
            alert(`Aylığ ödəniş : ${Mebleg}`)
            }   
            
        }
    }
}