import { Button, Col, Container, FloatingLabel, FormControl, Row } from "react-bootstrap";
import DashHeader from "../components/DashHeader";
import useMainContext from "../hooks/useMainContext";

import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useEffect } from "react";

const EditPage = () =>
{
  const {id} = useParams()
    const { firstname, lastname, setFirstname, setLastname, telephone, setTelephone, auth,setErrorMessage,setIsLoading,contact } = useMainContext()
    const navigate = useNavigate()
  const axiosPrivate = useAxiosPrivate()
  const singleContact = contact.find(item =>item.id === parseInt(id))

  const addContact = async () =>
  {
    try {
      const res = await axiosPrivate.patch( `/api/${id}`, { firstname, lastname, telephone, userId: auth.id },{
        headers: {
          "Content-Type": "application/json"
        },
          withCredentials: true
        });
      console.log(res)
      setFirstname( '' )
      setLastname( '' )
      setTelephone( '' )
      navigate('/contact')
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
  
  useEffect(
    () =>
    {
      setFirstname( singleContact.firstname )
      setLastname( singleContact.Lastname )
      setTelephone(singleContact.telphone)
    },[]
  )

  return (
    <>
      <DashHeader />
      <Container className="vh-75 d-flex justify-content-center align-items-center">
        <Row className="g-4 w-75 border p-5 rounded shadow">
          <p className="h4 text-uppercase">Edit contact</p>
          <Col xs={ 12 } md={ 6 }>
            <FloatingLabel label='Firstname' >
              <FormControl placeholder='John' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            </FloatingLabel>
          </Col>
          <Col xs={ 12 } md={ 6 }>
            <FloatingLabel label='Lirstname' >
              <FormControl placeholder="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            </FloatingLabel>
          </Col>
          <Col xs={ 12 }>
            <FloatingLabel label='Telephone' >
              <FormControl placeholder="123456789" value={telephone} onChange={(e)=>setTelephone(e.target.value)}/>
            </FloatingLabel>
          </Col>
          <Col xs={ 12 }>
            <Button variant="dark" onClick={addContact}>
              Save
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditPage
