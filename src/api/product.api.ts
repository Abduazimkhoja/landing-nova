import queryString from "query-string";
import axios from "./axios";

import { IGetManyOptions, IGetOneOptions } from "@/types/request.interface";
import { IGetAll } from "@/types/response.interface";
import { IProduct } from "@/types/product.interface";

export const getAll = (options?: IGetManyOptions) => {
  const query = queryString.stringifyUrl({ url: `/product/get-all`, query: { ...options } });

  return axios.get<IGetAll<IProduct[]>>(query);
};

export const getByCode = async (code: string, options?: IGetOneOptions) => {
  const query = queryString.stringifyUrl({ url: `/product/get-by-code/${code}`, query: { ...options } });

  return axios.get<IProduct>(query);
};

export const search = async (q: string, options?: IGetManyOptions) => {
  const query = queryString.stringifyUrl({ url: `/product/search`, query: { ...options, q: q ? q : "" } });

  return axios.get<IGetAll<IProduct[]>>(query);
};

export const getRelated = async (id: number, options?: IGetManyOptions) => {
  const query = queryString.stringifyUrl({ url: `/product/get-related/${id}`, query: { ...options } });

  return axios.get<IGetAll<IProduct[]>>(query);
};
