import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
      <div  className="container-fluid d-flex justify-content-center">
        {/* <img className='img-fluid  rounded-circle' style={{height:'100px',width:'100px'}} src={achieve.logo} alt="PortfolioProjectImage" /> */}
        <img className='img-fluid hero-img border border-dark rounded-top' src={project.image} alt="PortfolioProjectImage" />
       
        </div>
        <div className="d-flex justify-content-center">
        <h4 className='text-primary fw-bold'>{project.title}</h4>
        </div>
           
     
       
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Gitbub</a>
        </div>
    </Card>
  )
}

export default Project