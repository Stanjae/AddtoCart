import React, { useState, createContext } from 'react'

export const ShopContext = createContext(null)

export const CusContext = (props) => {
    const [store, setStore] = useState([])

    const Addto =(cart)=>{
        const {id, title, image, price } = cart
        setStore(previewStore => {
            let checkE = previewStore?.some(obj => JSON.stringify(obj?.title) === JSON.stringify(title));
            if(!checkE){
                return([...previewStore, {id, title, image, price, qty:1}])
            }else{
                return previewStore?.map(item => (item.title === title ? {...item, qty:item.qty + 1} : item ))
            }
        }          
      )
    };

    const RemoveItemFromCart =(id)=>{
        setStore(previewStore => previewStore.filter(item => item.id !== id))
        console.log(id)
    };

    const IncreaseCart =(id)=>{
        setStore(previewStore => previewStore.map(item => (item.id === id ? {...item, qty:item.qty + 1}: item)));
    }

    const DecreaseCart =(id)=>{
        setStore(previewStore => previewStore.map(item => (item.id === id ? {...item, qty:item.qty - 1}: item)));
    }

    const SetQty =(id, val)=>{
        setStore(previewStore => previewStore.map(item => (item.id === id ? {...item, qty:Number(val)}: item)));
    }

    console.log(store);
    const contextValues = {store, Addto, RemoveItemFromCart, DecreaseCart, IncreaseCart, SetQty}
  return (
    <ShopContext.Provider value={contextValues}>
        {props.children}
    </ShopContext.Provider>
  )
}


