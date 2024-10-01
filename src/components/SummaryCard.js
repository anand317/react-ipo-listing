import './styles.css'

const SummaryCard = ({tag,value})=>{
    return(<div className="summary-card">
            <span className='summary-card-label'>
                {tag}
            </span>
            <span className='summary-card-value'>
                {value}
            </span>
    </div>)
}

export default SummaryCard