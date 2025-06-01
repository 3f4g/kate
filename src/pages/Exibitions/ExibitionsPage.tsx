import { useEffect, useState } from "react";
import { APP_URL, type TExibition } from "../../types";
import classes from "./ExibitionsPage.module.scss";
import { getExibitions } from "./fetches";

export default function ExibitionsPage() {
  const [data, setData] = useState<TExibition[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await getExibitions();
        console.log("запрос");
        setData(request);
      } catch (e) {
        console.log(e);
      }
    };

    if (!data.length) fetchData();
  }, [data]);

  console.log(!data.length);

  if (!data) return <></>;

  return (
    <div className={classes.exibitionsPage}>
      <h1>Exibitions</h1>
      <div className={classes.content}>
        {data &&
          data.map((exibition) => (
            <div className={classes.block}>
              <img
                src={`${APP_URL}${exibition.image}`}
                alt="exibition img"
                className={classes.exibitionImage}
              />
              <div className={classes.descr}>
                <span className={classes.title}>{exibition.title}</span>
                <span>{exibition.description}</span>

                {exibition.link && (
                  <a
                    href={exibition.link}
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See more...
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
