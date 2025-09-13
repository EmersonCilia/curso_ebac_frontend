/// <reference types="cypress"/>

describe('Testes para a adicão, alteração e exclusão de contatos da agenda de contatos', () => {

    beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

    it('Deve incluir um contato', () => {
        cy.get('input[placeholder="Nome"]').type('Teste Usuário')
        cy.get('input[placeholder="E-mail"]').type('teste@usuario.com')
        cy.get('input[placeholder="Telefone"]').type('11999999999')
        cy.contains('button', 'Adicionar').click()

        cy.contains('Teste Usuário').should('be.visible')
        cy.contains('teste@usuario.com').should('be.visible')
        cy.contains('11999999999').should('be.visible')
    })

    it('Deve alterar um contato', () => {
        cy.contains('Teste Usuário').closest('.sc-beqWaB').find('button.edit').click()

        cy.get('input[placeholder="Nome"]').clear().type('Usuário Alterado')
        cy.get('input[placeholder="E-mail"]').clear().type('alterado@usuario.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11888888888')
        cy.contains('button', 'Salvar').click()

        cy.contains('Usuário Alterado').should('be.visible')
        cy.contains('alterado@usuario.com').should('be.visible')
        cy.contains('11888888888').should('be.visible')
    })

    it('Deve remover um contato', () => {
        cy.contains('Usuário Alterado').closest('.sc-beqWaB').find('button.delete').click()

        cy.contains('Usuário Alterado').should('not.exist')
    })
})
