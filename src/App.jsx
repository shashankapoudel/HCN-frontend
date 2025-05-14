import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Products from './pages/Products'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/footer'
import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import Orders from './pages/admin/Orders'
import ProductList from './pages/admin/ProductList'
import Settings from './pages/admin/Settings'
import ProductPage from './pages/ProductPage'
import FAQs from './pages/FAQs'
import Cart from './pages/Cart'
import Order from './pages/OrderUI'
import { useEffect, useState } from 'react'
import TrackOrder from './pages/TrackOrder'
import Contents from './pages/admin/Contents'
import FaqsAdmin from './pages/admin/FaqsAdmin'
import BlogsAdmin from './pages/admin/BlogsAdmin'
import AdminLogin from './pages/admin/AdminLogin'
import Blogs from './pages/Blogs'
import SingleProductPage from './pages/SingleProductPage'
import Story from './pages/Story'



function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');
  const [admin, setAdmin] = useState(false)

  useEffect(() => {

    let sessionId = localStorage.getItem('sessionID')
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
      localStorage.setItem('sessionID', sessionId)
    }
  }, [])

  return (
    <div className='flex flex-col font-poppins min-h-screen  '>
      {!isAdminRoute && <Header />}
      <div className={`flex-grow ${!isAdminRoute ? 'pt-36 lg:pt-40' : 'pt-0'}`}>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/story' element={<Story />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
          <Route path='/trackorder' element={<TrackOrder />} />
          <Route path='/products/:category/:subcategory?/:subsubcategory?' element={<ProductPage />} />
          <Route path='/product/:id' element={<SingleProductPage />} />

          <Route path="/admin" element={admin ? <AdminLayout setAdmin={setAdmin} /> : <AdminLogin setAdmin={setAdmin} />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="productlist" element={<ProductList />} />
            <Route path="settings" element={<Settings />} />
            <Route path="contents" element={<Contents />} />
            <Route path="contents/faqs" element={<FaqsAdmin />} />
            <Route path="contents/blogs" element={<BlogsAdmin />} />
          </Route>
        </Routes>
      </div>

      {!isAdminRoute && <Footer />}
    </div>
  )
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
