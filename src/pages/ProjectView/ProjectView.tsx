import { useEffect, useState } from "react";
import type { TProject } from "../../types";
import classes from "./ProjectView.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { getProject } from "./fetches";
import Gallery from "./Galerey";

export default function ProjectViewPage() {
  const location = useLocation();
  const pr = location.state as TProject | undefined;
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<TProject | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const request = await getProject(id!);
        setProject(request);
      } catch (e) {
        console.log(e);
      }
    };

    if (!pr) {
      fetchProjectData();
    } else {
      setProject(pr);
    }
  }, [pr, id]);

  if (!project) return <></>;

  return (
    <div className={classes.projectPage}>
      <div className={classes.topBlock}>
        <div className={classes.header}>
          <h1 className={classes.title}>{project.title}</h1>
          <span className={classes.subTitle}>{project.shortDescription}</span>
        </div>
        <div className={classes.text}>
          {project.fullDescription.map((fragment) => (
            <span className={classes.description}>{fragment}</span>
          ))}
        </div>
      </div>

      <Gallery
        primaryImages={project.primaryImages}
        secondaryImages={project.secondaryImages}
        vertical={project.vertical}
        last={project.last}
      />
    </div>
  );
}
