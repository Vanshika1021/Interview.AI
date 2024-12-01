function getStarted() {
    alert("Welcome! Let's prepare for your interviews.");
  }
  
  function startPractice() {
    alert("Starting your practice session!");
  }
  function startInterview(category) {
    alert(`Starting your ${category} interview practice!`);
    // Redirect to a new page (e.g., practice.html) for the chosen category
    window.location.href = `practice.html?category=${encodeURIComponent(category)}`;
  }
  