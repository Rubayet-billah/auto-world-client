import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/routes';


function App() {
  return (
    <div className='customword bg-gray-100'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
