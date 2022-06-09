import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import InputForm from '../components/createform';
import ReportTable from '../components/reporttable';
import { useState } from 'react';

export default function Home() {
  const [stores, setStores] = useState([]);
  
  function cookieStoreInputHandler(data) {

   setStores([...stores,data]);
   
  }

 
  
  return (
    <div>
      <Header/>
      <main className="flex flex-col items-center bg-purple-200">

        <InputForm inputHandler={cookieStoreInputHandler}/>
        <ReportTable stores = {stores}/>    
          
      </main>
      <Footer copyright='2022'/>
    </div>
  )
}
