!function(){function e(e,n){e.removeClass("inCenter inLower").addClass("inUpper"),n.removeClass("inLower inUpper").addClass("inCenter")}function n(e,n){n.removeClass("inUpper inLower").addClass("inCenter"),e.removeClass("inCenter inUpper").addClass("inLower")}window.scrollTo(0,1);var i=0,t=0,o=!0,r=function(e){var n=e.changedTouches[0],o=n.clientX,r=n.clientY,c=0,s=null;return Math.abs(o-i)<20&&(c=r-t,Math.abs(c)>10&&(s=c>0?"down":"up")),{movedY:c,direction:s}},c=function(e){var n=e.changedTouches[0];i=n.clientX,t=n.clientY,o=e.target.scrollTop>0?!1:!0};$("section").on("touchstart",function(e){c(e)}).on("touchmove",function(i){var t,c=$(this),s=c.attr("data-index"),a=+s;t=r(i),2!=s?t.direction&&("up"==t.direction?a++:a--):0==this.scrollTop&&o&&t.movedY>10&&(a=1),a>=0&&a!=s&&("up"==t.direction?e:n)($("section[data-index='"+s+"']"),$("section[data-index='"+a+"']")),2==a?$(".footer").hide():$(".footer").show()}),$("#btnIntro").on("click",function(){$(".letter").show()}),$(".letter").delegate(".close","click",function(){$(".letter").hide()}),setTimeout(function(){$(".container").css({visibility:"visible"}),$("#loading").hide()},1e3)}();