import { useContext } from "react";
import libros from "../Data/libros.json";
import { GlobalCOntext } from "../components/GlobalContext";

export const useRandomize = () => {
  const { cesta } = useContext(GlobalCOntext);

  const generarLibro = () => {
    let book;
    let randomIndex;
    let t = 0;

    do {
      randomIndex = Math.floor(Math.random() * libros.length);
      book = libros[randomIndex];
      t++;
    } while (
      cesta.some(
        ([cTitle, cYear]) => cTitle === book.title && cYear === book.year
      ) &&
      t < libros.length
    );

    return book;
  };

  const randomLibro = generarLibro();
  const randomBookDetails = `${randomLibro.title}-${randomLibro.author}-${randomLibro.year}`;
  return randomBookDetails;
};
