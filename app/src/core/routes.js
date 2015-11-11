angular.module('myApp.core.router')
    .config(['$routeProvider',
        function ($routeProvider) {
            'use strict';

            $routeProvider.
                when('/home', {
                    templateUrl: 'src/core/views/_home.html',
                    // controller: 'HomeControl'
                }).
                otherwise({
                    redirectTo: '/home'
                });
        }
    ])
    .value('localeConf', {
        basePath: './localization/languages',
        defaultLocale: 'en-US',
        sharedDictionary: 'common',
        fileExtension: '.lang.json',
        persistSelection: true,
        cookieName: 'COOKIE_LOCALE_LANG',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
        delimiter: '::'
    })
    .value('localeSupported', [
        'en-US',
        'fr-FR'
    ]);
