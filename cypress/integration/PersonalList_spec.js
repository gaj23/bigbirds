const baseURL = 'http://localhost:3000/home';

describe('Top 30', () => {
  beforeEach(() => {
    cy.visit(baseURL)
      .wait(1000)
  })

  it('Should tell user how many birds they\'ve seen', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section').contains('Identified 13')
  })

  it('Should have name of bird', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td')
        .first().contains('Short')
  })

  it('Should have date of when bird was seen', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td')
        .first().contains('2021-01-02')
  })

  it('Should have the ability to go into a bird\'s details', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td a').first().click()
      .location().should(loc => {
      expect(loc.pathname).to.eq('/bird_details/sheowl')
    })
  })
})
