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
    $.fn.typingEffect = function(options, callback){
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
                } else{
                    if(callback){
                        callback();
                    }
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

    $.fn.erasingEffect = function(options, callback){
        var settings = $.extend({ speed: 50 }, options );
        var SPEED_RANGE = 0.5;

        return this.each(function() {
            var $this = $(this);
            var fullText = $this.text();
            var fullLength = fullText.length;
            var charIndex = fullLength;
            var updateText;

            function type(){
                updateText = fullText.substring(0, charIndex--);
                $this.text(updateText);
                if(charIndex >= 0){
                    setTimeout(type, randomizeSpeed(settings.speed));
                } else{
                    if(callback){
                        callback();
                    }
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
