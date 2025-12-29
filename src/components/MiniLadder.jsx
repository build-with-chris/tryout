import './MiniLadder.css'

const MiniLadder = ({ rungs }) => {
  if (!rungs || rungs.length === 0) return null

  return (
    <div className="mini-ladder" role="img" aria-label="Karriereleiter">
      <div className="ladder-rungs">
        {rungs.map((rung, index) => (
          <div key={index} className="ladder-rung">
            <div className="ladder-rung-circle">
              <span className="ladder-rung-number">{index + 1}</span>
            </div>
            <span className="ladder-rung-label">{rung}</span>
            {index < rungs.length - 1 && <div className="ladder-connector"></div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniLadder








