import axios from "axios";
import PortfolioContent from "components/organisms/Portfolio";
import Wrapper from "components/moleculs/Wrapper";
import { API_URL } from "helpers/Constant";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/portfolio.json`).then((res) => {
      setData(res.data);
    });
  }, [setData]);

  return (
    <Wrapper hasTitle title={data?.title} hasFooter>
      <PortfolioContent data={data?.project} />
    </Wrapper>
  );
}