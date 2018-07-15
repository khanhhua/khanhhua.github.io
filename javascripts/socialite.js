window.onload = function() {
  var sl = document.createElement('LINK');
  sl.attr('href', 'https://cdn.jsdelivr.net/npm/socialite.client@0.1.3/dist/css/main.css');
  sl.attr('rel', 'stylesheet');
  document.head.appendChild(sl);
   
  SOCIALITE('root');
}
