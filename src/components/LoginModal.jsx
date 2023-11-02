
import { Alert, Button, FloatingLabel, FormControl, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import useMainContext from '../hooks/useMainContext';


const LoginModal = () =>
{
  const {loginModal,hideLogin,email,setEmail,password,setPassword,errorMessage,handleLogin} = useMainContext()
  return (
    <>
      <Modal
        show={ loginModal }
        centered
        onHide={hideLogin}
      >
        <ModalHeader closeButton>
          <Modal.Title>Login</Modal.Title>
        </ModalHeader>
        <ModalBody>
          { errorMessage ? (
            <Alert variant='danger'>
              { errorMessage }
            </Alert>
          ): null}
          <FloatingLabel label="Email" className='mb-3'>
            <FormControl type='email' placeholder='example@email.com' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </FloatingLabel>
          <FloatingLabel label="Password" className='mt-3'>
            <FormControl type='password' placeholder='Enter a password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </FloatingLabel>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline-dark" onClick={handleLogin}>Login</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default LoginModal
