
var sname =document.getElementById('namess')
var father =document.getElementById('fathers')
var clas =document.getElementById('E-mar')
var roll =document.getElementById('margin')
var image =document.getElementById('image')
const url = localStorage.getItem('myImage');


var dataName = localStorage.getItem('stdNames')
let dataFather =localStorage.getItem('father')
let dataClass=localStorage.getItem('class')
let dataRol=localStorage.getItem('roll')

sname.innerText = dataName
father.innerText= dataFather
clas.innerText = dataClass
roll.innerText = dataRol
// var img = new Image();
    if (roll.innerText == dataRol) {
      image.src = url;
    }


function remove(){
    localStorage.removeItem('stdNames')
    localStorage.removeItem('father')
    localStorage.removeItem('class')
    localStorage.removeItem('roll')
    localStorage.removeItem('myImage')

    sname.innerText =''
    father.innerText= ''
    clas.innerText = ''
    roll.innerText = ''
    image.src="./img/letter-z_12731262.png" 
    
   
}

function printDoc(){
    var body = document.getElementById('body').innerHTML;
    var data = document.getElementById('data').innerHTML;
    document.getElementById('body').innerHTML = data
    window.print();
    document.getElementById('body').innerHTML = body

}

// image.src=img;



// console.log(localname);
// console.log(localfather);
// console.log(localclass);
// console.log(localroll);



// sname.innerText=localname
// father.innerHtml=localfather
// clas.innerHtml=localclass
// roll.innerHtml=localroll