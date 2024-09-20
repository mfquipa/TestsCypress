        describe("Login Tests",()=>{
            const users=[
                {email: "user@alternova.com", password: "user@password1"},
                {email: "user2@alternova.com", password: "user@password2" }
            ]
            beforeEach(() => {
                cy.visit('http://localhost:5173/auth/sign-in')
            })

            users.forEach((user)=>{
            it("Debería iniciar sesión correctamente con credenciales válidas de ${user.email}", ()=>{
                cy.get("#email").type(user.email)
                cy.get("#password").type(user.password)
                cy.get('[data-testid="login-submit"]').click()
                cy.url().should('include','/dashboard')
            })
    

        describe('Login Tests', () => {
            it('Usuario válido y contraseña inválida', () => {
                cy.get('#email').type('user@alternova.com')
                cy.get('#password').type('incorrectpassword')
                cy.get('[data-testid="login-submit"]').click()
                cy.on('window:alert', (text) => {
                expect(text).to.equal('Login failed. Please try again')
            })
        })
    })

            describe('Login Tests', () => {
                it('Autenticación social con Google fallida', () => {
                        cy.get('button').contains('Sign in with Google').should('be.visible');
                        cy.get('.btn-google-sign-in').click()
                        cy.window().then(win => {
                            cy.stub(win, 'open').as('windowOpen')
                            })
                        cy.wait(2000);
                        cy.on('window:alert', (text) => {
                        expect(text).to.equal('Login with Google failed. Please try again')

                    
                })
            })
        })
        })
    })