import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "mpJFi7lMywRc6bm-pjAmu4C6P_sulq76CMSkAKb3AEM",
});

export const getImages = async (amount) => {
  return unsplash.photos.list({ page: 1, perPage: amount });
};
