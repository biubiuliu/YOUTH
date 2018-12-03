define("arale/upload/1.1.0/upload", ["$"], function(a, b, c) {
    function d(a) { if (!(this instanceof d)) return new d(a);
        e(a) && (a = { trigger: a }); var b = { trigger: null, name: null, action: null, data: null, accept: null, change: null, error: null, multiple: !0, success: null };
        a && j.extend(b, a); var c = j(b.trigger);
        b.action = b.action || c.data("action") || "/upload", b.name = b.name || c.data("name") || "file", b.data = b.data || g(c.data("data")), b.accept = b.accept || c.data("accept"), b.success = b.success || c.data("success"), this.settings = b, this.setup(), this.bind() }

    function e(a) { return "[object String]" === Object.prototype.toString.call(a) }

    function f(a) { if (!a) return []; var b, c = []; for (var d in a) b = document.createElement("input"), b.type = "hidden", b.name = d, b.value = a[d], c.push(b); return c }

    function g(a) { if (!a) return {}; for (var b = {}, c = a.split("&"), d = function(a) { return decodeURIComponent(a.replace(/\+/g, " ")) }, e = 0; e < c.length; e++) { var f = c[e].split("="),
                g = d(f[0]),
                h = d(f[1]);
            b[g] = h } return b }

    function h(a) { for (var b = a.parentsUntil("body"), c = 0, d = 0; d < b.length; d++) { var e = b.eq(d); "static" !== e.css("position") && (c = parseInt(e.css("zIndex"), 10) || c) } return c }

    function i(a) { if (!(this instanceof i)) return new i(a);
        e(a) && (a = { trigger: a }); var b = j(a.trigger),
            c = [];
        b.each(function(b, e) { a.trigger = e, c.push(new d(a)) }), this._uploaders = c } var j = a("$"),
        k = 0;
    d.prototype.setup = function() { var a = "iframe-uploader-" + k;
        this.iframe = j('<iframe name="' + a + '" />').hide(), k += 1, this.form = j('<form method="post" enctype="multipart/form-data"target="' + a + '" action="' + this.settings.action + '" />'); var b = this.settings.data;
        this.form.append(f(b)), window.FormData ? this.form.append(f({ _uploader_: "formdata" })) : this.form.append(f({ _uploader_: "iframe" })); var c = document.createElement("input");
        c.type = "file", c.name = this.settings.name, this.settings.accept && (c.accept = this.settings.accept), this.settings.multiple && (c.multiple = !0, c.setAttribute("multiple", "multiple")), this.input = j(c); var d = j(this.settings.trigger); return this.input.attr("hidefocus", !0).css({ position: "absolute", top: 0, right: 0, opacity: 0, outline: 0, cursor: "pointer", height: d.outerHeight(), fontSize: Math.max(64, 5 * d.outerHeight()) }), this.form.append(this.input), this.form.css({ position: "absolute", top: d.offset().top, left: d.offset().left, overflow: "hidden", width: d.outerWidth(), height: d.outerHeight(), zIndex: h(d) + 10 }).appendTo("body"), this }, d.prototype.bind = function() { var a = this,
            b = j(a.settings.trigger);
        b.mouseenter(function() { a.form.css({ top: b.offset().top, left: b.offset().left, width: b.outerWidth(), height: b.outerHeight() }) }), a.bindInput() }, d.prototype.bindInput = function() { var a = this;
        a.input.change(function(b) { a._files = this.files || [{ name: b.target.value }]; var c = a.input.val(); if (a.settings.change) a.settings.change.call(a, a._files);
            else if (c) return a.submit() }) }, d.prototype.submit = function() { var a = this; if (window.FormData && a._files) { var b = new FormData(a.form.get(0));
            b.append(a.settings.name, a._files); var c; return a.settings.progress && (c = function() { var b = j.ajaxSettings.xhr(); return b.upload && b.upload.addEventListener("progress", function(b) { var c = 0,
                        d = b.loaded || b.position,
                        e = b.total;
                    b.lengthComputable && (c = Math.ceil(d / e * 100)), a.settings.progress(b, d, e, c, a._files) }, !1), b }), j.ajax({ url: a.settings.action, type: "post", processData: !1, contentType: !1, data: b, xhr: c, context: this, success: a.settings.success, error: a.settings.error }), this } return j("body").append(a.iframe), a.iframe.on("load", function() { var b = a.iframe.contents().find("body").html();
            a.iframe.off("load").remove(), b ? a.settings.success && a.settings.success(b) : a.settings.error && a.settings.error(a.input.val()) }), a.form.submit(), this }, d.prototype.refreshInput = function() { var a = this.input.clone();
        this.input.before(a), this.input.off("change"), this.input.remove(), this.input = a, this.bindInput() }, d.prototype.change = function(a) { return a ? (this.settings.change = a, this) : this }, d.prototype.success = function(a) { var b = this; return this.settings.success = function(c) { b.refreshInput(), a && a(c) }, this }, d.prototype.error = function(a) { var b = this; return this.settings.error = function(c) { a && (b.refreshInput(), a(c)) }, this }, i.prototype.submit = function() { return j.each(this._uploaders, function(a, b) { b.submit() }), this }, i.prototype.change = function(a) { return j.each(this._uploaders, function(b, c) { c.change(a) }), this }, i.prototype.success = function(a) { return j.each(this._uploaders, function(b, c) { c.success(a) }), this }, i.prototype.error = function(a) { return j.each(this._uploaders, function(b, c) { c.error(a) }), this }, i.Uploader = d, c.exports = i });