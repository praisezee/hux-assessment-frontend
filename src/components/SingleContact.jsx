/* eslint-disable react/prop-types */

import { Button } from "react-bootstrap";
import { BsPencilFill, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useMainContext from "../hooks/useMainContext";


const SingleContact = ( { item } ) =>
{
  const axiosPrivate = useAxiosPrivate()
  const {auth,contact,setContact} = useMainContext()
  const deleteContact = async () =>
  {
    try {
      const res = axiosPrivate.delete(`/api/${item.id},${auth.id}`,{userId:auth.id}, {headers: {
          "Content-Type": "application/json"
        },
          withCredentials: true
      } )
      const result = ( await res ).data
      const removedItem = contact.filter( i => i.id !== item.id )
      setContact(removedItem)
      console.log(result)
      
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="d-flex p-2 my-2 border rounded shadow-sm">
      <Link to={`/contact/${item.id}`} className="nav-link my-auto flex-grow-1">
        <p className="h5 text-uppercase fw-bold">{ item.firstname } <span className="text-capitalize text-muted">{ item.Lastname }</span></p>
        <p className="fw-bold h6">{ item.telphone }</p>
      </Link>
      <div className='d-flex my-auto '>
        <Link to={`/contact/edit/${item.id}`} className="mx-1 btn btn-outline-primary">
          <BsPencilFill  role="button"/>
        </Link>
        <Button variant="outline-danger" className="mx-1" onClick={deleteContact}>
          <BsTrash role="button"/>
        </Button>
      </div>
    </div>
  )
}

export default SingleContact
