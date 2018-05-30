'use strict';

module.exports = {
    rootUrl: 'https://github.com',
    gridUrl: 'http://localhost:4444/wd/hub',
    screenshotsDir: 'references',
    calibrate: false,
    tolerance: 50,
    httpTimeout: 30000,
    sessionRequestTimeout: 30000,

    sessionsPerBrowser: 3,
    suitesPerSession: 3,
    retry: 2,

    browsers: {
        'desktop-chrome': {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },

    sets: {
        local: {
            files: ['spec/tests/*.js'],
            browsers: ['desktop-chrome']
        }
    },

    system: {
        parallelLimit: 1,
        plugins: {
            'html-reporter': {
                enabled: true,
                path: 'gemini-report'
            },
            optipng: {
                level: 5
            }
        }
    }
};
