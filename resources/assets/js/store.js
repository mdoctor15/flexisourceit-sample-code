import Vue from 'vue';
import Vuex from 'vuex';

import userStore from './components/user/userStore';
import chatStore from './views/chat/chatStore';
import privateMessageStore from './views/private-message/privateMessageStore';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	modules: {
		userStore, chatStore, privateMessageStore
	},
	strict: debug
})