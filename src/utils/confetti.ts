import confetti from 'canvas-confetti';

// Celebratory golden & flame embers confetti
export const triggerGoldSparksConfetti = () => {
  try {
    // Left burst
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#fbbf24', '#ffffff', '#ea580c'],
      shapes: ['circle', 'square'],
      ticks: 200,
      scalar: 1.1
    });

    // Right burst
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#f59e0b', '#d97706', '#fbbf24', '#ffffff', '#ea580c'],
      shapes: ['circle', 'square'],
      ticks: 200,
      scalar: 1.1
    });
  } catch (err) {
    console.warn('Confetti error:', err);
  }
};

// Fiery explosion for order checkout
export const triggerFlameBurstConfetti = () => {
  try {
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ef4444', '#f97316', '#fbbf24', '#ffedd5'],
      startVelocity: 35,
      ticks: 250,
      scalar: 1.2
    });
  } catch (err) {
    console.warn('Confetti error:', err);
  }
};
