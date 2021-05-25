const OPERATION_BY_TYPE = {
  PUTAWAY: "3",
  PICK: "1",
  LOAD: "4",
  REVERSE: "2",
  MOVE: "5",
  REPLACE: "6",
};

const TaskState = {
  Available: "AVL",
  CheckedOut: "OUT",
  InProgress: "INP",
  Completed: "CMP",
  ForceCompleted: "FCO",
};

const SUBOPERATION_TYPE = {
  MOVE_PICK: "PICK",
  MOVE_PUTAWAY: "PUTAWAY",
};

const WAREHOUSE = {
  Cofer: "RCOF",
  Enon: "RENO",
};

const CONTAINER_TYPE = {
  HH: "HH",
  PM8: "PM8",
  CS: "CS",
};

const TASK_MOCK = require("./data/GetAvailableSAFTasks_07_29_2020 09_55_27.json");

const subtaskMock = {
  18888: [
    {
      SAF_TASK_ITEM_ID: "8797",
      SAF_TASK_ID: "18888",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "12",
      SAF_TASK_ID: "18888",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "13",
      SAF_TASK_ID: "18888",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  49: [
    {
      SAF_TASK_ITEM_ID: "49-1",
      SAF_TASK_ID: "49",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  70099: [
    {
      SAF_TASK_ITEM_ID: "49-1",
      SAF_TASK_ID: "49",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "49-2",
      SAF_TASK_ID: "49",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "KB19400",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "49-3",
      SAF_TASK_ID: "49",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "AA17106",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "49-4",
      SAF_TASK_ID: "49",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "AA17106",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  256: [
    {
      SAF_TASK_ITEM_ID: "49-1",
      SAF_TASK_ID: "256",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  11290: [
    {
      SAF_TASK_ITEM_ID: "11290-1",
      SAF_TASK_ID: "11290",
      SRC_BIN: "29A041",
      CONTAINER_ID: "6Y14210-00001-1234",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "11290-2",
      SAF_TASK_ID: "11290",
      SRC_BIN: "29A041",
      CONTAINER_ID: "6Y14210-00002-1234",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  112222: [
    {
      SAF_TASK_ITEM_ID: "112222-1",
      SAF_TASK_ID: "112222",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6XXY14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "112222-2",
      SAF_TASK_ID: "112222",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6XXY14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "112222-3",
      SAF_TASK_ID: "112222",
      SRC_BIN: "29A041",
      CONTAINER_ID: "",
      BATCH: "6XXY14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  722: [
    {
      SAF_TASK_ITEM_ID: "722-1",
      SAF_TASK_ID: "722",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "722-2",
      SAF_TASK_ID: "722",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "722-3",
      SAF_TASK_ID: "722",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  874: [
    {
      SAF_TASK_ITEM_ID: "874-1",
      SAF_TASK_ID: "874",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
      IS_FIRST_POSITION: true,
    },
    {
      SAF_TASK_ITEM_ID: "874-2",
      SAF_TASK_ID: "874",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "874-3",
      SAF_TASK_ID: "874",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  829: [
    {
      SAF_TASK_ITEM_ID: "829-1",
      SAF_TASK_ID: "829",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "829-2",
      SAF_TASK_ID: "829",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "829-3",
      SAF_TASK_ID: "829",
      SRC_BIN: "40A020",
      CONTAINER_ID: "",
      BATCH: "6Y14210",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
  112: [
    {
      SAF_TASK_ITEM_ID: "112-1",
      SAF_TASK_ID: "112",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "112-2",
      SAF_TASK_ID: "112",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
    {
      SAF_TASK_ITEM_ID: "112-3",
      SAF_TASK_ID: "112",
      SRC_BIN: "01A030",
      CONTAINER_ID: "",
      BATCH: "1813103",
      DEST_BIN: "07A022",
      SCANNED_SRC_BIN: "",
      SCANNED_DEST_BIN: "",
      SCANNED_ID: "",
      SCANNED_BY: "",
      SCANNED_DATE: "",
      RAW_QR_DATA: "",
    },
  ],
};

module.exports = {
  SUBTASKS_MOCK: subtaskMock,
  TASK_MOCK: TASK_MOCK,
};
