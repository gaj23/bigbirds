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

  it('Should have a random bird to guess', () => {
    cy.get('main .highlight').should('be.visible')
      .get('article')
        .get('img').should('be.visible')
  })

  //test for error here 
})
