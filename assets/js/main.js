/**
 * ==========================================================================
 * MAIN CONTROLLER
 * Form handling, clipboard utilities, and general app initialization
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Console Greeting
  console.log(
    '%c 🚀 Creative Media Student Portfolio %c Designed with passion, modern glassmorphism & gradients ',
    'background: #0066ff; color: #fff; padding: 6px 12px; border-radius: 4px; font-weight: bold;',
    'background: #ffdd00; color: #000; padding: 6px 12px; border-radius: 4px; font-weight: bold;'
  );

  // 2. Interactive Contact Form Submission Handling
  const contactForm = document.getElementById('contactForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple HTML5 form validity check
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      // Simulate sending with loading state on button
      if (submitBtn) {
        const originalContent = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin me-2"></i>กำลังส่งข้อความ...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalContent;

          // Show success message
          if (formSuccessAlert) {
            formSuccessAlert.classList.remove('d-none');
            formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Reset form fields
          contactForm.reset();
          contactForm.classList.remove('was-validated');

          // Auto hide alert after 5 seconds
          setTimeout(() => {
            if (formSuccessAlert) {
              formSuccessAlert.classList.add('d-none');
            }
          }, 5000);
        }, 1200);
      }
    });
  }

  // 3. Quick Copy Email Functionality
  const copyEmailBtns = document.querySelectorAll('[data-copy-email]');
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const email = btn.getAttribute('data-copy-email') || 'contact@creativemedia.portfolio';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.getAttribute('data-original-tooltip') || 'คัดลอกอีเมลแล้ว!';
        
        // Visual feedback
        const feedbackEl = document.createElement('span');
        feedbackEl.className = 'badge bg-warning text-dark position-absolute';
        feedbackEl.style.top = '-30px';
        feedbackEl.style.left = '50%';
        feedbackEl.style.transform = 'translateX(-50%)';
        feedbackEl.style.zIndex = '999';
        feedbackEl.textContent = 'คัดลอกอีเมลสำเร็จ! ✓';
        
        btn.style.position = 'relative';
        btn.appendChild(feedbackEl);
        
        setTimeout(() => {
          feedbackEl.remove();
        }, 2000);
      }).catch(err => {
        console.error('Could not copy email: ', err);
      });
    });
  });

  // 4. Smooth Anchor Link Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
