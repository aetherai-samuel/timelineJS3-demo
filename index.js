fetch('data/timeline.json')
  .then((response) => response.json())
  .then((data) => {
    window.timeline = new TL.Timeline('timeline-embed', data);
  });
