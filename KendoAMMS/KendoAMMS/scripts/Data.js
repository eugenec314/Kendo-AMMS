
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var openWO_data = [
              { WONUMB: "140210001",
                  EQNUMB: "A-123",
                  EQNAME: "AIR COMPRESSOR",
                  WORKCAT: "PM",
                  DATEREQUIRED: "02/28/2014",
                  REMARK: "INSPECT HOSES"
              }, {
                  WONUMB: "140210002",
                  EQNUMB: "B-123",
                  EQNAME: "AIR TANK",
                  WORKCAT: "PM",
                  DATEREQUIRED: "02/28/2014",
                  REMARK: "RECORD PRESSURE"
              }, {
                  WONUMB: "140210003",
                  EQNUMB: "C-123",
                  EQNAME: "WATER TANK",
                  WORKCAT: "PM",
                  DATEREQUIRED: "02/28/2014",
                  REMARK: "RECORD LEVEL"
              }];
var closedWO_data = [
              { WONUMB: "140210011",
                  EQNUMB: "A-123",
                  EQNAME: "AIR COMPRESSOR",
                  WORKCAT: "PM",
                  DATEREQUIRED: "01/28/2014",
                  REMARK: "INSPECTED HOSES"
              }, {
                  WONUMB: "140210012",
                  EQNUMB: "B-123",
                  EQNAME: "AIR TANK",
                  WORKCAT: "PM",
                  DATEREQUIRED: "01/28/2014",
                  REMARK: "RECORDED PRESSURE"
              }, {
                  WONUMB: "140210013",
                  EQNUMB: "C-123",
                  EQNAME: "WATER TANK",
                  WORKCAT: "PM",
                  DATEREQUIRED: "01/28/2014",
                  REMARK: "RECORDED LEVEL"
              }];

