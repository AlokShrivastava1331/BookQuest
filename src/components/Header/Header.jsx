import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>"Books are not just instruments of learning, but they are also bridges to connect the past with the present and the future. They contain the wisdom of generations and the aspirations of individuals. Reading books is not merely a pastime; it is a journey of self-discovery and enlightenment. In the pages of a book, one can find answers to questions, solutions to problems, and the inspiration to dream. So, never underestimate the power of a book; it can change your life and, in turn, change the world."
— Dr. A.P.J. Abdul Kalam




</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header