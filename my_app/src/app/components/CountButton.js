import React, {useState} from "react";

const CountButton = ({count}) => {
    const [showCount, setShowCount] = useState(false)

    return(
        <div>
            <button onClick={() => setShowCount(!showCount)}>
                Pokaż liczbę książek
            </button>
            {show && <p>Liczba książek: {count}</p>}
        </div>
    )
}
export default CountButton;