import {Box, Dialog, List, ListItem} from '@mui/material'

const LoginDilog = ()=>{
    return(
        <Box>
        <Dialog open={true}> 
        <Box>
                <h2>Use WhatsApp on your computer</h2>
                <List>
                <ListItem>Open WhatsApp on your phone</ListItem>
                <ListItem>Tap Menu Or Settings and select linked Device</ListItem>
                <ListItem>tap on <strong>Link a device</strong></ListItem>
                <ListItem>Point your phone to this screen to capture the QR code</ListItem>
                </List>
                
            </Box>
            <Box>
                <h1>Qr code</h1>
            </Box>
        </Dialog>
        </Box>
    )
}
export default LoginDilog