let audioContext: AudioContext;
let oscillator: OscillatorNode | null = null;

// Check if window and AudioContext are defined
if (typeof window !== "undefined" && window.AudioContext) {
  audioContext = new window.AudioContext();
} else {
  console.error("AudioContext is not available in this environment.");
}

export default function generateHz(duration: number, frequency?: number) {
  // Check if AudioContext is available
  if (!audioContext) {
    console.error("AudioContext is not available.");
    return "";
  }

  // Create an oscillator node
  stopHz();
  let title = "";
  const newOscillator = audioContext.createOscillator();

  // Set the frequency
  if (frequency) {
    newOscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    title = `${frequency} Hz`;
  } else {
    // Generate a random frequency between 20 and 20000 Hz
    const minFrequency = 20;
    const maxFrequency = 20000;
    const randomFrequency =
      Math.random() * (maxFrequency - minFrequency) + minFrequency;
    // remove decimal points
    title = `${Math.round(randomFrequency)} Hz`;
    newOscillator.frequency.setValueAtTime(
      randomFrequency,
      audioContext.currentTime
    );
  }

  // Connect the oscillator to the audio output
  newOscillator.connect(audioContext.destination);

  // Start the oscillator
  newOscillator.start();
  // Set the oscillator reference
  oscillator = newOscillator;
  // Return the title if provided
  return title || "";
}

export function stopHz() {
  // If an oscillator is running, stop it
  if (oscillator) {
    oscillator.stop();
    oscillator.disconnect();
    oscillator = null;
  }
}
