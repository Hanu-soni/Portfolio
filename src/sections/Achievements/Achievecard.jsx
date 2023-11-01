
import Card from '../../components/Card'
import './achieve.css';



const Achievecard = ({achieve}) => {
  return (
    <Card className="portfolio__project bg-light mb-2">
        <div className='d-flex justify-content-center'>
          <h3 className='text-primary fw-bold h3_achievement'>{achieve.Experience}</h3>
        </div>
        <div  className="container-fluid d-flex justify-content-center">
        <img className='img-fluid hero-img border border-dark rounded-circle' style={{height:'100px',width:'100px'}} src={achieve.logo} alt="PortfolioProjectImage" />
       

        </div>
            
        
        <p>{achieve.Indetail}</p>
        <div className="portfolio__project-cta">
            <a href={achieve.link} className="btn sm" target="_blank" rel="noopener noreferrer">Click here</a>  
        </div>
    </Card>
  )
}

export default Achievecard;


