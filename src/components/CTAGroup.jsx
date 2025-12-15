import './CTAGroup.css'

const CTAGroup = ({ ctas, world, onCTAClick }) => {
  const handleClick = (type, label) => {
    if (onCTAClick) {
      onCTAClick(type, label, world)
    }
  }

  return (
    <div className="cta-group">
      <div className="cta-group-buttons">
        <a
          href="#bewerbung"
          className="btn btn-primary btn-lg"
          onClick={() => handleClick('primary', ctas.primary)}
        >
          {ctas.primary}
        </a>
      </div>
    </div>
  )
}

export default CTAGroup

