import vPictureUpload from './components/vue-picture-upload';

var VuePictureUpload = {
    install(Vue, options) {
        Vue.component('PictureUpload', vPictureUpload)
    }
};

export default VuePictureUpload;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePictureUpload)
}