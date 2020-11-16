const OPERATION_BY_TYPE = {
    PUTAWAY: "3",
    PICK: "1",
    LOAD: "4",
    REVERSE: "2",
    MOVE: "5",
    REPLACE: "6"
}



const TaskState = {
    Available: "AVL",
    CheckedOut: "OUT",
    InProgress: "INP",
    Completed: "CMP",
    ForceCompleted: "FCO"
}

const SUBOPERATION_TYPE = {
    MOVE_PICK: "PICK",
    MOVE_PUTAWAY: "PUTAWAY"
}

const WAREHOUSE = {
    Cofer: "RCOF",
    Enon: "RENO"
}

const CONTAINER_TYPE = {
    HH: "HH",
    PM8: "PM8",
    CS: "CS"
}

const storageMock = [
    {
        "SAF_TASK_ID": "11123",
        "SAF_TASK_TYPE_ID": "4",
        "SAF_STATUS_CODE": "avl",
        "SAF_CHECKOUT_DATE": "",
        "SAF_START_DATE": "",
        "SAF_END_DATE": "",
        "UPDATED_DATE": "",
        "WH": "rcof",
        "BATCH": "",
        "QUANTITY": "1",
        "DESTINATION_LOCATION": "MC/B",
        "DELIVERY_DATE": "2020-20-2",
        "UOM": "hh",
        "WHSE_BUILDING_CODE": "15",
        "STO_NUMBER": "",
        "SAP_REF_NUMBER": "808080880",
        "BOL_NO": "",
        "APPROVED_BY": "",
        "COMPLETED_BY": "",
        "CREATED_BY": "",
        "OPERATING_COMPANY": "PMUSA"
    },
    {
        "SAF_TASK_ID": "18888",
        "SAF_TASK_TYPE_ID": "2",
        "SAF_STATUS_CODE": "avl",
        "SAF_CHECKOUT_DATE": "",
        "SAF_START_DATE": "",
        "SAF_END_DATE": "",
        "UPDATED_DATE": "",
        "WH": "rcof",
        "BATCH": "",
        "QUANTITY": "3",
        "DESTINATION_LOCATION": "MC/B",
        "DELIVERY_DATE": "2020-20-2",
        "UOM": "pm8",
        "WHSE_BUILDING_CODE": "15",
        "STO_NUMBER": "",
        "SAP_REF_NUMBER": "808080880",
        "BOL_NO": "",
        "APPROVED_BY": "",
        "COMPLETED_BY": "",
        "CREATED_BY": "",
        "OPERATING_COMPANY": "PMUSA"
    },
    {
        "SAF_TASK_ID": "256",
        "SAF_TASK_TYPE_ID": "3",
        "SAF_STATUS_CODE": "avl",
        "SAF_CHECKOUT_DATE": "",
        "SAF_START_DATE": "",
        "SAF_END_DATE": "",
        "UPDATED_DATE": "",
        "WH": "rcof",
        "BATCH": "",
        "QUANTITY": "3",
        "DESTINATION_LOCATION": "MC/B",
        "DELIVERY_DATE": "2020-20-2",
        "UOM": "pm8",
        "WHSE_BUILDING_CODE": "15",
        "STO_NUMBER": "",
        "SAP_REF_NUMBER": "808080880",
        "BOL_NO": "",
        "APPROVED_BY": "",
        "COMPLETED_BY": "",
        "CREATED_BY": "",
        "OPERATING_COMPANY": "PMUSA"
    },
    {
        "SAF_TASK_ID": "112222",
        "SAF_TASK_TYPE_ID": OPERATION_BY_TYPE.PUTAWAY,
        "SAF_STATUS_CODE": "avl",
        "SAF_CHECKOUT_DATE": "",
        "SAF_START_DATE": "",
        "SAF_END_DATE": "",
        "UPDATED_DATE": "",
        "WH": "rcof",
        "BATCH": "6XXY14210",
        "QUANTITY": "3",
        "DESTINATION_LOCATION": "MC/B",
        "DELIVERY_DATE": "2020-20-2",
        "UOM": "pm8",
        "WHSE_BUILDING_CODE": "15",
        "STO_NUMBER": "",
        "SAP_REF_NUMBER": "808080880",
        "BOL_NO": "",
        "APPROVED_BY": "",
        "COMPLETED_BY": "",
        "CREATED_BY": "",
        "OPERATING_COMPANY": "JMC"
    }
]

const subtaskMock = {
    "18888": [
        {
            "SAF_TASK_ITEM_ID": "8797",
            "SAF_TASK_ID": "18888",
            "SRC_BIN": "01A030",
            "CONTAINER_ID": "",
            "BATCH": "1813103",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "12",
            "SAF_TASK_ID": "18888",
            "SRC_BIN": "01A030",
            "CONTAINER_ID": "",
            "BATCH": "1813103",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "13",
            "SAF_TASK_ID": "18888",
            "SRC_BIN": "01A030",
            "CONTAINER_ID": "",
            "BATCH": "1813103",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        }
    ],
    "49": [
        {
            "SAF_TASK_ITEM_ID": "49-1",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ],
    "70099": [
        {
            "SAF_TASK_ITEM_ID": "49-1",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "49-2",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "KB19400",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "49-3",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "AA17106",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "49-4",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "AA17106",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ],
    "256": [
        {
            "SAF_TASK_ITEM_ID": "49-1",
            "SAF_TASK_ID": "49",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ],
    "112222": [
        {
            "SAF_TASK_ITEM_ID": "112222-1",
            "SAF_TASK_ID": "112222",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6XXY14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "112222-2",
            "SAF_TASK_ID": "112222",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6XXY14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "112222-3",
            "SAF_TASK_ID": "112222",
            "SRC_BIN": "29A041",
            "CONTAINER_ID": "",
            "BATCH": "6XXY14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ],
    "722": [
        {
            "SAF_TASK_ITEM_ID": "722-1",
            "SAF_TASK_ID": "722",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "722-2",
            "SAF_TASK_ID": "722",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "722-3",
            "SAF_TASK_ID": "722",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ],
    "829": [
        {
            "SAF_TASK_ITEM_ID": "829-1",
            "SAF_TASK_ID": "829",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "829-2",
            "SAF_TASK_ID": "829",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
        {
            "SAF_TASK_ITEM_ID": "829-3",
            "SAF_TASK_ID": "829",
            "SRC_BIN": "40A020",
            "CONTAINER_ID": "",
            "BATCH": "6Y14210",
            "DEST_BIN": "07A022",
            "SCANNED_SRC_BIN": "",
            "SCANNED_DEST_BIN": "",
            "SCANNED_ID": "",
            "SCANNED_BY": "",
            "SCANNED_DATE": "",
            "RAW_QR_DATA": ""
        },
    ]
}

module.exports = {
    storageMock: storageMock,
    subtaskMock: subtaskMock
}