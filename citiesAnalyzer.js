import csvParser from './csvParser.js';

const citiesAnalyzer = () => {
    let table = [];
    return {
        parseData: function (data) {
            table = csvParser().parse(data)
            return this;
        },

        calculatingRelativeDensity: function () {
            const max = this.getMaxDensity();
            for (const row of table) {
                const d = parseInt(row[3]);
                const a = Math.round((d * 100) / max);
                row.push(a.toString());
            }
            return this;
        },

        getMaxDensity: function () {
            let max = 0;
            for (const row of table) {
                const d = parseInt(row[3]);
                if (d > max) max = d;
            }
            return max;
        },

        sortByDensity: function () {
            table.sort((r1, r2) => r2[5] - r1[5]);
            return this;
        },

        printCityInformation: function () {
            for (const row of table) {
                let s = row[0].padEnd(18);
                s += row[1].padStart(10);
                s += row[2].padStart(8);
                s += row[3].padStart(8);
                s += row[4].padStart(18);
                s += row[5].padStart(6);
                console.log(s);
            }
            return this;
        },
    };
};

export default citiesAnalyzer;