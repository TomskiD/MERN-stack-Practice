describe('Registration', () => {
  it('Server should responded status code 200', () => {
    cy.visit('http://localhost:3001');
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:5000/events',
    }).as('dataGetFirst');
    cy.wait('@dataGetFirst').its('response.statusCode').should('equal', 200)
  });
  it('Button should be disabled', () => {
    cy.get('#event-submit').should('be.disabled')
  });
  it('Fill first name', () => {
    cy.get('#my-first-name').type('Hello');
  });
  it('Fill last name', () => {
    cy.get('#my-last-name').type('World');
  });
  it('Fill email', () => {
    cy.get('#my-email').type('helloworld@gmail.com');
  });
  it('Button should enabled', () => {
    cy.get('#event-submit').should('not.be.disabled')
  });
  it('Submit event', () => {
    cy.get('#event-submit').click();
  });
});