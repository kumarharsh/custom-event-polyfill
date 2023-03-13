// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

(function() {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    var ce = new window.CustomEvent('test', { cancelable: true });
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
      // IE has problems with .preventDefault() on custom events
      // http://stackoverflow.com/questions/23349191
      throw new Error('Could not prevent default');
    }
  } catch (e) {
    var CustomEvent = function(event, params) {
      var evt, origPrevent;

      // We use here some version of `Object.assign` implementation, to create a shallow copy of `params`.
      // Based on https://github.com/christiansany/object-assign-polyfill/blob/213cc63df14515fb543117059d1576204bfaa8a7/index.js
      var newParams = {};
      // Skip over if undefined or null
      if (params != null) {
        for (var nextKey in params) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(params, nextKey)) {
            newParams[nextKey] = params[nextKey];
          }
        }
      }

      newParams.bubbles = !!newParams.bubbles;
      newParams.cancelable = !!newParams.cancelable;

      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(
        event,
        newParams.bubbles,
        newParams.cancelable,
        newParams.detail
      );
      origPrevent = evt.preventDefault;
      evt.preventDefault = function() {
        origPrevent.call(this);
        try {
          Object.defineProperty(this, 'defaultPrevented', {
            get: function() {
              return true;
            }
          });
        } catch (e) {
          this.defaultPrevented = true;
        }
      };
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent; // expose definition to window
  }
})();
