sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sit.sheff.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {

			UIComponent.prototype.init.apply(this, arguments);

			var mConfig = this.getMetadata().getConfig();
			var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			var sProductsPath = jQuery.sap.getModulePath(sNamespace, mConfig.sheffieldVenue);
			var oProductsModel = new JSONModel(sProductsPath);
			this.setModel(oProductsModel, "tap");

		}

	});

});
