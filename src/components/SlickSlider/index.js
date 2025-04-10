import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import Cookie from 'js-cookie'
import './index.css'

const SlickSlider = () => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const presentJWTToken = Cookie.get('jwt_token')

  useEffect(() => {
    const fetchBooks = async () => {
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${presentJWTToken}`,
        },
      }
      try {
        const res = await fetch(
          'https://apis.ccbp.in/book-hub/top-rated-books',
          options,
        )
        if (res.ok) {
          const data = await res.json()
          console.log(data.books)
          setBooks(data.books)
        } else {
          throw new Error('Failed')
        }
      } catch (err) {
        setError(err.message)
      }
    }
    fetchBooks()
  }, [])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  // need to implement loader and basic styles.
  // need to implement slider button icons which are not rendered by default

  return (
    <div className="main-container-slick">
      <h2>Top Rated Books</h2>
      <div className="slick-container">
        <Slider {...settings}>
          {books.map(i => (
            <div className="list-items-slick" key={i.id}>
              <img src={i.cover_pic} alt={i.title} className="slick-images" />
              <p>{i.title}</p>
              <p>{i.author_name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SlickSlider
