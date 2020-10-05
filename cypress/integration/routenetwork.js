/// <reference types="Cypress" />

describe('Route Network', () => {
  it('Add, edit and delete a route', () => {
    cy.viewport(1800, 1000);
    cy.visit('http://localhost:8080');

    cy.get('.MuiTableBody-root tr:first').should(
      'contain',
      'No records to display'
    );

    // Add new flight
    cy.get('button:contains("Add new route")').click();
    cy.get('input[placeholder="Departure Airport"]').type('EDDF');
    cy.get('input[placeholder="Destination Airport"]').type('EDDM');
    cy.get('input[placeholder="Category"]').type('Test');
    cy.get('button[title="Save"]').click();
    cy.get('.MuiTableBody-root tr:first')
      .should('contain', 'EDDF')
      .and('contain', 'EDDM')
      .and('contain', 'Test');

    // Edit flight
    cy.get('button[title="Edit"]').click();
    cy.get('input[value="EDDM"]').clear().type('EDDW');
    cy.get('button[title="Save"]').click();
    cy.get('.MuiTableBody-root tr:first')
      .should('contain', 'EDDF')
      .and('contain', 'EDDW')
      .and('contain', 'Test');

    // See flight on map
    cy.get('[data-cy=mapDisplayRoute]').click();
    cy.get('.rsm-line').should('have.length', 1);
    cy.get('.rsm-marker').should('have.length', 2);
    cy.get('[data-cy=dataEditRoute]').click();

    // Delete flight
    cy.get('button[title="Delete"]').click();
    cy.get('button[title="Save"]').click();
    cy.get('.MuiTableBody-root tr:first').should(
      'contain',
      'No records to display'
    );
  });
});
