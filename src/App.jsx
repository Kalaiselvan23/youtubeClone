
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Navbar,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Feed,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "black",color:"white"}}>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id"  element={<ChannelDetail/>}/>
        <Route path="/search/:id" element={<SearchFeed/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
