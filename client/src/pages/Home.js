import './home.css'

function Home() {

  // [5, 2, 1, 6]
  const arrayInput = [5, 2, 1, 6, 4, 1, 1, 4,]

  return(
    <div className='homeContainer'>
      {arrayInput.map((value, index) => {
        return (
          <div key={index} className='array-element'>
            <h2>Hello World</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Home;