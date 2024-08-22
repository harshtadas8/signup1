import './App.css'
import { useState } from 'react';


function App() {
 const [Name, setName] = useState('');
 const [Contact, setContact] = useState('');
 const [Email, setEmail] = useState('');
 const [Password, setPassword] = useState('');

 
 const onSubmit = () => {
  
   setName('');
   setContact('');
   setEmail('');
   setPassword('');
 };

 return (
   <>
     <div className='h-screen bg-gradient-to-t from-blue-300 to-blue-500  flex justify-center items-center'>
       <div className='bg-gradient-to-t from-red-400 to-red-500 h-full flex flex-col justify-center items-center gap-6 md:flex md:flex-row md:justify-between md:items-center md:h-4/5 w-full md:w-4/5 md:rounded-3xl p-10' >
       
       <div className="left w-1/2 h-1/2 md:w-1/2 md:h-4/5 flex justify-center items-center" >
       <img src="\Sign Up Form.png" className=' h-4/5 w-full md:w-5/6 md:h-4/5' alt="" />
       </div>
       <div className='h-5/6 w-4/5 md:w-1/2  bg-violet-400 flex flex-col gap-3 md:p-8 rounded-3xl '>
       <h1 className="text-3xl md:text-5xl font-serif font-bold text-center">Sign Up</h1>
       <input type="text" placeholder='Full Name' className='rounded-2xl p-2 text-center text-lg' value={Name}
             onChange={(e) => setName(e.target.value)}/>
       <input type="number" placeholder='Contact' className='rounded-2xl p-2 text-center text-lg' value={Contact}
             onChange={(e) => setContact(e.target.value)}/>
       <input type="text" placeholder='Email' className='rounded-2xl p-2 text-center text-lg' value={Email}
             onChange={(e) => setEmail(e.target.value)}/>
       <input type="text" placeholder='Password' className='rounded-2xl p-2 text-center text-lg' value={Password}
             onChange={(e) => setPassword(e.target.value)}/>
       <div className='flex justify-center'><button onClick={onSubmit} className='p-1 text-lg w-2/5 bg-yellow-500 rounded-2xl'>Submit</button></div>
       </div>
      
       </div>
     </div>
   </>
 )
}

export default App;



