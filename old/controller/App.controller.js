jQuery.sap.require("sit.sheff.util.formatter");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sit.sheff.controller.App", {
	onItemSelect : function (oEvent) {
		var oBundle = this.getView().getModel("i18n").getResourceBundle();
		var oContext = oEvent.getSource().getBindingContext("tap");
		var sMsg = oBundle.getText("ratingMessage", [oContext.getProperty("beer/rating_score")]);
		sap.m.MessageToast.show(sMsg);
	}
});
