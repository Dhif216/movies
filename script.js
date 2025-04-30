document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading progress
    const progressBar = document.querySelector('.startup-animation .progress');
    const mainContent = document.querySelector('.main-content');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Animation complete, show main content
            setTimeout(() => {
                document.querySelector('.startup-animation').style.opacity = '0';
                setTimeout(() => {
                    document.querySelector('.startup-animation').remove();
                    mainContent.classList.remove('hidden');
                }, 500);
            }, 500);
        }
        progressBar.style.width = `${progress}%`;
    }, 200);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });
    
    // Add hover effects to items
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});



// Animate floating blocks with GSAP
document.addEventListener('DOMContentLoaded', () => {
  // Only run if on My List page
  if (document.querySelector('.mylist-hero')) {
    // GSAP animations for floating blocks
    gsap.to('.dirt', {
      y: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to('.grass', {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });

    gsap.to('.diamond', {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    // Check if list is empty (for demo)
    const savedItems = document.querySelectorAll('.saved-item');
    const emptyState = document.querySelector('.empty-state');

    if (savedItems.length === 0 && emptyState) {
      emptyState.style.display = 'block';
    }
  }

  // Hover effect for saved items
  const items = document.querySelectorAll('.saved-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.03, y: -10, duration: 0.3 });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, y: 0, duration: 0.3 });
    });
  });
});