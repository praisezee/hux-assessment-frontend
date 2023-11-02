import { Alert, Button, Col, Container, FloatingLabel, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row, Spinner } from 'react-bootstrap';
import useMainContext from '../hooks/useMainContext';

const RegisterModal = () =>
{
  const {signUpModal,hideSignup,email,setEmail,password,setPassword,firstname,setFirstname,lastname,setLastname,confirmPassword,setConfirmPassword,errorMessage, isloading, handleRegister} = useMainContext()
  return (
    <>
      <Modal
        centered
        show={ signUpModal }
        onHide={hideSignup}
      >
        <ModalHeader closeButton>
          <ModalTitle>Register</ModalTitle>
        </ModalHeader>
        <ModalBody>
          { errorMessage ? (
            <Alert variant='danger'>
              { errorMessage }
            </Alert>
          ): null}
          <Container fluid>
            <Row>
              <Col xs={ 12 } md={ 6 }>
                <FloatingLabel label="Firstname" className='mb-3'>
                  <FormControl placeholder='John' value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                </FloatingLabel>
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <FloatingLabel label="Lastname" className='mb-3'>
                  <FormControl placeholder='Doe' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                </FloatingLabel>
              </Col>
              <Col xs={ 12 }>
                <FloatingLabel label="Email" className='mb-3'>
                  <FormControl type='email' placeholder='example@email.com' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </FloatingLabel>
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <FloatingLabel label="Password" className='mb-3'>
                  <FormControl type='password' placeholder='Enter a password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </FloatingLabel>
              </Col>
              <Col xs={ 12 } md={ 6 }>
                <FloatingLabel label="Confirm Password" className='mb-3'>
                  <FormControl type='password' placeholder='Enter a password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter>
          { !isloading ? (
            <Button variant="outline-dark" onClick={handleRegister}>Register</Button>
          ) : (
              <Button variant="outline-dark" onClick={ handleRegister } disabled={ true }>
                <Spinner variant='dark' size='sm'/>
                Please Wait
              </Button>
          )}
        </ModalFooter>
      </Modal>
    </>
  )
}

export default RegisterModal
