// Karma config removed. Project now uses Vitest for testing (Angular 21+ default).
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
