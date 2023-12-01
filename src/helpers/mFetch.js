const productos= [
    {id: '0' , name:'conjunto1', category:'ropa', description:'remera, pantalon, gorrito rosa', imgUrl:'https://images.unsplash.com/photo-1622290291165-d341f1938b8a?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price:'8000', stock:'3' },
    {id: '1' , name:'conjunto2', category:'ropa', description:'remera, pantalon, gorrito azul', imgUrl:'https://images.unsplash.com/photo-1622290319146-7b63df48a635?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price:'6000', stock:'4' },
    {id: '2' , name:'ropa3', category:'ropa', description:'ropa', imgUrl:'https://img.remediosdigitales.com/ee0424/ropa-bebe-rosa/450_1000.jpeg', price:'8000', stock:'5' },
    {id: '3' , name:'manta', category:'manta', description:'manta colorida', imgUrl:'https://plus.unsplash.com/premium_photo-1661322616794-6da626883443?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price:'2000', stock:'5' },
    {id: '4' , name:'accesorio', category:'accesorio', description:'accesorio', imgUrl:'https://images.unsplash.com/photo-1560859251-d563a49c5e4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price:'3000', stock:'5' },
  ]
  
  export const mFetch = (id)=> new Promise((res,rej)=>{
        setTimeout(()=>{
        res(id ? productos.find(producto => producto.id === id) : productos)
      },1000);
    })
  