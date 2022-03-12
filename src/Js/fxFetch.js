const products = [
  {id: 1, titulo: 'titulo1', autor: 'autor1', imgURL:'https://picsum.photos/200?random=1'},
  {id: 2, titulo: 'titulo2', autor: 'autor2', imgURL:'https://picsum.photos/200?random=2'},
  {id: 3, titulo: 'titulo3', autor: 'autor3', imgURL:'https://picsum.photos/200?random=3'},
  {id: 4, titulo: 'titulo4', autor: 'autor4', imgURL:'https://picsum.photos/200?random=4'},
  {id: 5, titulo: 'titulo5', autor: 'autor5', imgURL:'https://picsum.photos/200?random=5'},
  {id: 6, titulo: 'titulo6', autor: 'autor6', imgURL:'https://picsum.photos/200?random=6'},
  {id: 7, titulo: 'titulo7', autor: 'autor7', imgURL:'https://picsum.photos/200?random=7'}
]

export const fxFetch = new Promise((resolve, reject)=>{
  let condition = true;
  if (condition){  
    setTimeout(() => resolve(products),3000);
  } else {
    reject('400 -not found')
  } 
})