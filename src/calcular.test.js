import calcularprecio from "./calcular.js";

describe("Calcular precios", () => {
  it("Deberia darme el precio neto", () => {
    expect(calcularprecio(3, 2,"")).toEqual(6);
  });

});

describe("Calcular precios con impuestos", () => {
  it("Deberia darme el precio neto con impuesto de CA", () => {
    expect(calcularprecio(5, 2,"CA")).toEqual(10+0.825);
  });
});
