jQuery.sap.declare("sit.sheff.util.formatter");

sit.sheff.util.formatter = {
	recommended : function(score) {
		if (score && score > 3.75) {
			return "Recommended!";
		}
	}
};
