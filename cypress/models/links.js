import links from '../../cypress/page-objects/links';

const links1 = new links();

export function clickOnLinks() {
  cy.visit('https://ultimateqa.com/automation')
  cy.url().should('include', 'ultimateqa.com/automation')

  links1.link1().click()
  cy.url('https://ultimateqa.com/complicated-page').should('include', 'ultimateqa.com/complicated-page')
  links1.SectionOfButtons().should('be.visible')

  cy.go('back')
  links1.link2().click()
  cy.location('href').should('eq', 'https://ultimateqa.com/fake-landing-page')
  cy.wait(1000)
  links1.ViewBtn().should('be.visible')
  .invoke('text')
      .then((text)=>{
        const divTxt = text;
        expect(divTxt).to.contain('View Courses');
      })

  cy.go('back')
  links1.link3().click()
  cy.location('href').should('include', 'ultimateqa.com/automation/fake-pricing-page/')
  links1.PickAPlanSection().should('be.visible')

  cy.go('back')
  links1.link4().click()
  cy.url('https://ultimateqa.com/filling-out-forms/').should('include', 'ultimateqa.com/filling-out-forms')
  links1.NameInput().should('be.visible')

  cy.go('back')
  links1.link5().click()
  cy.location('href').should('eq', 'https://ultimateqa.com/sample-application-lifecycle-sprint-1/')
  links1.SubmitBtn().should('be.enabled')

  cy.go('back')
  links1.link6().click()
  cy.location('href').should('eq', 'https://courses.ultimateqa.com/users/sign_in')
  links1.WelcomeBackSection().should('not.be.hidden')

  cy.go('back')
  links1.link7().click()
  cy.url('https://ultimateqa.com/simple-html-elements-for-automation/').should('include', 'simple-html-elements-for-automation/')
  links1.RaiseBtn().should('be.visible')

  }


