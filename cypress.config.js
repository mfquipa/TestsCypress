const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, 
  screenshotsFolder: 'cypress/screenshots', 
  screenshotOnRunFailure: true, 
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Carpeta donde se guardan los reportes
    overwrite: false,
    html: true,
    json: true,
    reportFilename: 'report',
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true, // Incrustar capturas de pantalla en el informe
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
  },
});
