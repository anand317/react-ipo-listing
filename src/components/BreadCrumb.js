import { useLocation,Link } from "react-router-dom";
import './styles.css'

const BreadCrumb = ()=>{

    const location=useLocation()
    const pathnames=location.pathname.split('/').filter(x=>x)
    return(<>
    <div className="breadcrumb-wrapper">
    <nav className="breadcrumb">
        <Link className="nav" to='/'>IPO</Link>
        {pathnames.map((p,index)=>{
            const to=`/${pathnames.slice(0, index + 1).join('/')}`;
            return (
                <span  className="nav" key={to}>
                  <span >{' > '}</span>
                  <Link  className="nav" to={to}>{decodeURIComponent(p)}</Link>
                </span>
            )
        })}
        
    </nav>

    </div>
    
    </>)
}

export default BreadCrumb;