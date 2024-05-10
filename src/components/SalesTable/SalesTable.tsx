import React, { useState, useEffect } from "react";
import "./SalesTable.css";
import { useAppSelector } from "../../store/hooks";
import DataState from "../../store/apislice";
import { Card, CardBody, Table } from "react-bootstrap";
import { TABLE_HEADERS } from "../../constants";

const SalesTable: React.FC = () => {
  const productData: DataState = useAppSelector((state) => state.product);
  const sales = productData.data.sales;
  const [sort, setSort] = useState({
    keyToSort: "weekEnding",
    direction: "asc",
  });
  const [sortedArray, setSortedArray] = useState([]);
  useEffect(() => {
    setSortedArray(sales);
  }, [sales]);

  const sortTable = (key: string) => {
    let sorted;
    let isAsc: boolean = true;
    if (sort.keyToSort === key && sort.direction === "asc") isAsc = false;
    if (!isAsc)
      sorted = [...sortedArray]?.sort((a: any, b: any) =>
        key === "weekEnding"
          ? new Date(b[key]).getTime() - new Date(a[key]).getTime()
          : b[key] - a[key]
      );
    else
      sorted = [...sortedArray]?.sort((a: any, b: any) =>
        key === "weekEnding"
          ? new Date(a[key]).getTime() - new Date(b[key]).getTime()
          : a[key] - b[key]
      );
    setSort({
      keyToSort: key,
      direction: isAsc ? "asc" : "desc",
    });
    setSortedArray(sorted);
  };
  return (
    <div>
      <Card className="tableCard shadow">
        <CardBody className="table">
          <Table>
            <thead>
              <tr className="tableHead">
                {Object.keys(TABLE_HEADERS).map((key) => {
                  return (
                    <th key={key} onClick={() => sortTable(key)}>
                      {TABLE_HEADERS[key as keyof typeof TABLE_HEADERS]}

                      {sort?.keyToSort === key && sort?.direction === "asc" ? (
                        <span className="sortSymbo">&darr;</span>
                      ) : sort?.keyToSort === key &&
                        sort?.direction === "desc" ? (
                        <span className="sortSymbo">&uarr;</span>
                      ) : (
                        ``
                      )}
                    </th>
                  );
                })}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sortedArray?.map((sale: any, index: any) => {
                return (
                  <tr key={index} className="tableBody">
                    <td>{sale.weekEnding}</td>
                    <td>${sale.retailSales}</td>
                    <td>${sale.wholesaleSales}</td>
                    <td>{sale.unitsSold}</td>
                    <td>${sale.retailerMargin}</td>
                  </tr>
                );
              })}{" "}
              *<td></td>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default SalesTable;
