import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

const createUniqueId = () => {
  return uuidv4();
};

const generateCurrentTimestamp = () => {
  return dayjs().format("DD MMM YYYY HH:mm:ss");
};

export { createUniqueId, generateCurrentTimestamp };
