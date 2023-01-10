import {BrowserRouter as Router, Routes,Route  } from "react-router-dom";
import AddCoupon from "./Components/Admin/AddCoupon";
import AddNotification from "./Components/Admin/AddNotification";
import AddProductcategory from "./Components/Admin/AddProductCategory";
import AddProductSubcategory from "./Components/Admin/AddProductSubcategory";
import AddQuote from "./Components/Admin/AddQuote";
import AddReview from "./Components/Admin/AddReview";
import AddService from "./Components/Admin/AddService";
import AddServiceAssign from "./Components/Admin/AddServiceAssign";
import AddServiceCategory from "./Components/Admin/AddServiceCategory";
import AstrologerCategory from "./Components/Admin/AstrologerCategory";
import AdminAstroList from "./Components/Admin/AstrologerList";
import Blog from "./Components/Admin/Blog";
import CallHistory from "./Components/Admin/CallHistory";
import CallhistoryAccounting from "./Components/Admin/CallHistoryAccounting";
import ContactUs from "./Components/Admin/ContactUs";
import CouponList from "./Components/Admin/CouponList";
import Dashboard from "./Components/Admin/Dashboard";
import FcmSettings from "./Components/Admin/FcmSettings";
import Follower from "./Components/Admin/Follower";
import Horoscope from "./Components/Admin/Horoscope";
import LanguageList from "./Components/Admin/LanguageList";
import Notifications from "./Components/Admin/Notifications";
import Order from "./Components/Admin/Order";
import Product from "./Components/Admin/Product";
import ProductCategory from "./Components/Admin/ProductCategory";
import ProductSubcategory from "./Components/Admin/ProductSubcategory";
import PushNotification from "./Components/Admin/PushNotification";
import Quote from "./Components/Admin/Quote";
import Review from "./Components/Admin/Review";
import ServiceAssign from "./Components/Admin/ServiceAssign";
import ServiceBookings from "./Components/Admin/ServiceBookings";
import ServiceCategory from "./Components/Admin/ServiceCategory";
import ServiceList from "./Components/Admin/ServiceList";
import AdminUserList from "./Components/Admin/UserList";
import TableOne from "./Components/Tables/TableOne";

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
        <Route path="/addservice-assign" element={<AddServiceAssign/>}/>
        <Route path="/service-category" element={<ServiceCategory/>}/>
        <Route path="/service-list" element={<ServiceList/>}/>
        <Route path="/add-service-category" element={<AddServiceCategory/>}/>
        <Route path="/add-service" element={<AddService/>}/>
        <Route path="/service-booking" element={<ServiceBookings/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/product-category" element={<ProductCategory/>}/>
        <Route path="/addproduct-category" element={<AddProductcategory/>}/>
        <Route path="/product-subcategory" element={<ProductSubcategory/>}/>
        <Route path="/addproduct-subcategory" element={<AddProductSubcategory/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/coupon-list" element={<CouponList/>}/>
        <Route path="/add-coupon" element={<AddCoupon/>}/>
        <Route path="/quote" element={<Quote/>}/>
        <Route path="/add-quote" element={<AddQuote/>}/>
        <Route path="/follower" element={<Follower/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/add-review" element={<AddReview/>}/>
        <Route path="/call-history" element={<CallHistory/>}/>
        <Route path="/call-history-accounting" element={<CallhistoryAccounting/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/fcm-settings" element={<FcmSettings/>}/>
        <Route path="/notifications" element={<Notifications/>}/>
        <Route path="/add-notifications" element={<AddNotification/>}/> 
        <Route path="/push-notification" element={<PushNotification/>}/>
        <Route path="/tables" element={<TableOne/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
