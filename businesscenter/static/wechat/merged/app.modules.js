var app = angular.module('app.main', [
    'ngAnimate',
    'ngAria',
    'ngTouch',
    'ui.bootstrap',
    'asyncload.services',
    'pascalprecht.translate',
    'app.constants',
    'app.route',
    'auth.services',
    'weixinapi',
    'navbar',
    'footer',
    'alert',
    'selfie',
    'grid',
    'user.directives',
    'group.services',

]);
app.factory('httpRequestInterceptor', function() {
    return {
        request: function(config) {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            return config;
        }
    };
});
app.run(['$rootScope','$q','Visitor', function($rootScope, $q, Visitor) {
    /*Initialization*/
    $rootScope.site = '哎特衣橱';
    $rootScope.THEME = '/static/theme/';
    $rootScope.PATH = '/static/wechat/merged/';
    $rootScope.alerts = [];
    $rootScope.notifications = [];

    $rootScope.add_notification = function (notification) {
        $rootScope.notifications.push(notification);
    }

    var follow_d = $q.defer();
    $rootScope.follow_promise = follow_d.promise;

    // $rootScope.following -- a list of users which authenticating user is following

    var unwatch = $rootScope.$watch('visitor', function(newValue, oldValue) {
        if (newValue) {
            if (newValue.hasOwnProperty('$promise')) {
                newValue.$promise.then(function(success) {
                    $rootScope.following = Visitor.get_follow_users(
                        function(success){
                            follow_d.resolve();
                        }
                    );
                });

            } else {
                $rootScope.following = Visitor.get_follow_users(
                    function(success){
                        follow_d.resolve();
                    }
                );
            }
            unwatch();
        }
    });
}]);
app.config(function($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.useApplyAsync(true);
});
app.config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
});
app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en', {
        'NO_PERMISSION': 'You have not enough privileges perform this action.',
        'ERROR': 'Error',
        'CONFIRM': 'Are you sure you want perform this action?',
        'FAIL': 'Fail',
        'SUCCESS': 'Success!',
        'LOAD_MORE': 'Load more',
        'COMMON': {
            'HOME': {
                'TITLE': 'Welcome!',
            },
            'ERROR': {
                '404': '404: Page Not Found',
            },
        },
        'FORM': {
            'CANCEL': 'Cancel',
            'SUBMIT': 'Submit',
            'ADD': 'Add',
            'DELETE': 'Delete',
            'WAIT': 'Please wait...',
            'UPDATE': 'Update',
        },
        'AUTHENTICATION': {
            'REQUIRED': 'Please, log in.',
            'SUCCESS': 'Welcome back!',
            'ERROR': 'Authentication error',
            'LOGOUT': 'Good by',
            'PROFILE_UPDATE': 'Profile has been updated',

        },
        'NAVBAR': {
            'MODAL': {
                'CLOSE': 'Close',
                'TITLE': 'Sign in',
                'USERNAME': 'Username',
                'PASSWORD': 'Password',
                'ENTER': 'Enter',
                'FORGOT': 'I forgot my password',
            },
            'TOGGLE_NAV': 'Toggle Navigation',
            'LOGGED': 'You logged as {{username}}',
            'PROFILE': 'My profile',
            'STORE': 'My store',
            'LOGOUT': 'Logout',
            'SIGN': 'Sign',
            'SIGN_IN': 'Sign in',
            'CHANGE_PASSWORD': 'Change password',
            'SYNC': 'Sync profile',
        },
        'FOOTER': {
            'DISCOVERY': 'Discovery',
            'ADD_GROUP': 'Add',
            'LIKED': 'Liked',
            'ME': 'Me',
        },
        'SELFIE': {
            'GROUPS': 'Groups',
            'PHOTOS': 'Photos',
        },
        'GROUP': {
            'CREATE': {
                'HEADER': 'Create a wardrobe',
            },
            'LIST': {
                'NO_GROUPS': 'No groups',
                'UPLOAD': 'Upload a photo',
                'PHOTO_COUNT': '{{photo_count}} photo(s)',
                'MEMBER_COUNT': 'Collaborators ({{member_count}})',

            },
            'MANAGE': {
                'HEADER': 'Edit a wardrobe',
                'MEMBER_EXCLUDED': 'Collaborator has been excluded',
                'TAG_REMOVED': 'Tag has been removed',
            },
            'FORM': {
                'TITLE': 'Title',
                'DESCRIPTION': 'Description',
                'IS_PRIVATE': 'Private',
                'MEMBERS': 'Collaborators',
                'FILE': 'File',
                'NO_MEMBERS': 'You did not choose any collaborator.',
            },
            'PHOTO_ADD': {
                'HEADER': 'Upload a photo to {{title}}',
                'SUCCESS': 'Photo has been added to your group',
            },
            'PHOTO_LIST': {
                'UPLOAD': 'Upload a photo',
                'TAGS': 'Tags',
                'MEMBERS': 'Collaborators',
                'PHOTO_LIKED': 'You have liked the photo already',
                'SAVED_TO': 'Saved to',
                'SAVED_FROM': 'Saved from',
            },
            'MY': {
                'HEADER': 'My wardrobes',
                'INVITE': 'Invite',
                'DELETE': 'Delete',
                'SET_PUBLIC': 'Set public',
                'SET_PRIVATE': 'Set private',
            }
        },
        'PHOTO': {
            'CLONE': {
                'HEADER': 'Share a photo',
                'CHOOSE_GROUP': 'Choose a group',
                'CLONED': 'Photo has been shared.',
            },
            'DETAIL': {
                'LIKE': 'Like',
                'REPLY': 'Reply',
                'DELETED': 'Photo has been deleted.',
                'SIMILAR': 'Similar Photos',
                'EMPTY_COMMENT': 'You have to type something.',
                'COMMENT': 'Your comment is posted',
            },
            'EDIT': {
                'HEADER': 'Edit photo data',
                'DATA_UPDATED': 'Data has been updated',
                'ADD_LINK': 'You can add up to three commodity links',
                'LINK_REMOVED': 'Link to the commodity has been removed',
                'LINKS': 'Links to commodities',
                'NEW_LINKS': 'Links to bind',
            },
            'LIST': {
                'HEADER': 'Photo list',
                'TAKE_SNAPSHOT': 'Take a snapshot',
                'NOT_WORK': 'Will not work',
                'CREATED': 'Photo has been created.',
            },
            'FORM': {
                'TITLE': 'Title',
                'DESCRIPTION': 'Description',
                'GROUP': 'Group',
            }
        },
        'COMMODITY': {

            'DETAIL': {
                'HEADER': 'Commodity',
            },
            'FORM': {
                'EMPTY': 'Please, choose one from the list',
                'TITLE': 'Title',
                'CATEGORY': 'Catalog',
                'KIND': 'Kind',
                'BRAND': 'Brand',
                'COLOR': 'Color',
                'SIZE': 'Size',
                'SEASON': 'Season',
                'YEAR': 'Year',
                'EXTRA_COLOR': 'Extra color',
                'COLOR_PIC': 'Sample of color',
                'FILES': 'Photos',
            },
        },
        'USER': {
            'BAR': {
                'LOGIN': 'Sign in',
                'REG': 'Sign up',
                'RESET': 'I forgot my password',
            },
            'FORM': {
                'USERNAME': 'Username',
                'PHONE': 'Phone',
                'EMAIL': 'Email',
                'AVATAR': 'Avatar',
                'PASSWORD': 'Password',
                'NEW_PASSWORD': 'New password',
                'CONFIRM_PASSWORD': 'Confirm password',
                'CODE': 'Verification code',
                'STEP': 'Step',
            },
            'ME': {
                'HEADER': 'My profile',
                'CONNECT': 'Connect weixin account',
            },
            'PASSWORD': {
                'HEADER': 'Change password',
            },
            'SET_PASSWORD': {
                'HEADER': 'Bind phone (and set up the password)'
            }
        }
    });

    $translateProvider.translations('zh', {
        'NO_PERMISSION': 'You have not enough privileges perform this action.',
        'ERROR': 'Error',
        'CONFIRM': 'Are you sure you want perform this action?',
        'FAIL': 'Fail',
        'SUCCESS': 'Success!',
        'LOAD_MORE': 'Load more',
        'COMMON': {
            'HOME': {
                'TITLE': 'Welcome!',
            },
            'ERROR': {
                '404': '404: Page Not Found',
            },
        },
        'FORM': {
            'CANCEL': 'Cancel',
            'SUBMIT': 'Submit',
            'ADD': 'Add',
            'DELETE': 'Delete',
            'WAIT': 'Please wait...',
            'UPDATE': 'Update',
        },
        'AUTHENTICATION': {
            'REQUIRED': 'Please, log in.',
            'SUCCESS': 'Welcome back!',
            'ERROR': 'Authentication error',
            'LOGOUT': 'Good by',
            'PROFILE_UPDATE': 'Profile has been updated',

        },
        'NAVBAR': {
            'MODAL': {
                'CLOSE': 'Close',
                'TITLE': 'Sign in',
                'USERNAME': 'Username',
                'PASSWORD': 'Password',
                'ENTER': 'Enter',
                'FORGOT': 'I forgot my password',
            },
            'TOGGLE_NAV': 'Toggle Navigation',
            'LOGGED': 'You logged as {{username}}',
            'PROFILE': 'My profile',
            'STORE': 'My store',
            'LOGOUT': 'Logout',
            'SIGN': 'Sign',
            'SIGN_IN': 'Sign in',
            'CHANGE_PASSWORD': 'Change password',
            'SYNC': 'Sync profile',
        },
        'FOOTER': {
            'DISCOVERY': 'Discovery',
            'ADD_GROUP': 'Add',
            'LIKED': 'Liked',
            'ME': 'Me',
        },
        'SELFIE': {
            'GROUPS': 'Groups',
            'PHOTOS': 'Photos',
        },
        'GROUP': {
            'CREATE': {
                'HEADER': 'Create a wardrobe',
            },
            'LIST': {
                'NO_GROUPS': 'No groups',
                'UPLOAD': 'Upload a photo',
                'PHOTO_COUNT': '{{photo_count}} photo(s)',
                'MEMBER_COUNT': 'Collaborators ({{member_count}})',

            },
            'MANAGE': {
                'HEADER': 'Edit a wardrobe',
                'MEMBER_EXCLUDED': 'Collaborator has been excluded',
                'TAG_REMOVED': 'Tag has been removed',
            },
            'FORM': {
                'TITLE': 'Title',
                'DESCRIPTION': 'Description',
                'IS_PRIVATE': 'Private',
                'MEMBERS': 'Collaborators',
                'FILE': 'File',
                'NO_MEMBERS': 'You did not choose any collaborator.',
            },
            'PHOTO_ADD': {
                'HEADER': 'Upload a photo to {{title}}',
                'SUCCESS': 'Photo has been added to your group',
            },
            'PHOTO_LIST': {
                'UPLOAD': 'Upload a photo',
                'TAGS': 'Tags',
                'MEMBERS': 'Collaborators',
                'PHOTO_LIKED': 'You have liked the photo already',
                'SAVED_TO': 'Saved to',
                'SAVED_FROM': 'Saved from',
            },
            'MY': {
                'HEADER': 'My wardrobes',
                'INVITE': 'Invite',
                'DELETE': 'Delete',
                'SET_PUBLIC': 'Set public',
                'SET_PRIVATE': 'Set private',
            }
        },
        'PHOTO': {
            'CLONE': {
                'HEADER': 'Share a photo',
                'CHOOSE_GROUP': 'Choose a group',
                'CLONED': 'Photo has been shared.',
            },
            'DETAIL': {
                'LIKE': 'Like',
                'REPLY': 'Reply',
                'DELETED': 'Photo has been deleted.',
                'SIMILAR': 'Similar Photos',
                'EMPTY_COMMENT': 'You have to type something.',
                'COMMENT': 'Your comment is posted',
            },
            'EDIT': {
                'HEADER': 'Edit photo data',
                'DATA_UPDATED': 'Data has been updated',
                'ADD_LINK': 'You can add up to three commodity links',
                'LINK_REMOVED': 'Link to the commodity has been removed',
                'LINKS': 'Links to commodities',
                'NEW_LINKS': 'Links to bind',
            },
            'LIST': {
                'HEADER': 'Photo list',
                'TAKE_SNAPSHOT': 'Take a snapshot',
                'NOT_WORK': 'Will not work',
                'CREATED': 'Photo has been created.',
            },
            'FORM': {
                'TITLE': 'Title',
                'DESCRIPTION': 'Description',
                'GROUP': 'Group',
            }
        },
        'COMMODITY': {

            'DETAIL': {
                'HEADER': 'Commodity',
            },
            'FORM': {
                'EMPTY': 'Please, choose one from the list',
                'TITLE': 'Title',
                'CATEGORY': 'Catalog',
                'KIND': 'Kind',
                'BRAND': 'Brand',
                'COLOR': 'Color',
                'SIZE': 'Size',
                'SEASON': 'Season',
                'YEAR': 'Year',
                'EXTRA_COLOR': 'Extra color',
                'COLOR_PIC': 'Sample of color',
                'FILES': 'Photos',
            },
        },
        'USER': {
            'BAR': {
                'LOGIN': 'Sign in',
                'REG': 'Sign up',
                'RESET': 'I forgot my password',
            },
            'FORM': {
                'USERNAME': 'Username',
                'PHONE': 'Phone',
                'EMAIL': 'Email',
                'AVATAR': 'Avatar',
                'PASSWORD': 'Password',
                'NEW_PASSWORD': 'New password',
                'CONFIRM_PASSWORD': 'Confirm password',
                'CODE': 'Verification code',
                'STEP': 'Step',
            },
            'ME': {
                'HEADER': 'My profile',
                'CONNECT': 'Connect weixin account',
            },
            'PASSWORD': {
                'HEADER': 'Change password',
            },
            'SET_PASSWORD': {
                'HEADER': 'Bind phone (and set up the password)'
            }
        }
    });

    $translateProvider.preferredLanguage('en');
}]);
