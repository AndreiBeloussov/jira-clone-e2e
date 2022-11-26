const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://jira.ivorreic.com/project',
    defaultCommandTimeout: 30000,
    projectId: "hac4oa",
  },
});
