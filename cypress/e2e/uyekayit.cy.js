describe("Üye kayıt form testi", () => {
  it("Üye kayıt formuna git", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".main-link").first().click();
    cy.get('[name="name"]').type("Hello World");
    cy.get('[name="email"]').type("helloworld@mynet.com");
    cy.get('[name="terms"]').click();
    cy.get('[name="terms"]').should("have.checked");
    cy.get('[name="rol"]').type("deneme");
    cy.get('[name="name"]').should("have.value", "Hello World");
    cy.get('[type="submit"]').should("be.enabled");
    cy.get('[type="submit"]').click();
  });
});
