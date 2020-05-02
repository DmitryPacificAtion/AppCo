type Gender = 'Male' | 'Female';

interface IUserCollection {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: Gender;
  ip_address: string;
}

interface IStatisticCollection {
  user_id: number;
  date: string;
  page_views: number;
  clicks: number;
}

export interface IUserStatisticCollection extends IUserCollection {
  page_views: number;
  clicks: number;
}

export type UserStatistic = IUserCollection & IStatisticCollection;
