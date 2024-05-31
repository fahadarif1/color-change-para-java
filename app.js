var p = document.getElementsByTagName('p')

console.log(p);

for(var i = 0; i <p.length ; i++){
    if(i%2 ==0){
        p[i].style.color='red'
    }else{
        p[i].style.color='green'
    }
}