describe('BigBirds', () => {
  const baseURL = 'http://localhost:3000/home';

  describe('Home', () => {
    beforeEach(() => {
      cy.visit(baseURL)
    })

    it('Should greet the user', () => {
      cy.get('main header h1').contains('welcome')
    })

    it('Should have a bird of the day highlight', () => {
      cy.get('main .highlight').should('be.visible')
        .get('article')
          .get('img').should('be.visible')
          .get('h3').should('be.visible')
          .get('h4').should('be.visible')
          .get('a').should('be.visible').and('have.attr', 'href', 'https://www.allaboutbirds.org/guide/Brown_Creeper/')

    })

    it('Should have a clickable navigation bar', () => {
      cy.get('main nav').should('be.visible')
        .get('button').click({ multiple:true })
    })
  })
})
