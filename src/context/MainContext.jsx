/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from '../utils/axios'
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";


const MainContext = createContext( {} );

export const MainProvider= ( { children } ) =>
{
  const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()

  const [ loginModal, setLoginModal ] = useState( false )
  const [ signUpModal, setSignUpModal ] = useState( false )


  //States fo registration and authentication
  const [auth,setAuth] = useState({})
  const [ firstname, setFirstname ] = useState( '' )
  const [ lastname, setLastname ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ confirmPassword, setConfirmPassword ] = useState( '' )
  const [ isloading, setIsLoading ] = useState( false )
  const [ errorMessage, setErrorMessage ] = useState( '' )
  const [ contact, setContact ] = useState( [] )
  const [telephone,setTelephone] = useState('')
  
  const showLogin = () =>
  {
    setLoginModal( true );
  }

  const hideLogin = () =>
  {
    setLoginModal( false );
  }

  const showSignup = () =>
  {
    setSignUpModal( true );
  }

  const hideSignup = () =>
  {
    setSignUpModal( false );
  }

  const handleLogin = async () =>
  {
    setIsLoading(true)
    try {
      const res = await axios.post( '/auth/login', { email, password }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      } )
      const result = await res.data.user
      setAuth( result )
      setEmail( '' )
      setPassword( '' )
      setLoginModal( false )
      setSignUpModal(false)
      navigate( 'contact' )
      console.log(result.accessToken)
      
    } catch (error) {
      console.log( error )
      setErrorMessage(error.response.data.message)
    } finally {
      setIsLoading( false )
      setTimeout( () =>
      {
        setErrorMessage('')
      },3000)
    }
  }

  const handleRegister = async () =>
  {
    
    setIsLoading(true)
    try {
      if ( password !== confirmPassword || !password || !confirmPassword) return setErrorMessage( 'Password does not match' )
      await axios.post( '/auth/register', { email, password, firstname, lastname }, {
        headers: {
          "Content-Type": "application/json"
        },
      } )
      setLoginModal( true )
      setSignUpModal( false )
      setPassword( '' )
      setFirstname( '' )
      setLastname('')
    } catch (error) {
      console.log( error )
      if (error.response.data?.err.code === 'P2002') return setErrorMessage("User already exist")
      setErrorMessage(error.response.data.message)
    } finally {
      setIsLoading( false )
      setTimeout( () =>
      {
        setErrorMessage('')
      },3000)
    }
  }






  return (
    <MainContext.Provider value={ {loginModal,showLogin, hideLogin,signUpModal,showSignup,hideSignup, handleLogin, email,setEmail,password,setPassword,firstname,setFirstname,lastname,setLastname,confirmPassword,setConfirmPassword,errorMessage,auth,isloading, handleRegister,contact,setContact,setErrorMessage,setIsLoading,telephone,setTelephone} }>
      { children }
    </MainContext.Provider>
  )
}


export default MainContext