import { useEffect, useState } from "react";
import classes from "./MainPage.module.scss";
import { getProjects } from "./fetches";
import { APP_URL, type TProject } from "../../types";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const [data, setData] = useState<TProject[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await getProjects();

        setData(projects);
      } catch (e) {
        console.log(e);
      }
    };

    if (!data.length) {
      fetchData();
    }
  }, [data]);

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.pageTitle}>
        <span>
          I am Ekaterina Azovskaya, a London-based product designer. My research
          is based on observing various phenomena usually invisible to the eye.
          My focus is on material storytelling. I am currently working across
          products, photography, and ceramics.
        </span>
        <span>Nice to meet you.</span>
      </div>

      <div className={classes.cardWrapper}>
        {data &&
          data.map((project) => (
            <div
              className={classes.card}
              onClick={() =>
                navigate("/kate/projects/" + project.id, { state: project })
              }
            >
              <img
                src={`${APP_URL}${project.previewImage}`}
                alt="Project Image"
              />
              <span>{project.title}</span>
              <div className={classes.line} />
            </div>
          ))}
      </div>
    </div>
  );
}
