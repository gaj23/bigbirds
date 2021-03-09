const baseURL = 'http://localhost:3000/home';

describe('Top 30', () => {
  beforeEach(() => {
    cy.visit(baseURL)
      .wait(1000)
  })

  it('Should navigate from Top List', () => {
    cy.get('main nav').contains('Top').click()
      .get('section article table tbody tr td a').first().click()
      .location().should(loc => {
      expect(loc.pathname).to.eq('/bird_details/daejun')
    })
  })

  it('Should navigate from Seen List', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td a').first().click()
      .location().should(loc => {
      expect(loc.pathname).to.eq('/bird_details/sheowl')
    })
  })

  it('Should tell us about a bird', () => {
    cy.get('main nav').contains('Seen').click()
      .get('section table tbody tr td a').first().click()
      .get('h2').contains('Short')
      .get('article')
        .get('img').should('have.attr', 'src', 'https://www.allaboutbirds.org/guide/assets/photo/37180721-1280px.jpg')
        .get('h3').contains('Short')
        .get('h4').contains('Asio')
        .get('a').should('have.attr', 'href', 'https://www.allaboutbirds.org/guide/Short-eared_Owl/')
  })
})
