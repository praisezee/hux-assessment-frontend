import { Link } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const Home = () =>
{
  return (
    <>
      <div className="vh-75 d-flex flex-column justify-content-center align-items-center p-5">
        <p className="h3 text-capitalize fw-bold">
          contact Storage
        </p>
        <p className="text-muted h5">Looking for an online contact storage? Here is the right application for you. Register to explore full experience</p>
        <p className="h6 fw-bold text-uppercase">System designed by <span className="h4 fw-bolder">
          <Link to='https://folorunsopraise.vercel.app' target="_blank" className="link-dark">
            Folorunso Praise
          </Link>
        </span></p>
      </div>
      <LoginModal />
      <RegisterModal/>
    </>
  )
}

export default Home
