import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import GalleryList from "./Pages/GalleryList"
import NoticeList from "./Pages/NoticeList"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/gallery" element={<GalleryList/>}/>
      <Route path="/notice" element={<NoticeList/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
