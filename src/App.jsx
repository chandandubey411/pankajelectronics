import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Listing from './pages/Listing'
import SearchResults from './pages/SearchResults'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Footer from './pages/Footer'
import FloatingCTA from './pages/FloatingCTA'

function App() {
  

  return (
    <Router>
      <div className='min-h-screen w-full overflow-x-hidden flex flex-col bg-[#000]'>
        <Navbar/>
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<><Home/><Listing/></>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/AboutUs' element={<About/>}/>
            <Route path='/category/:categoryName' element={<Product/>}/>
            <Route path="/search" element={<SearchResults />} />
          </Routes>

        </main>
        <Footer/>
        <FloatingCTA/>

      </div>
    </Router>
  )
}

export default App





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // Pages (create empty files for now)
// import Home from "./pages/Home";
// import Properties from "./pages/Properties";
// import Industrial from "./pages/Industrial";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-[#F9FAFB]">
//         {/* Navbar */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/properties" element={<Properties />} />
//             <Route path="/industrial" element={<Industrial />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         {/* Footer (later) */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

