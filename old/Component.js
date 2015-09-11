jQuery.sap.declare("sit.sheff.Component");

sap.ui.core.UIComponent.extend("sit.sheff.Component", {
	metadata : {},

	init : function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// Create and set domain model to the component
		var oModel = new sap.ui.model.json.JSONModel("model/sheffieldtap.json");
		this.setModel(oModel, "tap");

		// set i18n model
		var oI18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/i18n.properties"
		});
		this.setModel(oI18nModel, "i18n");
	},

	createContent : function () {
		return sap.ui.view({
			viewName : "sit.sheff.view.App",
			type : "XML"
		});
	}
});
