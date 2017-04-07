(function loanCopy(current) {
    var copyID = current.sys_id;
    var gr = new GlideRecord("x_snc_media_librar_loan");
    gr.setValue('loaned_item', copyID);
    gr.insert();
    action.setRedirectURL(gr);
})(current);