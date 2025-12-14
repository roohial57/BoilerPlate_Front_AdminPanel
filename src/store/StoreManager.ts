
import { defineStore, storeToRefs, createPinia, Pinia } from "pinia";
import type { IStoreManager } from "./IStoreManager";

export class StoreManager implements IStoreManager {
  private stores: Record<string, any> = {};
  public pinia: Pinia = createPinia();

  registerStore<State, Actions = {}, Getters = {}>(
    config: {
      id: string;
      state: () => State;
      actions?: Actions;
      getters?: Getters;
    }
  ): State & Actions & Getters {
    const store = defineStore(config.id, {
      state: config.state,
      actions: config.actions,
      getters: config.getters
    })();

    this.stores[config.id] = store;
    return store as State & Actions & Getters;
  }

  getStore(id: string) {
    return this.stores[id];
  }
}

// یک instance مرکزی
export const storeManager = new StoreManager();
