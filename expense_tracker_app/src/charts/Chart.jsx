import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ chartDataPointsABC }) => {

    const dataPointerValue = chartDataPointsABC.map((dataVal) => {
        return dataVal.value
    });
    console.log(chartDataPointsABC);

    const totalMaximum = Math.max(...dataPointerValue);
    console.log(dataPointerValue)
    console.log(totalMaximum)

    return (<div className="chart">
        {chartDataPointsABC.map((grr) => {
            return <ChartBar
                labelABC={grr.label}
                valueABC={grr.value}
                maxValue={totalMaximum}
                key={grr.label}
            ></ChartBar>

        })}
    </div>)
}

export default Chart;