import { findAllEvents } from "../dao/events.dao.js";

export const getEvents = async () => {
  return await findAllEvents();
};