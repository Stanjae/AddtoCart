import React, { useContext } from 'react'
import { ShopContext } from '../ContextApi/cusContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const {store, RemoveItemFromCart, DecreaseCart, IncreaseCart, SetQty} = useContext(ShopContext)

    const totalAmount = store.reduce((accumulator, currentProduct) => {
        return accumulator + (currentProduct.qty * currentProduct.price);
      }, 0);
  return (
          <div className=" h-full bg-slate-700 px-2 md:px-0 justify-center flex">
            
              <div className="flex flex-col overflow-y-scroll md:w-3/5 bg-slate-50 shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                
                  <div className="mt-8">
                    <div className="flow-root">
                    {store?.length !== 0 ? 
                      <ul role="list" className="-my-6 divide-y divide-gray-200">

                      {store.filter(item => item.qty !== 0).map((item, id) => (
                        <li key={id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item?.image}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">{item?.title}</a>
                                </h3>
                                <p className="ml-4">${item?.price * item?.qty}</p>
                              </div>
                              <div>
                                    <button onClick={()=> DecreaseCart(item?.id)} className=' px-3 bg-blue-600 text-white'>-</button>
                                    <input value={item?.qty} onChange={(e)=> SetQty(item.id, e.target.value)} className=' w-14 px-1 mx-1 border border-gray-600' type='text'/>
                                    <button onClick={()=> IncreaseCart(item?.id)} className=' text-white px-3 bg-blue-600'>+</button>
                              </div>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">Quantity: {item?.qty}</p>

                    
                                <button onClick={()=> RemoveItemFromCart(item?.id)} type="button" 
                                    className="font-medium text-indigo-600 cursor-pointer hover:text-indigo-500">
                                Remove item
                                </button>
                              
                            </div>
                          </div>
                        </li>
                    ))}
                      </ul>
                      :
                      <>
                        <h1 className=' pb-4 text-center text-gray-500 text-2xl'>Cart is Empty</h1>
                        <button type='button' className=' mx-auto block text-white px-3 py-2 rounded-lg bg-blue-800' >
                        <Link to={'/'}>Add new Items</Link></button>
                      </>
                      
                    }
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$ {totalAmount.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to={'/e-receipt'}
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <button 
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      ><Link to={'/'}>Continue Shopping</Link>
                        
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
           
          </div>

  );
}

export default Cart