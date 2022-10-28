import { AxiosInstance } from 'axios';

export const SWRAxiosFetcher =
  (axiosInstance: AxiosInstance) => (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
