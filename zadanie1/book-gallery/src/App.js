import React from "react";
import Header from "./components/Header";
import BookGallery from "./components/BookGallery";
import CountButton from "./components/CountButton";
import { useState } from "react";

const App = () => {
    const [bookCount, setBookCount] = useState(0)
    return (
        <div>
            <Header/>
            <CountButton count={bookCount}/>
            <BookGallery setBookCount={setBookCount}/>
        </div>
    )
}
export default App;