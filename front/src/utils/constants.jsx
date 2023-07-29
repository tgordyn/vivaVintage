export const capitalizeFirstLetter = (str) => {
    if (!str) return ''; // Manejar caso de cadena vacía o nula
  
    const words = str.split(' '); // Dividir la cadena en palabras
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase(); // Obtener el primer carácter en mayúscula
      const restOfWord = word.slice(1); // Obtener el resto de la palabra
      return firstLetter + restOfWord;
    });
  
    return capitalizedWords.join(' '); // Unir las palabras nuevamente en una cadena
  }
