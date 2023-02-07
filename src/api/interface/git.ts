//api 결과중 사용되는 값만 인터페이스에 등록
export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  open_issues_count: number;
  forks: number;
  stargazers_count: number;
  language: string;
  owner: {
    login: string;
  };
}

export interface Issues {
  id: number;
  title: string;
  repository: string;
  repository_id: number;
  state: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}
