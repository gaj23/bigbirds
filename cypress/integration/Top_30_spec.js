const baseURL = 'http://localhost:3000/home';

describe('Top 30', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should give instructions to the user', () => {
    cy.wait(2000)
    cy.get('main nav').contains('Top').click()
      .get('section').contains('Seen it?')
  })

  it('Should have ability to check off and on birds', () => {
    cy.wait(2000)
    cy.get('main nav').contains('Top').click()
      .get('section article table tbody tr td input[type=checkbox]').first().click()
      .get('section article table tbody tr td input[type=checkbox]').first().click()
  })

  it('Should have the ability to go into a bird\'s details', () => {
    cy.wait(2000)
    cy.get('main nav').contains('Top').click()
      .get('section article table tbody tr td a').first().click()
      .location().should(loc => {
      expect(loc.pathname).to.eq('/bird_details/daejun')
    })
  })

})
