window.scrollTo(0,1);var s=skrollr.init({smoothScrollingDuration:100}),index=window.Util.getArgVal("index");null!=index&&(index=+index,3>index&&index>-1&&s.animateTo(100*index));var initX=0,initY=0,isScrollZero=!0,calcMovement=function(i){var n=i.changedTouches[0],t=n.clientX,o=n.clientY,e=0,c=null;return Math.abs(t-initX)<20&&(e=o-initY,Math.abs(e)>20&&(c=e>0?"down":"up")),{movedY:e,direction:c}},setTouchInit=function(i){var n=i.changedTouches[0];initX=n.clientX,initY=n.clientY,isScrollZero=i.target.scrollTop>0?!1:!0},_tf=null;$("section").on("touchstart",function(i){i.changedTouches[0];setTouchInit(i)}).on("touchmove",function(i){var n=$(this),t=n.attr("data-index"),o=function(){var n,o=+t;n=calcMovement(i),2!=t?n.direction&&("up"==n.direction?o++:o--):0==this.scrollTop&&isScrollZero&&n.movedY>20&&(o=1),o>=0&&o!=t&&s.animateTo(100*o),2==o?$(".footer").hide():$(".footer").show()};o()}),$("#btnIntro").on("click",function(){$(".letter").show()}),$(".letter").delegate(".close","click",function(){$(".letter").hide()}),setTimeout(function(){$(".container").css({visibility:"visible"})},100);