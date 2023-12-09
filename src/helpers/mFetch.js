  export const mFetch = (id)=> new Promise((res,rej)=>{
        setTimeout(()=>{
        res(id ? products.find(product=> product.id === id) : products)
      },500);
    })
  