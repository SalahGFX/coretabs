import Home from './components/Home/Home.vue';
import Register from './components/Register/Register.vue';
import Demo from './components/Demo/Demo.vue';
import About from './components/About/About.vue';
import Classroom from './components/Classroom/Classroom.vue';


export const routes = [
  { path: '', component: Home},
  { path: '/register', component: Register},
  { path: '/demo', component: Demo},
  { path: '/about', component: About},
  { path: '/classroom', component: Classroom}
];
