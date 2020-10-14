import React from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom'
import Main from './components/Main/Main';
import { connect } from 'react-redux'
import ModalForm from './components/Modal/ModalForm';
import { logout } from './redux/app-reduce'
import News from './components/news/News';

const App=({adminLoggedIn, adminName, userName, userLoggedIn, logout})=> {
  
 
  return (
    <main className="container">
      <NavBar loggedIn={adminLoggedIn || userLoggedIn} adminLoggedIn={adminLoggedIn} logout={logout}/>
      <ModalForm />
      <div>
        <Route 
          path='/main' 
          render={() => <Main login={adminName || userName} />} />
        <Route 
          path='/news' 
          render={()=><News />} />
      </div>

    </main>
  );

}


const mapStateToProps =(state)=>{
  return{
    adminName: state.app.adminName,
    userName: state.app.userName,
    adminLoggedIn: state.app.adminLoggedIn,
    userLoggedIn: state.app.userLoggedIn
  }

}

export default connect(mapStateToProps,{logout})(App)
