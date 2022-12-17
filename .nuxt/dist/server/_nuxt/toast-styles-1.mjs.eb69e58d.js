const index = ".Vue-Toastification__container{box-sizing:border-box;color:#fff;display:flex;flex-direction:column;min-height:100%;padding:4px;pointer-events:none;position:fixed;width:600px;z-index:9999}@media only screen and (min-width:600px){.Vue-Toastification__container.top-center,.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right{top:1em}.Vue-Toastification__container.bottom-center,.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right{bottom:1em;flex-direction:column-reverse}.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.top-left{left:1em}.Vue-Toastification__container.bottom-left .Vue-Toastification__toast,.Vue-Toastification__container.top-left .Vue-Toastification__toast{margin-right:auto}@supports not (-moz-appearance:none){.Vue-Toastification__container.bottom-left .Vue-Toastification__toast--rtl,.Vue-Toastification__container.top-left .Vue-Toastification__toast--rtl{margin-left:auto;margin-right:unset}}.Vue-Toastification__container.bottom-right,.Vue-Toastification__container.top-right{right:1em}.Vue-Toastification__container.bottom-right .Vue-Toastification__toast,.Vue-Toastification__container.top-right .Vue-Toastification__toast{margin-left:auto}@supports not (-moz-appearance:none){.Vue-Toastification__container.bottom-right .Vue-Toastification__toast--rtl,.Vue-Toastification__container.top-right .Vue-Toastification__toast--rtl{margin-left:unset;margin-right:auto}}.Vue-Toastification__container.bottom-center,.Vue-Toastification__container.top-center{left:50%;margin-left:-300px}.Vue-Toastification__container.bottom-center .Vue-Toastification__toast,.Vue-Toastification__container.top-center .Vue-Toastification__toast{margin-left:auto;margin-right:auto}}@media only screen and (max-width:600px){.Vue-Toastification__container{left:0;margin:0;padding:0;width:100vw}.Vue-Toastification__container .Vue-Toastification__toast{width:100%}.Vue-Toastification__container.top-center,.Vue-Toastification__container.top-left,.Vue-Toastification__container.top-right{top:0}.Vue-Toastification__container.bottom-center,.Vue-Toastification__container.bottom-left,.Vue-Toastification__container.bottom-right{bottom:0;flex-direction:column-reverse}}.Vue-Toastification__toast{border-radius:8px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);box-sizing:border-box;direction:ltr;display:inline-flex;font-family:Lato,Helvetica,Roboto,Arial,sans-serif;justify-content:space-between;margin-bottom:1rem;max-height:800px;max-width:600px;min-height:64px;min-width:326px;overflow:hidden;padding:22px 24px;pointer-events:auto;position:relative;transform:translateZ(0)}.Vue-Toastification__toast--rtl{direction:rtl}.Vue-Toastification__toast--default{background-color:#1976d2;color:#fff}.Vue-Toastification__toast--info{background-color:#2196f3;color:#fff}.Vue-Toastification__toast--success{background-color:#4caf50;color:#fff}.Vue-Toastification__toast--error{background-color:#ff5252;color:#fff}.Vue-Toastification__toast--warning{background-color:#ffc107;color:#fff}@media only screen and (max-width:600px){.Vue-Toastification__toast{border-radius:0;margin-bottom:.5rem}}.Vue-Toastification__toast-body{flex:1;font-size:16px;line-height:24px;white-space:pre-wrap;word-break:break-word}.Vue-Toastification__toast-component-body{flex:1}.Vue-Toastification__toast.disable-transition{-webkit-animation:none!important;animation:none!important}.Vue-Toastification__close-button{align-items:center;background:transparent;border:none;color:#fff;cursor:pointer;font-size:24px;font-weight:700;line-height:24px;opacity:.3;outline:none;padding:0 0 0 10px;transition:.3s ease;transition:visibility 0s,opacity .2s linear}.Vue-Toastification__close-button:focus,.Vue-Toastification__close-button:hover{opacity:1}.Vue-Toastification__toast:not(:hover) .Vue-Toastification__close-button.show-on-hover{opacity:0}.Vue-Toastification__toast--rtl .Vue-Toastification__close-button{padding-left:unset;padding-right:10px}@-webkit-keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}@keyframes scale-x-frames{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Vue-Toastification__progress-bar{-webkit-animation:scale-x-frames linear 1 forwards;animation:scale-x-frames linear 1 forwards;background-color:hsla(0,0%,100%,.7);bottom:0;height:5px;left:0;position:absolute;transform-origin:left;width:100%;z-index:10000}.Vue-Toastification__toast--rtl .Vue-Toastification__progress-bar{left:unset;right:0;transform-origin:right}.Vue-Toastification__icon{align-items:center;background:transparent;border:none;height:100%;margin:auto 18px auto 0;outline:none;padding:0;transition:.3s ease;width:20px}.Vue-Toastification__toast--rtl .Vue-Toastification__icon{margin:auto 0 auto 18px}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@-webkit-keyframes bounceOutRight{40%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(1000px,0,0)}}@keyframes bounceOutRight{40%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(1000px,0,0)}}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@-webkit-keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@-webkit-keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@-webkit-keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Vue-Toastification__bounce-enter-active.bottom-left,.Vue-Toastification__bounce-enter-active.top-left{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}.Vue-Toastification__bounce-enter-active.bottom-right,.Vue-Toastification__bounce-enter-active.top-right{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}.Vue-Toastification__bounce-enter-active.top-center{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}.Vue-Toastification__bounce-enter-active.bottom-center{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-left,.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-left{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-right,.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-right{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}.Vue-Toastification__bounce-leave-active:not(.disable-transition).top-center{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}.Vue-Toastification__bounce-leave-active:not(.disable-transition).bottom-center{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}.Vue-Toastification__bounce-enter-active,.Vue-Toastification__bounce-leave-active{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.Vue-Toastification__bounce-move{transition-duration:.4s;transition-property:all;transition-timing-function:ease-in-out}@-webkit-keyframes fadeOutTop{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-50px)}}@keyframes fadeOutTop{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-50px)}}@-webkit-keyframes fadeOutLeft{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-50px)}}@keyframes fadeOutLeft{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(-50px)}}@-webkit-keyframes fadeOutBottom{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(50px)}}@keyframes fadeOutBottom{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(50px)}}@-webkit-keyframes fadeOutRight{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(50px)}}@keyframes fadeOutRight{0%{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(50px)}}@-webkit-keyframes fadeInLeft{0%{opacity:0;transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInLeft{0%{opacity:0;transform:translateX(-50px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fadeInRight{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translateX(50px)}to{opacity:1;transform:translateX(0)}}@-webkit-keyframes fadeInTop{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInTop{0%{opacity:0;transform:translateY(-50px)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes fadeInBottom{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInBottom{0%{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}.Vue-Toastification__fade-enter-active.bottom-left,.Vue-Toastification__fade-enter-active.top-left{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}.Vue-Toastification__fade-enter-active.bottom-right,.Vue-Toastification__fade-enter-active.top-right{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}.Vue-Toastification__fade-enter-active.top-center{-webkit-animation-name:fadeInTop;animation-name:fadeInTop}.Vue-Toastification__fade-enter-active.bottom-center{-webkit-animation-name:fadeInBottom;animation-name:fadeInBottom}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-left,.Vue-Toastification__fade-leave-active:not(.disable-transition).top-left{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-right,.Vue-Toastification__fade-leave-active:not(.disable-transition).top-right{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}.Vue-Toastification__fade-leave-active:not(.disable-transition).top-center{-webkit-animation-name:fadeOutTop;animation-name:fadeOutTop}.Vue-Toastification__fade-leave-active:not(.disable-transition).bottom-center{-webkit-animation-name:fadeOutBottom;animation-name:fadeOutBottom}.Vue-Toastification__fade-enter-active,.Vue-Toastification__fade-leave-active{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.Vue-Toastification__fade-move{transition-duration:.4s;transition-property:all;transition-timing-function:ease-in-out}@-webkit-keyframes slideInBlurredLeft{0%{filter:blur(40px);opacity:0;transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform-origin:100% 50%}to{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@keyframes slideInBlurredLeft{0%{filter:blur(40px);opacity:0;transform:translateX(-1000px) scaleX(2.5) scaleY(.2);transform-origin:100% 50%}to{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@-webkit-keyframes slideInBlurredTop{0%{filter:blur(240px);opacity:0;transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0}to{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@keyframes slideInBlurredTop{0%{filter:blur(240px);opacity:0;transform:translateY(-1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 0}to{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@-webkit-keyframes slideInBlurredRight{0%{filter:blur(40px);opacity:0;transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform-origin:0 50%}to{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@keyframes slideInBlurredRight{0%{filter:blur(40px);opacity:0;transform:translateX(1000px) scaleX(2.5) scaleY(.2);transform-origin:0 50%}to{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@-webkit-keyframes slideInBlurredBottom{0%{filter:blur(240px);opacity:0;transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%}to{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@keyframes slideInBlurredBottom{0%{filter:blur(240px);opacity:0;transform:translateY(1000px) scaleY(2.5) scaleX(.2);transform-origin:50% 100%}to{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}}@-webkit-keyframes slideOutBlurredTop{0%{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0}to{filter:blur(240px);opacity:0;transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0}}@keyframes slideOutBlurredTop{0%{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 0}to{filter:blur(240px);opacity:0;transform:translateY(-1000px) scaleY(2) scaleX(.2);transform-origin:50% 0}}@-webkit-keyframes slideOutBlurredBottom{0%{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(240px);opacity:0;transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%}}@keyframes slideOutBlurredBottom{0%{filter:blur(0);opacity:1;transform:translateY(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(240px);opacity:0;transform:translateY(1000px) scaleY(2) scaleX(.2);transform-origin:50% 100%}}@-webkit-keyframes slideOutBlurredLeft{0%{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(40px);opacity:0;transform:translateX(-1000px) scaleX(2) scaleY(.2);transform-origin:100% 50%}}@keyframes slideOutBlurredLeft{0%{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(40px);opacity:0;transform:translateX(-1000px) scaleX(2) scaleY(.2);transform-origin:100% 50%}}@-webkit-keyframes slideOutBlurredRight{0%{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(40px);opacity:0;transform:translateX(1000px) scaleX(2) scaleY(.2);transform-origin:0 50%}}@keyframes slideOutBlurredRight{0%{filter:blur(0);opacity:1;transform:translateX(0) scaleY(1) scaleX(1);transform-origin:50% 50%}to{filter:blur(40px);opacity:0;transform:translateX(1000px) scaleX(2) scaleY(.2);transform-origin:0 50%}}.Vue-Toastification__slideBlurred-enter-active.bottom-left,.Vue-Toastification__slideBlurred-enter-active.top-left{-webkit-animation-name:slideInBlurredLeft;animation-name:slideInBlurredLeft}.Vue-Toastification__slideBlurred-enter-active.bottom-right,.Vue-Toastification__slideBlurred-enter-active.top-right{-webkit-animation-name:slideInBlurredRight;animation-name:slideInBlurredRight}.Vue-Toastification__slideBlurred-enter-active.top-center{-webkit-animation-name:slideInBlurredTop;animation-name:slideInBlurredTop}.Vue-Toastification__slideBlurred-enter-active.bottom-center{-webkit-animation-name:slideInBlurredBottom;animation-name:slideInBlurredBottom}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-left,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-left{-webkit-animation-name:slideOutBlurredLeft;animation-name:slideOutBlurredLeft}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-right,.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-right{-webkit-animation-name:slideOutBlurredRight;animation-name:slideOutBlurredRight}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).top-center{-webkit-animation-name:slideOutBlurredTop;animation-name:slideOutBlurredTop}.Vue-Toastification__slideBlurred-leave-active:not(.disable-transition).bottom-center{-webkit-animation-name:slideOutBlurredBottom;animation-name:slideOutBlurredBottom}.Vue-Toastification__slideBlurred-enter-active,.Vue-Toastification__slideBlurred-leave-active{-webkit-animation-duration:.75s;animation-duration:.75s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.Vue-Toastification__slideBlurred-move{transition-duration:.4s;transition-property:all;transition-timing-function:ease-in-out}";
export {
  index as default
};
//# sourceMappingURL=toast-styles-1.mjs.eb69e58d.js.map