const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  projectId: "sfsp2y",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
