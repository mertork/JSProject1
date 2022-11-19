document.onload(Namefunction(prompt("Adinizi giriniz")),quantum())

function Namefunction(Name) {
    
    document.querySelector("#myName").innerHTML=`${Name}`;
 
}

function quantum(){
    var time=new Date()
    document.querySelector("#myClock").innerHTML=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
    setInterval("quantum()",1000)
}
    