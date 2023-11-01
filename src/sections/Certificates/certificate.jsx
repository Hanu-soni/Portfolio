import Card from '../../components/Card';
// import './certificates.css';


const Certificate = (certificate) => {
    console.log(certificate);
  return (
    <Card className="portfolio__project">
      <div  className="container-fluid d-flex justify-content-center">
        <img className='img-fluid hero-img border border-dark rounded-top' src={certificate.certificate} alt="PortfolioProjectImage" />
       
        </div>
    </Card>
  )
}

export default Certificate