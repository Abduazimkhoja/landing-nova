import queryString from "query-string";
import axios from "./axios";

import { IGetManyOptions } from "@/types/request.interface";
import { ICertificate } from "@/types/certificate.interface";

export const getAll = async (options?: IGetManyOptions) => {
  const query = queryString.stringifyUrl({ url: `/certificate/get-all`, query: { ...options } });

  return axios.get<ICertificate[]>(query);
};
