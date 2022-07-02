import React, { useState } from 'react'
import './tooltip.css'

const Tooltip = ({ position, content, children }) => {
  let timeout
  // state to hide/unhide tooltip
  const [onHover, setOnHover] = useState(false)

  // function handlers
  const showTip = () => {
    timeout = setTimeout(() => {
      setOnHover(true)
    }, 200)
  }
  
  const hideTip = () => {
    clearInterval(timeout)
    setOnHover(false)
  }

  return (
    <div className='wrapper' onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {onHover && (
        <div className={`Tooltip-Tip ${position || 'top'}`}>
          {/* Content */}
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
