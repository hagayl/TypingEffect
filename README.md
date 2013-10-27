# A typing effect jQuery plugin
TypingEffect makes your text show one letter after the other to simulate a typewriter effect

## How to use?
Here is a simple FitText setup:

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.typingeffect.js"></script>
<script>
  jQuery("#text_content_1").typingEffect();
  jQuery("#text_content_2").erasingEffect();
</script>
```

## Other options
You can set the effect speed and supply a callback function

```javascript
jQuery("#text_content").typingEffect({speed : 30}, function(){
	jQuery("#text_content").erasingEffect();
});
```
