var one=[
    "1.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg"
];

var a=1;

function img1(){

if(a==8){ 
    a=0;
}

document.getElementById("a").src=one[a];
a++;
}

var two=[
    "2.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg"
];

var b=1;

function img2(){

if(b==8){ 
    b=0;
}

document.getElementById("s").src=two[b];
b++;
}

var three=[
    "3.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg"
];

var c=1;

function img3(){

if(c==8){ 
    c=0;
}

document.getElementById("d").src=three[c];
c++;
}

var four=[
    "4.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg",
    "31.jpg",
    "32.jpg"
];

var d=1;

function img4(){

if(d==8){ 
    d=0;
}

document.getElementById("f").src=four[d];
d++;
}

function l(){
    window.location="index2.html";
}