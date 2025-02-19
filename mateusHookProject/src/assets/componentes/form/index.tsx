import { useState } from "react";

import Button from "../button";

type FormProps = {
  submitFunction: (title: string, pages: number) => void;
};

function Form({ submitFunction }: FormProps) {
  const [formData, setFormData] = useState({ title: "", pages: 0 });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function resetForm() {
    setFormData({ title: "", pages: 0 });
  }

  function isFormValid() {
    const errors = [];

    // Validar bookTitle
    if (formData.title === "") {
      errors.push("O campo Título é obrigatorio.");
    }

    // Validar booksPages
    if (formData.pages <= 0) {
      errors.push("O número de páginas do livro precisa ser maior que zero!");
    }
    setErrorMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.pages);
      resetForm();
      setErrorMessages([]);
    }
  }

  return (
    <form className="books-form" onSubmit={handleSubmit} action="">
      <input
        placeholder="Título"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        placeholder="Quantidade de Paginas"
        type="number"
        name="pages"
        value={formData.pages}
        onChange={handleChange}
      />
      {errorMessages.length > 0 && (
        <div className="form-message">
          {errorMessages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      )}
      <Button>
        <strong>Adicionar</strong>
      </Button>
    </form>
  );
}
export default Form;
