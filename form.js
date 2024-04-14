function data(){
    var file  = document.getElementById('file') 
    let names = document.getElementById('name').value
    let father = document.getElementById('father').value
    let clas = document.getElementById('class').value
    let roll = document.getElementById('roll').value
    
    localStorage.setItem('stdNames',names)
    localStorage.setItem('father',father)
    localStorage.setItem('class',clas)
    localStorage.setItem('roll',roll)
    
    window.location.href="index.html"
    
        console.log(file.files[0]);

}


// function  aa(){

//     var image = document.getElementById('img')

//     localStorage.setItem('image',image)
//     var dataImg= localStorage.getItem('image')
//     dataImg.src=URL.createObjectURL(file.files[0])
    

// }