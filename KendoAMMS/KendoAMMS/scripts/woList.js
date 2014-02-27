(function (global) {
    var app = global.app = global.app || {};

    document.addEventListener('deviceready', function () {
        navigator.splashscreen.hide();
        $(document.body).height(window.innerHeight);
    }, false);

    app.application = new kendo.mobile.Application(document.body);
    app.readBarcode = function () {
        cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if (!result.cancelled) {
                        var WO = app.getWorkOrder(result.text);
                        if (WO) {
                            app.InitView(WO);
                        } else
                            alert("Work order " + result.text + " not found");
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                });
    };
    app.showDrawer = function () {
        $("#my-drawer").data("kendoMobileDrawer").show();
    };
    app.hideDrawer = function () {
        if ($("#my-drawer").data("kendoMobileDrawer"))
            $("#my-drawer").data("kendoMobileDrawer").hide();
    };
    app.showOpenWorkOrders2 = function () {
        var template_elem = $("#wo-template").html();
        var template2 = kendo.template(template_elem);
        var res = template2(openWO_data);
        $("#OpenWOList").html(res);
    }
    app.showOpenWorkOrders = function () {
        setTimeout('$("#OpenWOList").html(kendo.template($("#wo-template").html())(openWO_data));', 500);
    }
    app.showClosedWorkOrders = function () {
        setTimeout('$("#ClosedWOList").html(kendo.template($("#wo-template").html())(closedWO_data));', 500);
    }
    app.showClosedWorkOrders2 = function () {
        var template_elem = $("#wo-template").html();
        var template2 = kendo.template(template_elem);
        var res = template2(closedWO_data);
        $("#ClosedWOList").html(res);
    }
    app.hideDrawer();
})(window);