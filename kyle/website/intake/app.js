/* ============================================================
   DISRUPTORS MEDIA — AI RECEPTIONIST INTAKE FORM
   Application Logic
   ============================================================ */

(function () {
    'use strict';

    // --------------------------------------------------------
    // State
    // --------------------------------------------------------
    let currentStep = 0;
    const TOTAL_STEPS = 12;
    let faqCount = 3; // start with 3 FAQ rows

    // --------------------------------------------------------
    // DOM References
    // --------------------------------------------------------
    const form = document.getElementById('intake-form');
    const steps = document.querySelectorAll('.form-step');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressFill = document.getElementById('progress-fill');
    const progressStepLabel = document.getElementById('progress-step-label');
    const progressPercent = document.getElementById('progress-percent');
    const stepDots = document.querySelectorAll('.step-dot');
    const addFaqBtn = document.getElementById('add-faq-btn');
    const faqList = document.getElementById('faq-list');
    const successScreen = document.getElementById('success-screen');
    const progressContainer = document.getElementById('progress-container');
    const hero = document.getElementById('hero');
    const footer = document.getElementById('footer');

    // --------------------------------------------------------
    // Step Navigation
    // --------------------------------------------------------
    function goToStep(step) {
        if (step < 0 || step >= TOTAL_STEPS) return;

        // Hide current step
        steps[currentStep].classList.remove('active');
        steps[currentStep].style.display = 'none';

        // Show new step
        currentStep = step;
        steps[currentStep].classList.add('active');
        steps[currentStep].style.display = 'block';

        // Re-trigger animation
        steps[currentStep].style.animation = 'none';
        steps[currentStep].offsetHeight; // force reflow
        steps[currentStep].style.animation = '';

        updateNav();
        updateProgress();
        updateStepDots();

        // Scroll to top of form
        window.scrollTo({
            top: hero.offsetTop + hero.offsetHeight - 20,
            behavior: 'smooth'
        });
    }

    function nextStep() {
        if (currentStep === TOTAL_STEPS - 1) return;

        // Validate current step
        if (!validateStep(currentStep)) return;

        goToStep(currentStep + 1);
    }

    function prevStep() {
        if (currentStep === 0) return;
        goToStep(currentStep - 1);
    }

    function updateNav() {
        prevBtn.disabled = currentStep === 0;

        if (currentStep === TOTAL_STEPS - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    function updateProgress() {
        const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;
        progressFill.style.width = progress + '%';
        progressStepLabel.textContent = `Step ${currentStep + 1} of ${TOTAL_STEPS}`;
        progressPercent.textContent = Math.round(progress) + '%';
    }

    function updateStepDots() {
        stepDots.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            if (index === currentStep) {
                dot.classList.add('active');
            } else if (index < currentStep) {
                dot.classList.add('completed');
            }
        });
    }

    // --------------------------------------------------------
    // Validation
    // --------------------------------------------------------
    function validateStep(stepIndex) {
        const step = steps[stepIndex];
        const requiredInputs = step.querySelectorAll('input[required], textarea[required]');
        let valid = true;

        // Clear previous errors
        step.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        step.querySelectorAll('.error-message').forEach(el => el.remove());

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('error');
                const msg = document.createElement('span');
                msg.className = 'error-message';
                msg.textContent = 'This field is required';
                input.parentElement.appendChild(msg);
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                valid = false;
                input.classList.add('error');
                const msg = document.createElement('span');
                msg.className = 'error-message';
                msg.textContent = 'Please enter a valid email address';
                input.parentElement.appendChild(msg);
            }
        });

        if (!valid) {
            // Shake the first error
            const firstError = step.querySelector('.error');
            if (firstError) {
                firstError.style.animation = 'none';
                firstError.offsetHeight;
                firstError.style.animation = 'shake 0.4s ease';
                firstError.focus();
            }
        }

        return valid;
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // --------------------------------------------------------
    // Conditional Field Toggles
    // --------------------------------------------------------
    function setupConditionalFields() {
        // "Other" call type
        const otherCallTypeCheckbox = document.querySelector('input[name="call_types"][value="other_call_type"]');
        const otherCallTypeGroup = document.getElementById('other-call-type-group');
        if (otherCallTypeCheckbox && otherCallTypeGroup) {
            otherCallTypeCheckbox.addEventListener('change', () => {
                otherCallTypeGroup.style.display = otherCallTypeCheckbox.checked ? 'flex' : 'none';
            });
        }

        // "Other" lead field
        const otherLeadFieldCheckbox = document.querySelector('input[name="lead_fields"][value="other_field"]');
        const otherLeadFieldGroup = document.getElementById('other-lead-field-group');
        if (otherLeadFieldCheckbox && otherLeadFieldGroup) {
            otherLeadFieldCheckbox.addEventListener('change', () => {
                otherLeadFieldGroup.style.display = otherLeadFieldCheckbox.checked ? 'flex' : 'none';
            });
        }

        // "Other" CRM
        const otherCrmCheckbox = document.querySelector('input[name="crm"][value="other_crm"]');
        const otherCrmGroup = document.getElementById('other-crm-group');
        if (otherCrmCheckbox && otherCrmGroup) {
            otherCrmCheckbox.addEventListener('change', () => {
                otherCrmGroup.style.display = otherCrmCheckbox.checked ? 'flex' : 'none';
            });
        }

        // "Other" language
        const otherLangCheckbox = document.querySelector('input[name="languages"][value="other_lang"]');
        const otherLangGroup = document.getElementById('other-lang-group');
        if (otherLangCheckbox && otherLangGroup) {
            otherLangCheckbox.addEventListener('change', () => {
                otherLangGroup.style.display = otherLangCheckbox.checked ? 'flex' : 'none';
            });
        }
    }

    // --------------------------------------------------------
    // FAQ Dynamic Rows
    // --------------------------------------------------------
    function addFaqRow() {
        const index = faqCount;
        const item = document.createElement('div');
        item.className = 'faq-item';
        item.dataset.faqIndex = index;
        item.innerHTML = `
      <div class="faq-item__header">
        <span class="faq-item__num">Q${index + 1}</span>
        <button type="button" class="faq-item__remove" title="Remove FAQ">&times;</button>
      </div>
      <div class="form-grid form-grid--2col">
        <div class="form-group">
          <label class="form-label">Question</label>
          <input type="text" name="faq_question_${index}" class="form-input" placeholder="Your question..." />
        </div>
        <div class="form-group">
          <label class="form-label">Answer</label>
          <input type="text" name="faq_answer_${index}" class="form-input" placeholder="The AI should answer..." />
        </div>
      </div>
    `;

        faqList.appendChild(item);
        faqCount++;

        // Bind remove
        item.querySelector('.faq-item__remove').addEventListener('click', () => {
            item.style.animation = 'fadeOut 0.3s ease forwards';
            setTimeout(() => {
                item.remove();
                updateFaqNumbers();
            }, 300);
        });

        // Show remove buttons on all items when we have more than 1
        updateFaqRemoveButtons();
    }

    function updateFaqNumbers() {
        const items = faqList.querySelectorAll('.faq-item');
        items.forEach((item, i) => {
            item.querySelector('.faq-item__num').textContent = `Q${i + 1}`;
        });
        updateFaqRemoveButtons();
    }

    function updateFaqRemoveButtons() {
        const items = faqList.querySelectorAll('.faq-item');
        items.forEach(item => {
            const removeBtn = item.querySelector('.faq-item__remove');
            if (removeBtn) {
                removeBtn.style.display = items.length > 1 ? 'flex' : 'none';
            }
        });
    }

    // --------------------------------------------------------
    // Form Submission
    // --------------------------------------------------------
    function handleSubmit(e) {
        e.preventDefault();

        if (!validateStep(currentStep)) return;

        // Collect all form data
        const formData = new FormData(form);
        const data = {};

        for (const [key, value] of formData.entries()) {
            if (data[key]) {
                // If key already exists, make it an array
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }

        // Group FAQ entries into a clean array
        const faqs = [];
        let i = 0;
        while (data[`faq_question_${i}`] !== undefined) {
            const q = data[`faq_question_${i}`];
            const a = data[`faq_answer_${i}`];
            if (q || a) faqs.push({ question: q || '', answer: a || '' });
            delete data[`faq_question_${i}`];
            delete data[`faq_answer_${i}`];
            i++;
        }
        if (faqs.length) data.faqs = faqs;

        // Add submission timestamp
        data.submitted_at = new Date().toISOString();

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="spinner" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" stroke-width="2" stroke-dasharray="30" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 9 9" to="360 9 9" dur="0.8s" repeatCount="indefinite"/></circle></svg>
            Submitting...`;

        // POST to n8n webhook
        fetch('https://n8n.disruptormedia.dev/webhook/intakeform', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) throw new Error(`Server responded with ${response.status}`);
            return response.json().catch(() => ({}));
        })
        .then(() => {
            // Clear saved draft on success
            localStorage.removeItem(STORAGE_KEY);

            // Show success screen
            form.style.display = 'none';
            progressContainer.style.display = 'none';
            successScreen.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(error => {
            console.error('Submission failed:', error);
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9.5l4 4 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Submit Intake Form`;

            // Show error message
            let errorEl = document.getElementById('submit-error');
            if (!errorEl) {
                errorEl = document.createElement('p');
                errorEl.id = 'submit-error';
                errorEl.style.cssText = 'color:#e74c3c;text-align:center;margin-top:1rem;font-size:0.9rem;';
                submitBtn.parentElement.appendChild(errorEl);
            }
            errorEl.textContent = 'Something went wrong. Please try again or contact us directly.';
        });
    }

    // --------------------------------------------------------
    // Keyboard Navigation
    // --------------------------------------------------------
    function handleKeyboard(e) {
        // Enter key on non-textarea moves to next step
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'BUTTON') {
            e.preventDefault();
            if (currentStep < TOTAL_STEPS - 1) {
                nextStep();
            }
        }
    }

    // --------------------------------------------------------
    // Focus Improvements
    // --------------------------------------------------------
    function clearErrorOnInput(e) {
        const input = e.target;
        if (input.classList.contains('error')) {
            input.classList.remove('error');
            const errorMsg = input.parentElement.querySelector('.error-message');
            if (errorMsg) errorMsg.remove();
        }
    }

    // --------------------------------------------------------
    // Shake animation (injected via JS to keep CSS clean)
    // --------------------------------------------------------
    function injectShakeKeyframes() {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
      }
      @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-8px); height: 0; padding: 0; margin: 0; overflow: hidden; }
      }
    `;
        document.head.appendChild(style);
    }

    // --------------------------------------------------------
    // Save / Restore Draft (localStorage)
    // --------------------------------------------------------
    const STORAGE_KEY = 'disruptors_intake_draft';

    function saveDraft() {
        try {
            const formData = new FormData(form);
            const data = {};
            for (const [key, value] of formData.entries()) {
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            }
            data.__currentStep = currentStep;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            // Silently fail
        }
    }

    function restoreDraft() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) return;

            const data = JSON.parse(saved);

            Object.entries(data).forEach(([key, value]) => {
                if (key === '__currentStep') return;

                const elements = form.querySelectorAll(`[name="${key}"]`);
                if (!elements.length) return;

                const firstEl = elements[0];

                if (firstEl.type === 'checkbox' || firstEl.type === 'radio') {
                    const values = Array.isArray(value) ? value : [value];
                    elements.forEach(el => {
                        el.checked = values.includes(el.value);
                        // Trigger conditional fields
                        if (el.checked) {
                            el.dispatchEvent(new Event('change'));
                        }
                    });
                } else if (firstEl.type === 'text' || firstEl.type === 'email' || firstEl.type === 'tel' || firstEl.type === 'url' || firstEl.type === 'date' || firstEl.tagName === 'TEXTAREA') {
                    firstEl.value = value;
                }
            });

            // Restore step
            if (data.__currentStep && data.__currentStep > 0) {
                goToStep(data.__currentStep);
            }
        } catch (e) {
            // Silently fail
        }
    }

    // --------------------------------------------------------
    // Initialize
    // --------------------------------------------------------
    function init() {
        injectShakeKeyframes();

        // Button events
        nextBtn.addEventListener('click', nextStep);
        prevBtn.addEventListener('click', prevStep);
        form.addEventListener('submit', handleSubmit);

        // Step dots
        stepDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const target = parseInt(dot.dataset.step);
                // Only allow going to previous steps or one step ahead
                if (target <= currentStep || target === currentStep + 1) {
                    if (target > currentStep && !validateStep(currentStep)) return;
                    goToStep(target);
                }
            });
        });

        // FAQ add button
        addFaqBtn.addEventListener('click', addFaqRow);

        // Conditional fields
        setupConditionalFields();

        // Clear errors on input
        form.addEventListener('input', clearErrorOnInput);

        // Keyboard
        form.addEventListener('keydown', handleKeyboard);

        // Auto-save draft every 30 seconds
        setInterval(saveDraft, 30000);

        // Save on page hide
        window.addEventListener('beforeunload', saveDraft);

        // Restore draft
        restoreDraft();

        // Initial state
        updateNav();
        updateProgress();
        updateStepDots();
        updateFaqRemoveButtons();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
