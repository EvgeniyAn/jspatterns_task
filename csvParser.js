
const csvParser = () => {
    let lines = [];
    const internalParser = {
        parseData: function (data) {
            lines = data.split("\n");
            return this;
        },
        removeTitle: function () {
            lines.shift();
            return this;
        },
        getRows: function () {
            const result = [];
            for (const line of lines) {
                result.push(this.parseRow(line));
            }
            lines = [];
            return result;
        },
        parseRow: function (row) {
            return row.split(",").map(cell => cell.trim());
        }
    }
    return {
        parse: function (data) {
            return internalParser.parseData(data)
                .removeTitle()
                .getRows();
        }
    };
};

export default csvParser;