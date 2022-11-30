import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/routes';


function App() {
  return (
    <div className='font-mono'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
