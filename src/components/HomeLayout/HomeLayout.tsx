import React, { useEffect } from "react";
import "./HomeLayout.css";
import ProductDetails from "../ProductDetails/ProductDetails";
import SalesGraph from "../SalesGraph/SalesGraph";
import SalesTable from "../SalesTable/SalesTable";
import { fetchData } from "../../store/apislice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { Col, Row } from "react-bootstrap";

const HomeLayout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loadData = () => {
    dispatch(fetchData());
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Row>
        <Col md={3}>
          <div>
            <ProductDetails />
          </div>
        </Col>
        <Col md={9}>
          <div>
            <SalesGraph />
            <SalesTable />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeLayout;
