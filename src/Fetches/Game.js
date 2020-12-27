import { TFT_API } from "../config";

export const getTraits = async () => {
  const data = await fetch(`${TFT_API}/`);
};
