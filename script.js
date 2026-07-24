document.getElementById("bookingForm").addEventListener("submit", function(){
alert("Booking request sent! We will contact you shortly.");
});

  const videoFiles = [
  "Videos/Video1.mp4", 
  "Videos/Video2.mp4", 
  "Videos/Video3.mp4",
  "Videos/Video4.mp4",
  "Videos/Video5.mp4",
  "Videos/Video6.mp4"
];
let currentIndex = 0;

const videoElement = document.getElementById('heroVideo');

// Optional: Preload the next video in the background for zero-lag switching
function preloadNextVideo(nextIndex) {
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'prefetch';
  preloadLink.href = videoFiles[nextIndex];
  document.head.appendChild(preloadLink);
}

videoElement.addEventListener('ended', function() {
  // Advance to the next index, looping back to 0 at the end of the array
  currentIndex = (currentIndex + 1) % videoFiles.length;
  let nextIndex = (currentIndex + 1) % videoFiles.length;

  // Update the video source and reload/play
  videoElement.src = videoFiles[currentIndex];
  videoElement.load();
  
  let playPromise = videoElement.play();
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Auto-play playback error:", error);
    });
  }

  preloadNextVideo(nextIndex);
});