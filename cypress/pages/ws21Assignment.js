

class ws21Assignment {

constructor() {
this.openIssue = '[data-testid="board-list:backlog"] p';
this.deleteIssueButton = '[data-testid="icon:trash"]';
this.confirmDeleteButton = '.dIxFno' ;
this.cancelDeleteButton = '.sc-kgoBCf > .ewzfNn';
this.issuesList = '[data-testid="board-list:backlog"]';
this.IssueModal = '.sc-cbkKFq' ;
}

openModal() {
    cy.get(this.openIssue).eq(0)
    .click();
}

deleteIssue() {
cy.get(this.deleteIssueButton)
.click();
cy.get(this.confirmDeleteButton)
.click();

}

assertDeletion() {
    cy.get(this.issuesList)
    .should('not.contain','This is an issue of type: Task.')

}

taskOne() {
this.openModal();
this.deleteIssue();
this.assertDeletion();
}

cancelDeletion() {
    cy.get(this.deleteIssueButton)
.click();
cy.get(this.cancelDeleteButton)
.click();
}

assertNotDeleted() {
    cy.get(this.IssueModal)
    .should('be.visible');
}

}

export default new ws21Assignment(); 