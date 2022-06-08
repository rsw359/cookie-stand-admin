import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home() {
  let [state, setState] = useState({data: [] })

  function searchHandler(e) {
    e.preventDefault();
   let cookieStore = {
    Location: e.target.location.value,
    minCustomers: e.target.minCustomers.value,
    maxCustomers: e.target.maxCustomers.value,
    avgCookies: e.target.avgCookies.value,
 };

 setState(cookieStore);
 e.target.reset();
}
  
  return (
    <div>
      <Header/>
      <main data={state} className="flex flex-col items-center bg-purple-200">
        <InputForm onSubmit={searchHandler}/>
        
      <Main data= {state}/>
      </main>
      <Footer copyright='2022'/>
    </div>
  )
}

function Header() {
  return <header className="px-8 py-6 bg-emerald-500">
  <h1 className='text-5xl'>Cookie Stand Admin</h1>
</header>
}

function Main(props){
  return(
    <main className="flex flex-col items-center pt-6 space-y-8 py-y">
      <p className="text-sm text-gray-500">Report Table Coming Soon...</p>
      <DisplayJson data={props.data} />
      </main>
  )
}

function Footer({copyright}) {
  return <footer className="px-8 py-4 bg-emerald-500">
    <p>&copy;{copyright}</p>
  </footer>
  

}



function InputForm(props){
  return <form onSubmit={props.onSubmit} className='w-full max-w-screen-lg p-3 px-5 my-10 bg-green-200 rounded-md'>
    <h1 className='flex justify-center py-3 text-2xl'>Create Cookie Stand</h1>
    <div className='flex flex-wrap'>
      <label className='pr-3'>Location</label>
      <input id='location' className='flex-auto px-2'  placeholder="Barcelona" required/>
    </div>

    <div className='flex flex-row'>
    
      <div className='mt-6 text-center'> 
        <label>
          Minimum Customers per Hour
        </label>
        <input
        className='w-64'
        id = 'minCustomers'
        type='number'
        placeholder='Minimum'
        required
        />
      </div>

      <div className='mt-6 text-center'>
        <label>
          Maximum Customers per Hour
        </label>
        <input
        className='w-64'
        id = 'maxCustomers'
        type='number'
        placeholder='Minimum'
        required
        />
      </div>

      <div className= 'mt-6 text-center'>
        <label>
          Average Cookies per Hour
        </label>
        <input
        className='w-64'
        id = 'avgCookies'
        type='number'
        placeholder='Minimum'
        required
        />
        
      </div>
        <button className='w-48 h-16 px-6 py-2 mt-4 ml-3 bg-emerald-500'>Create</button>

    </div>
  </form>
}

function DisplayJson(props) {
  return (
    <div>
      {JSON.stringify(props.data) == '{"data":[]}' ? (
        "Report Table Coming Soon.."
      ) : (
        <p className="text-sm tracking-widest text-gray-500">
          {JSON.stringify(props.data)}
        </p>
      )}
    </div>
  );
}
