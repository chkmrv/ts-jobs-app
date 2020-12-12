import React, { useEffect } from "react";
import {Career, Job} from "../../types";
import axios from "axios";
import Loader from "../Loader";
import { getCareerList } from "../../data/jobs";
import { useJobsData } from "../../AppContext";
import JobsList from "../JobsList/JobsList";
import {JobName, JobRowHeader} from "../styled";
import Checkbox from "../Checkbox/Checkbox";

const JobsClass: React.FC = () => {
  const [jobsData, dispatch = () => {}] = useJobsData();
  const {loading, careerList = {}} = jobsData;

  useEffect(() => {
    dispatch({
      type: "JOBS_LIST_LOADING",
    });
    (async () => {
      const data: Map<string, Career> = await getCareerList();
      dispatch({
        type: "JOBS_LIST_RECEIVED",
        careerList: data,
      });
    })();
  }, []); // eslint-disable-line

  const checkAllData = (data) => {
    const list: Job[] = data.jobs.map((item) => ({...item, isWishOfDevelopment: !data.isWishOfDevelopment}));
    const merge: Career = {...data, isWishOfDevelopment: !data.isWishOfDevelopment, jobs: list};

    dispatch({
      type: "JOBS_UPDATED",
      careerList: {[data.pathId]: merge},
    });
    if (!data.isWishOfDevelopment) {
      const list = data.jobs.map((item) => item.jobId)
      axios.put(`careerPaths/${data.pathId}`, list)
    }
  };

  const checkJob = (data, pathId) => {
    const job = careerList[pathId]
    const list = job.jobs.map(item => (
      data.jobId === item.jobId
        ? {...data, isWishOfDevelopment: !data.isWishOfDevelopment}
        : item
    ));
    let merge = {...job, jobs: list}

    dispatch({
      type: "JOBS_UPDATED",
      careerList: {[pathId]:merge},
    });
    if (!data.isWishOfDevelopment) {
      axios.put(`jobs/${data.jobId}`)
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {Object.keys(careerList).map((id: string) => {
        const job: Career = careerList[id];
        return (
          <div key={job.pathId} data-testid={`jobs-${job.pathId}`}>
            <JobRowHeader>
              <Checkbox
                checked={job.isWishOfDevelopment}
                onChange={() => checkAllData(job)}
              />
              <JobName>{job.name}</JobName>
            </JobRowHeader>
            <JobsList career={job.jobs} pathId={job.pathId} checkJob={checkJob} />
          </div>
        );
      })}
    </>
  );
};

export default JobsClass;
