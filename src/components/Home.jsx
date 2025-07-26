import Header from './Header'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'animate.css';

function Home() {
  const navigate = useNavigate()
  const [animationSlider, setAnimationSlider] = useState('animate__animated animate__slideInRight')
  const [bibleVerse, setBibleVerse] = useState('Click to generate a Bible verse')
  const [verseRef, setVerseRef] = useState('')
  const handleClick = () => {
    setAnimationSlider('animate__animated animate__slideOutRight')
    setTimeout(() => {
      navigate('/about')
    }, 500)
  }

  const generateBibleVerse = () => {
    fetchData()
    console.log('Bible verse generated:', bibleVerse)
  }

  const fetchData = async () => {
    console.log('Fetching Bible verse...')
      try {
        const response = await fetch('https://bible-api.com/data/web/random/JHN');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const verseObj = await response.json();
        setBibleVerse(verseObj.random_verse.text);
        setVerseRef('- ' + verseObj.random_verse.book + ' ' + verseObj.random_verse.chapter + ':' + verseObj.random_verse.verse);
        console.log(verseObj); // Log the entire object for debugging
      } catch (err) {
        console.log(err);
      } 
    }
      
  return (
    <>
      <header className={animationSlider}>
        <Header />
      </header>
      <div className="body-container">
        <h1>Basic Web App</h1>
        <div className='card'>
          <button onClick={handleClick}>
            Learn More
          </button>
          <p>
            Click to learn more about LYDMD
          </p>
          <hr />
          <button onClick={generateBibleVerse} style={{ marginTop: '1em' }}>
            Generate Bible Verse
          </button>
          <p>
            {bibleVerse}
          </p>
          <p>
            <i>{verseRef}</i>
          </p>
        </div>
      </div>
    </>
  )
}

export default Home