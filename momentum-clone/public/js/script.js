'use strict';

(() => {
  const getTime = moment().format('LT');
  $('#time').text(getTime);
})();
