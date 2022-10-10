// Write your code here
import './index.css'

const DenominationItem = props => {
  const {cash, cashBtn} = props
  const {value} = cash

  const clickCash = () => {
    cashBtn(value)
  }
  return (
    <li className="button-container">
      <button className="btn1" type="button" onClick={clickCash}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
