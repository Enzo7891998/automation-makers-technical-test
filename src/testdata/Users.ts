export interface UserCredentials {
  username: string;
  password: string;
}

export const Users: Record<string, UserCredentials> = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  performanceGlitch: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  }
};
