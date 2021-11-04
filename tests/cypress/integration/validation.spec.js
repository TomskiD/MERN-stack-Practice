describe('Validation', () => {
  it('should throw message: first name is required', () => {
    cy.visit('http://localhost:3001');
    cy.get('#my-first-name').focus().blur();
  });
  it('should throw message: last name is required', () => {
    cy.get('#my-last-name').focus().blur();
  });
  it('should throw message: email is required', () => {
    cy.get('#my-email').focus().blur();
  });
  it('should disable button', () => {
    cy.get('#event-submit').should('be.disabled')
  });
});
