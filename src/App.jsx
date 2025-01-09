import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageComponent from './components/HomePageComponent'
import ChiSiamoComponent from './components/ChiSiamoComponent'
import PostComponent from './components/PostComponent'
import Navbar from './components/NavbarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [articoli, setArticoli] = useState([]);

  //richiesta backedn

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/post')  // Usa axios per fare una GET request
  //     .then((response) => {
  //       setArticoli(response.data.post);  // Imposta gli articoli dallo stato della risposta
  //     })
  // }, []);


  // const handleRemove = (index) => {
  //   const nuoviArticoli = articoli.filter((_, i) => i !== index);
  //   setArticoli(nuoviArticoli);
  // };

  // return (
  //   <div>
  //     <header>
  //       <h1>Gestione Articoli</h1>
  //     </header>
  //     <main>
  //       <FormComponent articoli={articoli} setArticoli={setArticoli} />
  //       <div className="card-list">
  //         {articoli.map((articolo, index) => (
  //           <CardComponent
  //             key={index}
  //             articolo={articolo}
  //             onRemove={() => handleRemove(index)}
  //           />
  //         ))}
  //       </div>
  //     </main>
  //   </div>
  // );

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<HomePageComponent />} />
          <Route path="/chi-siamo" element={<ChiSiamoComponent />} />
          <Route path="/post" element={<PostComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
