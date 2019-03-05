import { ADD_MAPPING } from "../constants/action-types";

export function addMapping(payload) {
  return { type: ADD_MAPPING, payload };
}