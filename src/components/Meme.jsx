export default function Meme({ topText, bottomText, img }) {
  return (
    <section className='container'>
      <div className='img-container'>
        <img src={img} />
        <p className='top-text'>{topText}</p>
        <p className='bottom-text'>{bottomText}</p>
      </div>
    </section>
  )
}
