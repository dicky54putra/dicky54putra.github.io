import useStore from "@hooks/useStore";
import Card from "./Card";
import s from "./PageArticle.module.scss";

const PageArticle = () => {
  const {
    content: { article },
  } = useStore();

  return (
    <div className={s.Article}>
      {article?.map((data, i) => {
        return (
          <Card
            isGrid
            imgUrl={data.cover_image}
            url={data.url}
            key={i}
            title={data.title}
            published={data.readable_publish_date}
            minutes={data.reading_time_minutes}
            tag={data.tag_list}
          />
        );
      })}
    </div>
  );
};

export default PageArticle;
