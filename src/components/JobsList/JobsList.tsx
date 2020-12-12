import React from "react";
import { Job } from "../../types";
import {JobRow, JobName} from "../styled";
import Checkbox from "../Checkbox/Checkbox";

type JobsListProps = {
  career: Array<Job>;
  checkJob: Function;
  pathId: string;
};

const JobsList: React.FC<JobsListProps> = ({ career, pathId, checkJob }) => (
  <>
    {Object.keys(career).map((id: string) => {
      const job: Job = career[id];
      return (
        <JobRow key={id} data-testid={`jobs-${pathId}`}>
          <Checkbox
            checked={job.isWishOfDevelopment}
            onChange={() => checkJob(job, pathId)}
          />
          <JobName>{job.name}</JobName>
        </JobRow>
      );
    })}
  </>
);

export default JobsList;
