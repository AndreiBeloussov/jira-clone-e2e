class AssignmentModal {

    constructor() {
        this.createModal = '[data-testid="icon:plus"]';
        this.createIssueButton = '.dIxFno > .sc-bxivhb';
        this.shortSummaryField = 'input[name="title"]';
        this.fieldRequiredError = '#root > div.sc-VigVT.dOxCFh > div > div > form > div:nth-child(4) > div.sc-gisBJw.hyXJaC';
        this.issueDescription = '.ql-editor';
        this.fakeText = faker.lorem.paragraph();
        this.issueName = 'WS20 issue';
        this.fakeSentence = faker.lorem.sentence();
        this.issueType = '[data-testid="select:type"]';
        this.assignees = '[data-testid="select:userIds"]';
        this.assigneeLordGaben = '[data-testid="select-option:Lord Gaben"]';
        this.successMessage = '.sc-jqCOkK';
        this.issuesList = '[data-testid="board-list:backlog"]';
        this.issueTypeBug = '[data-testid="select-option:Bug"]';
        this.priorityType = '[data-testid="select:priority"]';
        this.priorityTypeHighest = '[data-testid="select-option:Highest"]';
        this.assigneePickleRick = '[data-testid="select-option:Pickle Rick"]';
        this.bugIcon = '[data-testid="icon:bug"]';

    }

    getCreateModal() {
        return cy.get(this.createModal)
        .click()
    }

    createIssue() {
        cy.get(this.createIssueButton)
            .click();
    }

    validateError() {
        cy.get(this.shortSummaryField)
            .should('have.css', 'border')
            .should('contain', 'rgb(225, 60, 60)');
        cy.get(this.fieldRequiredError)
            .should('have.text', 'This field is required');
    }

    createValidateIssue() {
        this.getCreateModal();
        this.createIssue();
        this.validateError();
    }

    fillShortSummary() {
        cy.get(this.shortSummaryField)
        .wait(2000)
        .type(this.fakeSentence);
    }

    assertShortSummary() {
        cy.get(this.shortSummaryField)
        .should('have.value', this.fakeSentence);
    }

    fillDescription() {
        cy.get(this.issueDescription)
        .type(this.fakeText);
    }

    assertDescription() {
        cy.get(this.issueDescription)
        .should('have.text', this.fakeText);
    }

    selectAssignee() {
        cy.get(this.assignees)
        .click('bottomRight');
        cy.get(this.assigneeLordGaben)
        .click();
    }

    assertAssignees() {
        cy.get(this.assignees).should('contain', 'Lord Gaben');
    }

    confirmIssue() {
        cy.get(this.createIssueButton)
        .click()
    }

    confirmCreation() {
        cy.get(this.successMessage)
        .should('contain', 'Issue has been successfully created');
        cy.get(this.issuesList)
        .should('contain', this.fakeSentence);
    }

    validateSuccessfullIssue() {
        this.getCreateModal();
        this.fillShortSummary();
        this.assertShortSummary();
        this.fillDescription();
        this.assertDescription();
        this.selectAssignee();
        this.assertAssignees();
        this.confirmIssue();
        this.confirmCreation();
    }

    selectIssueTypeBug () {
        cy.get(this.issueType)
        .click('bottomRight');
        cy.get(this.issueTypeBug)
        .trigger('mouseover')
        .trigger('click');
    }

    selectHighestPriority() {
        cy.get(this.priorityType).click('bottomRight');
        cy.get(this.priorityTypeHighest).click();

    }

    selectPickleRick () {
        cy.get(this.assignees)
        .click('bottomRight');
        cy.get(this.assigneePickleRick)
        .click(); 
    }

    assertPickleRick() {
        cy.get(this.assignees).should('contain', 'Pickle Rick');
    }

    assertBugIcon () {
        cy.get(this.bugIcon).should('be.visible')
    }

    createValidateBug () {
        this.getCreateModal();
        this.selectIssueTypeBug ();
        this.fillShortSummary();
        this.assertShortSummary();
        this.fillDescription();
        this.assertDescription();
        this.selectPickleRick();
        this.assertPickleRick();
        this.confirmIssue();
        this.confirmCreation();
        this.assertBugIcon();
    }
}


import { faker } from '@faker-js/faker';
export default new AssignmentModal();