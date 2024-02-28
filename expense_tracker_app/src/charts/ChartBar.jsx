import "./ChartBar.css";

const ChartBar = ({ valueABC, maxValue, labelABC }) => {
    console.log("testing the flow");

    let barFillHeight = '0%';

    if (maxValue > 0) {
        barFillHeight = Math.round((valueABC / maxValue) * 100) + '%';
    }
    console.log(barFillHeight)

    return <div className="chart_bar">
        <div className="chart_bar__inner">
            <div className="chart_bar__fill" style={{ height: barFillHeight }}></div>
        </div>
        <div className="chart_bar__label">{labelABC}</div>
    </div>

}

export default ChartBar;