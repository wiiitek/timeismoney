// this file is copied from
// https://angular.io/guide/testing#configuration
// and required to configure coverage reporter
// (defaults are HTML only report and we need something for SonarQube)
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-junit-reporter"),
      require("karma-coverage"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    junitReporter: {
      outputDir: "test-results",
      outputFile: "junit.xml",
      useBrowserName: false,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/"),
      subdir: ".",
      // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
      reporters: [
        { type: "html" },
        { type: "text-summary" },
        { type: "lcov" }
      ],
    },
    reporters: ["progress", "kjhtml", "coverage", "junit"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
