
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RigthBar from "./components/Rigthbar"
import { Box,Container } from "@mui/material";

function App() {
  return (
    <Container sx={{backgroundColor:"red"}}>
          <SideBar/>
          <Feed/>
          <RigthBar/>
          

    </Container>
  );
}

export default App;
