import calcularprecio from "./calcular.js";

describe("Calcular precios", () => {
  it("Deberia darme el precio neto", () => {
    expect(calcularprecio(3, 2)).toEqual(6);
  });
});
