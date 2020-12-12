export type Career = {
  pathId: string;
  name: string;
  isWishOfDevelopment: boolean;
  jobs: Array<Job>;
};

export type Job = {
  jobId: string;
  name: string;
  isWishOfDevelopment: boolean;
};

export type State = {
  loading: boolean;
  careerList: Map<string, Career>;
};
