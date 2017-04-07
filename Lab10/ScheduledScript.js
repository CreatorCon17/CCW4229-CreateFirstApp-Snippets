(function checkForDueLoans() {
    var gr = new GlideRecord('x_snc_media_librar_loan');
    gr.addActiveQuery();
    gr.addEncodedQuery('due_date<=javascript:gs.daysAgoEnd(-1)');
    gr.query();
    
    while (gr.next()) {
	gs.eventQueue('x_snc_media_librar.loan_due', gr);
    }
})();