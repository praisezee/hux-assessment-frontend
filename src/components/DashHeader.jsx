import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsPerson, BsPersonPlus } from 'react-icons/bs'

const DashHeader = () => {
  return (
      <Container className="mt-1">
        <Row>
          <Col xs={6} className="text-center">
            <Link to='/contact' className="btn btn-outline-dark w-100">
              <BsPerson className="fs-1"/>
            </Link>
          </Col>
          <Col xs={6} className="text-center">
            <Link to='/contact/create' className="btn btn-outline-dark w-100">
              <BsPersonPlus className="fs-1"/>
            </Link>
          </Col>
        </Row>
      </Container>
  )
}

export default DashHeader
