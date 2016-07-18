var app = angular.module('app.main', [
    'ngAnimate',
    'ngAria',
    'ngTouch',
    'ui.bootstrap',
    'pascalprecht.translate',
    'constants',
    'app.route',
    'auth.services',
    'navbar',
    'footer',
    'alert',
    'selfie',
    'grid',
    'tencent',
]);
app.factory('httpRequestInterceptor', function () {
    return {
        request: function (config) {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            return config;
        }
    };
});
app.run(function($rootScope) {
    $rootScope.site = 'Atyichu';
    $rootScope.THEME = '/static/theme/';
});
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.useApplyAsync(true);
});
app.config(function($resourceProvider) {
  $resourceProvider.defaults.stripTrailingSlashes = false;
});
app.config(['$locationProvider', function($locationProvider){
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);

app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'NO_PERMISSION': 'You have not enough privileges perform this action.',
        'ERROR': 'Error',
        'CONFIRM': 'Are you sure you want perform this action?',
        'FAIL': 'Fail',
        'SUCCESS': 'Success!',
        'COMMON': {
            'HOME': {
                'TITLE': 'Welcome!',
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
        },
        'STORE': {
            'CREATE': {
                'HEADER': 'Create a store',
                'ALREADY': 'You already have a store',
                'SUCCESS': 'Store has been created',
            },
            'UPDATE': {
                'HEADER': 'Edit your store',
                'SUCCESS': 'Your store information has been updated.',
                'FAIL': 'Fail trying update.',
                'UPDATE_PHOTO': 'Update photo',
                'UPDATE_DATA': 'Update data',
            },
            'FORM': {
                'BRAND_NAME': 'Brand name',
                'STATE': 'State',
                'CITY': 'City',
                'DISTRICT': 'District',
                'STREET': 'Street',
                'BUILD_NAME': 'Building name',
                'BUILD_NO': 'Building number',
                'APT': 'Apartments',
                'PHOTO': 'Photo',
                'CROP': 'Crop',
                'SUBMIT': 'Submit',
                'CANCEL': 'Cancel',
                'LOCATION': 'Location',
                'NO_PHOTO': 'No photo',
            },
            'MY': {
                'HEADER': 'Your store overview',
                'ADD_BRAND': 'Add a brand',
                'ADD_COLOR': 'Add a color',
                'ADD_SIZE': 'Add a size',
            },
            'MODAL': {
                'TITLE_PLACE': 'Enter a title',
                'PRIORITY_PLACE': 'Enter a priority',
                'COLOR_PLACE': 'Enter a html (hex) color',
            },
         },
        'GROUP': {
            'CREATE': {
                'HEADER': 'Create a wardrobe',
            },
            'LIST': {
                'NO_GROUPS': 'No groups',
                'UPLOAD': 'Upload a photo',
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
            },
            'EDIT': {
                'HEADER': 'Edit photo data',
                'DATA_UPDATED': 'Data has been updated',
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
            }
        }
    });

    $translateProvider.translations('zh', {
        'NO_PERMISSION': 'You have not enough privileges perform this action.',
        'ERROR': 'Error',
        'CONFIRM': 'Are you sure you want perform this action?',
        'FAIL': 'Fail',
        'SUCCESS': 'Success',
        'COMMON': {
            'HOME': {
                'TITLE': 'Welcome!',
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
        },
        'STORE': {
            'CREATE': {
                'HEADER': 'Create a store',
                'ALREADY': 'You already have a store',
                'SUCCESS': 'Store has been created',
            },
            'UPDATE': {
                'HEADER': 'Edit your store',
                'SUCCESS': 'Your store information has been updated.',
                'FAIL': 'Fail trying update.',
                'UPDATE_PHOTO': 'Update photo',
                'UPDATE_DATA': 'Update data',
            },
            'FORM': {
                'BRAND_NAME': 'Brand name',
                'STATE': 'State',
                'CITY': 'City',
                'DISTRICT': 'District',
                'STREET': 'Street',
                'BUILD_NAME': 'Building name',
                'BUILD_NO': 'Building number',
                'APT': 'Apartments',
                'PHOTO': 'Photo',
                'CROP': 'Crop',
                'SUBMIT': 'Submit',
                'CANCEL': 'Cancel',
                'LOCATION': 'Location',
                'NO_PHOTO': 'No photo',
            },
            'MY': {
                'HEADER': 'Your store overview',
                'ADD_BRAND': 'Add a brand',
                'ADD_COLOR': 'Add a color',
                'ADD_SIZE': 'Add a size',
            },
            'MODAL': {
                'TITLE_PLACE': 'Enter a title',
                'PRIORITY_PLACE': 'Enter a priority',
                'COLOR_PLACE': 'Enter a html (hex) color',
            }
         },
        'GROUP': {
            'CREATE': {
                'HEADER': 'Create a wardrobe',
            },
            'LIST': {
                'NO_GROUPS': 'No groups',
                'UPLOAD': 'Upload a photo',
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
            },
            'EDIT': {
                'HEADER': 'Edit photo data',
                'DATA_UPDATED': 'Data has been updated',
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
            }
        }
    });

  $translateProvider.preferredLanguage('zh');
}]);