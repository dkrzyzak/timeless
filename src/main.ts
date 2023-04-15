import { createApp } from 'vue';

// vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import dayjs from 'dayjs';
import 'dayjs/locale/pl';

import App from './App.vue';
import router from './router';

dayjs.locale('pl');

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify);

app.mount('#app');
