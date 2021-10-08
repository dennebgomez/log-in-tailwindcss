import React from 'react';
import useForm from './useForm';
import validation from './validation';
import './App.css';

function FormSignup() {
    const {handleChange, values, handleSubmit, errors} = useForm(validation);
    return (
         <center class = "h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500 ..."  >
            
            
             <div class="w-full max-w-xs pt-16 ...">
                <form className = "form" onSubmit = {handleSubmit} 
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
                    <h1 class ="text-2xl mb-6 ">CREATE ACCOUNT</h1>

                    <div class="mb-6">
                        
                        <input type="text" name = "username" className = "form-input" placeholder= "Enter your username" 
                        class="shadow appearance-none border rounded 
                        w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username"
                        value ={values.username} onChange={handleChange} />  
                        {errors.username && <p class="font-mono text-red-600 ">{errors.username} </p>}
                    </div>

                    <div class="mb-6">

                        <input type="email" name = "email" className = "form-input" placeholder= "Enter your email" 
                          class="shadow appearance-none border rounded 
                          w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          value ={values.email} onChange={handleChange} />   

                          {errors.email && <p class="font-mono text-red-600 ">{errors.email} </p>}  
                    </div>

                    <div class="mb-6">
                        
                        <input type="password" name = "password" className = "form-input" placeholder= "Enter your password" 
                         class="shadow appearance-none border rounded 
                         w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                          value ={values.password} onChange={handleChange} />  

                           {errors.password && <p class="font-mono text-red-600 ">{errors.password} </p>}     
                    </div>

                    <div class="mb-6">
                        
                       
                        <input type="password" name = "confirm_password" className = "form-input" 
                        placeholder= "Confirm your password" 
                        class="shadow appearance-none border rounded 
                        w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        value ={values.confirm_password} onChange={handleChange} />     
                           {errors.confirm_password && <p class="font-mono text-red-600 ">{errors.confirm_password} </p>}   
                    </div>
                    <div class="flex items-center justify-between">
                        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                         type = "submit" >
                            Sign up
                        </button>
                      

                    </div>
                  
                </form>

             </div>
              
       
             </center>
        
    )
}

export default FormSignup
