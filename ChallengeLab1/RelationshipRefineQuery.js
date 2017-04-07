(function refineQuery(current, parent) {
    var media = [];
    var gp = new GlideRecord("x_snc_media_librar_copy");
    gp.addQuery("media", parent.getValue("sys_id"));

    gp.query();

    while(gp.next())
	media.push(gp.getValue("media"));

    current.addQuery("sys_id", "IN", media.join());
})(current, parent);