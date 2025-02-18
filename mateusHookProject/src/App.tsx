import { useState } from "react";

import Header from "./assets/componentes/header";
import Footer from "./assets/componentes/footer";
import Book from "./assets/componentes/book";
import Title from "./assets/componentes/title";
// import { bestMovie, booksList } from "./data";
import Button from "./assets/componentes/button";
import { booksList } from "./data";

// import interstellarSrc from "./assets/interstellarSrc.jpg";

import "./App.css";
import { BookType } from "./type";

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [booksPages, setBooksPages] = useState(0);
  const [books, setBooks] = useState<BookType[]>([]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBooksPages(event.target.valueAsNumber);
  }

  function handleClick() {
    const newBook = {
      title: bookTitle,
      pages: booksPages,
      isRead: false,
      isFavorite: false,
    };
    setBooks([...books, newBook]);
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
        <Title>Meus Livros:</Title>
        {/* <p>
          <s>Livros emprestados </s>Meus Livros:
        </p> */}
        <ul className="books-list">
          {books.map((book) => (
            <Book book={book} key={book.title} />
          ))}
        </ul>
        {/* <Title>{bestMovie}</Title>
        <div className="images-container">
          <img src={interstellarSrc} alt="Poster 1 interstellar" />
          <img src="/interstellarPublic.jpg" alt="Poster 2 interstellar" />
          </div> */}
        <div className="books-form">
          <input
            placeholder="Título"
            type="text"
            value={bookTitle}
            onChange={handleNameChange}
          />
          <input
            placeholder="Quantidade de Paginas"
            type="number"
            value={booksPages}
            onChange={handlePagesChange}
          />
          <Button onClick={handleClick}>
            <strong>Adicionar</strong>
          </Button>
        </div>

        {/* <Button onClick={() => handleClick("Não, Ele é muito demorado!")}>
          <strong>Posso assistir sem medo?</strong>
        </Button> */}

        {/* Dá pra fazer o botão das duas formas:
      {/* <button onClick={handleClick}>Esse filme é bom?</button> */}
        {/* Da segunda forma não precisa da função lá em cima, porém dependendo da função tem que ver qual compensa! Acho que a de baixo é melhor para quando é um botão bem simples, ai fica um codigo mais limpo. */}
        {/* <button onClick={() => alert("Esse filme é o melhor!")}>
          Esse filme é bom?
        </button> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
