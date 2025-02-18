import { useState } from "react";

import Header from "./assets/componentes/header";
import Footer from "./assets/componentes/footer";
// import Book from "./assets/componentes/book";
// import Title from "./assets/componentes/title";
// import { bestMovie, booksList } from "./data";
import Button from "./assets/componentes/button";

// import interstellarSrc from "./assets/interstellarSrc.jpg";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  // function handleClick(messageText: string) {
  //   alert(messageText);
  // }

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   console.log(event.target.value);
  // }
  // // vai receber um array de numeros e vai retornar ou outro array com os numeros multiplicados por 2
  // function dubleNumber(numberList: Array<number>) {
  //   return numberList.map((number) => number * 2);
  // }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Button onClick={handleClick}> {counter}</Button>
      </div>
      {/* <div className="container">
        <Title>
          <s>Livros emprestados </s>Meus Livros:
        </Title>
        <p>
          <s>Livros emprestados </s>Meus Livros:
        </p>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book book={book} key={book.title} />
          ))}
        </ul>
        <Title>{bestMovie}</Title>
        <div className="images-container">
          <img src={interstellarSrc} alt="Poster 1 interstellar" />
          <img src="/interstellarPublic.jpg" alt="Poster 2 interstellar" />
        </div>
        <Button onClick={() => handleClick("Esse filme é o melhor!")}>
          <strong>Esse filme é bom?</strong>
        </Button>

        <Button onClick={() => handleClick("Não, Ele é muito demorado!")}>
          <strong>Posso assistir sem medo?</strong>
        </Button>

        <input
          placeholder="Digite aqui"
          type="text"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        {/* Dá pra fazer o botão das duas formas: */}
      {/* <button onClick={handleClick}>Esse filme é bom?</button> */}
      {/* Da segunda forma não precisa da função lá em cima, porém dependendo da função tem que ver qual compensa! Acho que a de baixo é melhor para quando é um botão bem simples, ai fica um codigo mais limpo. */}
      {/* <button onClick={() => alert("Esse filme é o melhor!")}>
          Esse filme é bom?
        </button> */}
      {/* </div> */}
      <Footer />
    </div>
  );
}

export default App;
