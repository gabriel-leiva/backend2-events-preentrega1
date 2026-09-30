import { EventModel } from "../models/Event.js";

export const findAllEvents = async () => {
  return await EventModel.find();
};