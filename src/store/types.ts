export interface APIRequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH";
  authenticated: boolean;
  mock: MockAPIRequestConfig;
}

export interface MockAPIRequestConfig {
  status: number;
  body: any;
  delay?: number;
}
