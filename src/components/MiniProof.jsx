import './MiniProof.css'

const MiniProof = ({ proofLine }) => {
  if (!proofLine) return null

  return (
    <div className="mini-proof">
      <div className="mini-proof-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <p className="mini-proof-text">{proofLine}</p>
    </div>
  )
}

export default MiniProof








