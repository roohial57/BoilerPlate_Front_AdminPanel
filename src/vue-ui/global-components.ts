import { App } from 'vue';
import { BaseButton } from './components';

export default function registerGlobalComponents(app: App) {
  app.component('BaseButton', BaseButton);
}


