const ball=document.getElementsByClassName('balls');
document.onmousemove=(a)=>{
    const x=(a.clientX *100)/window.innerWidth+'%';
    const y=(a.clientY *100)/window.innerHeight+'%';
    for(i=0;i<100;i++){
        ball[i].style.left=x;
        ball[i].style.top=y;
        ball[i].transform='translate(-'+x+',-'+y+')';
    }
};