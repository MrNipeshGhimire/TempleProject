import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import GalleryList from "./Pages/GalleryList"
import NoticeList from "./Pages/NoticeList"
import DonorForm from "./Components/DonorForm"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/gallery" element={<GalleryList/>}/>
      <Route path="/notice" element={<NoticeList/>} />
      <Route path="/donor" element={<DonorForm/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
