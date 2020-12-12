type Config = Record<string, string>;

export const ENDPOINTS: Config = {
  JOBS: '/jobs'
};

export const API: Record<string, string | Config> = {
  REMOTE: 'http://localhost:5000',
  ENDPOINTS
}
