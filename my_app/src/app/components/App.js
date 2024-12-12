import React from "react";
import Header from "./Header";
import BookGallery from "./BookGallery";
import CountButton from "./CountButton";

const App = () => (
    <div>
        <Header/>
        <CountButton count={4}/>
        <BookGallery/>
    </div>
)
export default App;