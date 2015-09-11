sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sit.sheff.controller.App", {

		onItemSelect : function (oEvent) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oContext = oEvent.getSource().getBindingContext("tap");
			var sMsg = oBundle.getText("ratingMessage", [oContext.getProperty("beer/rating_score")]);
			MessageToast.show(sMsg);
		}

	});

});
