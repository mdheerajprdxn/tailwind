import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [isAtTop, SetIsAtTop] = useState(true)
  useEffect(() => {
    document.querySelector('.container').addEventListener('scroll', handleScroll)
    return(() => {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [])
  const handleScroll = (e) => {
    if(e.target.scrollTop === 0) {
      SetIsAtTop(true)
    }else {
      SetIsAtTop(false)
    }
  }
  useEffect(() => {
    if(isAtTop) {
      showNav()
    } else {
      hideNav()
    }
  }, [isAtTop])
  const showNav = () => {
    document.querySelector('nav').classList.remove('hidden');
  }
  const hideNav = () => {
    document.querySelector('nav').classList.add('hidden');
  }
  return (
    <>
    <nav className="px-2 text-md font-bold bg-slate-800 text-slate-200">
      <ul className='flex'>
        <li className='mx-2 my-2'>Home</li>
        <li className='mx-2 my-2'>Options</li>
        <li className='mx-2 my-2'>About</li>
        <li className='mx-2 my-2'>Contact Us</li>
      </ul>
    </nav>
    {/*  */}
    <div className='container'>
      <div className='one content'>
        <figure>
          <img src='https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'/>
        </figure>
        <h1 className='text-slate-200 text-8xl font-bold '>Lorem Ipsum</h1>
      </div>
      <div className='two content'>
      <figure>
          <img src='https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'/>
        </figure>
        <h1 className='text-slate-200 text-8xl font-bold '>Lorem Ipsum</h1>

      </div>
      <div className='three content'>
      <figure>
          <img src='https://images.unsplash.com/photo-1517824806704-9040b037703b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
        </figure>
        <h1 className='text-slate-200 text-8xl font-bold '>Lorem Ipsum</h1>

      </div>
    </div>
    </>
  );
}

export default App;
