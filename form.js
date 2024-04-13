function data(){
    let names = document.getElementById('name').value
    let father = document.getElementById('father').value
    let clas = document.getElementById('class').value
    let roll = document.getElementById('roll').value
    
    localStorage.setItem('stdNames',names)
    localStorage.setItem('father',father)
    localStorage.setItem('class',clas)
    localStorage.setItem('roll',roll)
    
    window.location.href="index.html"
    
    
}
// var zain = document.getElementById('zain')
// var dataName = localStorage.getItem('class')
// zain.innerText = dataName

// console.log(dataName);