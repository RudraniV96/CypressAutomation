// Testsuite
describe('TestSuite', () => 
{
  // Code to handle an uncaught exception for promise not fulfilled
  Cypress.on('uncaught:exception', (err, runnable, promise) => 
  {
      if (promise) 
      {
        return false
      }
  })  
  // Test B:  Add Dashboard
  it('Test B', () => 
    {
      // Open the website using URL
      cy.visit('https://app.gogrow.com/login')
      // Enter username
      cy.get('#LoginForm > div > input.STATIC-logIn-email').click().type('rudrani.r@cvemail.com')
      // Enter password
      cy.get('#LoginForm > div > input.STATIC-logIn-password').click().type('QAAutomation@Test')
      // Click on login button
      cy.get('#LoginForm > div > div.loginContainer > button').click()
      // Validating if on the correct website using assertion
      cy.title().should('eq','Grow')
      // Open dashboard navigation
      cy.get('#root > div.dashboard---dashboard---3d1Id > div.content---content---1yVq- > div.batmanBar---batmanBar---2m2ZO > div > div.batmanBar---leftSide---MRZFA > div').click()
      // Click the 'Add Dashboard' button
      cy.get('#root > div.dashboard---dashboard---3d1Id.dashboard---sidebarOpen---1XWPZ > div.content---content---1yVq- > div.sidebar---sidebar---1nXo0.sidebar---open---3kGWX > div > div.sidebar---dashboardList---3i8av > div:nth-child(3) > span > svg').click()
      // Type in 30 characters or less for dashboard name
      cy.get('input[placeholder="Enter name..." ]').click().type('Rudrani')
      // Select Submit button
      cy.get('div.Button---content---2hQHY').contains('Submit').click()
    })
    // Test D:  Verify Dashboards
    it('Test D', () => 
    {
      // Open the website using URL
      cy.visit('https://app.gogrow.com/login')
      // Enter username
      cy.get('#LoginForm > div > input.STATIC-logIn-email').click().type('rudrani.r@cvemail.com')
      // Enter password
      cy.get('#LoginForm > div > input.STATIC-logIn-password').click().type('QAAutomation@Test')
      // Click on login button
      cy.get('#LoginForm > div > div.loginContainer > button').click()
      // Validating if on the correct website using assertion
      cy.title().should('eq','Grow')
      // Click the Gear Icon (Settings)
      cy.get('#settingsAppHeader > div.Tooltip---tooltip-target---2NS9I > div > a > svg').click()
      // Click Dashboards
      cy.get('#root > div.accountSettingsApp---accountSettings---2gQ5e > div.accountSettingsApp---settingsWrapper---1sesv > div.accountSettingsApp---sideBar---Q8Owy > div > a.settingsManager---tab---SZy3n.STATIC-settings-dashboards').click()
      // Verify that a list of dashboards is present
      cy.get('#root > div.accountSettingsApp---accountSettings---2gQ5e > div.accountSettingsApp---settingsWrapper---1sesv > div.accountSettingsApp---settingsView---uuTys > div > div.table---Table---2EeuN').should("be.visible")
    }) 
})