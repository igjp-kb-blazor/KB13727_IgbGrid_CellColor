/*氏名 列の条件付きクラスを設定*/
igRegisterScript("CellClassesHandler1", function () {
    return {
        person: (rowData, columnKey) => rowData[columnKey] === "Bob",
    };
}, true);

/*年齢 列の条件付きクラスを設定*/
igRegisterScript("CellClassesHandler2", () => {
    return {
        upFont: (rowData, columnKey) => rowData[columnKey] >= 35,
        downFont: (rowData, columnKey) => rowData[columnKey] < 35
    };
}, true);

/*職業 列の条件付きクラスを設定*/
igRegisterScript("CellClassesHandler3", function () {
    return {
        "job-title-cell": (rowData, columnKey, cellValue, rowIndex) => true
    };
}, true);