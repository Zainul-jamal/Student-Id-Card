
var sname =document.getElementById('namess')
var father =document.getElementById('fathers')
var clas =document.getElementById('E-mar')
var roll =document.getElementById('margin')


var dataName = localStorage.getItem('stdNames')
let dataFather =localStorage.getItem('father')
let dataClass=localStorage.getItem('class')
let dataRol=localStorage.getItem('roll')

sname.innerText = dataName
father.innerText= dataFather
clas.innerText = dataClass
roll.innerText = dataRol

function remove(){
    localStorage.removeItem('stdNames')
    localStorage.removeItem('father')
    localStorage.removeItem('class')
    localStorage.removeItem('roll')

    sname.innerText =''
    father.innerText= ''
    clas.innerText = ''
    roll.innerText = ''
   
}

function printDoc(){
    var body = document.getElementById('body').innerHTML;
    var data = document.getElementById('data').innerHTML;
    document.getElementById('body').innerHTML = data
    window.print();
    document.getElementById('body').innerHTML = body

}



// console.log(localname);
// console.log(localfather);
// console.log(localclass);
// console.log(localroll);



// sname.innerText=localname
// father.innerHtml=localfather
// clas.innerHtml=localclass
// roll.innerHtml=localroll