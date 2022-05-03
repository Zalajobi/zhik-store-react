import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ToastContainer} from "react-toastify";

import './index.css';
import './assets/vendor/animate/animate.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'

// import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";

import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/login" element={<Login/>}/>
				<Route path="/signup" element={<SignUp/>}/>
			</Routes>
		</BrowserRouter>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
