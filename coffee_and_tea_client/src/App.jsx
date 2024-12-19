/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import './styles/main.scss';
import Login from './pages/login';
import Register from './pages/register';
import PassowrdReset from './pages/password_reset';
import Home from './pages/home';
import Store from './pages/store';
import Search from './pages/search';
import { ProductDetail } from './pages/product_detail';
import { Payment } from './pages/payment';
import { Post } from './pages/post';
import { Contact } from './pages/contact';
import { User } from './pages/user/user_dashboard';
import { UserChangePassword } from './pages/user/user_change_pass';
import { UserOrders } from './pages/user/user_orders';
import { UserDiposit } from './pages/user/user_diposit';
import { useTokenExpiration } from './hooks/useTokenExpiration';

function App() {
  useTokenExpiration();
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/password_reset' element={<PassowrdReset />}></Route>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Store />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/product_detail/:id' element={<ProductDetail />}></Route>
        <Route exact path='/payment' element={<Payment />}></Route>
        {/* <Route exact path='/post' element={<Post />}></Route> */}
        <Route exact path='/contact' element={<Contact />}></Route>
        
        <Route exact path='/user' element={<User />}></Route>
        <Route exact path='/user_change_password' element={<UserChangePassword />}></Route>
        <Route exact path='/user_orders' element={<UserOrders />}></Route>
        <Route exact path='/user_diposit' element={<UserDiposit />}></Route>
      </Routes>
    </Router>
  )
}

export default App
