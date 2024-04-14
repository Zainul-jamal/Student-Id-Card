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
var file  = document.getElementById('file') 
file.addEventListener('change',()=>{
    const fr = new FileReader();
    fr.readAsDataURL(file.files[0]);
    
    fr.addEventListener('load',()=>{
    const url = fr.result;
    const image = new Image();
    image.src= url;
    localStorage.setItem('myImage',url);

})})


// function  aa(){

//     var image = document.getElementById('img')

//     localStorage.setItem('image',image)
//     var dataImg= localStorage.getItem('image')
//     dataImg.src=URL.createObjectURL(file.files[0])
    

// }