import "./book.css";

type BookProps = {
  book: {
    title: string;
    pages: number;
    isRead: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  const favoriteClass = book.isFavorite ? "favorite-book" : "";
  return (
    <li className={`book-item ${favoriteClass}`}>
      <span>{book.isRead ? "✅" : "❌"}</span>{" "}
      <span>{`${book.title} (${book.pages} páginas)`}</span>{" "}
      {book.isFavorite && <span>⭐</span>}
    </li>
  );
}

export default Book;
