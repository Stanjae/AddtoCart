import { createBrowserRouter, HashRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Root from './Root/Root';
import './App.css'
import { CusContext } from './ContextApi/cusContext';
import Cart from './Pages/Cart';
import EReceipt from './Pages/EReceipt';



const router = createBrowserRouter([
  {
    path: "/", element: <Root/>,
    errorElement: '',
    children:[
      {index:true, element:<Home/>},
      {path: "/cart-page", element:<Cart/>},
      {path:'/e-receipt', element:<EReceipt/>}
    ]
  },
  
]);

function App() {
  return(
    <div>
    <CusContext >
      <RouterProvider router={router}/>
    </CusContext>
      
    </div>
    
  )
}

export default App
