document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.querySelector('#search-input');
  const topics = document.querySelectorAll('.topic');

  // Create a "no results" message element
  const noResultsMessage = document.createElement('div');
  noResultsMessage.id = 'no-results-message';
  noResultsMessage.textContent = 'No topics found.';
  noResultsMessage.style.display = 'none';
  noResultsMessage.style.color = 'red';
  noResultsMessage.style.marginTop = '10px';
  searchInput.parentNode.appendChild(noResultsMessage);

  // Map links to iframe IDs based on hrefs
  const topicData = {};
  topics.forEach(topic => {
    const href = topic.getAttribute('href');
    const baseName = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
    topicData[baseName] = {
      link: topic,
      iframe: document.getElementById(baseName),
      content: ''
    };
  });

  // Preload iframe content into memory
  const iframeKeys = Object.keys(topicData);
  let loadedCount = 0;

  iframeKeys.forEach(key => {
    const iframe = topicData[key].iframe;
    iframe.addEventListener('load', function() {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        topicData[key].content = doc.body.innerText.toLowerCase();
      } catch (e) {
        console.error('Failed to read iframe:', key, e);
      }
      loadedCount++;
      if (loadedCount === iframeKeys.length) {
        enableSearch();
      }
    });
  });

  function enableSearch() {
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
      let found = false;

      iframeKeys.forEach(key => {
        const { link, content } = topicData[key];
        if (link.innerText.toLowerCase().includes(searchTerm) || content.includes(searchTerm)) {
          link.style.display = '';
          found = true;
        } else {
          link.style.display = 'none';
        }
      });

      if (!found && searchTerm.trim() !== "") {
        noResultsMessage.style.display = 'block';
      } else {
        noResultsMessage.style.display = 'none';
      }
    });
  }
});
