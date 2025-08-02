class MirrorRoast {
    constructor() {
        this.roasts = [
            "Looking good! Just kidding, I'm legally required to lie.",
            "I see you're practicing social distancing... from the gym.",
            "Your selfie game is so strong, it knocked out my cameras.",
            "I've seen potatoes with better resolution than your complexion.",
            "You look like you put your makeup on with a paintball gun.",
            "Is that your face or did your neck throw up?",
            "You're proof that evolution can go in reverse.",
            "I'd give you a nasty look, but you already have one.",
            "You're not ugly, you're just... visually challenging.",
            "Did you fall from heaven? Because it looks like you hit every branch.",
            "You have a face for radio... and a voice for mime.",
            "I'm not saying you're ugly, but when you were born, the doctor slapped your parents.",
            "You look like you were drawn by someone with their non-dominant hand.",
            "Your beauty is... well, it's definitely something.",
            "I bet you make onions cry.",
            "You're so unique, even your mirror needs therapy.",
            "Looking fresh! Like week-old fish.",
            "Your face could stop a clock... permanently.",
            "You have that 'I woke up like this' look... during an earthquake.",
            "You're not just a snack, you're the whole expired meal deal.",
            "Your camera adds 10 pounds... of disappointment.",
            "You look like you got dressed in the dark... during a tornado.",
            "I'm getting strong 'witness protection program' vibes.",
            "You have that effortless natural look... like you're not even trying.",
            "Your style is so unique, it's like fashion but opposite.",
            "You're absolutely glowing! Might want to check for radiation.",
            "You look like you were photoshopped... by someone who's never seen a human.",
            "Your outfit is giving me life... to pray for your fashion sense.",
            "You're serving looks... at a discount buffet.",
            "That confident smile really says 'I have no mirrors at home.'"
        ];
        
        this.audienceReactions = [
            "The audience gasps in horror! 😱",
            "Someone in the crowd yells 'SAVAGE!' 🔥",
            "The judges are speechless... 😶",
            "Even your mom unfriended you! 📱",
            "The mirror just cracked! 💔",
            "Security is escorting your reflection out! 🚨",
            "The roast meter is off the charts! 📊",
            "Breaking news: Local person destroyed! 📺",
            "Your confidence has left the chat! 💬",
            "Plot twist: The mirror is crying! 😭"
        ];
        
        this.mockingEmojis = [
            '😂', '🤣', '😭', '💀', '🔥', '👻', '🤡', '🙈', '🙉', '🙊',
            '😈', '👹', '👺', '💩', '🤮', '🤢', '😵', '🤯', '😱', '🙄',
            '😏', '🤨', '🧐', '🤓', '😎', '🤪', '🥴', '😵‍💫', '🤐', '😬',
            '🤭', '😹', '😸', '🙃', '😜', '🤪', '🥳', '🤠', '🤖', '👽',
            '🎭', '🎪', '🎨', '🎯', '🎲', '🃏', '🎊', '🎉', '💫', '⭐',
            '🌟', '✨', '🎆', '🎇', '🌈', '🍅', '🐒', '🙊', '🐵', '🤖'
        ];
        
        this.currentRoastIndex = 0;
        this.roastInterval = null;
        this.timerInterval = null;
        this.roastDuration = 5000; // 5 seconds
        this.roastCount = 0;
        this.isIntenseModeActive = false;
        
        this.createEmojiContainer();
        this.createAudienceContainer();
        this.createSoundEffects();
        this.initializeCamera();
        this.startRoastCycle();
        this.addInteractiveFeatures();
    }
    
    createEmojiContainer() {
        const emojiContainer = document.createElement('div');
        emojiContainer.className = 'emoji-container';
        emojiContainer.id = 'emojiContainer';
        document.body.appendChild(emojiContainer);
    }
    
    createAudienceContainer() {
        const audienceContainer = document.createElement('div');
        audienceContainer.className = 'audience-reaction';
        audienceContainer.id = 'audienceReaction';
        document.body.appendChild(audienceContainer);
    }
    
    createSoundEffects() {
        // Create audio context for sound effects (using Web Audio API)
        this.audioContext = null;
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    playDrumRoll() {
        if (!this.audioContext) return;
        
        // Create a simple drum roll effect
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(80, this.audioContext.currentTime);
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    }
    
    createCameraFlash() {
        const flash = document.createElement('div');
        flash.className = 'camera-flash';
        document.body.appendChild(flash);
        
        setTimeout(() => {
            flash.remove();
        }, 200);
    }
    
    showAudienceReaction() {
        const container = document.getElementById('audienceReaction');
        const reaction = this.audienceReactions[Math.floor(Math.random() * this.audienceReactions.length)];
        
        container.textContent = reaction;
        container.classList.add('show');
        
        setTimeout(() => {
            container.classList.remove('show');
        }, 3000);
    }
    
    activateIntenseMode() {
        this.isIntenseModeActive = true;
        document.body.classList.add('intense-mode');
        
        // Faster roast cycle in intense mode
        if (this.roastInterval) {
            clearInterval(this.roastInterval);
        }
        
        this.roastDuration = 3000; // 3 seconds instead of 5
        this.roastInterval = setInterval(() => {
            this.updateRoast();
            this.startTimer();
        }, this.roastDuration);
        
        // Deactivate after 15 seconds
        setTimeout(() => {
            this.deactivateIntenseMode();
        }, 15000);
    }
    
    deactivateIntenseMode() {
        this.isIntenseModeActive = false;
        document.body.classList.remove('intense-mode');
        
        // Return to normal speed
        if (this.roastInterval) {
            clearInterval(this.roastInterval);
        }
        
        this.roastDuration = 5000;
        this.roastInterval = setInterval(() => {
            this.updateRoast();
            this.startTimer();
        }, this.roastDuration);
    }
    
    addInteractiveFeatures() {
        const cameraContainer = document.querySelector('.camera-container');
        
        // Click to trigger camera flash and extra roast
        cameraContainer.addEventListener('click', () => {
            this.createCameraFlash();
            this.playDrumRoll();
            
            setTimeout(() => {
                this.updateRoast();
                this.startTimer();
                this.showAudienceReaction();
            }, 500);
        });
        
        // Double click to activate intense mode
        let clickCount = 0;
        cameraContainer.addEventListener('click', () => {
            clickCount++;
            setTimeout(() => {
                if (clickCount === 2 && !this.isIntenseModeActive) {
                    this.activateIntenseMode();
                    this.showAudienceReaction();
                }
                clickCount = 0;
            }, 300);
        });
    }
    
    spawnEmojis() {
        const container = document.getElementById('emojiContainer');
        const numEmojis = Math.floor(Math.random() * 12) + 8; // 8-19 emojis
        
        for (let i = 0; i < numEmojis; i++) {
            setTimeout(() => {
                const emoji = document.createElement('div');
                emoji.className = 'floating-emoji';
                emoji.textContent = this.mockingEmojis[Math.floor(Math.random() * this.mockingEmojis.length)];
                
                // Random horizontal position
                emoji.style.left = Math.random() * 100 + '%';
                
                // Random size variation
                const size = 1.5 + Math.random() * 1; // 1.5rem to 2.5rem
                emoji.style.fontSize = size + 'rem';
                
                // Random animation type
                const animations = ['', 'bounce', 'wiggle'];
                const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
                if (randomAnimation) {
                    emoji.classList.add(randomAnimation);
                }
                
                container.appendChild(emoji);
                
                // Remove emoji after animation completes
                setTimeout(() => {
                    if (emoji.parentNode) {
                        emoji.parentNode.removeChild(emoji);
                    }
                }, 6000);
                
            }, Math.random() * 3000); // Stagger emoji appearances over 3 seconds
        }
    }
    
    async initializeCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { 
                    facingMode: 'user', // Front camera
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                }
            });
            
            const video = document.getElementById('camera');
            const overlay = document.querySelector('.camera-overlay');
            
            video.srcObject = stream;
            
            video.onloadedmetadata = () => {
                overlay.classList.add('hidden');
                setTimeout(() => {
                    overlay.style.display = 'none';
                }, 300);
            };
            
        } catch (error) {
            console.error('Error accessing camera:', error);
            this.showError();
        }
    }
    
    showError() {
        const loading = document.getElementById('loading');
        const error = document.getElementById('error');
        
        loading.style.display = 'none';
        error.style.display = 'block';
    }
    
    getRandomRoast() {
        const randomIndex = Math.floor(Math.random() * this.roasts.length);
        // Ensure we don't show the same roast twice in a row
        if (randomIndex === this.currentRoastIndex && this.roasts.length > 1) {
            return this.getRandomRoast();
        }
        this.currentRoastIndex = randomIndex;
        return this.roasts[randomIndex];
    }
    
    updateRoast() {
        const roastText = document.getElementById('roastText');
        const newRoast = this.getRandomRoast();
        this.roastCount++;
        
        // Fade out current text
        roastText.classList.add('fade-out');
        
        // Spawn mocking emojis
        this.spawnEmojis();
        
        // Every 5th roast, show audience reaction
        if (this.roastCount % 5 === 0) {
            setTimeout(() => {
                this.showAudienceReaction();
            }, 1000);
        }
        
        // Every 10th roast, activate intense mode briefly
        if (this.roastCount % 10 === 0 && !this.isIntenseModeActive) {
            setTimeout(() => {
                this.activateIntenseMode();
            }, 2000);
        }
        
        setTimeout(() => {
            roastText.textContent = newRoast;
            roastText.classList.remove('fade-out');
        }, 250);
    }
    
    startTimer() {
        const timerBar = document.getElementById('timerBar');
        let progress = 0;
        const increment = 100 / (this.roastDuration / 100);
        
        // Reset timer bar
        timerBar.style.width = '0%';
        
        this.timerInterval = setInterval(() => {
            progress += increment;
            timerBar.style.width = `${Math.min(progress, 100)}%`;
            
            if (progress >= 100) {
                clearInterval(this.timerInterval);
            }
        }, 100);
    }
    
    startRoastCycle() {
        // Show first roast immediately
        this.updateRoast();
        this.startTimer();
        
        // Set up interval for subsequent roasts
        this.roastInterval = setInterval(() => {
            this.updateRoast();
            this.startTimer();
        }, this.roastDuration);
    }
    
    destroy() {
        if (this.roastInterval) {
            clearInterval(this.roastInterval);
        }
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
    }
}

// Global function for retry button
function requestCamera() {
    location.reload();
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MirrorRoast();
});

// Handle page visibility changes to pause/resume when tab is not active
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, could pause timers here if needed
    } else {
        // Page is visible again
    }
});