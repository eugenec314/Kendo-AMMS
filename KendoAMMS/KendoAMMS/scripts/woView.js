
(function (global) {
    var app = global.app = global.app || {};
    if (app.currentWO == 'undefined')
        app.currentWO = null;
    if (app.getWO == 'undefined')
        app.getWO = null;

    app.getWorkOrder = function (wonumb) {
        var i = 0;
        while (i < openWO_data.length) {
            if (openWO_data[i].WONUMB == wonumb) {
                return openWO_data[i];
            }
            ++i;
        }
        i = 0;
        while (i < closedWO_data.length) {
            if (closedWO_data[i].WONUMB == wonumb) {
                return closedWO_data[i];
            }
            ++i;
        }
        return null;
    }
    app.ShowRecord2 = function (rec) {
        var url = "WorkOrderView.html?wo=" + rec.WONUMB;
        location.href = url;
    }
    app.ShowRecord = function (rec) {
        var url = "#WO_View"; //?wo=" + rec.WONUMB;
        app.getWO = rec.WONUMB;
        location.href = url;
    }
    app.GoBack = function () {
        window.history.back();
    }
    app.InitView = function (rec) {
        var woElem = $("#wonumb")[0];
        woElem.innerText = rec.WONUMB;
        woElem = $("#eqnumb")[0];
        woElem.innerText = rec.EQNUMB;
        woElem = $("#eqname")[0];
        woElem.innerText = rec.EQNAME;
        woElem = $("#remark")[0];
        woElem.innerText = rec.REMARK;
        woElem = $("#daterequired")[0];
        woElem.innerText = rec.DATEREQUIRED;
        location.href = "#WO_View";
    }    
    app.InitOpen = function () {
        var WO = getParameterByName("wo");
        app.currentWO = app.getWorkOrder(WO);
        var woElem = $("#wonumb")[0];
        woElem.value = app.currentWO.WONUMB;
        woElem = $("#eqnumb")[0];
        woElem.value = app.currentWO.EQNUMB;
        woElem = $("#eqname")[0];
        woElem.value = app.currentWO.EQNAME;
        woElem = $("#remark")[0];
        woElem.value = app.currentWO.REMARK;
        woElem = $("#daterequired")[0];
        woElem.value = app.currentWO.DATEREQUIRED;
    }
})(window);