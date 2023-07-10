import { RAW_IMAGES } from "@/constant/generals";
import { FC } from "react";
import s from "./Card.module.scss";
import { TCard } from "./Card.types";

const Card: FC<TCard> = (props) => {
  const { models, image, title, desc, demo, tech } = props;
  const modelsType = [1, 2, 3];

  let styleType = "";
  if (modelsType[models]) {
    styleType = s[`model-${modelsType[models]}`];
  }

  return (
    <div className={[s.card, styleType].join(" ")}>
      <div className={s.img}>
        <img
          src={`${RAW_IMAGES}${image}`}
          loading="lazy"
          alt={title}
          title={title}
          height={80}
          width={80}
        />
      </div>
      <div className={s.content}>
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <h2 className={s.title}>{title}</h2>
          </a>
        ) : (
          <h2 className={s.title}>{title}</h2>
        )}
        <p className={s.desc}>{desc}</p>
        <span className={s.tech}>{tech}</span>
      </div>
    </div>
  );
};

export default Card;
