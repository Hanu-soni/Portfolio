import data from './data'
import './achieve.css';
import Achievecards from './Achievecard'

const Achievements = () => {
  return (
    <div id='achievements' className='bg-dark container pb-4 pt-4'>
      <h2 className='d-flex justify-content-center text-success fw-bold'>Experiences in various fields</h2>
     
      <div className="container faqs__container text-dark fw-bolder">
        {
          data.map(achieve => (
            <Achievecards key={achieve.id} achieve={achieve}/>
            
          ))
        }
      </div>
    </div>
  )
}

export default Achievements;