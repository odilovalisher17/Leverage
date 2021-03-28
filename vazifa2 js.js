let span1=document.querySelector('#span1');
let span2=document.querySelector('#span2');
let span3=document.querySelector('#span3');
let span4=document.querySelector('#span4');
let span1Number=0;
let span2Number=0;
let span3Number=0;
let span4Number=0;

    setInterval(function(){
        if(span1Number<342){
        span1Number=span1Number+1;
        span1.textContent=''
        span1.appendChild(document.createTextNode(span1Number));
        }
    }, 10);

    setInterval(function(){
        if(span2Number<128){
        span2Number=span2Number+1;
        span2.textContent=''
        span2.appendChild(document.createTextNode(span2Number));
        }
    }, 10);

    setInterval(function(){
        if(span3Number<745){
        span3Number=span3Number+1;
        span3.textContent=''
        span3.appendChild(document.createTextNode(span3Number));
        }
    }, 10);

    setInterval(function(){
        if(span4Number<691){
        span4Number=span4Number+1;
        span4.textContent=''
        span4.appendChild(document.createTextNode(span4Number));
        }
    }, 10);