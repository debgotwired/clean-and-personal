# QA Fix Plan - Remaining Issues

**Approach:** Senior QA Engineer (20 years experience)
**Principle:** Fix incrementally, test thoroughly, commit atomically, never break working code

---

## Fix Priority Matrix (Risk vs Impact)

| Fix | Impact | Risk | Priority | Order |
|-----|--------|------|----------|-------|
| Add CSP headers | High (Security) | Low | HIGH | 1 |
| Mobile viewport fix | Medium (UX) | Low | HIGH | 2 |
| Dynamic ARIA states | Medium (A11y) | Low | MEDIUM | 3 |
| Refactor innerHTML | Medium (Security) | Medium | MEDIUM | 4 |
| Optimize images | Low (Performance) | Low | LOW | 5 |

---

## Fix #1: Add Content Security Policy (CSP) Headers

**Issue:** No CSP protection across all 50 templates
**Risk Level:** LOW (just adding meta tags)
**Impact:** HIGH (security improvement)
**Breaking Risk:** NONE (CSP is additive)

### Implementation Plan:
1. Create CSP meta tag template
2. Add to 5 sample templates first (01, 10, 20, 30, 40)
3. Test all functionality works (especially Google Fonts)
4. If no issues, apply to all 50 templates
5. Commit

### CSP Policy:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self';">
```

**Why 'unsafe-inline'?** Templates use inline styles/scripts. Alternative would require massive refactoring (too risky).

### Test Plan:
- [ ] Open template in browser
- [ ] Verify no console errors
- [ ] Check Google Fonts load
- [ ] Test all JavaScript functionality
- [ ] Verify forms work
- [ ] Check animations/transitions
- [ ] Test on mobile (responsive)

---

## Fix #2: Mobile Viewport Height Fix

**Issue:** 100vh doesn't account for mobile browser chrome
**Risk Level:** LOW (just adding CSS variable)
**Impact:** MEDIUM (better mobile UX)
**Breaking Risk:** VERY LOW (fallback to 100vh if JS fails)

### Implementation Plan:
1. Create JavaScript snippet to calculate viewport height
2. Add CSS variable `--vh`
3. Replace `height: 100vh` with `height: calc(var(--vh, 1vh) * 100)`
4. Apply to templates with full-height sections (01, 31, 34, 38)
5. Test on mobile device/simulator
6. Commit

### Code to Add:
**JavaScript:**
```javascript
// Mobile viewport height fix
const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('DOMContentLoaded', setVh);
window.addEventListener('resize', setVh);
```

**CSS:**
```css
.hero {
    height: calc(var(--vh, 1vh) * 100);
}
```

### Test Plan:
- [ ] Desktop: verify full height still works
- [ ] Mobile Chrome: check address bar doesn't cause overflow
- [ ] Mobile Safari: check toolbar doesn't cause overflow
- [ ] Rotate device: verify recalculates
- [ ] Older browsers: verify fallback works

---

## Fix #3: Dynamic ARIA States

**Issue:** Mobile toggles lack dynamic `aria-expanded` attributes
**Risk Level:** LOW (just adding attributes)
**Impact:** MEDIUM (better screen reader support)
**Breaking Risk:** NONE (ARIA is additive for screen readers)

### Implementation Plan:
1. Find all mobile menu toggle buttons
2. Add `aria-expanded="false"` initially
3. Add JavaScript to toggle aria-expanded on click
4. Test with screen reader (VoiceOver/NVDA)
5. Apply to all templates with mobile menus
6. Commit

### Code Pattern:
```javascript
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.setAttribute('aria-expanded', 'false');

    mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        // existing toggle logic
    });
}
```

### Test Plan:
- [ ] Visual test: menu still toggles correctly
- [ ] Screen reader: announces "expanded" / "collapsed"
- [ ] Keyboard navigation: still works
- [ ] Multiple clicks: state updates correctly

---

## Fix #4: Refactor innerHTML to createElement

**Issue:** 9 templates use innerHTML (potential XSS if user input added later)
**Risk Level:** MEDIUM (changing DOM manipulation logic)
**Impact:** MEDIUM (future-proof security)
**Breaking Risk:** MEDIUM (could break if not careful)

### Implementation Plan (CAUTIOUS):
1. Start with simplest case (template 40-masonry-grid)
2. Refactor ONE innerHTML usage
3. Test EXTENSIVELY
4. If successful, continue
5. If any issues, revert immediately
6. Commit after each successful refactor

### Affected Templates (in order of complexity):
1. templates/40-masonry-grid/script.js (Line 218) - START HERE
2. templates/11-bento-grid/script.js
3. templates/36-card-grid/script.js
4. templates/29-illustrator/script.js
5. templates/10-project-showcase/script.js
6. templates/09-creative-portfolio/script.js
7. templates/08-startup/script.js
8. templates/03-text-scholar/script.js
9. templates/34-full-screen-slides/script.js

### Test Plan (PER TEMPLATE):
- [ ] Load page - no errors
- [ ] Click "Load More" - new items appear
- [ ] Verify styling intact
- [ ] Click buttons in new items - event listeners work
- [ ] Filter by category - works correctly
- [ ] Lightbox - opens correctly
- [ ] Mobile - responsive works
- [ ] Multiple load more clicks - works
- [ ] No memory leaks (check DevTools)

### Rollback Plan:
- Keep original innerHTML version commented out
- If ANY issue: git revert immediately
- Document what went wrong

---

## Fix #5: Optimize Preview Images

**Issue:** Some images are 1-2MB (too large)
**Risk Level:** VERY LOW (just compressing)
**Impact:** LOW (faster git clone, repo size)
**Breaking Risk:** NONE (images remain, just smaller)

### Implementation Plan:
1. Identify images >500KB
2. Use pngquant or ImageOptim
3. Target quality: 65-80%
4. Keep originals as backup
5. Test images still look good
6. Replace and commit

### Commands:
```bash
# Find large images
find templates -name "*.png" -size +500k

