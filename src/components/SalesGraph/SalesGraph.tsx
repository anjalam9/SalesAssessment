import React from "react";
import "./SalesGraph.css";
import { useAppSelector } from "../../store/hooks";
import DataState from "../../store/apislice";
import Chart from "react-google-charts";
import { SalesData } from "../../models";

const SalesGraph: React.FC = () => {
  const productData: DataState = useAppSelector((state) => state.product);
  const sales = productData.data.sales;
  const chartData = () => {
    const data: any[] = [
      [{ type: "date", label: "" }, "Retail Sale", "Whole Sale"],
    ];
    sales?.map((item: SalesData) => {
      const temp = [];
      temp.push(
        new Date(item.weekEnding + " 00:00:00"),
        item.retailSales,
        item.wholesaleSales
      );
      data.push(temp);
    });
    return data;
  };
  const chartOptions = {
    chart: {
      title: "Sales Graph",
    },
    series: {},
    axes: {},
  };

  return (
    <div>
        <div></div>
      <div className="graphCard shadow">
        <div >
          <Chart
          className="chart"
            chartType="Line"
            width="90%"
            height="300px"
            data={chartData()}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesGraph;
