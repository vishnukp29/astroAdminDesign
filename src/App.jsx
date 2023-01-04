import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import AddService from "./Components/Admin/AddService";
import AstrologerCategory from "./Components/Admin/AstrologerCategory";
import AdminAstroList from "./Components/Admin/AstrologerList";

import Blog from "./Components/Admin/Blog";
import CallHistory from "./Components/Admin/CallHistory";
import CallhistoryAccounting from "./Components/Admin/CallHistoryAccounting";
import Dashboard from "./Components/Admin/Dashboard";
import Horoscope from "./Components/Admin/Horoscope";
import LanguageList from "./Components/Admin/LanguageList";
import ProductCategory from "./Components/Admin/ProductCategory";
import Review from "./Components/Admin/Review";
import ServiceAssign from "./Components/Admin/ServiceAssign";
import ServiceCategory from "./Components/Admin/ServiceCategory";
import ServiceList from "./Components/Admin/ServiceList";
import AdminUserList from "./Components/Admin/UserList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/horoscope' element={<Horoscope/>}/>
        <Route path='/astro-category' element={<AstrologerCategory/>}/>
        <Route path='/language-list' element={<LanguageList/>}/>
        <Route path='/astro-list' element={<AdminAstroList/>}/>
        <Route path='/user-list' element={<AdminUserList/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/service-assign" element={<ServiceAssign/>}/>
        <Route path="/service-category" element={<ServiceCategory/>}/>
        <Route path="/service-list" element={<ServiceList/>}/>
        <Route path="/add-service" element={<AddService/>}/>
        <Route path="/product-category" element={<ProductCategory/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/call-history" element={<CallHistory/>}/>
        <Route path="/call-history-accounting" element={<CallhistoryAccounting/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
