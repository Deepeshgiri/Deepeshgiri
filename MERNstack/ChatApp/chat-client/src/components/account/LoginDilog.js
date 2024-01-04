import styled from '@emotion/styled'
import {Box, Button, ButtonBase, Dialog, FormGroup, Input, List, ListItem} from '@mui/material'


const LoginDilog = ()=>{
   const dialogBox = styled(Box)`
   display:flex,
         alignItem:"center",
         justifyContent:"center"
         height:"100%`


         const SignUp = ()=>{

         }
    return(
       
        <dialogBox >
        <Dialog open={true}> 
        <dialogBox>
                <h2>Use WhatsApp on your computer</h2>
                <List>
                <ListItem>Open WhatsApp on your phone</ListItem>
                <ListItem>Tap Menu Or Settings and select linked Device</ListItem>
                <ListItem>tap on <strong>Link a device</strong></ListItem>
                <ListItem>Point your phone to this screen to capture the QR code</ListItem>
                </List>
                
            </dialogBox>
            <Box>
                <h1>Qr code</h1>
                <Box><Button>Login</Button><Button onClick={SignUp}>SignUp</Button></Box>
            </Box>
        </Dialog>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </dialogBox>
    )
}
export default LoginDilog