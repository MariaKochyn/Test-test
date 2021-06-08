
 export default class links{

    link1(){
    return cy.contains('Big page with many elements');
    }

    link2(){
    return cy.contains('Fake Landing Page');
    }

    link3(){
    return cy.contains('Fake Pricing Page');
    }

    link4(){
    return cy.contains('Fill out forms');
    }

    link5(){
    return cy.contains('Learn how to automate an application that evolves over time');
    }

    link6(){
    return cy.contains('Login automation');
    }

    link7(){
    return cy.contains('Interactions with simple elements');
    }

    SectionOfButtons(){
       return cy.get('#Section_of_Buttons')
    }

    ViewBtn(){
       return cy.get("div.et_pb_button_module_wrapper.et_pb_button_0_wrapper.et_pb_module.et_had_animation > a")
    }
 
    PickAPlanSection(){
       return cy.contains('Pick a Plan that Works for Your')
    }

    NameInput(){
       return cy.get('#et_pb_contact_name_0')
    }

    SubmitBtn(){
       return cy.get('#submitForm')
    }

    WelcomeBackSection(){
       return cy.get('.page__heading')
    }

    RaiseBtn(){
       return cy.get('#button2')
    }

    MyPerfectFunction() {
       return ;
    }
   }
