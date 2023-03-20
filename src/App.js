
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RigthBar from "./components/Rigthbar"
import { Box,Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";



function App() {
  return (
    <Box>

      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <SideBar/>
        
          <Feed/>
          <RigthBar/>
          </Stack>
          <Add/>
    </Box>
  );
}

export default App;
