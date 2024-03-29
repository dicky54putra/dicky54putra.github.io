import Button from "@components/atoms/Button";
import Card from "@components/organisms/PagePortfolio/Card";
import { useAppSelector } from "@hooks/useAppSelector";
import s from "./Portfolio.module.scss";

const Portfolio = () => {
  const portfolio = useAppSelector((s) => s.content.portfolio);
  const dataList = portfolio?.project.slice(0, 3);

  return (
    <div className={s.Container}>
      <h2 className={s.Title}>{portfolio?.title}</h2>
      {dataList?.length && dataList.length > 0 ? (
        <>
          <div className={s.Portfolio}>
            {dataList?.map((item, i) => {
              const models = i % 2 ? 2 : 0;
              return (
                <Card
                  key={i}
                  models={models}
                  image={item.cover}
                  demo={item.demo}
                  desc={item.desc}
                  title={item.title}
                  tech={item.tech}
                />
              );
            })}
          </div>
          <Button isLink to="/portfolio" className={s.Button}>
            See all Project
          </Button>
        </>
      ) : (
        <h2 className={s.DataNotFound}>Data not found!</h2>
      )}
    </div>
  );
};

export default Portfolio;
