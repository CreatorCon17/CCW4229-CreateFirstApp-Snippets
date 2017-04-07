(function executeRule(current, previous /*null when async*/) {
    if (current.active.changes()) {
	var copyID = current.getValue('loaned_item');
	var copy = new GlideRecord('x_snc_media_librar_copy');
	copy.get(copyID);
	if (current.active) {
	    copy.setValue('status', 'Loaned');
	} else {
	    copy.setValue('status','Available');
	}
	copy.update();
    }

})(current, previous);