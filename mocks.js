const OPERATION_TYPE = {
    PUTAWAY: "putaway",
    PICK: "pick",
    LOAD: "load",
    REVERSE: "reverse",
    MOVE: "move",
    REPLACE: "replace"
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
        "CREATED_BY": ""
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
        "CREATED_BY": ""
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
    ]
}

const storageMock2 = {
    tasksByIds: {
        "11123": {
            id: "11123",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            destination: "MC/B",
            state: TaskState.Available,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            containerType: "HH",
            subtasks: [
                { id: "11123-1", isFinished: false, batch: "6Y14210" },
                { id: "11123-2", isFinished: false, batch: "6Y14210" },
                { id: "11123-3", isFinished: false, batch: "0A14101" },
            ]
        },
        "2": {
            id: "2",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 1,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/B",
            state: TaskState.Available,
            containerType: "HH",
            subtasks: [
                { id: "2-1", isFinished: false, batch: "6Y14210" }
            ]
        },
        "3": {
            id: "3",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 2,
            deliveryNumber: "808080880",
            deliveryConfirmation: "",
            destination: "MC/B",
            state: TaskState.Available,
            containerType: "HH",
            subtasks: [
                { id: "3-1", isFinished: false, batch: "0B12201" },
                { id: "3-2", isFinished: false, batch: "0B12201" },
                { id: "3-3", isFinished: false, batch: "UX89112" }
            ]
        },
        "5": {
            id: "5",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            destination: "Cofer",
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            state: TaskState.Available,
            containerType: "HH",
            subtasks: [
                { id: "5-1", isFinished: false, batch: "0B12201" },
                { id: "5-2", isFinished: false, batch: "0B12201" },
                { id: "5-3", isFinished: false, batch: "0B12201" },
            ]
        },
        "44444": {
            id: "44444",
            operationType: OPERATION_TYPE.PUTAWAY,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 4,
            batch: "6Y14210",
            house: "01",
            warehouse: WAREHOUSE.Cofer,
            containerType: "PM8",
            deliveryNumber: "800987644",
            billOfLading: "128374",
            state: TaskState.Available,
            subtasks: [
                { id: "4-1", isFinished: false, destinationBin: "29A041" },
                { id: "4-2", isFinished: false, destinationBin: "29A041" },
                { id: "4-3", isFinished: false, destinationBin: "29A041" },
                { id: "4-4", isFinished: false, destinationBin: "29A041" }
            ]
        },
        "01444": {
            id: "01444",
            operationType: OPERATION_TYPE.PUTAWAY,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: null,
            quantity: 6,
            batch: "6Y14210",
            house: "01",
            warehouse: WAREHOUSE.Cofer,
            containerType: "PM8",
            deliveryNumber: "800987644",
            billOfLading: "128374",
            state: TaskState.Available,
            subtasks: [
                { id: "4-1", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00002-120919" },
                { id: "4-2", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00001-120614" },
                { id: "4-3", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00003-120614" },
                { id: "4-4", isFinished: false, destinationBin: "29A013", containerId: "6Y14210-00004-120919" },
                { id: "4-5", isFinished: false, destinationBin: "29A013", containerId: "6Y14210-00005-120919" },
                { id: "4-6", isFinished: false, destinationBin: "30A041", containerId: "6Y14210-00006-120919" }
            ]
        },
        "311": {
            id: "311",
            operationType: OPERATION_TYPE.PUTAWAY,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: null,
            quantity: 6,
            batch: "6Y14210",
            house: "01",
            warehouse: WAREHOUSE.Enon,
            containerType: "PM8",
            deliveryNumber: "800987644",
            billOfLading: "128374",
            state: TaskState.Available,
            subtasks: [
                { id: "4-1", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00002-120919" },
                { id: "4-2", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00001-120614" },
                { id: "4-3", isFinished: false, destinationBin: "29A041", containerId: "6Y14210-00003-120614" },
                { id: "4-4", isFinished: false, destinationBin: "29A013", containerId: "6Y14210-00004-120919" },
                { id: "4-5", isFinished: false, destinationBin: "29A013", containerId: "6Y14210-00005-120919" },
                { id: "4-6", isFinished: false, destinationBin: "30A041", containerId: "6Y14210-00006-120919" }
            ]
        },
        "6": {
            id: "6",
            operationType: OPERATION_TYPE.PUTAWAY,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 24,
            batch: "KB19400",
            house: "01",
            warehouse: WAREHOUSE.Cofer,
            containerType: "HH",
            deliveryNumber: "800987644",
            billOfLading: "128375",
            state: TaskState.Available,
            subtasks: [
                { id: "6-1", isFinished: false, destinationBin: "29A041" },
                { id: "6-2", isFinished: false, destinationBin: "29A041" },
                { id: "6-3", isFinished: false, destinationBin: "29A041" },
                { id: "6-4", isFinished: false, destinationBin: "29A041" },
                { id: "6-5", isFinished: false, destinationBin: "40A020" },
                { id: "6-6", isFinished: false, destinationBin: "40A020" },
                { id: "6-7", isFinished: false, destinationBin: "40A020" },
                { id: "6-8", isFinished: false, destinationBin: "40A020" },
                { id: "6-9", isFinished: false, destinationBin: "40A020" },
                { id: "6-10", isFinished: false, destinationBin: "40A020" },
                { id: "6-11", isFinished: false, destinationBin: "44A097" },
                { id: "6-12", isFinished: false, destinationBin: "44A097" },
                { id: "6-13", isFinished: false, destinationBin: "44A097" },
                { id: "6-14", isFinished: false, destinationBin: "44A097" },
                { id: "6-15", isFinished: false, destinationBin: "44A097" },
                { id: "6-16", isFinished: false, destinationBin: "44A097" },
                { id: "6-17", isFinished: false, destinationBin: "44A097" },
                { id: "6-18", isFinished: false, destinationBin: "50A057" },
                { id: "6-19", isFinished: false, destinationBin: "50A057" },
                { id: "6-20", isFinished: false, destinationBin: "50A057" },
                { id: "6-21", isFinished: false, destinationBin: "50A057" },
                { id: "6-22", isFinished: false, destinationBin: "50A057" },
                { id: "6-23", isFinished: false, destinationBin: "50A057" },
                { id: "6-24", isFinished: false, destinationBin: "50A057" }
            ]
        },
        "7": {
            id: "7",
            operationType: OPERATION_TYPE.PICK,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: null,
            quantity: 2,
            containerType: "CS", house: "39",
            warehouse: WAREHOUSE.Cofer,
            destination: "FMFG21",
            deliveryDate: "12/09/2019",
            state: TaskState.Available,
            stoNumber: "4100109783",
            subtasks: [
                { id: "7-1", isFinished: false, batch: "AZ13901", sourceBin: "39A002", scanBin: null, scanId: null },
                { id: "7-2", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-3", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-4", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-5", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-6", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-7", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-8", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-9", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-10", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-11", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-12", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-13", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-14", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-15", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-16", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-17", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-18", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-19", isFinished: false, batch: "AA17128", sourceBin: "39A030", scanBin: null, scanId: null },
                { id: "7-20", isFinished: false, batch: "6P12103", sourceBin: "39A075", scanBin: null, scanId: null },
                { id: "7-21", isFinished: false, batch: "6P12103", sourceBin: "39A075", scanBin: null, scanId: null },
                { id: "7-22", isFinished: false, batch: "6P12103", sourceBin: "39A075", scanBin: null, scanId: null },
            ]
        },
        "7111": {
            id: "7111",
            operationType: OPERATION_TYPE.PICK,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 1,
            containerType: "PM8", house: "10",
            warehouse: WAREHOUSE.Cofer,
            destination: WAREHOUSE.Enon,
            deliveryDate: "08/03/2019",
            state: TaskState.Available,
            subtasks: [
                { id: "7-1", isFinished: false, batch: "6Y14210", sourceBin: "29A041", scanBin: null, scanId: null }
            ]
        },
        "88888": {
            id: "88888",
            operationType: OPERATION_TYPE.PICK,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 100,
            containerType: "PM8", house: "15", destination: WAREHOUSE.Cofer,
            warehouse: WAREHOUSE.Cofer,
            deliveryDate: "12/04/2019",
            state: TaskState.Available,
            stoNumber: "8888888888",
            subtasks: [
                { id: "8-1", isFinished: false, batch: "6Y14210", sourceBin: "29A041" },
                { id: "8-2", isFinished: false, batch: "6Y14210", sourceBin: "29A041" },
                { id: "8-3", isFinished: false, batch: "0A14101", sourceBin: "29A041" },
                { id: "8-4", isFinished: false, batch: "0A14101", sourceBin: "40A020" }
            ]
        },
        "88889": {
            id: "88889",
            operationType: OPERATION_TYPE.PICK,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 4,
            containerType: "HH", house: "15", destination: WAREHOUSE.Cofer,
            warehouse: WAREHOUSE.Cofer,
            deliveryDate: "01/03/2020",
            state: TaskState.Available,
            subtasks: [
                { id: "8-1", isFinished: false, batch: "6Y14210", sourceBin: "29A041" },
                { id: "8-2", isFinished: false, batch: "6Y14210", sourceBin: "29A041" },
                { id: "8-3", isFinished: false, batch: "0A14101", sourceBin: "29A041" },
                { id: "8-4", isFinished: false, batch: "0A14101", sourceBin: "40A020" },
                { id: "8-5", isFinished: false, batch: "XU14101", sourceBin: "40A020" }
            ]
        },
        "99123": {
            id: "99123",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            destination: "Enon",
            deliveryNumber: "998080880",
            deliveryConfirmation: null,
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "1-1", isFinished: false, batch: "0B12201" },
                { id: "1-2", isFinished: false, batch: "0B12201" },
                { id: "1-3", isFinished: false, batch: "0B12201" },
            ]
        },
        "10101": {
            id: "10101",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 111,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/B",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "2-1", isFinished: false, batch: "0A14101" },
                { id: "2-2", isFinished: false, batch: "0A14101" },
                { id: "2-3", isFinished: false, batch: "0A14101" },
                { id: "2-4", isFinished: false, batch: "0A14101" },
                { id: "2-5", isFinished: false, batch: "0A14101" },
                { id: "2-6", isFinished: false, batch: "0A14101" },
                { id: "2-7", isFinished: false, batch: "0A14101" },
                { id: "2-8", isFinished: false, batch: "0A14101" },
                { id: "2-9", isFinished: false, batch: "0A14101" },
                { id: "2-10", isFinished: false, batch: "0A14101" },
                { id: "2-11", isFinished: false, batch: "0A14101" },
                { id: "2-12", isFinished: false, batch: "0A14101" }
            ]
        },
        "11": {
            id: "11",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 2,
            deliveryNumber: "123480880",
            deliveryConfirmation: null,
            destination: "Cofer",
            state: TaskState.Available,
            containerType: "PM8",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "3-1", isFinished: false, batch: "0A14101" },
                { id: "3-2", isFinished: false, batch: "0A14101" }
            ]
        },
        "12": {
            id: "12",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/A",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "5-1", isFinished: false, batch: "0A14101" },
                { id: "5-2", isFinished: false, batch: "0A14101" },
                { id: "5-3", isFinished: false, batch: "0A14101" },
            ]
        },
        "13": {
            id: "13",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/A",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "1-1", isFinished: false, batch: "6Y14210" },
                { id: "1-2", isFinished: false, batch: "6Y14210" },
                { id: "1-3", isFinished: false, batch: "6Y14210" },
            ]
        },
        "14": {
            id: "14",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 1,
            deliveryNumber: "111480880",
            deliveryConfirmation: null,
            destination: "MC/B",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "2-1", isFinished: false, batch: "6Y14210" }
            ]
        },
        "15": {
            id: "15",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 2,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/B",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "3-1", isFinished: false, batch: "6Y14210" },
                { id: "3-2", isFinished: false, batch: "6Y14210" }
            ]
        },
        "16": {
            id: "16",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "MC/A",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "5-1", isFinished: false, batch: "6Y14210" },
                { id: "5-2", isFinished: false, batch: "6Y14210" },
                { id: "5-3", isFinished: false, batch: "6Y14210" },
            ]
        },
        "17": {
            id: "17",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "Cofer",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "1-1", isFinished: false, batch: "6Y14210" },
                { id: "1-2", isFinished: false, batch: "6Y14210" },
                { id: "1-3", isFinished: false, batch: "6Y14210" },
            ]
        },
        "171": {
            id: "171",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "Enon",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "1-1", isFinished: false, batch: "6Y14210" },
                { id: "1-2", isFinished: false, batch: "6Y14210" },
                { id: "1-3", isFinished: false, batch: "6Y14210" },
            ]
        },
        "172": {
            id: "172",
            operationType: OPERATION_TYPE.LOAD,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            quantity: 3,
            deliveryNumber: "808080880",
            deliveryConfirmation: null,
            destination: "Enon",
            state: TaskState.Available,
            containerType: "HH",
            warehouse: WAREHOUSE.Cofer,
            subtasks: [
                { id: "1-1", isFinished: false, batch: "6Y14210" },
                { id: "1-2", isFinished: false, batch: "6Y14210" },
                { id: "1-3", isFinished: false, batch: "6Y14210" },
            ]
        },
        "18888": {
            id: "18888",
            operationType: OPERATION_TYPE.REVERSE,
            serverTimestamp: "2019-09-09T13:33:23.786Z",
            lastChangeOnDevice: "2019-09-09T13:33:23.786Z",
            containerType: "PM8",
            house: "16",
            deliveryDate: "12/03/2019",
            destination: "Enon",
            quantity: 5,
            warehouse: WAREHOUSE.Cofer,
            state: TaskState.Available,
            subtasks: [
                // { id: "18-1", destinationBin: "29A041", batch: "6Y14210" },
                // { id: "18-2", destinationBin: "29A041", batch: "6Y14210" },
                // { id: "18-3", destinationBin: "29A041", batch: "6Y14210" },
                // { id: "18-4", destinationBin: "44A097", batch: "0A14101" },
                // { id: "18-5", destinationBin: "50A057", batch: "0A14101" }
                { id: "18-1", destinationBin: "29A041", batch: "6Y14210" },
                { id: "18-2", destinationBin: "29A041", batch: "6Y14210" },
                { id: "18-3", destinationBin: "29A041", batch: "6Y14210" },
                { id: "18-4", destinationBin: "44A097", batch: "0B12201" },
                { id: "18-5", destinationBin: "50A057", batch: "0B12201" }
            ]
        }
    }
}

module.exports = {
    storageMock: storageMock,
    subtaskMock: subtaskMock
}