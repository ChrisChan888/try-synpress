describe("Test User Login", () => {
  it("connect wallet", () => {
    cy.visit("/");
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get("#navbar-buttons")
      .wait(2000)
      .then(($buttons) => {
        if ($buttons.find("button#connect-wallet-button").length) {
          cy.get("button#connect-wallet-button").click();
          cy.get(`button#select-wallet-MetaMask`).click();
          cy.acceptMetamaskAccess();
          expect("button#wallet-address-button").to.exist;
        }
      });
  });
});
