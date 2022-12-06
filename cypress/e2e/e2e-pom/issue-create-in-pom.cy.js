/**
 * Workshop #14
 * This is an example file and approach for OOP in Cypress
 */
/// <reference types="Cypress" />
import IssueModal from "../../pages/IssueModal";

describe('Issue create', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET','**/currentUser').as('currentUserApiRequest')
<<<<<<< HEAD
<<<<<<< Updated upstream
    cy.url().should('eq', 'http://34.247.67.214:8080/project').then((url) => {
=======
    cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
>>>>>>> Stashed changes
=======
    cy.url().should('eq', 'https://jira.ivorreic.com/project').then((url) => {
>>>>>>> 7686df2a8bdf06f93d64b633bb15e9bbb1f5d0e1
      cy.wait('@currentUserApiRequest')
      cy.visit(url + '/settings?modal-issue-create=true');
    });
  });

  const issueDetails = {
    title: "TEST_TITLE",
    type: "Bug",
    description: "TEST_DESCRIPTION",
    assignee: "Lord Gaben",
  };

  const EXPECTED_AMOUNT_OF_ISSUES = '5';

  it('Should create issue successfully', () => {
    IssueModal.createIssue(issueDetails);
    IssueModal.ensureIssueIsCreated(EXPECTED_AMOUNT_OF_ISSUES, issueDetails);
  });
});
