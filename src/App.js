import { Routes, Route } from "react-router-dom";
import { useState } from "react"

import Login from './components/Login'
import Main from './components/Main'
import End from './components/End'

const App = () => {
    const [nickname, setNickname] = useState("");
    const [beerCounter, setBeerCounter] = useState(0)

    const mainRoute = '/app-' + nickname
    const endRoute = '/conclusion-' + nickname
    return (
        <Routes>
            <Route path="/" element={<Login onChangeNickname={setNickname}/>} />
            <Route path={mainRoute} element={<Main nickname={nickname} beerCounter={beerCounter} setBeerCounter={setBeerCounter} />} />
            <Route path={endRoute} element={<End nickname={nickname} beerCount={beerCounter}/>} />
        </Routes>
    );
}

export default App;
