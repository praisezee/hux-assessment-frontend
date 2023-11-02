import { useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useMainContext from "../hooks/useMainContext";
import DashHeader from "../components/DashHeader";
import SingleContact from "../components/SingleContact";
import { Container } from "react-bootstrap";
const Dashboard = () =>
{
  const axiosPrivate = useAxiosPrivate()
  const {auth,setContact,setErrorMessage,contact,setIsLoading} = useMainContext()
    useEffect( () =>
    {
    const getContact = async () =>
    {
      try {
        const res = await axiosPrivate.post( '/api', { userId: auth.id }, {
          headers: { "Content-Type": "application/json" },
        withCredentials: true
        });
      const result = await res.data
        setContact( result )
        console.log(res)
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

    getContact()
  },[auth,axiosPrivate])
  
  
  return (
    <>
      <DashHeader />
      {
        !contact.length ? 
          <div className="vh-75 d-flex justify-content-center align-items-center">
            <p className="h5 text-muted">Your contact list is empty</p>
          </div> :
          <Container>
            { contact.map( item => <SingleContact key={ item.id } item={ item } />)}
          </Container>
      }
    </>
  )
}

export default Dashboard
