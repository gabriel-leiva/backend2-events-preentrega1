import { getEvents } from "../repositories/events.repository.js";

export const getEventsService = async () => {
  return await getEvents();
};