import Header from './Header'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css';

function About() {
  const navigate = useNavigate()
  const [animationSlider, setAnimationSlider] = useState('animate__animated animate__slideInLeft')
  const handleClick = () => {
    setAnimationSlider('animate__animated animate__slideOutLeft')
    setTimeout(() => {
      navigate('/')
    }, 500)
  }
  return (
    <>
      <header className={animationSlider}>
        <Header />
      </header>
      <div className="body-container">
        <h2>About LYDMD</h2>
        <div className='about-container'>
          <p className='about'>
            Love You Des Moines Days is an annual 9-day celebration for our community 
            with over 400 free, fun, and meaningful activities for all ages, 
            hosted by the Valley Community Center. The Valley Community Center is owned and 
            operated by Valley Church as a gift to the community and is a hub for partnerships 
            doing good for the community…with the community. Learn more about the 
            Valley Community Center.
          </p>
          <p className='about'>
            During Love You Des Moines Days, Valley Church attenders, as well as community 
            and partner organizations, provide a wide variety of workshops, activities, 
            clinics, and social gatherings for our neighbors. From pickleball, to family 
            splash bash, to cars & coffee, free bike repair, ice cream making, writing 
            workshops, arts & crafts - there is something for everyone!
          </p>
          <p className='about'>
            Join us July 26, through August 3, and beyond!
          </p>
        </div>
        <button onClick={handleClick}>
            Home
        </button>
      </div>
    </>
  )
}

export default About