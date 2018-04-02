//how ajax works
// document.getElementById('btn').addEventListener('click',function(e){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','data.text',true);
//    xhr.onreadystatechange = function(){
//        //console.log(this.readyState)
//        if(this.status == 200 && this.readyState == 4){
//            console.log(this.responseText);
//        }
//    }
//    xhr.send();
// });

document.getElementById('btn').addEventListener('click',function(e){
    const xr = new XMLHttpRequest();
    xr.open('GET','data.text',true);
    xr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = this.response;
        }
    }
xr.send();
});