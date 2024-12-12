import React, {useState} from "react";
import BookGallery from "./BookGallery";

const CountButton = ({count}) => {
    const [showCount, setShowCount] = useState(false)

    return(
        <div className="buttonBox"s>
            <button onClick={() => setShowCount(!showCount)}>
                Pokaż liczbę książek
            </button>
            {showCount && alert('Liczba książek: '+ count)}
        </div>
    )
}
export default CountButton;