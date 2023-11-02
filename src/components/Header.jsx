import { Button, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import useMainContext from "../hooks/useMainContext";


const Header = () =>
{

  const {showLogin,showSignup,auth} = useMainContext()
  return (
    <Navbar collapseOnSelect expand='sm' variant="light" bg="white" >
      <div className="container-fluid container-md">
        <Link to='/' className="nav-brand" >
          <img
            src="/vite.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Link>
        <div className="d-flex ms-auto align-items-center">
          {
            auth.id ? (
              <p className="text-capitalize fw-bold
              h3 my-auto"><span className="text-muted h6">Welcome back</span>  { auth.firstname }</p>
            ) : (
                <>
                <div className="nav-link mx-2">
                  <Button variant="outline-dark" onClick={showLogin}>Login</Button>
                </div>
                <div className="nav-link mx-2">
                  <Button variant="dark" onClick={showSignup}>Register</Button>
                </div>
              </>
            )
          }
        </div>
      </div>
    </Navbar>
  )
}

export default Header
