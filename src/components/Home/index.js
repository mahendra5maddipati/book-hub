import React, {useState} from 'react'
import Header from '../Header'
import SlickSlider from '../SlickSlider'

const Home = () => {
  const [sample, setSample] = useState('')
  return (
    <div className="home-container">
      <Header />
      <div className="home-content-container">
        <h1 className="home-heading">Find Your Next Favorite Books?</h1>
        <p className="home-para">
          You are in the right place. Tell us what titles or genres you have
          enjoyed in the past, and we will give you surprisingly insightful
          recommendations.
        </p>
        <button type="button" className="home-button">
          Find Books
        </button>
        <SlickSlider />
      </div>
    </div>
  )
}

export default Home

// need to implement hamburger style.
