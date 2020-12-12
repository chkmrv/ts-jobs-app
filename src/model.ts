export interface UserCareerPath {
  pathId: string;
  name: string;
  isWishOfDevelopment: boolean;
  jobs: UserCareerPathJob[];
}

export interface UserGoal {
  goalId: string;
  goalObjective: string;
  goalStatus: string;
}

export interface UserCareerPathJob {
  jobId: string;
  name: string;
  isWishOfDevelopment: boolean;
  userGoals: UserGoal[];
}
