import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookQuest</h2>
            <p className='fs-17'>Welcome to our book information website, your ultimate destination for literary exploration and discovery. Here, we embark on a journey through the boundless realms of literature, offering a treasure trove of insights, reviews, and recommendations that cater to every book lover's passion. Whether you're a seasoned bibliophile or a newcomer to the world of reading, our website is designed to ignite your imagination, broaden your horizons, and help you find your next literary adventure. We believe in the power of books to enlighten, entertain, and inspire, and our mission is to connect readers with the stories and knowledge that can transform lives. Join us in celebrating the written word, and let's embark on this literary odyssey together.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
