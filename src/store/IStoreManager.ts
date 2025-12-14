// IStore.ts
import type { Ref } from "vue";


export interface IStoreManager {
  registerStore<State, Actions = {}, Getters = {}>(
    config: {
      id: string;
      state: () => State;
      actions?: Actions;
      getters?: Getters;
    }
  ): State & Actions & Getters;

  getStore(id: string): any | undefined;
}
