// PiniaStoreManager.ts
import { defineStore, storeToRefs, createPinia, Pinia } from "pinia";
import { reactive, readonly } from "vue";
import type { IWrappedStore, IStoreManager } from "./IStore";

export class PiniaStoreManager implements IStoreManager {
  private stores: Record<string, IWrappedStore> = {};
  public pinia: Pinia = createPinia();

  registerStore<State, Actions = {}, Getters = {}>(
    config: {
      id: string;
      state: () => State;
      actions?: Actions;
      getters?: Getters;
    }
  ): IWrappedStore<State, Actions, Getters> {
    const store = defineStore(config.id, {
      state: config.state,
      actions: config.actions,
      getters: config.getters
    })();

    const refs = storeToRefs(store);

    const wrappedStore: IWrappedStore<State, Actions, Getters> = {
      id: config.id,
      refs,
      state: refs as unknown as State,
      actions: config.actions ?? {},
      getters: readonly(config.getters ?? {}) as Readonly<Getters>
    };

    this.stores[config.id] = wrappedStore;
    return wrappedStore;
  }

  getStore(id: string) {
    return this.stores[id];
  }
}

// یک instance مرکزی
export const storeManager = new PiniaStoreManager();
