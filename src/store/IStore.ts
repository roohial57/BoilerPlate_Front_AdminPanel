// IStore.ts
import type { Ref } from "vue";

export interface IWrappedStore<State = any, Actions = {}, Getters = {}> {
  id: string;
  refs: Record<string, Ref<any>>; // reactive refs برای component
  state: State;                    // reactive state
  actions: Actions;                // توابع mutate state
  getters: Readonly<Getters>;      // read-only getters
}

export interface IStoreManager {
  registerStore<State, Actions = {}, Getters = {}>(
    config: {
      id: string;
      state: () => State;
      actions?: Actions;
      getters?: Getters;
    }
  ): IWrappedStore<State, Actions, Getters>;

  getStore(id: string): IWrappedStore | undefined;
}
