require ('assets/css/common.css');

// require('assets/js/iconfont.js')

import 'element-ui/lib/theme-default/index.css'

import axios from 'axios';

import Vue from 'vue';

import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.prototype.axios = axios;


import C from './conf'; 	//全局的站点配置文件
import M from './common'; 	//全局的共用事件
import './iconfont'  //字体库

import vueFilter from './vueFilter';  	//全局过滤器


export default{
	M,C
}