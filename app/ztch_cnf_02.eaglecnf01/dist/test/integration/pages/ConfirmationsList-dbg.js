sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztchcnf02.eaglecnf01',
            componentId: 'ConfirmationsList',
            contextPath: '/Confirmations'
        },
        CustomPageDefinitions
    );
});