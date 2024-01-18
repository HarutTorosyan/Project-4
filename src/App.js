import { Route, Routes } from "react-router-dom";
import Header from "./pages/layouts/header";
import Footer from "./pages/layouts/footer";
import Home from "./pages/home";


function App() {
  return (
    <>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   {/* <Footer /> */}
    </>
  );
}

export default App;
