define(["jquery"],function(e){return function(t,n){if(t instanceof e){var r="data-autoclose-status";t.hover(function(){e(this).attr(r,"in")},function(){e(this).attr(r,"out")});var i=function(){setTimeout(function(){e(document).one("click",function(){"in"!==t.attr(r)&&"function"==typeof n&&n.call(t)})},100)};i(),t.click(function(){i()})}}});