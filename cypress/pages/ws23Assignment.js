class ws23Assignment {

    constructor() {
        this.createModal = '[data-testid="icon:plus"]';
        this.shortSummaryField = 'input[name="title"]';
        this.issueDescription = '.ql-editor';
        this.createIssueButton = '.dIxFno';
        this.successMessage = '.sc-jqCOkK';
        this.createdIssue = 'WS 23 assignment';
        this.estimation = '.sc-fYiAbW > .sc-kpOJdX > .sc-dxgOiQ';
        this.timeLogged = '.sc-fYiAbW';
        this.whereMouseClicks = '.sc-cbkKFq';
        this.closeButton = '[data-testid="icon:close"]';
        this.numberPlaceholder = "div>input[placeholder='Number']";
    }

    createIssue() {
        cy.get(this.createModal)
        .click();
        cy.wait(2000);
        cy.get(this.shortSummaryField)
        .type(this.createdIssue);
        cy.get(this.issueDescription)
        .type('Some text');
        cy.get(this.createIssueButton)
        .click()

    }

    AssertIssueCreated() {
       cy.get(this.successMessage)
       .should('contain','Issue has been successfully created');
       cy.contains(this.createdIssue)
       .should('contain', this.createdIssue); 
    }    

    OpenIssueSetEstimation() {
        cy.contains(this.createdIssue)
        .click();
        cy.get(this.estimation)
        .should('be.empty');
        cy.get(this.timeLogged)
        .should('contain','No time logged');
        cy.get(this.estimation)
        .click()
        .type('10');
        cy.get(this.whereMouseClicks)
        .click();
        cy.wait(3000);
        cy.get(this.closeButton)
        .click() 
    }

    AssertEstimation1() {
        cy.contains(this.createdIssue)
        .click();
        cy.wait(5000);
        cy.get(this.timeLogged)
        .should('contain','10h estimated');
    }

    SetNewEstimation() {
        cy.get(this.estimation)
        .click()
        .clear()
        .type('20');
        cy.wait(3000);
        cy.get(this.closeButton)
        .click();
    }

    AssertEstimation2() {
        cy.contains(this.createdIssue)
        .click();
        cy.wait(5000);
        cy.get(this.timeLogged)
        .should('contain','20h estimated');
    }

    DeleteAndAssert() {
        cy.get(this.estimation)
        .click()
        .clear();
        cyпше .wait(2000);
        cy.get(this.closeButton)
        .click();
        cy.contains(this.createdIssue)
        .click();
        cy.get(this.numberPlaceholder)
        .should('be.visible');
    }

    WholeAssignment() {
        this.createIssue();
        this.AssertIssueCreated();
        this.OpenIssueSetEstimation();
        this.AssertEstimation1();
        this.SetNewEstimation();
        this.AssertEstimation2();
        this.DeleteAndAssert();

    }



    




}

export default new ws23Assignment();