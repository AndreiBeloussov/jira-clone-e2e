import ws21Assignment from "../../pages/ws21Assignment";

describe('Workshop 21 assignment', () => {
    beforeEach(() => {


        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
            cy.visit(url + '/board');

        });
});

it('Open recently created issue and delete it', () => {
    // //Open recently created issue
    // cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
    // //Delete issue
    // cy.get('[data-testid="icon:trash"]').click();
    // cy.get('.dIxFno').click();
    // //Assert that issue is deleted
    // cy.get('[data-testid="board-list:backlog"]').should('not.contain','This is an issue of type: Task.');
    ws21Assignment.taskOne();
});

it('Start deletion process for recently created issue, but cancel it', () => {
    // //Open recently created issue
    // cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
    // //Delete issue
    // cy.get('[data-testid="icon:trash"]').click(); 
    // //Cancel delete
    // cy.get('.sc-kgoBCf > .ewzfNn').click();
    // //Assert it is not deleted
    // cy.get('.sc-cbkKFq').should('be.visible');

    ws21Assignment.taskTwo();
    

});


});

