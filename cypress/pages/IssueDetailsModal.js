import { faker } from '@faker-js/faker';

class IssueDetailsModal {

    constructor() {
        this.IssueDetailsModal = '[data-testid="modal:issue-details"] > div';
        this.issueType = '[data-testid="select:type"]';
        this.issueTypeStory = '[data-testid="select-option:Story"]';
        this.issueStatus = '[data-testid="select:status"]';
        this.statusTypeDone = '[data-testid="select-option:Done"]';
        this.assignees = '[data-testid="select:assignees"]';
        this.assigneeLordGaben = '[data-testid="select-option:Lord Gaben"]';
        this.assigneeBabyYoda = '[data-testid="select-option:Baby Yoda"]';
        this.assigneePickleRick = '[data-testid="select-option:Pickle Rick"]';
        this.reporter = '[data-testid="select:reporter"]';
        this.priorityType = '[data-testid="select:priority"]';
        this.priorityTypeMedium = '[data-testid="select-option:Medium"]';
        this.issueTitle = 'textarea[placeholder="Short summary"]';
        this.title = faker.word.adjective();
        this.issueDescription = '.ql-editor';
        this.description = faker.lorem.paragraph();
        this.deleteButton = `button ${'[data-testid="icon:trash"]'}`;
        this.confirmModal = '[data-testid="modal:confirm"]';
    }



    getIssueDetailsModal() {
        return cy.get(this.IssueDetailsModal)
    }

    selectIssueType() {
        cy.get(this.issueType).click('bottomRight');
        cy.get(this.issueTypeStory)
            .trigger('mouseover')
            .trigger('click');

        cy.get(this.issueType).should('contain', 'Story')
    }

    selectIssueStatus() {
        cy.get(this.issueStatus).click('bottomRight')
        cy.get(this.statusTypeDone).click()
        cy.get(this.issueStatus).should('have.text', 'Done')
    }

    selectAssignees() {
        cy.get(this.assignees).click('bottomRight')
        cy.get(this.assigneeLordGaben).click()
        cy.get(this.assignees).click('bottomRight')
        cy.get(this.assigneeBabyYoda).click()
        
    }

    assertAssignees() {
        cy.get(this.assignees).should('contain', 'Baby Yoda')
        cy.get(this.assignees).should('contain', 'Lord Gaben')
    }

    selectReporter() {
        cy.get(this.reporter).click('bottomRight')
        cy.get(this.assigneePickleRick).click()
        cy.get(this.reporter).should('have.text', 'Pickle Rick')
    }

    selectPriorityType() {
        cy.get(this.priorityType).click('bottomRight')
        cy.get(this.priorityTypeMedium).click()
        cy.get(this.priorityType).should('contain', 'Medium')

    }

    issueUpdate() {

        this.selectIssueType();
        this.selectIssueStatus();
        this.selectAssignees();
        this.assertAssignees();
        this.selectReporter();
        this.selectPriorityType();

    }

    selectIssueTitle() {
        cy.get(this.issueTitle).clear()
            .type(this.title)
            .blur()

    }

    clearIssueDescription() {
        cy.get('.ql-snow').click()
            .should('not.exist');

    }

    selectIssueDescription() {
        cy.get(this.issueDescription).clear().type(this.description)
    }

    assertIssueTitle() {
        cy.get(this.issueTitle).should('have.text', this.title)
    }

    assertIssueDescription() {
        cy.get(this.issueDescription).should('have.text', this.description);
    }

    issueTitleDescriptionUpdate() {
        this.selectIssueTitle();
        this.clearIssueDescription();
        this.selectIssueDescription();
        this.assertIssueTitle();
        this.assertIssueDescription();

    }

    selectDeleteButton() {
        cy.get(this.deleteButton).click()
    }

    getConfirmModal() {
        cy.get(this.confirmModal)
       .contains('button', 'Delete issue') 
       .click()
    }

    assertDeletion() {
        cy.get(this.confirmModal).should('not.exist')
        cy.contains('This is an issue of type: Task.').should('not.exist')
    }

    issueDelete () {
        this.selectDeleteButton();
        this.getConfirmModal();
        this.assertDeletion();
    }

    RegexReporter () {
        cy.get(this.reporter).invoke('text').should('match', /^[A-Za-z ]*$/ );
    }


}

export default new IssueDetailsModal();