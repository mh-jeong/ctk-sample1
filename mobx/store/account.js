import { action, observable } from "mobx";

const accountStore = observable({
  state: {
    accountId: null,
    authCd: null,
  },
  LOG_IN(data) {
    this.state.accountId = data.id;
    this.state.authCd = "AD";
  },
  LOG_OUT() {
    this.state.accountId = null;
    this.state.authCd = null;
  },
});

export default accountStore;
