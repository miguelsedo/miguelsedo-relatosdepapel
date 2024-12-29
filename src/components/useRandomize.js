import { useMemo } from "react";
import libros from "../Data/libros.json"; // Import the books data

export const useRandomize = () => {
  // Create a random book selector
  const randomBookDetails = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * libros.length); // Pick a random index
    const book = libros[randomIndex]; // Select the random book
    const detalles = `${book.title}-${book.author}-${book.year}`; // Format the details
    return detalles; // Return formatted string
  }, []); // Compute once on component mount

  return randomBookDetails;
};
