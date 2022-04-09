import Vue from 'vue';
import { NavBar,Tabbar, TabbarItem } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Card } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Card); 
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar).use(Tabbar).use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);