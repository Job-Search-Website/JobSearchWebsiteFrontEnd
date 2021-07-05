function getid(num){
    var id1=document.getElementById("name"+num);
    var id2=document.getElementById("email"+num);
    var id3=document.getElementById("introduction"+num);
    localStorage.setItem("name",id1);
    localStorage.setItem("email",id2);
    localStorage.setItem("introduction",id3);
    alert("aaa");
}