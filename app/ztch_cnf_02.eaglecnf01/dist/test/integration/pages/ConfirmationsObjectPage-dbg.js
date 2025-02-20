sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ztchcnf02.eaglecnf01',
            componentId: 'ConfirmationsObjectPage',
            contextPath: '/Confirmations'
        },
        CustomPageDefinitions
    );
});