const baseURL = 'http://localhost:3000/home';

describe('Home', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should greet the user', () => {
    cy.get('main header h1').contains('welcome')
  })

  it('Should have a loading message', () => {
    cy.get('main section').should('have.class', 'loading')
  })

  it('Should have a bird of the day highlight', () => {
    cy.get('main .highlight').should('be.visible')
      .get('article')
        .get('img').should('be.visible')
        .get('h3').should('be.visible')
        .get('h4').should('be.visible')
        .get('a').should('be.visible')
  })
})
