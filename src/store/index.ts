import { defineStore } from "pinia";

export const useDonorStore = defineStore("donor", {
  state: () => ({
    donors: [] as Array<any>,
  }),
  actions: {
    addDonor(donor: any) {
      this.donors.push(donor);
    },
  },
});
