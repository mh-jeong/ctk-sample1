import accountStore from "./account";
import commonStore from "./common";

const useGlobalStore = () => {
  return { accountStore, commonStore };
};

export default useGlobalStore;
