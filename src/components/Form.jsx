import { useState, useEffect } from 'react'
import Meme from './Meme'

export default function Form() {
  const [formText, setFormText] = useState({
    topText: 'Shut Up',
    bottomText: 'And take my money',
  })

  function handleForm(event) {
    return setFormText((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  }

  const [allMemes, setAllMemes] = useState([])
  const [memeImage, setMemeImage] = useState(
    'https://imgflip.com/s/meme/Shut-Up-And-Take-My-Money-Fry.jpg'
  )

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  function randomImage(event) {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * 100)
    setMemeImage(allMemes[randomNumber].url)
  }

  return (
    <>
      <form className='form container'>
        <div className='form--input'>
          <label htmlFor='top-text'>Top text</label>
          <input
            type='text'
            id='top-text'
            placeholder='Shut up'
            name='topText'
            onChange={handleForm}
          />
        </div>
        <div className='form--input'>
          <label htmlFor='bottom-text'>Bottom text</label>
          <input
            type='text'
            id='bottom-text'
            placeholder='And take my money'
            name='bottomText'
            onChange={handleForm}
          />
        </div>
        <button className='btn' onClick={randomImage}>
          Get a new meme image
        </button>
      </form>
      <Meme
        topText={formText.topText}
        bottomText={formText.bottomText}
        img={memeImage}
      />
    </>
  )
}
