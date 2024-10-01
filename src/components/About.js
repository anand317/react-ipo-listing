import './styles.css'

const About  = ({text})=>{
    return(<>
    <div className="ipo-container-cards">
        <h6>About the company</h6>
        <div className="ipo-timeline">
            <p className='about'>{text}</p>           
        </div>
      </div>
    </>)
}

export default About;