import './Clock.scss'
import {useState} from "react";

const Clock = () => {
  const [nowTime, setNowTime] = useState(new Date())
  setInterval(() => setNowTime(new Date()), 1000)
  return (
    <div className='clock'>
      <span className="clock__span">{nowTime.toLocaleTimeString()}</span>
    </div>
  )
}

export default Clock