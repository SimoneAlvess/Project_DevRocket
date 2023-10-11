function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light') // forma automática
  // if(html.classList.contains('light')){
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // } outra forma

  // pegar a tag img 
  const img = document.querySelector('#profile img')

   // substituir a imagem
  if(html.classList.contains('light')){
   // se tiver light mode adicionar a imagem light 
   img.setAttribute('src', './assets/avatar-light.jfif')
   img.setAttribute('alt', 'avatar tema light')
  } else  {
  // se tiver sem light mode, manter a imagem normal
  img.setAttribute('src', './assets/avatar.jfif')
  img.setAttribute('alt', 'avatar')
  } 
  
  
  
 

 
  
}