import Popup from "reactjs-popup"

import { MdOutlineRotateLeft } from "react-icons/md"

const ReInv = ({min}) => {
  return (
    
    <div>

        <Popup trigger={ min ? < MdOutlineRotateLeft className="sideIcons" /> : <button> Auto-Invest </button> } modal nested >
            {
                Auto => (
                    <div>
                        <p>Hola!!</p>
                    </div>
                )
            }
        </Popup>

    </div>
  )
}

export default ReInv
