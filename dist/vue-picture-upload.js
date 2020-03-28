(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-picture-upload'] = factory());
}(this, (function () { 'use strict';

var vPictureUpload = {};

var VuePictureUpload = {
    install: function install(Vue, options) {
        Vue.component('PictureUpload', vPictureUpload);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePictureUpload);
}

return VuePictureUpload;

})));
