import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import './App.css';
import Games from "./components/Games/Games";
import Favourites from "./components/Favourites/Favourites";
import Store from "./components/Store/Store";
import { useEffect, useRef, useState } from "react";
import uniqid from 'uniqid';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Loading from "./components/Loading/Loading";
import GameInfo from "./components/GameInfo/GameInfo";

const URL_GAMES = 'http://localhost:3002/games'

function App() {
  const gameId = uniqid();
    const inputRef = useRef('')
    const selectRef = useRef('')
    const imageRef = useRef('');
    const priceRef = useRef('')
    const [isLoading, setIsLoading] = useState(false);
    const [games, setGames] = useState([]);
    const [favourites, setFavourites] = useState([])
    const [search, setSearch] = useState('')
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(4)
    const [validForm, setValidForm] = useState(true);

    const loadMore = () => {
      setIndex(prevValue => prevValue + 4);
    }

    const filteredGames = games.filter((game) => {
      return game.name.toLowerCase().includes(search.toLowerCase()) || game.genre.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        fetch(URL_GAMES)
        .then(response => response.json())
        .then(data => {
          setIsLoading(true);
          setGames(data)
        })
    }, []);


    const postGame = (data) => {
        fetch(URL_GAMES, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        })
    }

    const submitGame = (e) => {
        e.preventDefault();

        const name = inputRef.current.value;
        const genre = selectRef.current.value
        const id = gameId
        const image = imageRef.current.value;
        const price = priceRef.current.value

        const newData = {
            name: name,
            id: id,
            genre: genre,
            image: image,
            price: price
        }

        if(!name || !image || !price || genre === 'Choose Genre') {
          setValidForm(false)
          console.log(e.target);
          return;
        } else {
          setIsOpen(false)
          setValidForm(true)
          setGames([...games, newData])
          postGame(newData)
        }
    }

  return (
    <>
    {
      isLoading ?
      <BrowserRouter>
          <Header setIsOpen={setIsOpen} isOpen={isOpen} />
          <Popup setIsOpen={setIsOpen} isOpen={isOpen} validForm={validForm} submitGame={submitGame} inputRef={inputRef} selectRef={selectRef} imageRef={imageRef} priceRef={priceRef} />
        <Routes>
          <Route path="/home" element={<Home index={index} loadMore={loadMore} loading={isLoading} setIsOpen={setIsOpen} isOpen={isOpen} games={games} submitGame={submitGame} inputRef={inputRef} selectRef={selectRef} imageRef={imageRef}/>}></Route>
          <Route path="/games" element={<Games search={search} setSearch={setSearch} filteredGames={filteredGames} />}></Route>
          <Route path="/favourites" element={<Favourites games={games} search={search} setSearch={setSearch} favourites={favourites} />}></Route>
          <Route path="/cart" element={<Store search={search} setSearch={setSearch} />}></Route>
          {
            games.map((game, i) => {
             return <Route key={i} path={`/games/${game.id}`} element={<GameInfo
              key={i}
              name={game.name}
              image={game.image}
              genre={game.genre}
              price={game.price}
              />} ></Route>
            })
          }
        </Routes>
          <Footer />
      </BrowserRouter>
      :
      <Loading />
    }
    </>
  );
}

export default App;
