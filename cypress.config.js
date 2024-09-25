const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automaty-gd3cb.ondigitalocean.app', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
