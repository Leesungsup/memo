import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import plus from './plus.png';
import Modal from './components/Modal';
function App(props) {
  const [memos, setmemos] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const openModal = () => {
    setisModalOpen(true)
  } 
  const closeModal = () => { 
    setisModalOpen(false)
  }
  useEffect(() => {
    Axios.get('/memo')
    .then(response=>{
      if (response.data.success){
        setmemos(response.data.memos)
        console.log("Network success : ",response.data.memos)
      }else{
        console.log( "Network Error : ",response.data)
      }
    })
  }, []);
  return (
    <div className='container'>
      <div className='App'>
        <h1> 메모장 </h1><br /><br /> 
        <table> 
          <tbody> 
            <tr className='trList'> 
            {memos.map(
              (memo) => <td className='cell' key={memo._id}>
                <div className='inner'>
                  <h2> {memo.title} </h2> 
                  <h5> {memo.author} </h5>
                  <br /><br /> 
                  <h4> {memo.content} </h4>
                  <br /> 
                </div> 
                </td>
              )
            } 
            <td className="cell">
              <div className='inner' onClick={openModal}>
                <img src={plus} className='picture' alt='logo'/>
              </div>
            </td>
            
            </tr> 
          </tbody> 
        </table> 
        <main className="App">
          <Modal isOpen={isModalOpen} close={closeModal}/>
        </main>
      </div>
    </div>
  );
}

export default App;
