import { AppBar, Toolbar } from "@mui/material";
import LoginDilog from "./account/LoginDilog";

const Messenger = () => {
    return (
        <>
        <AppBar sx={{height:200}}>
            <Toolbar>
            <LoginDilog />
            </Toolbar>
            
        </AppBar>

        </>
    )
}
export default Messenger;