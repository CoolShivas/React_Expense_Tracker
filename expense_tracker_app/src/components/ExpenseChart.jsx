import Chart from "../charts/Chart";



const ExpenseChart = ({ filteringYearForDataABC }) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of filteringYearForDataABC) {
        const expMonth = expense.date.getMonth();
        chartDataPoints[expMonth].value += expense.amount;
    }
    return <>
        <Chart chartDataPointsABC={chartDataPoints}></Chart>
    </>
}

export default ExpenseChart;