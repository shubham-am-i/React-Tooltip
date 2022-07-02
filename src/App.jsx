import Tooltip from './components/Tooltip'
import bugImage from './image1.jpg'

const App = () => {
  return (
    <>
      {/* Tooltip component with image as a child */}
      <Tooltip content='One does not simply find the tooltip &#128525;' position='right'>
        <img src={bugImage} alt='img' className='bug-image' />
      </Tooltip>
    </>
  )
}

export default App
