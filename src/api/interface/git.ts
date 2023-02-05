//api 결과중 사용되는 값만 인터페이스에 등록
export interface Repository {
  id: number;
  html_url: string;
  owner: {
    login: string;
  };
}
