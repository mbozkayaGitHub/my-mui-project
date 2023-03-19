
import SideBar from "./components/SideBar"
import Feed from "./components/Feed"
import RigthBar from "./components/Rigthbar"
import { Box,Container,Stack } from "@mui/material";

function App() {
  return (
    <Box>

      {/* navbar */}
      <Stack direction="row" spacing={2} justifyContent="space-between"> 
          <SideBar/>
          <Feed/>
          <RigthBar/>
          
          </Stack>
    </Box>
  );
}

export default App;
