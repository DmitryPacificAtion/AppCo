class Repository {
  constructor() {
    this.store = null;
  }
  set store(data) {
    this.store = data;
  }
  static get() {
    if (
      !this.store ||
      (typeof this.store === "object" && Object.keys(this.store).length === 0)
    ) {
      init();
    }
    return this.store;
  }
  init() {
    const localStore = localStorage.getItem("APP_CO_STORE");
    if (localStore) {
      store(localStore);
    } else {
      Promise.all([this.getUserStatistics])
        .then(([userStatistics]) => {
          console.log("userStatistics", userStatistics);
        })
        .catch((error) => console.error(error));
    }
  }
  getUserStatistics() {
    return fetch('/api/user-statistic')
  }
}

const repository = new Repository();
export default repository;
