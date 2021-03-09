const baseURL = 'http://localhost:3000/home';

describe('Top 30', () => {
  beforeEach(() => {
    cy.visit(baseURL)
      .wait(1000)
  })

  it('Should give instructions to the user', () => {
    cy.get('main nav').contains('Top').click()
      .get('section').contains('Seen it?')
  })

  it('Should have ability to check off and on birds', () => {
    cy.get('main nav').contains('Top').click()
      .get('section article table tbody tr td input[type=checkbox]').first().click()
      .get('section article table tbody tr td input[type=checkbox]').first().click()
  })

  it('Should have the ability to go into a bird\'s details', () => {
    cy.get('main nav').contains('Top').click()
      .get('section article table tbody tr td a').first().click()
      .location().should(loc => {
      expect(loc.pathname).to.eq('/bird_details/daejun')
    })
  })

})
