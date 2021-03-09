const baseURL = 'http://localhost:3000/home';

describe('Top 30', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should give instructions to the user', () => {
    cy.get('main nav').contains('Top').click()
    cy.get()
  })
})
