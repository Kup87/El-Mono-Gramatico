const products = [
  {id: 1, titulo: 'titulo1', autor: 'autor1', categoria:'libro', descripcion: 'Descripción1', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=1', stock:'0'},
  {id: 2, titulo: 'titulo2', autor: 'autor2', categoria:'libro', descripcion: 'Descripción2', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=2', stock:'10'},
  {id: 3, titulo: 'titulo3', autor: 'autor3', categoria:'libro', descripcion: 'Descripción3', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=3', stock:'11'},
  {id: 4, titulo: 'titulo4', autor: 'autor4', categoria:'libro', descripcion: 'Descripción4', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=4', stock:'12'},
  {id: 5, titulo: 'titulo5', autor: 'autor5', categoria:'libro', descripcion: 'Descripción5', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=5', stock:'23'},
  {id: 6, titulo: 'titulo6', autor: 'autor6', categoria: 'coleccion', descripcion: 'Descripción6', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=6', stock:'18'},
  {id: 7, titulo: 'titulo7', autor: 'autor7', categoria: 'coleccion', descripcion: 'Descripción7', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=7', stock:'4'},
  {id: 8, titulo: 'titulo8', autor: 'autor8', categoria: 'coleccion', descripcion: 'Descripción8', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=8', stock:'7'},
  {id: 9, titulo: 'titulo9', autor: 'autor9', categoria: 'coleccion', descripcion: 'Descripción9', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=9', stock:'12'},
  {id: 10, titulo: 'titulo10', autor: 'autor10', categoria: 'coleccion', descripcion: 'Descripción10', precio: "xxxxx", imgURL:'https://picsum.photos/200?random=10', stock:'25'}
]

export const fxFetch = new Promise((resolve, reject)=>{
  let condition = true;
  if (condition){  
    setTimeout(() => resolve(products),2000);
  } else {
    reject('400 -not found')
  } 
})