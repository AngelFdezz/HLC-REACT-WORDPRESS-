class LindoGatito {

    #nombre;
    #fechaNac;
    #raza;
    #peso;
    #muerto;
    constructor(nombre, fechaNac, raza, peso) {
      this.#nombre = nombre;
      this.#fechaNac = fechaNac;
      this.#raza = raza;
      this.#peso = peso;
      this.#muerto = false;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    get fechaNac() {
      return this.#fechaNac;
    }
  
    get raza() {
      return this.#raza;
    }
  
    get peso() {
      return this.#peso;
    }
  
    set peso(nuevoPeso) {
      if (nuevoPeso > 15 || nuevoPeso < 1) {
        this.#muerto = true;
        throw new Error('El gato ha muerto.');
      }
      this.#peso = nuevoPeso;
    }
  
    juega() {
      if (!this.#muerto) {
      this.peso--;
    } else {
        throw new Error(`Desgraciadamente, ${this.#nombre} ha fallecido por falta de comida.`);
      }
    }
  
    come() {
      if (!this.#muerto) {
        this.peso++;
      } else {
          throw new Error(`Desgraciadamente, ${this.#nombre} ha fallecido por sobrepeso.`);
        }
    }
  } 
  const gato1 = new LindoGatito("Globo", "26-06-2024", "Romana", 13);
  const gato2 = new LindoGatito("Chico", "22-010-2016", "NORMAL", 2);