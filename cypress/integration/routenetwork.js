/// <reference types="Cypress" />

describe('Route Network', () => {
  it('Adds, edits and deletes routes', () => {
    cy.viewport(1800, 1000);
    cy.visit('http://localhost:3000');

    // Add new flight
    cy.get('button[title="Add"]').click();
    cy.get('input[placeholder="Departure Airport"]').type('EDDF');
    cy.get('input[placeholder="Destination Airport"]').type('EDDM');
    cy.get('input[placeholder="Category"]').type('Test');
    cy.get('button[title="Save"]').click();
    cy.get('.MuiTableBody-root tr:first')
      .should('contain', 'EDDF')
      .and('contain', 'EDDM')
      .and('contain', 'Test');

    // Delete flight
    cy.get('button[title="Delete"]').click();
    cy.get('button[title="Save"]').click();
    cy.get('.MuiTableBody-root tr:first').should(
      'contain',
      'No records to display'
    );
  });
});
