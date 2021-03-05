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

    })

    it('Should have a clickable navigation bar', () => {

    })
  })
})
