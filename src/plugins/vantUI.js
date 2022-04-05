import Vue from 'vue';
import { NavBar,Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar).use(Tabbar).use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);