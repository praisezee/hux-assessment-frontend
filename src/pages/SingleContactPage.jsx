import DashHeader from "../components/DashHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BsPersonVcard } from "react-icons/bs";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const SingleContactPage = () =>
{
  const { id } = useParams()
  const { contact, setContact } = useMainContext()
  const navigate = useNavigate()
  
  const singleContact = contact.find( item => item.id === parseInt( id ) )
  
  const axiosPrivate = useAxiosPrivate()
  const deleteContact = async () =>
  {
    try {
      const res = axiosPrivate.delete(`/api/${singleContact.id}`, {headers: {
          "Content-Type": "application/json"
        },
          withCredentials: true
      } )
      const result = ( await res ).data
      const removedItem = contact.filter( i => i.id !== singleContact.id )
      setContact(removedItem)
      console.log(result)
      navigate('/contact')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
      <DashHeader />
      <Container className="vh-75 d-flex align-items-center">
        <Row className="border flex-grow-1 mx-2 rounded shadow p-5 g-5">
          <Col xs={ 3 } className="mx-auto my-auto">
            <div className="display-1">
              <BsPersonVcard/>
            </div>
          </Col>
          <Col xs={ 9 } className="mx-auto my-auto">
            <p className="h4 text-uppercase fw-bold">{ singleContact.firstname } <span className="text-capitalize text-muted">{singleContact.Lastname }</span></p>
            <p className="fw-bold h6">{singleContact.telphone }</p>
          </Col>
          <Col xs={ 12 } className="d-flex justify-content-between">
            <Button variant="danger" onClick={deleteContact}>Delete</Button>
            <Link to={`/contact/edit/${id}`} className="btn btn-dark">Edit</Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SingleContactPage
