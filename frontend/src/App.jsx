
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css'


function App() {
  

  return (
    <>
      
      <Header />
      <main className='min-h-[calc(100vh-200px)'>
        <Outlet />
      </main>
      
      <Footer/>
    </>
  );
}

export default App
