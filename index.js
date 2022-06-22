const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const { TASK_MOCK } = require("./mocks");
const { SUBTASKS_MOCK } = require("./mocks");
const cors = require("cors");

const port = process.env.PORT || 1338;
var app = express();

app.use(cors({
  exposedHeaders: ['X-Refresh-Token']
}));

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb" }));

const REDIRECT_URL = `http://localhost:${port}/SAF`;

app.get("/hello", async function (req, res) {
  return res.send({
    Data: "HELLO",
  });
});

app.get("/token", async function (req, res) {
  res.setHeader("X-Refresh-Token", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyRW1haWwiOiJtYXJ0aW5AZ21haWwuY29tIiwiZXhwaXJhdGlvbiI6MTk1NTAwMDAwMCwiY3JlYXRlZFRpbWVzdGFtcCI6MTY1NTAwMDAwMH0.pi-C2PX1HR8KEjTz7vGbHY0bG01LtLT3eJ8ysEiyO_E");
  return res.send({
    Data: "HELLO",
  });
});

app.get("/Task/GetAvailableSAFTasks", async function (req, res) {
  console.log(">> GetAvailableSAFTasks called");
  return res.send({
    Data: TASK_MOCK.filter((t) => t.SAF_STATUS_CODE === "AVL"),
  });
});

app.post("/Task/Checkout", async function (req, res) {
  console.log(">> /Task/Checkout");
  const { taskIds, deviceId, userId } = req.body;
  console.log(taskIds);
  const result = {};
  taskIds.forEach((id) => {
    result[id] = [];
    const data = SUBTASKS_MOCK[id];
    data.forEach((d) => result[id].push(d));
    const task = TASK_MOCK.find((t) => t.SAF_TASK_ID === id);
    if (task) {
      task.SAF_STATUS_CODE = "OUT";
      task.SAF_STATUS_ID = "2";
    }
  });
  console.log(result);
  console.log(result);
  return res.send({
    Data: result,
  });
});

app.post("/Task/Checkin", async function (req, res) {
  console.log(">> /Task/Checkin");
  const { taskIds, deviceId, userId } = req.body;
  console.log(taskIds);
  taskIds.forEach((id) => {
    const task = TASK_MOCK.find((t) => t.SAF_TASK_ID === id);
    if (task) {
      task.SAF_STATUS_CODE = "AVL";
      task.SAF_STATUS_ID = "1";
    }
  });
  return res.send({
    Data: {},
  });
});

app.post("/Task/MoveCheckin", async function (req, res) {
  console.log(">> /Task/MoveCheckin");
  const { tasksMoveReplace, subtasksMoveReplace, deviceId, userId } = req.body;
  const map = {};

  // Update TASKS
  tasksMoveReplace.forEach((t) => {
    let isNewMove = false;
    if (isNaN(t.SAF_TASK_ID)) {
      // Task created on the device
      const oldId = t.SAF_TASK_ID;
      const id = generateNumber();
      map[t.SAF_TASK_ID] = id;
      t.SAF_TASK_ID = id;
      isNewMove = true;
      subtasksMoveReplace.forEach((s) => {
        if (s.SAF_TASK_ID === oldId) s.SAF_TASK_ID = t.SAF_TASK_ID;
      });
    }
    if (isNewMove) {
      t.SAF_STATUS_CODE = "AVL";
      t.SAF_STATUS_ID = "1";
      TASK_MOCK.push(t);
    } else {
      const task = TASK_MOCK.find((t) => t.SAF_TASK_ID === t.SAF_TASK_ID);
      if (task) {
        task.SAF_STATUS_CODE = "AVL";
        task.SAF_STATUS_ID = "1";
      }
    }
  });
  // Update SUBTASKS
  subtasksMoveReplace.forEach((s) => {
    SUBTASKS_MOCK[s.SAF_TASK_ID] = [];
  });
  subtasksMoveReplace.forEach((s) => {
    SUBTASKS_MOCK[s.SAF_TASK_ID].push(s);
  });

  const result = [];
  for (const [hashId, integerId] of Object.entries(map)) {
    result.push(`${hashId}:${integerId}`);
  }
  console.log("returning");
  console.log(result);
  return res.send({
    Data: { updatedIdMap: result },
  });
});

app.post("/task/VPNCheck", async function (req, res) {
  console.log(">> Received /task/VPNCheck " + Math.random());
  return res.send({
    Data: true,
    ExceptionMessage: null,
  });
});

app.get("/hello", async function (req, res) {
  console.log(">> Received hello " + Math.random());
  res.send("HEllo");
});

// TABLES
app.get("/Batch/GetValidateBatches", async function (req, res) {
  res.send({});
});

app.get("/Location/GetBinCapacity", async function (req, res) {
  res.send({});
});

app.get("/Location/GetBinInventory", async function (req, res) {
  res.send({
    Data: [
      {
        BIN: "XXXXX",
        BATCH: "1234567",
        WH: "RCOF",
        QUANTITY: "24",
        CONTAINER_TYPE: "PM8",
        CREATED_DATE: "12/8/19",
        OPCO: "pmusa",
      },
    ],
  });
});

app.get("/Location/GetSAFBinMasterData", async function (req, res) {
  console.log(new Date().toDateString(), " >> /Location/GetSAFBinMasterData");
  res.send({
    Data: [
      {
        BIN: "40A002",
        WH: "RCOF",
        PUTAWAY_BLOCK: "N",
        REMOVAL_BLOCK: "N",
        UPDATE_DATE: "12/8/19",
      },
    ],
  });
});

app.get("/Batch/GetSAFLotMasterData", async function (req, res) {
  res.send({
    Data: [
      {
        LOT_DESC: "1813103",
        UPDATE_DATE: "06/09/2014 11:33",
        USABLE_IND: "N",
        IS_NPRM_BATCH: "N",
        OPCO: "PMUSA",
      },
    ],
  });
});

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
  res.send({});
});

