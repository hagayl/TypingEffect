/*
 Copyright (c) 2013 Hagay Lipman, @HagayLipman

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

;(function($){

//http://burnmind.com/tutorials/how-to-create-a-typing-effect-an-eraser-effect-and-a-blinking-cursor-using-jquery
    $.fn.typingEffect = function(options){
        var settings = $.extend({ speed: 50 }, options );
        var SPEED_RANGE = 0.5;

        return this.each(function() {
            var $this = $(this);
            var fullText = $this.text();
            var fullLength = fullText.length;
            var charIndex = 1;
            var updateText;

            function type(){
                updateText = fullText.substring(0, charIndex++);
                $this.text(updateText);
                if(charIndex <= fullLength){
                    setTimeout(type, randomizeSpeed(settings.speed));
                }
            }

            function randomizeSpeed(num){
                var to = (1+SPEED_RANGE) * num;
                var from = (1-SPEED_RANGE) * num;
                return Math.floor(Math.random() * (to-from+1) + from);
            }

            type();
        });
    };


})(jQuery);


/*
var p = function(a) {
	var b = n.text(), c = null, d = function(h) {
		c && clearTimeout(c);
		c = setTimeout(function() {
			var c = b.length;
			if (c != 0) {
				b = b.slice(0, h);
				n.text(b);
				d(c - 2)
			} else
				f(a)
		}, 100)
	}, 
	
	f = function(a) {
		var c = g[a], a = q[a];
		var d = null, f = function(a) {
			d && clearTimeout(d);
			d = setTimeout(function() {
				if (b.length !=  c.length) {
					b = b + c[a];
					n.text(b);
					f(a + 1)
				}
			}, 100)
		};
		f(0)
	};
	d(b.length - 1)
}*/