"use strict;";

const video = document.querySelector("video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playButton = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullScreen = document.querySelector(".fullscreen");
const speedSelector = document.querySelector(".player-speed");
// Play & Pause ----------------------------------- //

let playing = false;
const togglePlay = function () {
  if (!playing) {
    video.play();
    playButton.classList.replace("fa-play", "fa-pause");
    playButton.setAttribute("title", "Pause");
    playing = true;
  } else {
    video.pause();
    playButton.classList.replace("fa-pause", "fa-play");
    playButton.setAttribute("title", "play");
    playing = false;
  }
};
playButton.addEventListener("click", togglePlay);

// Progress Bar ---------------------------------- //

//function for displaying the time in the progress bar
const displayTime = function (time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);

  return seconds >= 10 ? `${minutes}:${seconds}` : `${minutes}:0${seconds}`;
};
/**
 * updates the progress bar as the video plays
 */
const updateProgressBar = function () {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  currentTime.textContent = displayTime(video.currentTime);
  duration.textContent = displayTime(video.duration);
};

const jumpingProgressRange = function (e) {
  console.log(e);
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  video.currentTime = newTime * video.duration;
};
progressRange.addEventListener("click", jumpingProgressRange);
video.addEventListener("canplay", updateProgressBar);
video.addEventListener("timeupdate", updateProgressBar);
// Volume Controls --------------------------- //
const volumeChanger = function (e) {
  const volume = e.offsetX / volumeRange.offsetWidth;
  volumeBar.style.width = `${volume * 100}%`;
  volume < 0.5
    ? volumeIcon.classList.replace("fa-volume-up", "fa-volume-down")
    : volumeIcon.classList.replace("fa-volume-down", "fa-volume-up");
  video.volume = volume;
  console.log(volume);
};
const volumeMute = function () {
  if (!video.muted) {
    video.muted = true;
    video.volume > 0.5
      ? volumeIcon.classList.replace("fa-volume-up", "fa-volume-mute")
      : volumeIcon.classList.replace("fa-volume-down", "fa-volume-mute");
  } else {
    video.muted = false;
    video.volume > 0.5
      ? volumeIcon.classList.replace("fa-volume-mute", "fa-volume-up")
      : volumeIcon.classList.replace("fa-volume-mute", "fa-volume-down");
  }
};
console.log(volumeIcon);
volumeRange.addEventListener("click", volumeChanger);
volumeIcon.addEventListener("click", volumeMute);
// Change Playback Speed -------------------- //
const speedChangeFunction = function () {
  video.playbackRate = this.value;
};
speedSelector.addEventListener("change", speedChangeFunction);
// Fullscreen ------------------------------- //
