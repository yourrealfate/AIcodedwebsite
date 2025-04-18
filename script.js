// Get the audio element
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const trackName = document.getElementById("track-name");

// Array of audio files (you can add as many as you want)
const tracks = [
    { src: "track1.mp3", name: "Track 1" },
    { src: "track2.mp3", name: "Track 2" },
    { src: "track3.mp3", name: "Track 3" },
];

let currentTrackIndex = 0;

// Update the audio source and track name
function updateTrack() {
    audio.src = tracks[currentTrackIndex].src;
    trackName.innerText = tracks[currentTrackIndex].name;
    audio.load();
}

// Play/Pause functionality
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerText = "⏸️";  // Change to pause button
    } else {
        audio.pause();
        playButton.innerText = "▶️";  // Change to play button
    }
});

// Previous track functionality
prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex === 0) ? tracks.length - 1 : currentTrackIndex - 1;
    updateTrack();
    audio.play();
    playButton.innerText = "⏸️";  // Change to pause button
});

// Next track functionality
nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
    audio.play();
    playButton.innerText = "⏸️";  // Change to pause button
});

// Initialize the first track
updateTrack();
