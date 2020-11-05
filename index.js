const express = require('express')
const axios = require("axios");
const querystring = require('querystring');
const mocks = require("./mocks")

const port = process.env.PORT || 1338;
var app = express();
app.use(express.json());

const REDIRECT_URL = `http://localhost:${port}/SAF`

app.get("/Task/GetAvailableSAFTasks", async function (req, res) {
    return res.send({
        Data: require("./data/GetAvailableSAFTasks_07_29_2020 09_55_27.json")
    })
    // return res.send({
    //     Data: mocks.storageMock
    // })
})

app.get("/Task/GetAvailableSAFTasks", async function (req, res) {
    return res.send({
        Data: require("./data/GetAvailableSAFTasks_07_29_2020 09_55_27.json")
    })
    // return res.send({
    //     Data: mocks.storageMock
    // })
})

app.post("/Task/Checkout", async function (req, res) {
    const { taskIds, deviceId, userId } = req.body;
    const result = {};
    taskIds.forEach(id => {
        result[id] = [];
        const data = mocks.subtaskMock[id];
        data.forEach(d => result[id].push(d));
    });
    return res.send({
        Data: result
    })
})

app.post("/task/VPNCheck", async function (req, res) {
    console.log(">> Received /task/VPNCheck " + Math.random());
    return res.send({
        Data: true,
        ExceptionMessage: null
    })
})

app.get("/hello", async function (req, res) {
    console.log(">> Received hello " + Math.random());
    res.send("HEllo")
})

// TABLES
app.get("/Batch/GetValidateBatches", async function (req, res) {
    res.send({})
})

app.get("/Location/GetBinCapacity", async function (req, res) {
    res.send({})
})

app.get("/Location/GetBinInventory", async function (req, res) {
    res.send({
        Data: [
            {
                BIN: "XXXXX",
                BATCH: "1234567",
                WH: "RCOF",
                QUANTITY: "24",
                CONTAINER_TYPE: "PM8",
                CREATED_DATE: "12/8/19"
            }
        ]
    })
})

app.get("/Location/GetSAFBinMasterData", async function (req, res) {
    console.log(new Date().toDateString(), " >> /Location/GetSAFBinMasterData");
    res.send({
        Data: [
            {
                BIN: "40A002",
                WH: "RCOF",
                PUTAWAY_BLOCK: "N",
                REMOVAL_BLOCK: "N",
                UPDATE_DATE: "12/8/19"
            }
        ]
    })
})

app.get("/Batch/GetSAFLotMasterData", async function (req, res) {
    res.send({})
})

app.get("/Task/GetBlockedContainerInfo", async function (req, res) {
    console.log(new Date().toDateString(), " >> /Task/GetBlockedContainerInfo");
    // res.send({
    //     Data: [{
    //         CONTAINERID: "0A14101-00005",
    //         WH: "RCOF",
    //         IS_STAGING: "N",
    //         IS_HOLD: "N"
    //     },
    //     {
    //         CONTAINERID: "0A14101-00001",
    //         WH: "RCOF",
    //         IS_STAGING: "N",
    //         IS_HOLD: "N"
    //     }]
    // })
    res.send({})
})

// TASKS
app.post("/Task/SyncData", async function (req, res) {
    console.log(new Date().toDateString(), " >> /Task/SyncData");
    console.log(req.body);
    res.send({})
})

// LOGS
app.post("/device/log", async function (req, res) {
    console.log(new Date().toDateString(), " >> /device/log");
    console.log(req.body);
    res.send({})
})

// AUTH
app.get("/User/GetRolesAndActiveDirectories", async function (req, res) {
    // res.send({ Data: [{ ROLE: "COFER_WAREHOUSE_USERS" }] })
    res.send({ Data: [{ ROLE: "DEVELOPER" }] })
})

// DEVICE
app.post("/device/GetDeviceBatchCounters", async function (req, res) {
    console.log(new Date().toDateString(), " >> /device/GetDeviceBatchCounters");
    // TODO: Not mocked for the bug
    res.send({})
})

app.post("/device/telemetry", async function (req, res) {
    console.log(new Date().toDateString(), " >> /device/telemetry");
    // TODO: Not mocked for the bug
    console.log(req.body.data.toString());
    res.send({})
})

app.post("/device/errors", async function (req, res) {
    console.log(new Date().toDateString(), " >> /device/errors");
    // TODO: Not mocked for the bug
    res.send({})
})

app.get("/device/GetDeviceContPrefix", async function (req, res) {
    console.log(new Date().toDateString(), " >> /device/GetDeviceContPrefix");
    res.send({ "Data": { "prefix": "8" }, "ReturnCode": "0", "ReturnMessage": "Success", "ExceptionMessage": null })
})



app.get("/SAF", async function (req, res) {
    const code = req.query.code;
    console.log(">> Received code from Azure. Requesting the tokens...");

    try {
        const response = await axios.post('https://login.microsoftonline.com/3926f5f4-ca60-46de-b9f8-72639d55232d/oauth2/token', querystring.stringify({
            grant_type: 'authorization_code',
            client_id: "909caae4-5065-438a-afb3-afd01c2ff8dc",
            code: code,
            redirect_uri: REDIRECT_URL,
            client_secret: ":X/L+ZtDFT3p?K2gwtlZeYiFO3IHAmg7"
        }));

        const data = response.data;

        console.log(">> Received tokens from Azure. Redirecting back to the mobile app...");

        const { access_token, regresh_token, expires_in } = data;
        return res.redirect(302, `saf://?access_token=${access_token}`)
    } catch (ex) {
        console.log("!! Error getting tokens ", ex.toString());
        return res.redirect(302, `saf://?error=${encodeURIComponent("Error getting tokens. Check the local server for output")}`)
    }
});

app.get("/logoutSAF", async function (req, res) {
    console.log(">> Sign out received. Redirecting to the app ...");
    return res.redirect(302, `saf://`)
});

app.listen(port);