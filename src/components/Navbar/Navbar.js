import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import ModalForm from '../Modal/ModalForm';


const NavBar = ({loggedIn, logout}) => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand" >My test-app</span>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/main">Главная <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/news">Новости</NavLink>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button 
                                className="btn btn-success mr-1" 
                                onClick={()=>setOpenModal(true)}>Вoйти</button>
                        </li>
                        {!loggedIn && <ModalForm openModal={openModal} closeModal={setOpenModal}/>}
                        <li className="nav-item">
                        <button 
                                className="btn btn-dark" 
                                onClick={logout}>Выйти</button>
                        </li>

                    </ul>


                </span>
            </div>
        </nav>
    );
}

export default NavBar;
