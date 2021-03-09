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

  it('Should have an error message if birds can\'t be loaded', () => {
    cy.fixture('birds.json')
      .then(() => {
        cy.intercept('https://api.ebird.org/v2/data/obs/US-CO/recent?maxResults=30&key=jcsp15jhp6hi', {
          statusCode: 400
        })
      })
    cy.visit(baseURL);
    cy.get('section article').contains('Whoops!')
  })
})
