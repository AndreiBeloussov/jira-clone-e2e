import ws23Assignment from "../../pages/ws23Assignment"; 

describe('Workshop 23 assignment', () => {
    beforeEach(() => {


        cy.visit('/');
        cy.url().should('eq', `${Cypress.env('baseUrl')}project`).then((url) => {
            cy.visit(url + '/board');

        });
    });

    it('Add, update, delete estimations', () => {
        //Open new issue modal
        cy.get('[data-testid="icon:plus"]').click();
        //Give a name to the issue
        cy.wait(2000);
        cy.get('input[name="title"]').type('WS 23 assignment');
        //Fill the description
        cy.get('.ql-editor').type('Some text');
        //Confirm new issue creation
        cy.get('.dIxFno').click();
        //Assert that issue is created successfully
        cy.get('.sc-jqCOkK').should('contain','Issue has been successfully created');
        cy.wait(15000);
        cy.get('[data-testid="board-list:backlog"] p').eq(0).should('contain','WS 23 assignment')
        //Open newly created issue
        cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
        //Assert that estimation is empty
        cy.get('.sc-fYiAbW > .sc-kpOJdX > .sc-dxgOiQ').should('be.empty');
        //Assert No time logged
        cy.get('.sc-fYiAbW').should('contain','No time logged');
        //Set estimation 10h
        cy.get('.sc-fYiAbW > .sc-kpOJdX > .sc-dxgOiQ').click().type('10');
        cy.get('.sc-cbkKFq').click();
        //Close Modal
        cy.get('[data-testid="icon:close"]').click();
        //Reopen the issue
        cy.wait(5000);
        cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
        //Assert estimation is there
        cy.wait(5000);
        cy.get('.sc-fYiAbW').should('contain','10h estimated');
        //Change estimation to 20h
        cy.get('.sc-fYiAbW > .sc-kpOJdX > .sc-dxgOiQ').click().clear().type('20');
        //Close modal
        cy.get('[data-testid="icon:close"]').click();
        //Reopen the issue
        cy.wait(5000);
        cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
        //Assert estimation is there
        cy.wait(5000);
        cy.get('.sc-fYiAbW').should('contain','20h estimated');
        //Delete estimation
        cy.get('.sc-fYiAbW > .sc-kpOJdX > .sc-dxgOiQ').click().clear();
        //Close modal
        cy.get('[data-testid="icon:close"]').click();
        //Reopen the issue
        cy.wait(5000);
        cy.get('[data-testid="board-list:backlog"] p').eq(0).click();
        //Assert estimation is empty
        cy.get("div>input[placeholder='Number']").should('be.visible');
    });

    it.only('OOP test', () => {
        ws23Assignment.WholeAssignment();
    });

});