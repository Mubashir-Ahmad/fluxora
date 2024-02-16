import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
// import Home from './components/Home/Home.jsx';
import Home from './components/Homee/Home.jsx';
import Aboutus from './components/Aboutus/Aboutus';
import Service from './components/Services/Service';
import Blog from './components/Blogs/Blog';
import BlogDetail from './components/Blogs/BlogDetail';
import Contactus from './components/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar /> 
       <Routes>
            {/* <Route path="/" element={<Home/>} /> */}
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blogdetail" element={<BlogDetail/>} />
            <Route path="/contactus" element={<Contactus/>} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