// TASKS
app.post("/Task/SyncData", async function (req, res) {
  console.log(new Date().toDateString(), " >> /Task/SyncData");
  console.log(req.body);
  res.send({});
});

// LOGS
app.post("/device/log", async function (req, res) {
  console.log(new Date().toDateString(), " >> /device/log");
  console.log(req.body);
  res.send({});
});

// AUTH
app.get("/User/GetRolesAndActiveDirectories", async function (req, res) {
  console.log("GetRolesAndActiveDirectories called");
  // res.send({ Data: [{ ROLE: "COFER_WAREHOUSE_USERS" }] })
  res.send({ Data: [{ ROLE: "DEVELOPER" }] });
});

// DEVICE
app.post("/device/GetDeviceBatchCounters", async function (req, res) {
  console.log(new Date().toDateString(), " >> /device/GetDeviceBatchCounters");
  // TODO: Not mocked for the bug
  res.send({});
});

app.post("/device/telemetry", async function (req, res) {
  console.log(new Date().toDateString(), " >> /device/telemetry");
  // TODO: Not mocked for the bug
  console.log(`Syncing ${req.body.data.length} rows`);
  res.send({});
});

app.post("/device/errors", async function (req, res) {
  console.log(new Date().toDateString(), " >> /device/errors");
  // TODO: Not mocked for the bug
  console.log(`Syncing ${req.body.data.length} rows`);
  res.send({});
});

app.get("/device/GetDeviceContPrefix", async function (req, res) {
  console.log(new Date().toDateString(), " >> /device/GetDeviceContPrefix");
  res.send({
    Data: { prefix: "8" },
    ReturnCode: "0",
    ReturnMessage: "Success",
    ExceptionMessage: null,
  });
});

app.get("/SAF", async function (req, res) {
  const code = req.query.code;
  console.log(">> Received code from Azure. Requesting the tokens...");

  try {
    const response = await axios.post(
      "https://login.microsoftonline.com/3926f5f4-ca60-46de-b9f8-72639d55232d/oauth2/token",
      querystring.stringify({
        grant_type: "authorization_code",
        client_id: "909caae4-5065-438a-afb3-afd01c2ff8dc",
        code: code,
        redirect_uri: REDIRECT_URL,
        client_secret: ":X/L+ZtDFT3p?K2gwtlZeYiFO3IHAmg7",
      })
    );

    const data = response.data;

    console.log(
      ">> Received tokens from Azure. Redirecting back to the mobile app..."
    );

    const { access_token, regresh_token, expires_in } = data;
    return res.redirect(302, `saf://?access_token=${access_token}`);
  } catch (ex) {
    console.log("!! Error getting tokens ", ex.toString());
    return res.redirect(
      302,
      `saf://?error=${encodeURIComponent(
        "Error getting tokens. Check the local server for output"
      )}`
    );
  }
});

app.get("/logoutSAF", async function (req, res) {
  console.log(">> Sign out received. Redirecting to the app ...");
  return res.redirect(302, `saf://`);
});

app.get("/debug-remote", async function (req, res) {
  const text = req.query.text;
  console.log(text);
  return res.send("ok");
});

app.listen(port);

const generateNumber = () => Math.floor(Math.random() * 90000) + 10000;
