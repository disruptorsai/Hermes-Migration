/* ═══════════════════════════════════════════════════════
   BRANDFORGE — APPLICATION
   ═══════════════════════════════════════════════════════ */

// ─── Form Schemas ───────────────────────────────────────
const guidelinesSchema = [
  {
    id: 'foundation',
    title: 'Brand Foundation',
    desc: 'Define your brand\'s core identity — the building blocks everything else rests on.',
    fields: [
      { id: 'brandName', label: 'Brand Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
      { id: 'tagline', label: 'Tagline', type: 'text', placeholder: 'e.g., Building revenue systems that capture leads, close deals, and run 24/7.', hint: 'One sentence that captures your value' },
      { id: 'mission', label: 'Mission Statement', type: 'textarea', placeholder: 'What does your brand exist to do? 1-2 sentences max.', rows: 2 },
      { id: 'vision', label: 'Vision Statement', type: 'textarea', placeholder: 'Where is your brand heading? What future are you building?', rows: 2 },
      { id: 'coreValues', label: 'Core Values', type: 'list', placeholder: 'e.g., Innovation', hint: 'Add 3-5 core values' },
      { id: 'targetAudience', label: 'Target Audience', type: 'textarea', placeholder: 'Who is your ideal customer? Be specific — industry, role, pain points, goals.', rows: 3 },
      { id: 'brandPersonality', label: 'Brand Personality', type: 'list', placeholder: 'e.g., Bold, Sophisticated, Approachable', hint: 'Pick 3-5 adjectives' },
    ]
  },
  {
    id: 'colors',
    title: 'Colors & Typography',
    desc: 'Define your color palette, typography system, and how they work together.',
    fields: [
      { id: 'colorPhilosophy', label: 'Color Philosophy', type: 'text', placeholder: 'e.g., A refined palette that creates sophistication through restraint.' },
      { id: 'primaryColors', label: 'Primary Colors', type: 'colorRepeater', hint: 'Your main brand colors (2-4)', defaults: [
        { name: 'Background', hex: '#0a0a0a', role: 'Primary Background' },
        { name: 'Accent', hex: '#a855f7', role: 'Accent & CTAs' },
        { name: 'Text', hex: '#ffffff', role: 'Text & UI' },
      ]},
      { id: 'secondaryColors', label: 'Secondary Colors (optional)', type: 'colorRepeater', hint: 'Supporting palette colors', defaults: [] },
      { id: 'colorRatioBackground', label: 'Background Color Usage %', type: 'range', min: 0, max: 100, value: 80 },
      { id: 'colorRatioText', label: 'Text/UI Color Usage %', type: 'range', min: 0, max: 100, value: 15 },
      { id: 'colorRatioAccent', label: 'Accent Color Usage %', type: 'range', min: 0, max: 100, value: 5 },
      { id: 'colorPrinciple', label: 'Core Color Principle', type: 'textarea', placeholder: 'e.g., Three colors, infinite expressions through opacity. Red is reserved for high-impact moments.', rows: 2 },
      { id: '_divider1', type: 'divider', label: 'Typography' },
      { id: 'primaryFont', label: 'Primary / Display Font', type: 'text', placeholder: 'e.g., Syne' },
      { id: 'primaryFontDesc', label: 'Primary Font Description', type: 'text', placeholder: 'e.g., Clean, geometric, high-end display typeface for headlines' },
      { id: 'primaryFontWeight', label: 'Primary Font Weight(s)', type: 'text', placeholder: 'e.g., Bold 700, SemiBold 600' },
      { id: 'secondaryFont', label: 'Secondary / Body Font', type: 'text', placeholder: 'e.g., Inter' },
      { id: 'secondaryFontDesc', label: 'Secondary Font Description', type: 'text', placeholder: 'e.g., Variable font for body copy, navigation, and UI elements' },
      { id: 'secondaryFontWeight', label: 'Secondary Font Weight(s)', type: 'text', placeholder: 'e.g., Regular 400, Medium 500' },
      { id: 'monoFont', label: 'Monospace / Technical Font (optional)', type: 'text', placeholder: 'e.g., JetBrains Mono' },
      { id: 'fontPairingNotes', label: 'Font Pairing Notes', type: 'textarea', placeholder: 'e.g., Never use the display font below 18px. Always pair Syne headlines with Inter body text.', rows: 2 },
    ]
  },
  {
    id: 'logo',
    title: 'Logo & Visual Elements',
    desc: 'Logo usage rules, icon style, and photography direction.',
    fields: [
      { id: 'logoVariants', label: 'Logo Variants', type: 'list', placeholder: 'e.g., Primary Logo — website headers, marketing materials', hint: 'List each variant and when to use it' },
      { id: 'logoClearSpace', label: 'Clear Space Rule', type: 'text', placeholder: 'e.g., Maintain minimum clear space equal to the height of the logo icon on all sides.' },
      { id: 'logoMinDigital', label: 'Minimum Digital Size', type: 'text', placeholder: 'e.g., 120px width' },
      { id: 'logoMinPrint', label: 'Minimum Print Size', type: 'text', placeholder: 'e.g., 1 inch / 25mm' },
      { id: 'logoDonts', label: 'Logo Don\'ts', type: 'list', placeholder: 'e.g., Don\'t stretch or distort the logo', hint: 'Rules for what NOT to do with the logo', defaults: [
        "Don't stretch or distort the logo",
        "Don't rotate the logo",
        "Don't change logo colors outside approved variants",
        "Don't place logo on busy/clashing backgrounds",
        "Don't add shadows, outlines, or effects",
      ] },
      { id: '_divider2', type: 'divider', label: 'Photography & Imagery' },
      { id: 'photoMood', label: 'Photography Mood', type: 'text', placeholder: 'e.g., Dark, moody, professional. High contrast with deep shadows.' },
      { id: 'photoColorTreatment', label: 'Color Treatment', type: 'text', placeholder: 'e.g., Desaturated, with brand accent used as overlay tint' },
      { id: 'photoSubjects', label: 'Subject Matter', type: 'list', placeholder: 'e.g., Technology, workspace, professional settings' },
      { id: 'iconStyle', label: 'Icon Style', type: 'text', placeholder: 'e.g., Outline, 1.5px stroke, rounded caps' },
      { id: 'iconLibrary', label: 'Icon Library', type: 'text', placeholder: 'e.g., Lucide, Heroicons, Phosphor, custom' },
    ]
  },
  {
    id: 'ui',
    title: 'UI Components & Layout',
    desc: 'Button system, card components, navigation style, and grid system.',
    fields: [
      { id: 'primaryCTALabel', label: 'Primary CTA Button Label', type: 'text', placeholder: 'e.g., Book Your Audit, Get Started, Start Free Trial' },
      { id: 'primaryCTAStyle', label: 'Primary CTA Style', type: 'textarea', placeholder: 'e.g., Background: rgba(10,10,10,0.8) + backdrop-blur, Border: Gradient with accent shimmer, Glow: box-shadow 0 0 40px accent/35', rows: 3 },
      { id: 'secondaryCTALabel', label: 'Secondary Button Label', type: 'text', placeholder: 'e.g., Learn More' },
      { id: 'secondaryCTAStyle', label: 'Secondary Button Style', type: 'text', placeholder: 'e.g., Glass effect / transparent background, border-white/20' },
      { id: '_divider3', type: 'divider', label: 'Cards & Navigation' },
      { id: 'cardStyle', label: 'Standard Card Style', type: 'textarea', placeholder: 'e.g., bg-white/5, border-white/10, backdrop-blur, rounded-2xl, hover: border-accent/30', rows: 2 },
      { id: 'navStyle', label: 'Navigation Style', type: 'textarea', placeholder: 'e.g., Glassmorphic pill navigation, floating with backdrop blur and gradient border', rows: 2 },
      { id: 'mobileNavStyle', label: 'Mobile Navigation', type: 'text', placeholder: 'e.g., Hamburger menu → fullscreen overlay with glass effect' },
      { id: '_divider4', type: 'divider', label: 'Layout & Grid' },
      { id: 'gridColumns', label: 'Grid Columns', type: 'text', placeholder: 'e.g., 4 equal-width columns' },
      { id: 'gridGutter', label: 'Grid Gutter', type: 'text', placeholder: 'e.g., 1.5rem (24px)' },
      { id: 'gridMaxWidth', label: 'Max Container Width', type: 'text', placeholder: 'e.g., 1920px' },
    ]
  },
  {
    id: 'effects',
    title: 'Visual Effects & Rules',
    desc: 'Glass effects, gradients, animations, and the do\'s & don\'ts of your brand.',
    fields: [
      { id: 'glassSubtle', label: 'Glass — Subtle Level', type: 'text', placeholder: 'e.g., bg-white/5, backdrop-blur — for cards & containers' },
      { id: 'glassMedium', label: 'Glass — Medium Level', type: 'text', placeholder: 'e.g., bg-white/10, backdrop-blur-md — for modals & overlays' },
      { id: 'glassStrong', label: 'Glass — Strong Level', type: 'text', placeholder: 'e.g., bg-white/15, backdrop-blur-lg — for navigation & premium elements' },
      { id: 'gradients', label: 'Gradient Styles', type: 'textarea', placeholder: 'e.g., Background: linear-gradient(135deg, #0a0a0a, #1a1a1a)\nGlow: radial-gradient(circle, accent/20, transparent)', rows: 3 },
      { id: 'animations', label: 'Animation & Motion', type: 'textarea', placeholder: 'e.g., Shimmer: rotating gradient on border for CTAs\nHover Glow: increased box-shadow opacity\nFade In: opacity 0→1, translateY 20→0', rows: 3 },
      { id: '_divider5', type: 'divider', label: 'Do\'s & Don\'ts' },
      { id: 'brandDos', label: 'Do\'s', type: 'list', placeholder: 'e.g., Use #0a0a0a as primary background', hint: 'Rules to always follow', defaults: [
        'Apply accent color only for CTAs & highlights',
        'Keep accent usage under 5% of total',
        'Use text color at varying opacities for hierarchy',
        'Use glass containers for depth',
        'Apply shimmer on primary CTAs',
      ]},
      { id: 'brandDonts', label: 'Don\'ts', type: 'list', placeholder: 'e.g., Use light/white backgrounds', hint: 'Rules to never break', defaults: [
        'Overuse accent color',
        'Mix more than your defined palette colors',
        'Use solid borders without opacity',
        'Apply blur to text',
        'Use low-contrast combinations',
      ]},
      { id: 'corePrinciple', label: 'Core Design Principle', type: 'textarea', placeholder: 'e.g., Three colors create infinite possibilities through opacity. This constraint is the source of visual power and brand recognition.', rows: 3 },
    ]
  }
];

const voiceSchema = [
  {
    id: 'dna',
    title: 'Voice DNA & Attributes',
    desc: 'Define who your brand would be as a person and the pillars that anchor every word.',
    fields: [
      { id: 'brandPersona', label: 'If your brand were a person, who would they be?', type: 'textarea', placeholder: 'e.g., A sharp, no-BS operator who\'s been in the trenches. They don\'t brag — they show receipts.', rows: 3 },
      { id: 'voiceSummary', label: 'One-sentence voice summary', type: 'textarea', placeholder: 'e.g., We speak with the confidence of someone who\'s done it, the clarity of someone who teaches it, and the warmth of someone who wants you to win.', rows: 2 },
      { id: '_divider_pillars', type: 'divider', label: 'Voice Pillars' },
      { id: 'pillar1Name', label: 'Pillar 1 Name', type: 'text', placeholder: 'e.g., Confident' },
      { id: 'pillar1Means', label: 'What it means', type: 'text', placeholder: 'e.g., We state facts, not opinions. We lead with proof.' },
      { id: 'pillar1SoundsLike', label: 'Sounds like', type: 'text', placeholder: 'e.g., Our systems captured 30+ leads in the first week.' },
      { id: 'pillar1DoesntSound', label: 'Doesn\'t sound like', type: 'text', placeholder: 'e.g., We believe our systems might be able to help capture more leads.' },
      { id: 'pillar2Name', label: 'Pillar 2 Name', type: 'text', placeholder: 'e.g., Clear' },
      { id: 'pillar2Means', label: 'What it means', type: 'text', placeholder: 'e.g., Short sentences. No jargon. A 12-year-old could understand it.' },
      { id: 'pillar2SoundsLike', label: 'Sounds like', type: 'text', placeholder: 'e.g., Your leads get answered in 5 minutes. Not 5 hours.' },
      { id: 'pillar2DoesntSound', label: 'Doesn\'t sound like', type: 'text', placeholder: 'e.g., Our optimized response latency framework reduces time-to-engagement.' },
      { id: 'pillar3Name', label: 'Pillar 3 Name', type: 'text', placeholder: 'e.g., Direct' },
      { id: 'pillar3Means', label: 'What it means', type: 'text', placeholder: 'e.g., We get to the point. We respect people\'s time.' },
      { id: 'pillar3SoundsLike', label: 'Sounds like', type: 'text', placeholder: 'e.g., Book your audit. See what you\'re missing.' },
      { id: 'pillar3DoesntSound', label: 'Doesn\'t sound like', type: 'text', placeholder: 'e.g., If you\'re interested in learning more, feel free to schedule...' },
      { id: '_divider_meter', type: 'divider', label: 'Voice Meter' },
      { id: 'meterFormal', label: 'Formal ↔ Casual', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Formal', rightLabel: 'Casual' },
      { id: 'meterSerious', label: 'Serious ↔ Playful', type: 'range', min: 1, max: 5, value: 3, leftLabel: 'Serious', rightLabel: 'Playful' },
      { id: 'meterReserved', label: 'Reserved ↔ Bold', type: 'range', min: 1, max: 5, value: 5, leftLabel: 'Reserved', rightLabel: 'Bold' },
      { id: 'meterTechnical', label: 'Technical ↔ Simple', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Technical', rightLabel: 'Simple' },
      { id: 'meterCorporate', label: 'Corporate ↔ Conversational', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Corporate', rightLabel: 'Conversational' },
      { id: '_divider_emotion', type: 'divider', label: 'Emotional Signature' },
      { id: 'emotionPrimary', label: 'Primary emotion to evoke', type: 'text', placeholder: 'e.g., Trust — "These people know what they\'re doing."' },
      { id: 'emotionSecondary', label: 'Secondary emotion', type: 'text', placeholder: 'e.g., Urgency — "I\'m leaving money on the table right now."' },
      { id: 'emotionUnderlying', label: 'Underlying emotion', type: 'text', placeholder: 'e.g., Relief — "Finally, someone who gets it and can fix it."' },
    ]
  },
  {
    id: 'messaging',
    title: 'Tone & Messaging',
    desc: 'How your tone shifts by context and your core messaging hierarchy.',
    fields: [
      { id: 'toneLanding', label: 'Landing Page / Hero Tone', type: 'text', placeholder: 'e.g., Bold, high-conviction — "Revenue systems that never sleep."' },
      { id: 'toneFeatures', label: 'Feature Descriptions Tone', type: 'text', placeholder: 'e.g., Clear, benefit-driven — "Every lead gets a response in under 5 minutes."' },
      { id: 'toneBlog', label: 'Blog / Educational Tone', type: 'text', placeholder: 'e.g., Insightful, generous — "Here\'s the exact workflow we use."' },
      { id: 'toneEmail', label: 'Email Tone', type: 'text', placeholder: 'e.g., Warm, professional, personal' },
      { id: 'toneSocial', label: 'Social Media Tone', type: 'text', placeholder: 'e.g., Punchy, relatable — "Your competitor answered that lead at 2am."' },
      { id: 'toneSupport', label: 'Support / Onboarding Tone', type: 'text', placeholder: 'e.g., Patient, clear, encouraging — "You\'re all set. Here\'s what happens next."' },
      { id: '_divider_msg', type: 'divider', label: 'Messaging Architecture' },
      { id: 'brandPromise', label: 'Brand Promise (one sentence)', type: 'textarea', placeholder: 'e.g., We build revenue systems that capture leads, close deals, and run 24/7 — so service businesses never miss a sale.', rows: 2 },
      { id: 'valueProp1', label: 'Value Proposition 1', type: 'text', placeholder: 'e.g., Never miss a lead again — 5-minute avg response time, 24/7' },
      { id: 'valueProp2', label: 'Value Proposition 2', type: 'text', placeholder: 'e.g., Automate your sales process — 99% uptime, handles booking + follow-up' },
      { id: 'valueProp3', label: 'Value Proposition 3', type: 'text', placeholder: 'e.g., See real ROI, fast — clients see results in first 30 days' },
      { id: 'proofPoints', label: 'Proof Points', type: 'list', placeholder: 'e.g., $2M+ in recovered revenue for clients', hint: 'Stats, results, credentials' },
      { id: 'differentiators', label: 'Key Differentiators', type: 'list', placeholder: 'e.g., We only work with service businesses — it\'s all we do', hint: 'Why you, not the alternative' },
    ]
  },
  {
    id: 'audience',
    title: 'Audience & Channels',
    desc: 'Who you\'re talking to and how your voice adapts across platforms.',
    fields: [
      { id: 'segment1Name', label: 'Audience Segment 1 — Name', type: 'text', placeholder: 'e.g., Service Business Owner (Solo/Small)' },
      { id: 'segment1Who', label: 'Who they are', type: 'text', placeholder: 'e.g., Runs a cleaning/HVAC/trades business. 1-10 employees.' },
      { id: 'segment1Pain', label: 'Biggest pain', type: 'text', placeholder: 'e.g., Missing leads after hours. Can\'t keep up with follow-ups.' },
      { id: 'segment1Message', label: 'Key message for them', type: 'text', placeholder: 'e.g., "Your business runs 24/7. Your sales should too."' },
      { id: 'segment2Name', label: 'Audience Segment 2 — Name', type: 'text', placeholder: 'e.g., Growth-Stage Business Owner' },
      { id: 'segment2Who', label: 'Who they are', type: 'text', placeholder: 'e.g., 10-50 employees. Already has some systems. Wants to scale.' },
      { id: 'segment2Pain', label: 'Biggest pain', type: 'text', placeholder: 'e.g., Sales team is inconsistent. No single source of truth.' },
      { id: 'segment2Message', label: 'Key message for them', type: 'text', placeholder: 'e.g., "Your pipeline has leaks. We plug them."' },
      { id: '_divider_channels', type: 'divider', label: 'Channel Guidelines' },
      { id: 'channelWebsite', label: 'Website / Landing Pages', type: 'textarea', placeholder: 'e.g., Hero headline formula: Outcome + Timeframe + Qualifier\nMax 30 words per paragraph. CTA above fold and after each section.', rows: 3 },
      { id: 'channelEmail', label: 'Email', type: 'textarea', placeholder: 'e.g., Subject lines: lowercase, curiosity-driven, under 6 words.\nMax 150 words for cold outreach. One CTA per email.', rows: 3 },
      { id: 'channelSocial', label: 'Social Media', type: 'textarea', placeholder: 'e.g., Twitter: under 200 chars. LinkedIn: 150-300 words.\nContent pillars: Results 40%, Education 30%, Behind scenes 15%, CTA 15%', rows: 3 },
      { id: 'channelAds', label: 'Ads', type: 'textarea', placeholder: 'e.g., Lead with the problem or result, never the feature.\nUnder 90 words. One benefit, one proof point, one CTA.', rows: 2 },
    ]
  },
  {
    id: 'language',
    title: 'Language & CTAs',
    desc: 'Your vocabulary, headline formulas, and call-to-action library.',
    fields: [
      { id: 'powerWords', label: 'Power Words (use often)', type: 'list', placeholder: 'e.g., Revenue system — more concrete than "solution"', hint: 'Words and phrases to use regularly' },
      { id: 'bannedWords', label: 'Banned Words (never use)', type: 'list', placeholder: 'e.g., Synergy — corporate buzzword, means nothing', hint: 'Words to permanently avoid' },
      { id: 'namingProducts', label: 'Product Naming Convention', type: 'text', placeholder: 'e.g., Always capitalized: "Revenue Engine", "Lead Capture System"' },
      { id: 'namingServices', label: 'Service Naming Convention', type: 'text', placeholder: 'e.g., Action-based: "The Audit", "The Build", "The Launch"' },
      { id: '_divider_headlines', type: 'divider', label: 'Headlines & CTAs' },
      { id: 'headlineFormulas', label: 'Headline Formulas', type: 'list', placeholder: 'e.g., [Outcome] + [Timeframe]: "30+ leads captured in your first week."', hint: 'Tested headline patterns', defaults: [
        '[Outcome] + [Timeframe]: "30+ leads captured in your first week."',
        '[Pain point] + [Resolution]: "Missing leads at 2am? Not anymore."',
        '[Question that stings]: "How many leads did you lose last night?"',
        '[Simple promise]: "Never miss a lead again."',
      ]},
      { id: 'primaryCTAs', label: 'Primary CTAs (high commitment)', type: 'list', placeholder: 'e.g., Book Your Audit — main conversion', hint: 'For hero sections and landing pages' },
      { id: 'secondaryCTAs', label: 'Secondary CTAs (low commitment)', type: 'list', placeholder: 'e.g., See How It Works — curiosity stage' },
      { id: 'ctaRules', label: 'CTA Rules', type: 'list', placeholder: 'e.g., Always start with a verb', defaults: [
        'Always start with a verb',
        'Never use "Submit" or "Click Here"',
        'One primary CTA per page/email',
        'CTA should promise an outcome, not describe an action',
      ]},
    ]
  },
  {
    id: 'story',
    title: 'Storytelling & Rules',
    desc: 'Your brand story arc, email templates, and voice do\'s & don\'ts.',
    fields: [
      { id: 'storyProblem', label: 'The Problem (without you)', type: 'textarea', placeholder: 'e.g., Service businesses are losing thousands every month because they can\'t answer leads fast enough.', rows: 3 },
      { id: 'storyTurning', label: 'The Turning Point (your insight)', type: 'textarea', placeholder: 'e.g., The gap wasn\'t skill — it was systems. So we built the systems.', rows: 2 },
      { id: 'storySolution', label: 'The Solution (what you do)', type: 'textarea', placeholder: 'e.g., Revenue systems that capture leads, close deals, and run 24/7.', rows: 2 },
      { id: 'storyProof', label: 'The Proof (results)', type: 'textarea', placeholder: 'e.g., $2M+ recovered. 99% uptime. 5-minute response times.', rows: 2 },
      { id: 'storyVision', label: 'The Vision (where this is going)', type: 'textarea', placeholder: 'e.g., A world where no service business loses a customer because they didn\'t answer fast enough.', rows: 2 },
      { id: '_divider_rules', type: 'divider', label: 'Voice Do\'s & Don\'ts' },
      { id: 'voiceDos', label: 'Voice Do\'s', type: 'list', placeholder: 'e.g., Lead with outcomes, not features', defaults: [
        'Lead with outcomes, not features',
        'Use specific numbers over vague claims',
        'Write like you talk — read it out loud',
        'Use active voice',
        'Keep sentences under 20 words when possible',
        'Address the reader as "you"',
        'End with a clear next step',
      ]},
      { id: 'voiceDonts', label: 'Voice Don\'ts', type: 'list', placeholder: 'e.g., Use jargon your customer wouldn\'t use', defaults: [
        'Use jargon your customer wouldn\'t use',
        'Write paragraphs longer than 3 lines',
        'Use passive voice unless intentional',
        'Say "click here" or "submit" as a CTA',
        'Over-promise or guarantee without proof',
        'Hedge when you should be direct',
      ]},
      { id: 'coreVoicePrinciple', label: 'Core Voice Principle', type: 'textarea', placeholder: 'e.g., We speak with the confidence of proof, the clarity of simplicity, and the urgency of opportunity. Every word earns its place.', rows: 3 },
    ]
  }
];

const archetypeSchema = [
  {
    id: 'discovery',
    title: 'Archetype Discovery',
    desc: 'Discover which of the 12 archetypes drives your brand at its core.',
    fields: [
      { id: 'coreDrive', label: 'What drives your brand at its core?', type: 'select', options: [
        '', 'The Hero — Being the best, winning, helping others triumph',
        'The Magician — Transforming something broken into something extraordinary',
        'The Outlaw — Challenging the status quo, doing things differently',
        'The Creator — Building something new, creative self-expression',
        'The Ruler — Leading, organizing, creating order',
        'The Sage — Teaching, sharing knowledge, seeking truth',
        'The Caregiver — Protecting, nurturing, serving others',
        'The Explorer — Exploring, pushing boundaries, discovering',
        'The Everyman — Connecting, building community, being relatable',
        'The Lover — Creating beauty, intimacy, desire',
        'The Jester — Bringing joy, humor, lightness',
        'The Innocent — Restoring simplicity, hope, purity',
      ]},
      { id: 'customerEmotion', label: 'What emotion do your best customers feel after working with you?', type: 'textarea', placeholder: 'e.g., Empowered — like they finally have a superpower they didn\'t know was possible.', rows: 2 },
      { id: 'customerEmotionArchetype', label: 'That emotion maps to...', type: 'text', placeholder: 'e.g., Magician / Hero' },
      { id: 'worldLoses', label: 'If your brand disappeared tomorrow, what would the world lose?', type: 'textarea', placeholder: 'e.g., Hundreds of service businesses would go back to losing leads and leaving money on the table.', rows: 3 },
      { id: 'worldLosesArchetype', label: 'That maps to...', type: 'text', placeholder: 'e.g., Magician / Caregiver / Hero' },
      { id: 'proudestFeedback', label: 'What do your customers say about you that makes you proudest?', type: 'textarea', placeholder: 'e.g., "I wish I\'d found you a year ago." / "The ROI was immediate." / "You made this so easy."', rows: 2 },
      { id: 'proudestArchetype', label: 'That maps to...', type: 'text', placeholder: 'e.g., Magician — transformation. Sage — clarity.' },
      { id: 'brandAnger', label: 'What pisses your brand off?', type: 'textarea', placeholder: 'e.g., Watching great businesses lose to mediocre ones just because they don\'t have the right systems.', rows: 2 },
      { id: 'angerArchetype', label: 'That maps to...', type: 'text', placeholder: 'e.g., Hero — injustice. Outlaw — broken systems.' },
      { id: '_divider_disc_summary', type: 'divider', label: 'Discovery Summary' },
      { id: 'primaryArchetype', label: 'Your Primary (Dominant) Archetype', type: 'select', options: [
        '', 'The Hero', 'The Magician', 'The Outlaw', 'The Creator', 'The Ruler', 'The Sage',
        'The Caregiver', 'The Explorer', 'The Everyman', 'The Lover', 'The Jester', 'The Innocent',
      ]},
      { id: 'secondaryArchetype', label: 'Your Secondary (Supporting) Archetype', type: 'select', options: [
        '', 'The Hero', 'The Magician', 'The Outlaw', 'The Creator', 'The Ruler', 'The Sage',
        'The Caregiver', 'The Explorer', 'The Everyman', 'The Lover', 'The Jester', 'The Innocent',
      ]},
    ]
  },
  {
    id: 'deepdive',
    title: 'Primary & Secondary',
    desc: 'Deep dive into your primary archetype and how your secondary supports it.',
    fields: [
      { id: '_divider_primary', type: 'divider', label: 'Primary Archetype Deep Dive' },
      { id: 'primaryCoreDesire', label: 'Core Desire', type: 'text', placeholder: 'e.g., Transform the broken into the extraordinary' },
      { id: 'primaryBrandPromise', label: 'Brand Promise', type: 'text', placeholder: 'e.g., "We make the impossible feel effortless"' },
      { id: 'primaryGreatestFear', label: 'Greatest Fear', type: 'text', placeholder: 'e.g., Being seen as smoke and mirrors; unintended negative consequences' },
      { id: 'primaryStrategy', label: 'Strategy', type: 'text', placeholder: 'e.g., Develop a vision, then build the system to make it real' },
      { id: 'primaryGift', label: 'Gift to the World', type: 'text', placeholder: 'e.g., Turning chaos into order, potential into results' },
      { id: 'primaryInBuild', label: 'How it shows up — In what we build', type: 'textarea', placeholder: 'e.g., Our systems transform chaotic lead processes into automated revenue machines.', rows: 2 },
      { id: 'primaryInSell', label: 'How it shows up — In how we sell', type: 'textarea', placeholder: 'e.g., We show the gap between where they are and where they could be.', rows: 2 },
      { id: 'primaryInComms', label: 'How it shows up — In how we communicate', type: 'textarea', placeholder: 'e.g., We speak with quiet confidence. We let the transformation speak for itself.', rows: 2 },
      { id: 'primaryMaturity', label: 'Archetype Maturity Level', type: 'select', options: [
        '', 'Level 1 — Apprentice: Fascinated by transformation but still proving it',
        'Level 2 — Practitioner: Delivering consistent results, building a track record',
        'Level 3 — Master: The undeniable authority. People seek you out by reputation',
      ]},
      { id: 'maturityNextLevel', label: 'What gets you to the next level?', type: 'textarea', placeholder: 'e.g., More public case studies, thought leadership content, bigger client logos', rows: 2 },
      { id: '_divider_secondary', type: 'divider', label: 'Secondary Archetype' },
      { id: 'secondaryWhyNot', label: 'Why is this secondary, not primary?', type: 'textarea', placeholder: 'e.g., We don\'t position ourselves as the hero — we position the client as the hero. But our drive is heroic.', rows: 3 },
      { id: 'blendMarketing', label: 'In Marketing — Primary shows up as...', type: 'text', placeholder: 'e.g., "Look at this transformation"' },
      { id: 'blendMarketingSec', label: 'In Marketing — Secondary shows up as...', type: 'text', placeholder: 'e.g., "You deserve to win. Here\'s how."' },
      { id: 'blendSales', label: 'In Sales — Primary shows up as...', type: 'text', placeholder: 'e.g., "Here\'s the gap — we close it"' },
      { id: 'blendSalesSec', label: 'In Sales — Secondary shows up as...', type: 'text', placeholder: 'e.g., "We\'ll fight for your results"' },
      { id: 'blendRatioPrimary', label: 'Blend Ratio — Primary %', type: 'range', min: 0, max: 100, value: 70, leftLabel: '0%', rightLabel: '100%' },
      { id: 'blendDescription', label: 'Describe the blend in your own words', type: 'textarea', placeholder: 'e.g., Most of the time we\'re the Magician — calm, visionary, transformative. But when a client is struggling, the Hero comes out.', rows: 3 },
    ]
  },
  {
    id: 'shadow',
    title: 'Shadow & Tension',
    desc: 'Every archetype has a dark side. Knowing yours prevents drift and keeps you authentic.',
    fields: [
      { id: '_divider_shadow1', type: 'divider', label: 'Primary Shadow Side' },
      { id: 'primaryShadowName', label: 'Primary Archetype\'s Shadow', type: 'text', placeholder: 'e.g., The Manipulator (Magician shadow)' },
      { id: 'primaryShadowManifest', label: 'How it manifests in brands', type: 'textarea', placeholder: 'e.g., Overpromising. Making things seem more magical than they are. Smoke and mirrors.', rows: 2 },
      { id: 'shadowWarning1', label: 'Warning Sign 1', type: 'text', placeholder: 'e.g., Marketing claims we can\'t consistently back up' },
      { id: 'shadowCorrect1', label: 'How to Correct It', type: 'text', placeholder: 'e.g., Every claim must link to a real case study or data point' },
      { id: 'shadowWarning2', label: 'Warning Sign 2', type: 'text', placeholder: 'e.g., Clients don\'t understand what they\'re getting' },
      { id: 'shadowCorrect2', label: 'How to Correct It', type: 'text', placeholder: 'e.g., If a client can\'t explain it back simply, we\'ve failed' },
      { id: '_divider_shadow2', type: 'divider', label: 'Secondary Shadow Side' },
      { id: 'secondaryShadowName', label: 'Secondary Archetype\'s Shadow', type: 'text', placeholder: 'e.g., The Bully (Hero shadow)' },
      { id: 'secondaryShadowManifest', label: 'How it manifests', type: 'textarea', placeholder: 'e.g., Being so focused on winning that we steamroll client input.', rows: 2 },
      { id: '_divider_tension', type: 'divider', label: 'Archetype Blend & Tension' },
      { id: 'tensionDescription', label: 'The Productive Tension', type: 'textarea', placeholder: 'e.g., The Magician says "it\'s effortless." The Hero says "we fought for this." The tension creates a brand that feels both easy and earned.', rows: 3 },
      { id: 'tensionBlend1Primary', label: 'Primary says...', type: 'text', placeholder: 'e.g., "Watch this — it just works."' },
      { id: 'tensionBlend1Secondary', label: 'Secondary says...', type: 'text', placeholder: 'e.g., "We built this to be unbreakable."' },
      { id: 'tensionBlend1Result', label: 'The blend sounds like...', type: 'text', placeholder: 'e.g., "It works 24/7. Because we built it to."' },
      { id: 'archetypesNotList', label: 'Archetypes We Are NOT (and why)', type: 'list', placeholder: 'e.g., The Jester — We\'re not here to be funny. Our clients want results, not jokes.', hint: 'What your brand intentionally avoids' },
    ]
  },
  {
    id: 'personality',
    title: 'Personality & Character',
    desc: 'Your brand personality spectrum and the human character behind it all.',
    fields: [
      { id: '_divider_comm', type: 'divider', label: 'Communication Style' },
      { id: 'specFormalCasual', label: 'Formal ↔ Casual', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Formal', rightLabel: 'Casual' },
      { id: 'specSeriousPlayful', label: 'Serious ↔ Playful', type: 'range', min: 1, max: 5, value: 3, leftLabel: 'Serious', rightLabel: 'Playful' },
      { id: 'specReservedBold', label: 'Reserved ↔ Bold', type: 'range', min: 1, max: 5, value: 5, leftLabel: 'Reserved', rightLabel: 'Bold' },
      { id: 'specHumbleProud', label: 'Humble ↔ Proud', type: 'range', min: 1, max: 5, value: 3, leftLabel: 'Humble', rightLabel: 'Proud' },
      { id: 'specUnderstatedDramatic', label: 'Understated ↔ Dramatic', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Understated', rightLabel: 'Dramatic' },
      { id: '_divider_intell', type: 'divider', label: 'Intellectual Style' },
      { id: 'specTechnicalSimple', label: 'Technical ↔ Simple', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Technical', rightLabel: 'Simple' },
      { id: 'specAbstractConcrete', label: 'Abstract ↔ Concrete', type: 'range', min: 1, max: 5, value: 3, leftLabel: 'Abstract', rightLabel: 'Concrete' },
      { id: 'specDataStory', label: 'Data-driven ↔ Story-driven', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Data-driven', rightLabel: 'Story-driven' },
      { id: '_divider_energy', type: 'divider', label: 'Energy' },
      { id: 'specCalmIntense', label: 'Calm ↔ Intense', type: 'range', min: 1, max: 5, value: 4, leftLabel: 'Calm', rightLabel: 'Intense' },
      { id: 'specPatientUrgent', label: 'Patient ↔ Urgent', type: 'range', min: 1, max: 5, value: 3, leftLabel: 'Patient', rightLabel: 'Urgent' },
      { id: 'specWarmCool', label: 'Warm ↔ Cool', type: 'range', min: 1, max: 5, value: 2, leftLabel: 'Warm', rightLabel: 'Cool' },
      { id: '_divider_char', type: 'divider', label: 'Character Profile' },
      { id: 'charName', label: 'Character Name', type: 'text', placeholder: 'e.g., "The Architect"', hint: 'Give your brand character a name' },
      { id: 'charAge', label: 'Age Range', type: 'text', placeholder: 'e.g., 32-40 — experienced but not old guard' },
      { id: 'charEnergy', label: 'Energy', type: 'text', placeholder: 'e.g., Focused intensity. Calm on the surface, relentless underneath.' },
      { id: 'charPresence', label: 'Presence in a Room', type: 'text', placeholder: 'e.g., Not the loudest. But when they speak, everyone listens.' },
      { id: 'charStrength', label: 'Greatest Strength', type: 'text', placeholder: 'e.g., Seeing the system behind the chaos — and building the fix.' },
      { id: 'charFlaw', label: 'Greatest Flaw', type: 'text', placeholder: 'e.g., Impatient with inefficiency. Can come across as too direct.' },
      { id: 'charValues', label: 'What They Value Most', type: 'text', placeholder: 'e.g., Results. Precision. People who do what they say.' },
      { id: 'charCantStand', label: 'What They Can\'t Stand', type: 'text', placeholder: 'e.g., Excuses. Overcomplicated solutions. Wasted potential.' },
      { id: 'charTrust', label: 'How They Earn Trust', type: 'text', placeholder: 'e.g., By delivering results before asking for more commitment.' },
    ]
  },
  {
    id: 'expression',
    title: 'Expression & Rules',
    desc: 'How your archetype expresses across voice, visuals, customer experience, and culture.',
    fields: [
      { id: '_divider_emot', type: 'divider', label: 'Emotional Mapping' },
      { id: 'emotionAwareness', label: 'Awareness Stage — Customer Emotion & Brand Role', type: 'textarea', placeholder: 'e.g., Frustrated: "I\'m losing leads." → Brand names the pain they can\'t articulate (Sage energy).', rows: 2 },
      { id: 'emotionConsideration', label: 'Consideration Stage — Customer Emotion & Brand Role', type: 'textarea', placeholder: 'e.g., Skeptical: "Prove it." → Stack proof: numbers, testimonials, case studies (Hero energy).', rows: 2 },
      { id: 'emotionOnboarding', label: 'Onboarding Stage — Customer Emotion & Brand Role', type: 'textarea', placeholder: 'e.g., Anxious: "Did I choose right?" → Fast first win. Clear next steps (Magician energy).', rows: 2 },
      { id: 'emotionOngoing', label: 'Ongoing Stage — Customer Emotion & Brand Role', type: 'textarea', placeholder: 'e.g., Confident: "I\'ve got a system now." → Become invisible. Let the system prove itself.', rows: 2 },
      { id: 'definingEmotion', label: 'The ONE Emotion That Defines Your Brand', type: 'textarea', placeholder: 'e.g., "Inevitability." When someone encounters our brand, they should feel like the result is inevitable — not hopeful, certain.', rows: 2 },
      { id: '_divider_voice_arch', type: 'divider', label: 'Archetype in Voice' },
      { id: 'voiceRules', label: 'How Your Archetype Speaks — Sentence Rules', type: 'list', placeholder: 'e.g., Paint the before/after in as few words as possible', hint: 'Voice rules driven by your archetype' },
      { id: 'powerPhrases', label: 'Power Phrases That Match Your Archetype', type: 'list', placeholder: 'e.g., "From chaos to revenue." — shows the transformation', hint: 'Phrases that embody your archetype' },
      { id: 'antiArchetypeLanguage', label: 'Language to Avoid (Anti-Archetype)', type: 'list', placeholder: 'e.g., "We hope to..." — Magicians don\'t hope, they know', hint: 'Language that contradicts your archetype' },
      { id: '_divider_visual_arch', type: 'divider', label: 'Archetype in Visuals' },
      { id: 'colorPsychology', label: 'Color Psychology — Why These Colors for Your Archetype', type: 'list', placeholder: 'e.g., Black (#0a0a0a) — Magician: mystery, depth, unseen power' },
      { id: 'visualMotifsUse', label: 'Visual Motifs to Use', type: 'list', placeholder: 'e.g., Glow effects, before/after, glass morphism, light emerging from dark' },
      { id: 'visualMotifsAvoid', label: 'Visual Motifs to Avoid', type: 'list', placeholder: 'e.g., Bright/happy aesthetics, cluttered layouts, childlike illustrations' },
      { id: '_divider_cx', type: 'divider', label: 'Customer Experience & Culture' },
      { id: 'firstImpressionDemand', label: 'First Impression — What Your Archetype Demands', type: 'textarea', placeholder: 'e.g., The first impression should feel like a curtain being pulled back — a moment of "oh, THIS is what\'s possible."', rows: 2 },
      { id: 'hiringWeDo', label: 'We Hire People Who Are...', type: 'list', placeholder: 'e.g., Builders — they want to create, not just maintain' },
      { id: 'hiringWeDont', label: 'We Don\'t Hire People Who Are...', type: 'list', placeholder: 'e.g., Loud but shallow — energy without substance' },
      { id: 'decisionFramework', label: 'Archetype Decision Framework', type: 'textarea', placeholder: 'e.g., "Does this move the client closer to transformation? If yes, do it. If it\'s just nice-to-have, skip it."', rows: 2 },
      { id: '_divider_dos', type: 'divider', label: 'Archetype Do\'s & Don\'ts' },
      { id: 'archetypeDos', label: 'Do\'s', type: 'list', placeholder: 'e.g., Let your archetype guide decisions when unsure', defaults: [
        'Let your archetype guide decisions when unsure',
        'Use the character profile as a gut-check: "Would they say this?"',
        'Stay in the productive tension between primary and secondary',
        'Express the archetype differently per channel but never abandon it',
        'Revisit and recalibrate annually as the brand matures',
        'Check for shadow behavior quarterly',
      ]},
      { id: 'archetypeDonts', label: 'Don\'ts', type: 'list', placeholder: 'e.g., Switch archetypes per campaign', defaults: [
        'Switch archetypes per campaign — the archetype is stable, the tone flexes',
        'Confuse archetype with aesthetic — archetype is behavior and belief, not just visuals',
        'Let the shadow side go unchecked',
        'Use more than two archetypes — it dilutes the identity',
        'Copy another brand\'s archetype expression — find your own flavor',
        'Treat this as a one-time exercise',
      ]},
      { id: 'coreArchetypePrinciple', label: 'Core Archetype Principle', type: 'textarea', placeholder: 'e.g., We are the Magician with the Hero\'s heart. We transform broken systems into revenue machines — not with tricks, but with precision, proof, and commitment.', rows: 3 },
    ]
  }
];


// ─── State ──────────────────────────────────────────────
const state = {
  guidelines: { currentStep: 0, data: {} },
  voice: { currentStep: 0, data: {} },
  archetype: { currentStep: 0, data: {} },
  activePreview: 'guidelines',
};

// Load from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('brandforge_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.guidelines) Object.assign(state.guidelines.data, parsed.guidelines);
      if (parsed.voice) Object.assign(state.voice.data, parsed.voice);
      if (parsed.archetype) Object.assign(state.archetype.data, parsed.archetype);
    }
  } catch (e) { /* ignore */ }
}

function saveState() {
  try {
    localStorage.setItem('brandforge_state', JSON.stringify({
      guidelines: state.guidelines.data,
      voice: state.voice.data,
      archetype: state.archetype.data,
    }));
  } catch (e) { /* ignore */ }
}


// ─── Form Rendering ─────────────────────────────────────
function renderField(field, wizardId) {
  const val = state[wizardId].data[field.id];

  if (field.type === 'divider') {
    return `<div class="form-group full" style="margin-top:16px;margin-bottom:4px;">
      <div style="font-family:var(--font-display);font-size:16px;font-weight:700;color:var(--accent);padding-bottom:8px;border-bottom:1px solid var(--border);">${field.label}</div>
    </div>`;
  }

  if (field.type === 'text') {
    return `<div class="form-group">
      <label class="form-label">${field.label}${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}</label>
      <input class="form-input" type="text" data-field="${field.id}" data-wizard="${wizardId}" placeholder="${field.placeholder || ''}" value="${escHtml(val || '')}" ${field.required ? 'required' : ''}>
    </div>`;
  }

  if (field.type === 'select') {
    const options = field.options || [];
    return `<div class="form-group full">
      <label class="form-label">${field.label}${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}</label>
      <select class="form-select" data-field="${field.id}" data-wizard="${wizardId}">
        ${options.map(opt => `<option value="${escHtml(opt)}" ${val === opt ? 'selected' : ''}>${opt || '— Select —'}</option>`).join('')}
      </select>
    </div>`;
  }

  if (field.type === 'textarea') {
    return `<div class="form-group full">
      <label class="form-label">${field.label}${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}</label>
      <textarea class="form-textarea" data-field="${field.id}" data-wizard="${wizardId}" placeholder="${field.placeholder || ''}" rows="${field.rows || 3}">${escHtml(val || '')}</textarea>
    </div>`;
  }

  if (field.type === 'range') {
    const v = val !== undefined ? val : field.value;
    const leftLabel = field.leftLabel || field.min;
    const rightLabel = field.rightLabel || field.max;
    return `<div class="form-group">
      <label class="form-label">${field.label}</label>
      <div class="form-range-group">
        <input class="form-range" type="range" min="${field.min}" max="${field.max}" value="${v}" data-field="${field.id}" data-wizard="${wizardId}">
        <span class="form-range-value" id="rv_${field.id}">${v}</span>
      </div>
      <div class="form-range-labels"><span>${leftLabel}</span><span>${rightLabel}</span></div>
    </div>`;
  }

  if (field.type === 'list') {
    const items = val || field.defaults || [''];
    return `<div class="form-group full">
      <label class="form-label">${field.label}${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}</label>
      <div class="form-list" data-list-field="${field.id}" data-wizard="${wizardId}">
        ${items.map((item, i) => `
          <div class="form-list-item">
            <input class="form-input" type="text" value="${escHtml(item)}" placeholder="${field.placeholder || ''}">
            <button class="form-list-remove" onclick="removeListItem(this)" title="Remove">×</button>
          </div>
        `).join('')}
        <button class="form-list-add" onclick="addListItem(this, '${field.placeholder || ''}')">+ Add item</button>
      </div>
    </div>`;
  }

  if (field.type === 'colorRepeater') {
    const items = val || field.defaults || [];
    return `<div class="form-group full">
      <label class="form-label">${field.label}${field.hint ? `<span class="form-hint">${field.hint}</span>` : ''}</label>
      <div class="form-color-repeater" data-color-field="${field.id}" data-wizard="${wizardId}">
        ${items.map((c, i) => `
          <div class="form-repeater-item">
            <button class="form-repeater-remove" onclick="removeRepeaterItem(this)" title="Remove">×</button>
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label" style="font-size:12px">Color Name</label>
                <input class="form-input color-name" type="text" value="${escHtml(c.name || '')}" placeholder="e.g., Primary Red">
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size:12px">Hex Code</label>
                <div class="form-color-group">
                  <input class="form-color-input" type="color" value="${c.hex || '#a855f7'}">
                  <input class="form-input color-hex" type="text" value="${escHtml(c.hex || '#a855f7')}" placeholder="#000000" style="flex:1">
                </div>
              </div>
              <div class="form-group full">
                <label class="form-label" style="font-size:12px">Role / Usage</label>
                <input class="form-input color-role" type="text" value="${escHtml(c.role || '')}" placeholder="e.g., Primary Background">
              </div>
            </div>
          </div>
        `).join('')}
        <button class="form-list-add" onclick="addColorItem(this)">+ Add color</button>
      </div>
    </div>`;
  }

  return '';
}

function renderWizard(schema, wizardId) {
  const stepsContainer = document.getElementById(`${wizardId}Steps`);
  const labelsContainer = document.getElementById(`${wizardId}StepLabels`);

  // Render step labels
  labelsContainer.innerHTML = schema.map((step, i) => `
    <button class="wizard-step-label ${i === 0 ? 'active' : ''}" data-step="${i}" data-wizard="${wizardId}">
      ${step.title}
    </button>
  `).join('');

  // Render steps
  stepsContainer.innerHTML = schema.map((step, i) => `
    <div class="wizard-step ${i === 0 ? 'active' : ''}" data-step="${i}">
      <h3 class="wizard-step-title">${step.title}</h3>
      <p class="wizard-step-desc">${step.desc}</p>
      <div class="form-grid">
        ${step.fields.map(f => renderField(f, wizardId)).join('')}
      </div>
    </div>
  `).join('');

  updateWizardUI(wizardId);
}


// ─── Wizard Navigation ──────────────────────────────────
function goToStep(wizardId, step) {
  const schema = wizardId === 'guidelines' ? guidelinesSchema : wizardId === 'voice' ? voiceSchema : archetypeSchema;
  const maxStep = schema.length - 1;
  step = Math.max(0, Math.min(step, maxStep));

  collectFormData(wizardId);
  state[wizardId].currentStep = step;
  updateWizardUI(wizardId);
}

function updateWizardUI(wizardId) {
  const schema = wizardId === 'guidelines' ? guidelinesSchema : wizardId === 'voice' ? voiceSchema : archetypeSchema;
  const step = state[wizardId].currentStep;

  // Update progress bar
  const progressBar = document.getElementById(`${wizardId}ProgressBar`);
  progressBar.style.width = `${((step + 1) / schema.length) * 100}%`;

  // Update step labels
  const labels = document.querySelectorAll(`[data-wizard="${wizardId}"].wizard-step-label`);
  labels.forEach((label, i) => {
    label.classList.toggle('active', i === step);
    label.classList.toggle('completed', i < step);
  });

  // Update steps visibility
  const steps = document.querySelectorAll(`#${wizardId}Steps .wizard-step`);
  steps.forEach((s, i) => s.classList.toggle('active', i === step));

  // Update nav buttons
  const prevBtn = document.getElementById(`${wizardId}Prev`);
  const nextBtn = document.getElementById(`${wizardId}Next`);
  const countEl = document.getElementById(`${wizardId}Count`);

  prevBtn.disabled = step === 0;
  nextBtn.textContent = step === schema.length - 1 ? 'Finish' : 'Next';
  if (step < schema.length - 1) {
    nextBtn.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  } else {
    nextBtn.innerHTML = 'Preview & Export <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  countEl.textContent = `Step ${step + 1} of ${schema.length}`;

  // Scroll the active label into view
  const activeLabel = labels[step];
  if (activeLabel) activeLabel.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}


// ─── Data Collection ────────────────────────────────────
function collectFormData(wizardId) {
  // Text and textarea inputs
  document.querySelectorAll(`[data-wizard="${wizardId}"].form-input, [data-wizard="${wizardId}"].form-textarea, [data-wizard="${wizardId}"].form-range, [data-wizard="${wizardId}"].form-select`).forEach(el => {
    const fieldId = el.dataset.field;
    if (fieldId) {
      state[wizardId].data[fieldId] = el.type === 'range' ? parseInt(el.value) : el.value;
    }
  });

  // List fields
  document.querySelectorAll(`[data-wizard="${wizardId}"][data-list-field]`).forEach(container => {
    const fieldId = container.dataset.listField;
    const items = [];
    container.querySelectorAll('.form-list-item .form-input').forEach(input => {
      if (input.value.trim()) items.push(input.value.trim());
    });
    state[wizardId].data[fieldId] = items;
  });

  // Color repeater fields
  document.querySelectorAll(`[data-wizard="${wizardId}"][data-color-field]`).forEach(container => {
    const fieldId = container.dataset.colorField;
    const items = [];
    container.querySelectorAll('.form-repeater-item').forEach(item => {
      const name = item.querySelector('.color-name')?.value || '';
      const hex = item.querySelector('.color-hex')?.value || '';
      const role = item.querySelector('.color-role')?.value || '';
      if (name || hex) items.push({ name, hex, role });
    });
    state[wizardId].data[fieldId] = items;
  });

  saveState();
}

function collectAllData() {
  collectFormData('guidelines');
  collectFormData('voice');
  collectFormData('archetype');
}


// ─── Dynamic List Items ─────────────────────────────────
function addListItem(btn, placeholder) {
  const item = document.createElement('div');
  item.className = 'form-list-item';
  item.innerHTML = `
    <input class="form-input" type="text" value="" placeholder="${placeholder || ''}">
    <button class="form-list-remove" onclick="removeListItem(this)" title="Remove">×</button>
  `;
  btn.parentNode.insertBefore(item, btn);
  item.querySelector('input').focus();
}

function removeListItem(btn) {
  const container = btn.closest('.form-list');
  if (container.querySelectorAll('.form-list-item').length > 1) {
    btn.closest('.form-list-item').remove();
  }
}

function addColorItem(btn) {
  const item = document.createElement('div');
  item.className = 'form-repeater-item';
  item.innerHTML = `
    <button class="form-repeater-remove" onclick="removeRepeaterItem(this)" title="Remove">×</button>
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label" style="font-size:12px">Color Name</label>
        <input class="form-input color-name" type="text" value="" placeholder="e.g., Primary Red">
      </div>
      <div class="form-group">
        <label class="form-label" style="font-size:12px">Hex Code</label>
        <div class="form-color-group">
          <input class="form-color-input" type="color" value="#a855f7">
          <input class="form-input color-hex" type="text" value="#a855f7" placeholder="#000000" style="flex:1">
        </div>
      </div>
      <div class="form-group full">
        <label class="form-label" style="font-size:12px">Role / Usage</label>
        <input class="form-input color-role" type="text" value="" placeholder="e.g., Primary Background">
      </div>
    </div>
  `;
  btn.parentNode.insertBefore(item, btn);
}

function removeRepeaterItem(btn) {
  btn.closest('.form-repeater-item').remove();
}


// ─── Document Generation ────────────────────────────────
function generateGuidelinesDoc(format) {
  const d = state.guidelines.data;
  const brandName = d.brandName || '[YOUR BRAND NAME]';

  const lines = [];
  const h1 = (t) => format === 'html' ? `<h1>${t}</h1>` : `# ${t}`;
  const h2 = (t) => format === 'html' ? `<h2>${t}</h2>` : `## ${t}`;
  const h3 = (t) => format === 'html' ? `<h3>${t}</h3>` : `### ${t}`;
  const p = (t) => format === 'html' ? `<p>${t}</p>` : t;
  const b = (label, val) => format === 'html' ? `<p><strong>${label}:</strong> ${val}</p>` : `**${label}:** ${val}`;
  const hr = () => format === 'html' ? '<hr>' : '\n---\n';
  const bq = (t) => format === 'html' ? `<blockquote>${t}</blockquote>` : `> ${t}`;
  const ul = (items) => {
    if (!items || !items.length) return '';
    return format === 'html'
      ? '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>'
      : items.map(i => `- ${i}`).join('\n');
  };
  const table = (headers, rows) => {
    if (format === 'html') {
      let html = '<table><thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
      rows.forEach(row => { html += '<tr>' + row.map(c => `<td>${c}</td>`).join('') + '</tr>'; });
      return html + '</tbody></table>';
    }
    let md = '| ' + headers.join(' | ') + ' |\n';
    md += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
    rows.forEach(row => { md += '| ' + row.join(' | ') + ' |\n'; });
    return md;
  };

  lines.push(h1(brandName));
  lines.push(h2('Brand Guidelines & Visual Identity'));
  lines.push(p('Version 1.0'));
  if (d.tagline) lines.push(p(`<em>${d.tagline}</em>`));
  lines.push(hr());

  // Foundation
  lines.push(h1('01 /// BRAND FOUNDATION'));
  lines.push(h2('Brand Overview'));
  lines.push(b('Brand Name', brandName));
  if (d.tagline) lines.push(b('Tagline', d.tagline));
  if (d.mission) lines.push(b('Mission Statement', d.mission));
  if (d.vision) lines.push(b('Vision Statement', d.vision));
  if (d.coreValues?.length) { lines.push(b('Core Values', '')); lines.push(ul(d.coreValues)); }
  if (d.targetAudience) lines.push(b('Target Audience', d.targetAudience));
  if (d.brandPersonality?.length) { lines.push(b('Brand Personality', d.brandPersonality.join(', '))); }
  lines.push(hr());

  // Colors
  lines.push(h1('02 /// THE COLOR SYSTEM'));
  if (d.colorPhilosophy) lines.push(p(`<em>${d.colorPhilosophy}</em>`));
  if (d.primaryColors?.length) {
    lines.push(h3('Primary Colors'));
    lines.push(table(['Color Name', 'Hex Code', 'Role'], d.primaryColors.map(c => [c.name, c.hex, c.role])));
  }
  if (d.secondaryColors?.length) {
    lines.push(h3('Secondary Colors'));
    lines.push(table(['Color Name', 'Hex Code', 'Role'], d.secondaryColors.map(c => [c.name, c.hex, c.role])));
  }
  lines.push(h3('Color Ratio'));
  lines.push(table(['Color', 'Percentage', 'Usage'], [
    ['Background', `${d.colorRatioBackground || 80}%`, 'Backgrounds, large surfaces'],
    ['Text / UI', `${d.colorRatioText || 15}%`, 'Text, borders, UI elements'],
    ['Accent', `${d.colorRatioAccent || 5}%`, 'CTAs, highlights, key moments'],
  ]));
  if (d.colorPrinciple) lines.push(bq(d.colorPrinciple));
  lines.push(hr());

  // Typography
  lines.push(h1('04 /// TYPOGRAPHY'));
  if (d.primaryFont) {
    lines.push(h3(`Primary Typeface — ${d.primaryFont}`));
    if (d.primaryFontDesc) lines.push(p(`<em>${d.primaryFontDesc}</em>`));
    if (d.primaryFontWeight) lines.push(b('Font Weight(s)', d.primaryFontWeight));
  }
  if (d.secondaryFont) {
    lines.push(h3(`Secondary Typeface — ${d.secondaryFont}`));
    if (d.secondaryFontDesc) lines.push(p(`<em>${d.secondaryFontDesc}</em>`));
    if (d.secondaryFontWeight) lines.push(b('Font Weight(s)', d.secondaryFontWeight));
  }
  if (d.monoFont) lines.push(b('Monospace / Technical Font', d.monoFont));
  if (d.fontPairingNotes) lines.push(bq(d.fontPairingNotes));
  lines.push(hr());

  // Logo
  lines.push(h1('05 /// LOGO USAGE'));
  if (d.logoVariants?.length) { lines.push(h3('Logo Variants')); lines.push(ul(d.logoVariants)); }
  if (d.logoClearSpace) lines.push(b('Clear Space', d.logoClearSpace));
  if (d.logoMinDigital) lines.push(b('Minimum Digital Size', d.logoMinDigital));
  if (d.logoMinPrint) lines.push(b('Minimum Print Size', d.logoMinPrint));
  if (d.logoDonts?.length) { lines.push(h3("Logo Don'ts")); lines.push(ul(d.logoDonts)); }
  lines.push(hr());

  // Photography
  lines.push(h1('12 /// PHOTOGRAPHY & IMAGERY'));
  if (d.photoMood) lines.push(b('Mood', d.photoMood));
  if (d.photoColorTreatment) lines.push(b('Color Treatment', d.photoColorTreatment));
  if (d.photoSubjects?.length) { lines.push(b('Subject Matter', '')); lines.push(ul(d.photoSubjects)); }
  if (d.iconStyle) lines.push(b('Icon Style', d.iconStyle));
  if (d.iconLibrary) lines.push(b('Icon Library', d.iconLibrary));
  lines.push(hr());

  // UI Components
  lines.push(h1('06 /// BUTTON SYSTEM'));
  if (d.primaryCTALabel) lines.push(b('Primary CTA Label', d.primaryCTALabel));
  if (d.primaryCTAStyle) lines.push(b('Primary CTA Style', d.primaryCTAStyle));
  if (d.secondaryCTALabel) lines.push(b('Secondary Button Label', d.secondaryCTALabel));
  if (d.secondaryCTAStyle) lines.push(b('Secondary Button Style', d.secondaryCTAStyle));
  lines.push(hr());

  // Cards & Nav
  lines.push(h1('07–08 /// CARDS & NAVIGATION'));
  if (d.cardStyle) lines.push(b('Standard Card Style', d.cardStyle));
  if (d.navStyle) lines.push(b('Navigation Style', d.navStyle));
  if (d.mobileNavStyle) lines.push(b('Mobile Navigation', d.mobileNavStyle));
  lines.push(hr());

  // Layout
  lines.push(h1('11 /// GRID SYSTEM & LAYOUT'));
  if (d.gridColumns) lines.push(b('Columns', d.gridColumns));
  if (d.gridGutter) lines.push(b('Gutter', d.gridGutter));
  if (d.gridMaxWidth) lines.push(b('Max Width', d.gridMaxWidth));
  lines.push(hr());

  // Effects
  lines.push(h1('10 /// VISUAL EFFECTS'));
  if (d.glassSubtle) lines.push(b('Glass — Subtle', d.glassSubtle));
  if (d.glassMedium) lines.push(b('Glass — Medium', d.glassMedium));
  if (d.glassStrong) lines.push(b('Glass — Strong', d.glassStrong));
  if (d.gradients) lines.push(b('Gradients', d.gradients));
  if (d.animations) lines.push(b('Animations', d.animations));
  lines.push(hr());

  // Do's & Don'ts
  lines.push(h1("14 /// DO'S & DON'TS"));
  if (d.brandDos?.length) { lines.push(h2('Do ✓')); lines.push(ul(d.brandDos)); }
  if (d.brandDonts?.length) { lines.push(h2("Don't ✗")); lines.push(ul(d.brandDonts)); }
  lines.push(hr());

  // Core Principle
  if (d.corePrinciple) {
    lines.push(h1('/// CORE PRINCIPLE'));
    lines.push(bq(d.corePrinciple));
    lines.push(hr());
  }

  lines.push(p(`<strong>${brandName} BRAND GUIDELINES v1.0</strong>`));

  return format === 'html'
    ? lines.join('\n')
    : lines.join('\n\n');
}

function generateVoiceDoc(format) {
  const d = state.voice.data;
  const brandName = state.guidelines.data.brandName || '[YOUR BRAND NAME]';

  const lines = [];
  const h1 = (t) => format === 'html' ? `<h1>${t}</h1>` : `# ${t}`;
  const h2 = (t) => format === 'html' ? `<h2>${t}</h2>` : `## ${t}`;
  const h3 = (t) => format === 'html' ? `<h3>${t}</h3>` : `### ${t}`;
  const p = (t) => format === 'html' ? `<p>${t}</p>` : t;
  const b = (label, val) => format === 'html' ? `<p><strong>${label}:</strong> ${val}</p>` : `**${label}:** ${val}`;
  const hr = () => format === 'html' ? '<hr>' : '\n---\n';
  const bq = (t) => format === 'html' ? `<blockquote>${t}</blockquote>` : `> ${t}`;
  const ul = (items) => {
    if (!items || !items.length) return '';
    return format === 'html'
      ? '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>'
      : items.map(i => `- ${i}`).join('\n');
  };
  const table = (headers, rows) => {
    if (format === 'html') {
      let html = '<table><thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
      rows.forEach(row => { html += '<tr>' + row.map(c => `<td>${c}</td>`).join('') + '</tr>'; });
      return html + '</tbody></table>';
    }
    let md = '| ' + headers.join(' | ') + ' |\n';
    md += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
    rows.forEach(row => { md += '| ' + row.join(' | ') + ' |\n'; });
    return md;
  };

  lines.push(h1(brandName));
  lines.push(h2('Brand Voice & Messaging Framework'));
  lines.push(p('Version 1.0'));
  lines.push(hr());

  // Voice DNA
  lines.push(h1('01 /// BRAND VOICE DNA'));
  if (d.brandPersona) { lines.push(b('If your brand were a person', '')); lines.push(p(d.brandPersona)); }
  if (d.voiceSummary) { lines.push(b('One-sentence voice summary', '')); lines.push(bq(d.voiceSummary)); }

  // Pillars
  const pillars = [
    { name: d.pillar1Name, means: d.pillar1Means, sounds: d.pillar1SoundsLike, doesnt: d.pillar1DoesntSound },
    { name: d.pillar2Name, means: d.pillar2Means, sounds: d.pillar2SoundsLike, doesnt: d.pillar2DoesntSound },
    { name: d.pillar3Name, means: d.pillar3Means, sounds: d.pillar3SoundsLike, doesnt: d.pillar3DoesntSound },
  ].filter(p => p.name);

  if (pillars.length) {
    lines.push(h2('Voice Pillars'));
    pillars.forEach((pil, i) => {
      lines.push(h3(`Pillar ${i + 1} — ${pil.name}`));
      if (pil.means) lines.push(b('What it means', pil.means));
      if (pil.sounds) lines.push(b('Sounds like', `"${pil.sounds}"`));
      if (pil.doesnt) lines.push(b("Doesn't sound like", `"${pil.doesnt}"`));
    });
  }
  lines.push(hr());

  // Voice Meter
  lines.push(h1('02 /// VOICE ATTRIBUTES'));
  const meters = [
    { label: 'Formal ↔ Casual', val: d.meterFormal },
    { label: 'Serious ↔ Playful', val: d.meterSerious },
    { label: 'Reserved ↔ Bold', val: d.meterReserved },
    { label: 'Technical ↔ Simple', val: d.meterTechnical },
    { label: 'Corporate ↔ Conversational', val: d.meterCorporate },
  ];
  const meterRows = meters.map(m => {
    const v = m.val || 3;
    const dots = [1,2,3,4,5].map(i => i === v ? '[X]' : '[ ]').join(' ');
    return [m.label, dots];
  });
  lines.push(table(['Spectrum', 'Position'], meterRows));

  if (d.emotionPrimary) lines.push(b('Primary emotion', d.emotionPrimary));
  if (d.emotionSecondary) lines.push(b('Secondary emotion', d.emotionSecondary));
  if (d.emotionUnderlying) lines.push(b('Underlying emotion', d.emotionUnderlying));
  lines.push(hr());

  // Tone
  lines.push(h1('03 /// TONE SPECTRUM'));
  const toneRows = [];
  if (d.toneLanding) toneRows.push(['Landing Page / Hero', d.toneLanding]);
  if (d.toneFeatures) toneRows.push(['Feature Descriptions', d.toneFeatures]);
  if (d.toneBlog) toneRows.push(['Blog / Educational', d.toneBlog]);
  if (d.toneEmail) toneRows.push(['Email', d.toneEmail]);
  if (d.toneSocial) toneRows.push(['Social Media', d.toneSocial]);
  if (d.toneSupport) toneRows.push(['Support / Onboarding', d.toneSupport]);
  if (toneRows.length) lines.push(table(['Context', 'Tone & Example'], toneRows));
  lines.push(hr());

  // Messaging
  lines.push(h1('04 /// MESSAGING ARCHITECTURE'));
  if (d.brandPromise) { lines.push(h3('Brand Promise')); lines.push(bq(d.brandPromise)); }
  const vps = [d.valueProp1, d.valueProp2, d.valueProp3].filter(Boolean);
  if (vps.length) { lines.push(h3('Value Propositions')); lines.push(ul(vps)); }
  if (d.proofPoints?.length) { lines.push(h3('Proof Points')); lines.push(ul(d.proofPoints)); }
  if (d.differentiators?.length) { lines.push(h3('Differentiators')); lines.push(ul(d.differentiators)); }
  lines.push(hr());

  // Audience
  lines.push(h1('05 /// AUDIENCE-SPECIFIC MESSAGING'));
  const segments = [
    { name: d.segment1Name, who: d.segment1Who, pain: d.segment1Pain, msg: d.segment1Message },
    { name: d.segment2Name, who: d.segment2Who, pain: d.segment2Pain, msg: d.segment2Message },
  ].filter(s => s.name);
  segments.forEach((seg, i) => {
    lines.push(h3(`Segment ${i + 1} — ${seg.name}`));
    if (seg.who) lines.push(b('Who they are', seg.who));
    if (seg.pain) lines.push(b('Biggest pain', seg.pain));
    if (seg.msg) lines.push(b('Key message', `"${seg.msg}"`));
  });
  lines.push(hr());

  // Channels
  lines.push(h1('06 /// CHANNEL GUIDELINES'));
  if (d.channelWebsite) lines.push(b('Website / Landing Pages', d.channelWebsite));
  if (d.channelEmail) lines.push(b('Email', d.channelEmail));
  if (d.channelSocial) lines.push(b('Social Media', d.channelSocial));
  if (d.channelAds) lines.push(b('Ads', d.channelAds));
  lines.push(hr());

  // Language
  lines.push(h1('07 /// VOCABULARY & LANGUAGE'));
  if (d.powerWords?.length) { lines.push(h3('Power Words')); lines.push(ul(d.powerWords)); }
  if (d.bannedWords?.length) { lines.push(h3('Banned Words')); lines.push(ul(d.bannedWords)); }
  if (d.namingProducts) lines.push(b('Product Naming', d.namingProducts));
  if (d.namingServices) lines.push(b('Service Naming', d.namingServices));
  lines.push(hr());

  // Headlines & CTAs
  lines.push(h1('08–09 /// HEADLINES & CTAs'));
  if (d.headlineFormulas?.length) { lines.push(h3('Headline Formulas')); lines.push(ul(d.headlineFormulas)); }
  if (d.primaryCTAs?.length) { lines.push(h3('Primary CTAs')); lines.push(ul(d.primaryCTAs)); }
  if (d.secondaryCTAs?.length) { lines.push(h3('Secondary CTAs')); lines.push(ul(d.secondaryCTAs)); }
  if (d.ctaRules?.length) { lines.push(h3('CTA Rules')); lines.push(ul(d.ctaRules)); }
  lines.push(hr());

  // Story
  lines.push(h1('12 /// STORYTELLING FRAMEWORK'));
  if (d.storyProblem) { lines.push(h3('The Problem')); lines.push(p(d.storyProblem)); }
  if (d.storyTurning) { lines.push(h3('The Turning Point')); lines.push(p(d.storyTurning)); }
  if (d.storySolution) { lines.push(h3('The Solution')); lines.push(p(d.storySolution)); }
  if (d.storyProof) { lines.push(h3('The Proof')); lines.push(p(d.storyProof)); }
  if (d.storyVision) { lines.push(h3('The Vision')); lines.push(p(d.storyVision)); }
  lines.push(hr());

  // Voice Rules
  lines.push(h1("13 /// VOICE DO'S & DON'TS"));
  if (d.voiceDos?.length) { lines.push(h2('Do ✓')); lines.push(ul(d.voiceDos)); }
  if (d.voiceDonts?.length) { lines.push(h2("Don't ✗")); lines.push(ul(d.voiceDonts)); }
  lines.push(hr());

  if (d.coreVoicePrinciple) {
    lines.push(h1('/// CORE VOICE PRINCIPLE'));
    lines.push(bq(d.coreVoicePrinciple));
    lines.push(hr());
  }

  lines.push(p(`<strong>${brandName} BRAND VOICE FRAMEWORK v1.0</strong>`));

  return format === 'html'
    ? lines.join('\n')
    : lines.join('\n\n');
}


function generateArchetypeDoc(format) {
  const d = state.archetype.data;
  const brandName = state.guidelines.data.brandName || '[YOUR BRAND NAME]';

  const lines = [];
  const h1 = (t) => format === 'html' ? `<h1>${t}</h1>` : `# ${t}`;
  const h2 = (t) => format === 'html' ? `<h2>${t}</h2>` : `## ${t}`;
  const h3 = (t) => format === 'html' ? `<h3>${t}</h3>` : `### ${t}`;
  const p = (t) => format === 'html' ? `<p>${t}</p>` : t;
  const b = (label, val) => format === 'html' ? `<p><strong>${label}:</strong> ${val}</p>` : `**${label}:** ${val}`;
  const hr = () => format === 'html' ? '<hr>' : '\n---\n';
  const bq = (t) => format === 'html' ? `<blockquote>${t}</blockquote>` : `> ${t}`;
  const ul = (items) => {
    if (!items || !items.length) return '';
    return format === 'html'
      ? '<ul>' + items.map(i => `<li>${i}</li>`).join('') + '</ul>'
      : items.map(i => `- ${i}`).join('\n');
  };
  const table = (headers, rows) => {
    if (format === 'html') {
      let html = '<table><thead><tr>' + headers.map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
      rows.forEach(row => { html += '<tr>' + row.map(c => `<td>${c}</td>`).join('') + '</tr>'; });
      return html + '</tbody></table>';
    }
    let md = '| ' + headers.join(' | ') + ' |\n';
    md += '| ' + headers.map(() => '---').join(' | ') + ' |\n';
    rows.forEach(row => { md += '| ' + row.join(' | ') + ' |\n'; });
    return md;
  };

  lines.push(h1(brandName));
  lines.push(h2('Brand Archetype & Personality System'));
  lines.push(p('Version 1.0'));
  lines.push(hr());

  // Discovery
  lines.push(h1('01–02 /// ARCHETYPE DISCOVERY'));
  if (d.coreDrive) lines.push(b('Core Drive', d.coreDrive));
  if (d.customerEmotion) { lines.push(b('Customer emotion after working with you', '')); lines.push(p(d.customerEmotion)); }
  if (d.customerEmotionArchetype) lines.push(b('Maps to', d.customerEmotionArchetype));
  if (d.worldLoses) { lines.push(b('If brand disappeared, world loses', '')); lines.push(p(d.worldLoses)); }
  if (d.worldLosesArchetype) lines.push(b('Maps to', d.worldLosesArchetype));
  if (d.proudestFeedback) { lines.push(b('Proudest customer feedback', '')); lines.push(p(d.proudestFeedback)); }
  if (d.proudestArchetype) lines.push(b('Maps to', d.proudestArchetype));
  if (d.brandAnger) { lines.push(b('What pisses your brand off', '')); lines.push(p(d.brandAnger)); }
  if (d.angerArchetype) lines.push(b('Maps to', d.angerArchetype));

  lines.push(h3('Discovery Summary'));
  const summaryRows = [];
  if (d.primaryArchetype) summaryRows.push(['Primary Archetype', `**${d.primaryArchetype}**`]);
  if (d.secondaryArchetype) summaryRows.push(['Secondary Archetype', `**${d.secondaryArchetype}**`]);
  if (summaryRows.length) lines.push(table(['Dimension', 'Result'], summaryRows));
  lines.push(hr());

  // Primary Deep Dive
  lines.push(h1('03 /// PRIMARY ARCHETYPE DEEP DIVE'));
  if (d.primaryArchetype) lines.push(h2(`Your Primary Archetype: ${d.primaryArchetype}`));
  const coreRows = [];
  if (d.primaryCoreDesire) coreRows.push(['Core Desire', d.primaryCoreDesire]);
  if (d.primaryBrandPromise) coreRows.push(['Brand Promise', d.primaryBrandPromise]);
  if (d.primaryGreatestFear) coreRows.push(['Greatest Fear', d.primaryGreatestFear]);
  if (d.primaryStrategy) coreRows.push(['Strategy', d.primaryStrategy]);
  if (d.primaryGift) coreRows.push(['Gift to the World', d.primaryGift]);
  if (coreRows.length) lines.push(table(['Dimension', 'Your Brand'], coreRows));
  if (d.primaryInBuild) { lines.push(b('In what we build', '')); lines.push(bq(d.primaryInBuild)); }
  if (d.primaryInSell) { lines.push(b('In how we sell', '')); lines.push(bq(d.primaryInSell)); }
  if (d.primaryInComms) { lines.push(b('In how we communicate', '')); lines.push(bq(d.primaryInComms)); }
  if (d.primaryMaturity) lines.push(b('Maturity Level', d.primaryMaturity));
  if (d.maturityNextLevel) lines.push(b('What gets us to the next level', d.maturityNextLevel));
  lines.push(hr());

  // Secondary
  lines.push(h1('04 /// SECONDARY ARCHETYPE'));
  if (d.secondaryArchetype) lines.push(h2(`Your Secondary Archetype: ${d.secondaryArchetype}`));
  if (d.secondaryWhyNot) { lines.push(b('Why this is secondary, not primary', '')); lines.push(bq(d.secondaryWhyNot)); }
  if (d.blendMarketing || d.blendSales) {
    lines.push(h3('How It Blends'));
    const blendRows = [];
    if (d.blendMarketing || d.blendMarketingSec) blendRows.push(['Marketing', d.blendMarketing || '', d.blendMarketingSec || '']);
    if (d.blendSales || d.blendSalesSec) blendRows.push(['Sales', d.blendSales || '', d.blendSalesSec || '']);
    if (blendRows.length) lines.push(table(['Situation', 'Primary Shows Up As...', 'Secondary Shows Up As...'], blendRows));
  }
  if (d.blendRatioPrimary !== undefined) {
    const secPct = 100 - (d.blendRatioPrimary || 70);
    lines.push(b('Blend Ratio', `Primary ${d.blendRatioPrimary || 70}% / Secondary ${secPct}%`));
  }
  if (d.blendDescription) lines.push(bq(d.blendDescription));
  lines.push(hr());

  // Shadow
  lines.push(h1('05 /// SHADOW ARCHETYPE'));
  if (d.primaryShadowName) lines.push(h3(`Primary Shadow: ${d.primaryShadowName}`));
  if (d.primaryShadowManifest) lines.push(bq(d.primaryShadowManifest));
  const warnRows = [];
  if (d.shadowWarning1) warnRows.push([d.shadowWarning1, d.shadowCorrect1 || '']);
  if (d.shadowWarning2) warnRows.push([d.shadowWarning2, d.shadowCorrect2 || '']);
  if (warnRows.length) lines.push(table(['Warning Sign', 'How to Correct'], warnRows));
  if (d.secondaryShadowName) lines.push(h3(`Secondary Shadow: ${d.secondaryShadowName}`));
  if (d.secondaryShadowManifest) lines.push(bq(d.secondaryShadowManifest));
  lines.push(hr());

  // Tension
  lines.push(h1('06 /// ARCHETYPE BLEND & TENSION'));
  if (d.tensionDescription) { lines.push(h3('The Productive Tension')); lines.push(bq(d.tensionDescription)); }
  if (d.tensionBlend1Primary || d.tensionBlend1Secondary) {
    lines.push(table(
      ['Primary Says...', 'Secondary Says...', 'The Blend Sounds Like...'],
      [[d.tensionBlend1Primary || '', d.tensionBlend1Secondary || '', d.tensionBlend1Result || '']]
    ));
  }
  if (d.archetypesNotList?.length) { lines.push(h3('Archetypes We Are NOT')); lines.push(ul(d.archetypesNotList)); }
  lines.push(hr());

  // Personality Spectrum
  lines.push(h1('07 /// BRAND PERSONALITY SPECTRUM'));
  const spectrumSliders = [
    { label: 'Formal ↔ Casual', key: 'specFormalCasual' },
    { label: 'Serious ↔ Playful', key: 'specSeriousPlayful' },
    { label: 'Reserved ↔ Bold', key: 'specReservedBold' },
    { label: 'Humble ↔ Proud', key: 'specHumbleProud' },
    { label: 'Understated ↔ Dramatic', key: 'specUnderstatedDramatic' },
    { label: 'Technical ↔ Simple', key: 'specTechnicalSimple' },
    { label: 'Abstract ↔ Concrete', key: 'specAbstractConcrete' },
    { label: 'Data-driven ↔ Story-driven', key: 'specDataStory' },
    { label: 'Calm ↔ Intense', key: 'specCalmIntense' },
    { label: 'Patient ↔ Urgent', key: 'specPatientUrgent' },
    { label: 'Warm ↔ Cool', key: 'specWarmCool' },
  ];
  const specRows = spectrumSliders.map(s => {
    const v = d[s.key] || 3;
    const dots = [1,2,3,4,5].map(i => i === v ? '[X]' : '[ ]').join(' ');
    return [s.label, dots];
  });
  lines.push(table(['Spectrum', 'Position'], specRows));
  lines.push(hr());

  // Character Profile
  lines.push(h1('08 /// CHARACTER PROFILE'));
  if (d.charName) lines.push(h2(`Brand Character: ${d.charName}`));
  const charRows = [];
  if (d.charAge) charRows.push(['Age Range', d.charAge]);
  if (d.charEnergy) charRows.push(['Energy', d.charEnergy]);
  if (d.charPresence) charRows.push(['Presence in a Room', d.charPresence]);
  if (d.charStrength) charRows.push(['Greatest Strength', d.charStrength]);
  if (d.charFlaw) charRows.push(['Greatest Flaw', d.charFlaw]);
  if (d.charValues) charRows.push(['Values Most', d.charValues]);
  if (d.charCantStand) charRows.push(["Can't Stand", d.charCantStand]);
  if (d.charTrust) charRows.push(['How They Earn Trust', d.charTrust]);
  if (charRows.length) lines.push(table(['Dimension', 'Answer'], charRows));
  lines.push(hr());

  // Emotional Mapping
  lines.push(h1('09 /// EMOTIONAL MAPPING'));
  if (d.emotionAwareness) lines.push(b('Awareness Stage', d.emotionAwareness));
  if (d.emotionConsideration) lines.push(b('Consideration Stage', d.emotionConsideration));
  if (d.emotionOnboarding) lines.push(b('Onboarding Stage', d.emotionOnboarding));
  if (d.emotionOngoing) lines.push(b('Ongoing Stage', d.emotionOngoing));
  if (d.definingEmotion) { lines.push(h3('The One Emotion That Defines Us')); lines.push(bq(d.definingEmotion)); }
  lines.push(hr());

  // Voice & Language
  lines.push(h1('10 /// ARCHETYPE IN VOICE & LANGUAGE'));
  if (d.voiceRules?.length) { lines.push(h3('How Your Archetype Speaks')); lines.push(ul(d.voiceRules)); }
  if (d.powerPhrases?.length) { lines.push(h3('Power Phrases')); lines.push(ul(d.powerPhrases)); }
  if (d.antiArchetypeLanguage?.length) { lines.push(h3('Language to Avoid')); lines.push(ul(d.antiArchetypeLanguage)); }
  lines.push(hr());

  // Visual Identity
  lines.push(h1('11 /// ARCHETYPE IN VISUAL IDENTITY'));
  if (d.colorPsychology?.length) { lines.push(h3('Color Psychology')); lines.push(ul(d.colorPsychology)); }
  if (d.visualMotifsUse?.length) { lines.push(h3('Visual Motifs to Use')); lines.push(ul(d.visualMotifsUse)); }
  if (d.visualMotifsAvoid?.length) { lines.push(h3('Visual Motifs to Avoid')); lines.push(ul(d.visualMotifsAvoid)); }
  lines.push(hr());

  // Customer Experience & Culture
  lines.push(h1('12–14 /// CUSTOMER EXPERIENCE & CULTURE'));
  if (d.firstImpressionDemand) { lines.push(h3('First Impression')); lines.push(bq(d.firstImpressionDemand)); }
  if (d.hiringWeDo?.length) { lines.push(h3('We Hire People Who Are...')); lines.push(ul(d.hiringWeDo)); }
  if (d.hiringWeDont?.length) { lines.push(h3("We Don't Hire People Who Are...")); lines.push(ul(d.hiringWeDont)); }
  if (d.decisionFramework) { lines.push(h3('Decision Framework')); lines.push(bq(d.decisionFramework)); }
  lines.push(hr());

  // Do's & Don'ts
  lines.push(h1("15 /// ARCHETYPE DO'S & DON'TS"));
  if (d.archetypeDos?.length) { lines.push(h2('Do ✓')); lines.push(ul(d.archetypeDos)); }
  if (d.archetypeDonts?.length) { lines.push(h2("Don't ✗")); lines.push(ul(d.archetypeDonts)); }
  lines.push(hr());

  // Core Principle
  if (d.coreArchetypePrinciple) {
    lines.push(h1('/// CORE ARCHETYPE PRINCIPLE'));
    lines.push(bq(d.coreArchetypePrinciple));
    lines.push(hr());
  }

  // Quick Reference
  lines.push(h1('/// QUICK REFERENCE CARD'));
  const refRows = [];
  if (d.primaryArchetype) refRows.push(['Primary Archetype', d.primaryArchetype]);
  if (d.secondaryArchetype) refRows.push(['Secondary Archetype', d.secondaryArchetype]);
  if (d.charName) refRows.push(['Brand Character', d.charName]);
  if (d.definingEmotion) refRows.push(['Core Emotion', d.definingEmotion.substring(0, 80) + (d.definingEmotion.length > 80 ? '...' : '')]);
  if (refRows.length) lines.push(table(['Dimension', 'Answer'], refRows));

  lines.push(p(`<strong>${brandName} BRAND ARCHETYPE SYSTEM v1.0</strong>`));

  return format === 'html'
    ? lines.join('\n')
    : lines.join('\n\n');
}


// ─── Preview ────────────────────────────────────────────
function updatePreview() {
  collectAllData();
  const content = document.getElementById('previewContent');
  const type = state.activePreview;

  let html;
  if (type === 'guidelines') html = generateGuidelinesDoc('html');
  else if (type === 'voice') html = generateVoiceDoc('html');
  else html = generateArchetypeDoc('html');

  if (html.trim()) {
    content.innerHTML = html;
    content.classList.remove('preview-empty');
  } else {
    content.innerHTML = '<p class="preview-empty">Fill out the forms above to see your brand documents here.</p>';
  }
}


// ─── Export Functions ───────────────────────────────────
function generateDoc(type, format) {
  if (type === 'guidelines') return generateGuidelinesDoc(format);
  if (type === 'voice') return generateVoiceDoc(format);
  return generateArchetypeDoc(format);
}

function fileLabel(type) {
  if (type === 'guidelines') return 'Brand_Guidelines';
  if (type === 'voice') return 'Brand_Voice';
  return 'Brand_Archetype';
}

function exportPDF(type) {
  collectAllData();
  const html = generateDoc(type, 'html');

  const brandName = state.guidelines.data.brandName || 'Brand';
  const container = document.getElementById('exportContainer');
  container.innerHTML = `<div class="export-doc">${html}</div>`;
  container.style.position = 'absolute';
  container.style.left = '-9999px';

  const opt = {
    margin: [12, 12, 12, 12],
    filename: `${brandName}_${fileLabel(type)}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  showToast('Generating PDF...', 'success');

  html2pdf().set(opt).from(container.firstChild).save().then(() => {
    showToast('PDF downloaded!', 'success');
    container.innerHTML = '';
  }).catch(() => {
    showToast('PDF generation failed. Try copying to clipboard instead.', 'error');
  });
}

function exportDoc(type) {
  collectAllData();
  const html = generateDoc(type, 'html');

  const brandName = state.guidelines.data.brandName || 'Brand';
  const filename = `${brandName}_${fileLabel(type)}.doc`;

  const fullHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
    <head><meta charset="utf-8"><title>${filename}</title>
    <style>
      body { font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 40px; }
      h1 { font-size: 24px; font-weight: 800; margin: 28px 0 8px; padding-bottom: 6px; border-bottom: 2px solid #e5e5e5; }
      h2 { font-size: 18px; font-weight: 700; margin: 20px 0 6px; color: #6b21a8; }
      h3 { font-size: 15px; font-weight: 600; margin: 14px 0 4px; }
      p { margin-bottom: 6px; }
      table { width: 100%; border-collapse: collapse; margin: 10px 0; }
      th, td { padding: 6px 10px; text-align: left; border: 1px solid #e5e5e5; font-size: 12px; }
      th { background: #f5f5f5; font-weight: 600; }
      ul { padding-left: 20px; }
      li { margin-bottom: 3px; }
      blockquote { border-left: 3px solid #a855f7; padding: 6px 14px; margin: 10px 0; color: #555; font-style: italic; }
      hr { border: none; border-top: 1px solid #e5e5e5; margin: 20px 0; }
    </style></head>
    <body>${html}</body></html>`;

  const blob = new Blob([fullHtml], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Document downloaded! Open in Google Docs or Word.', 'success');
}

function exportMarkdown(type) {
  collectAllData();
  const md = generateDoc(type, 'md');

  const brandName = state.guidelines.data.brandName || 'Brand';
  const filename = `${brandName}_${fileLabel(type)}.md`;

  const blob = new Blob([md], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Markdown file downloaded!', 'success');
}

function copyToClipboard() {
  collectAllData();
  const type = state.activePreview;
  const md = generateDoc(type, 'md');

  navigator.clipboard.writeText(md).then(() => {
    showToast('Copied to clipboard! Paste into Google Docs.', 'success');
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = md;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied to clipboard!', 'success');
  });
}


// ─── Toast ──────────────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => { toast.className = 'toast'; }, 3000);
}


// ─── Utility ────────────────────────────────────────────
function escHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


// ─── Event Listeners & Init ─────────────────────────────
function init() {
  loadState();

  // Render wizards
  renderWizard(guidelinesSchema, 'guidelines');
  renderWizard(voiceSchema, 'voice');
  renderWizard(archetypeSchema, 'archetype');

  // Generic wizard nav wiring
  const wizards = [
    { id: 'guidelines', schema: guidelinesSchema },
    { id: 'voice', schema: voiceSchema },
    { id: 'archetype', schema: archetypeSchema },
  ];

  wizards.forEach(({ id, schema }) => {
    document.getElementById(`${id}Next`).addEventListener('click', () => {
      const step = state[id].currentStep;
      if (step < schema.length - 1) {
        goToStep(id, step + 1);
      } else {
        collectFormData(id);
        document.getElementById('export').scrollIntoView({ behavior: 'smooth' });
        state.activePreview = id;
        updatePreview();
      }
    });

    document.getElementById(`${id}Prev`).addEventListener('click', () => {
      goToStep(id, state[id].currentStep - 1);
    });
  });

  // Step label clicks
  document.addEventListener('click', (e) => {
    const label = e.target.closest('.wizard-step-label');
    if (label) {
      const wizardId = label.dataset.wizard;
      const step = parseInt(label.dataset.step);
      goToStep(wizardId, step);
    }
  });

  // Auto-save on input change
  document.addEventListener('input', (e) => {
    const el = e.target;

    // Range value display
    if (el.type === 'range' && el.dataset.field) {
      const display = document.getElementById(`rv_${el.dataset.field}`);
      if (display) display.textContent = el.value;
    }

    // Color picker sync
    if (el.type === 'color' && el.classList.contains('form-color-input')) {
      const hexInput = el.closest('.form-color-group')?.querySelector('.color-hex');
      if (hexInput) hexInput.value = el.value;
    }
    if (el.classList.contains('color-hex')) {
      const colorInput = el.closest('.form-color-group')?.querySelector('.form-color-input');
      if (colorInput && /^#[0-9a-fA-F]{6}$/.test(el.value)) {
        colorInput.value = el.value;
      }
    }

    // Debounced auto-save
    clearTimeout(window._saveTimeout);
    window._saveTimeout = setTimeout(() => {
      collectAllData();
    }, 500);
  });

  // Auto-save on select change
  document.addEventListener('change', (e) => {
    if (e.target.classList.contains('form-select')) {
      clearTimeout(window._saveTimeout);
      window._saveTimeout = setTimeout(() => { collectAllData(); }, 500);
    }
  });

  // Preview tabs
  document.querySelectorAll('.preview-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activePreview = tab.dataset.preview;
      updatePreview();
    });
  });

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Nav scroll effect
  let lastScroll = 0;
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      nav.style.opacity = scrollTop > lastScroll && scrollTop > 300 ? '0.3' : '1';
    } else {
      nav.style.opacity = '1';
    }
    lastScroll = scrollTop;
  }, { passive: true });

  // Scroll reveal animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.section-header, .wizard, .export-card, .preview-wrapper').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav
        if (navLinks) navLinks.classList.remove('open');
      }
    });
  });

  // Update preview when scrolling to export section
  const exportObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updatePreview();
      }
    });
  }, { threshold: 0.1 });

  const exportSection = document.getElementById('export');
  if (exportSection) exportObserver.observe(exportSection);
}

// Start
document.addEventListener('DOMContentLoaded', init);
