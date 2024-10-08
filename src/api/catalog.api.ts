import queryString from "query-string";
import axios from "./axios";

import { IGetManyOptions } from "@/types/request.interface";
import { IGetAll } from "@/types/response.interface";
import { ICatalog } from "@/types/catalog.interface";

export const getAll = async (options?: IGetManyOptions) => {
  const query = queryString.stringifyUrl({ url: `/catalog/get-all`, query: { ...options } });

  return axios.get<IGetAll<ICatalog[]>>(query);
};
