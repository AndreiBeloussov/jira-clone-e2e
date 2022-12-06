import AssignmentModal from "../../pages/AssignmentModal";



describe('Workshop 20 assignment', () => {
    beforeEach(() => {


        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
            cy.visit(url + '/board');

        });
    });

    it('Create new issue when no information is added to mandatory fields, validate system gives appropriate error message', () => {
        AssignmentModal.createValidateIssue();
    });

    it('Issue is created, issue is visible on the board. Validated issue information is correct (on the board).', () => {
        AssignmentModal.validateSuccessfullIssue();

    });

    it('Issue is created, issue is visible on the board. Validated issue information is correct ', () => {
        AssignmentModal.createValidateBug ();
    });

});


