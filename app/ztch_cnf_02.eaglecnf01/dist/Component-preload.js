//@ui5-bundle ztchcnf02/eaglecnf01/Component-preload.js
sap.ui.require.preload({
	"ztchcnf02/eaglecnf01/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("ztchcnf02.eaglecnf01.Component",{metadata:{manifest:"json"}})});
},
	"ztchcnf02/eaglecnf01/i18n/i18n.properties":'# This is the resource bundle for ztchcnf02.eaglecnf01\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=EagleCnf01\n\n#YDES: Application description\nappDescription=Eagle Confirmations for Productions Orders (804* plants)\n\n#XFLD,30\nztchcnf02eaglecnf01-display.flpTitle=EagleCnf01\n',
	"ztchcnf02/eaglecnf01/manifest.json":'{"_version":"1.60.0","sap.app":{"id":"ztchcnf02.eaglecnf01","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.16.4","toolsId":"864e69c8-a276-4ab0-a1b4-d59cf049c4f4"},"dataSources":{"mainService":{"uri":"service/CnfSrv/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ztchcnf02eaglecnf01-display":{"semanticObject":"ztchcnf02eaglecnf01","action":"display","title":"{{ztchcnf02eaglecnf01-display.flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ztchcnf02.eaglecnf01.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"ConfirmationsList","target":"ConfirmationsList"},{"pattern":"Confirmations({key}):?query:","name":"ConfirmationsObjectPage","target":"ConfirmationsObjectPage"}],"targets":{"ConfirmationsList":{"type":"Component","id":"ConfirmationsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Confirmations","variantManagement":"Page","navigation":{"Confirmations":{"detail":{"route":"ConfirmationsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"ConfirmationsObjectPage":{"type":"Component","id":"ConfirmationsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Confirmations"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.ztch_cnf_02"}}'
});
//# sourceMappingURL=Component-preload.js.map