# Compress with pngquant
pngquant --quality=65-80 --ext .png --force templates/*/full-preview.png

# Or use ImageOptim (Mac GUI)
```

### Test Plan:
- [ ] Visual inspection: quality acceptable
- [ ] File size: reduced by >50%
- [ ] Gallery page: images load correctly
- [ ] No broken images

---

## QA Testing Checklist (Run After ALL Fixes)

### Functional Testing:
- [ ] All 50 templates load without errors
- [ ] Navigation works in all templates
- [ ] Forms validate correctly
- [ ] JavaScript features work (animations, toggles, filters)
- [ ] External links open correctly
- [ ] Contact forms show validation

### Cross-Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Testing:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

### Accessibility Testing:
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicators visible
- [ ] ARIA attributes correct
- [ ] Color contrast sufficient

### Performance Testing:
- [ ] Gallery page loads <3s
- [ ] Template pages load <2s
- [ ] Lighthouse score >90
- [ ] No memory leaks

### Security Testing:
- [ ] CSP headers present
- [ ] No inline scripts (where possible)
- [ ] External links secured
- [ ] No XSS vulnerabilities

---

## Commit Strategy

**Rule:** One fix = One commit = One push

**Commit Message Format:**
```
[QA-FIX] Area: Brief description

Detailed explanation of:
- What was fixed
- Why it was needed
- How it was tested
- Any risks

Tested:
- Browser X ✓
- Browser Y ✓
- Mobile ✓

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

---

## Rollback Plan

If ANY fix breaks something:
1. `git log --oneline` - find the breaking commit
2. `git revert <commit-hash>` - undo it
3. `git push` - restore working state
4. Document what went wrong
5. Fix the issue
6. Re-apply carefully

---

## Success Criteria

- [ ] All 50 templates functional
- [ ] Zero console errors
- [ ] Zero broken features
- [ ] Improved security (CSP)
- [ ] Improved accessibility (ARIA)
- [ ] Improved UX (viewport fix)
- [ ] Same or better performance
- [ ] All tests passing

**If criteria not met:** Rollback and reassess

---

**QA Engineer Sign-off:** Will be provided after all fixes tested and verified

**Estimated Time:** 2-3 hours for thorough testing
**Risk Level:** LOW-MEDIUM (following incremental approach)
**Confidence:** HIGH (20 years experience prevents rushing)
