// js/wiki-controls.js

document.addEventListener("DOMContentLoaded", function() {

  // TOC [hide]/[show] functionality
  const tocButton = document.getElementById('toc-hide-button');
  const tocList = document.getElementById('toc-list');

  tocButton.addEventListener('click', function() {
    if (tocList.style.display === 'none') {
      tocList.style.display = 'block';
      tocButton.textContent = 'Contents [hide]';
    } else {
      tocList.style.display = 'none';
      tocButton.textContent = 'Contents [show]';
    }
  });

  // Settings Panel Controls
  document.getElementById('small-text').addEventListener('click', () => {
    document.body.style.fontSize = "14px";
  });
  document.getElementById('normal-text').addEventListener('click', () => {
    document.body.style.fontSize = "16px";
  });
  document.getElementById('large-text').addEventListener('click', () => {
    document.body.style.fontSize = "18px";
  });

  document.getElementById('standard-width').addEventListener('click', () => {
    document.getElementById('content-wrapper').style.maxWidth = "1200px";
  });
  document.getElementById('wide-width').addEventListener('click', () => {
    document.getElementById('content-wrapper').style.maxWidth = "1600px";
  });

});
