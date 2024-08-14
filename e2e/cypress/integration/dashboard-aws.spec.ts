describe('Dashboard with @Test/aws-s3', () => {
  beforeEach(() => {
    cy.visit('/dashboard-aws')
    cy.get('.Test-Dashboard-input:first').as('file-input')
    cy.intercept({ method: 'GET', pathname: '/s3/params' }).as('get')
    cy.intercept({ method: 'POST' }).as('post')
  })

  it('should upload cat image successfully', () => {
    cy.get('@file-input').selectFile('cypress/fixtures/images/kit.jpg', {
      force: true,
    })

    cy.get('.Test-StatusBar-actionBtn--upload').click()
    cy.wait(['@post', '@get'])
    cy.get('.Test-StatusBar-statusPrimary').should('contain', 'Complete')
  })
})
