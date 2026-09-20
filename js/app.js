(() => {
  'use strict';

  /* ---------- tiny icon set ---------- */
  const ICONS = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    circle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/></svg>',
    grip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"/><path d="M19 11a7 7 0 0 1-14 0"/><path d="M12 18v3"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></svg>',
    call: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.2 2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L7.1 8.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.4l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7.5-.4l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    dot: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="4"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    repeat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" width="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 4 1.5 5.5 2 6.5H4c.5-1 2-2.5 2-6.5Z"/><path d="M9.5 18a2.5 2.5 0 0 0 5 0"/></svg>',
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4-6 4Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    archive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M10 13h4"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/></svg>',
    undo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h9a5 5 0 0 1 0 10h-2"/><path d="M7 6 3 10l4 4"/></svg>',
  };

  const TASK_ICON = { call: ICONS.call, link: ICONS.link, calendar: ICONS.calendar, plain: ICONS.dot };

  const TYPE_META = {
    task: { icon: ICONS.circle, label: 'Task' },
    reminder: { icon: ICONS.bell, label: 'Reminder' },
    event: { icon: ICONS.calendar, label: 'Event' },
    note: { icon: ICONS.note, label: 'Note' },
    saved: { icon: ICONS.bookmark, label: 'Saved for later' },
    recurring: { icon: ICONS.repeat, label: 'Recurring' },
  };
  const ALL_TYPES = ['task', 'reminder', 'event', 'note', 'saved', 'recurring'];

  /* ---------- state ---------- */
  const nextId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

  /* ---------- persistence (saved in this browser only) ---------- */
  const STORAGE = {
    tasks: 'daybase:tasks',
    topThree: 'daybase:topThree',
    todayStats: 'daybase:todayStats',
    savedForLater: 'daybase:savedForLater',
    customEvents: 'daybase:customEvents',
    recurring: 'daybase:recurring',
    found: 'daybase:found',
  };

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* storage unavailable (private mode, etc.) — app still works, just won't remember */
    }
  }

  const DEFAULT_TOP_THREE = [
    { id: nextId(), title: 'Reply to Sarah about the Henderson proposal', subtitle: "She's waiting on your go-ahead" },
    { id: nextId(), title: 'Finish the Q3 budget deck', subtitle: "Due before Monday's review" },
    { id: nextId(), title: 'Pick up dry cleaning before 6 PM', subtitle: 'Regal Dry Cleaners closes at 6' },
  ];

  const DEFAULT_TASKS = [
    { id: nextId(), title: 'Review the client proposal doc', category: 'work', icon: 'link', due: 'Today', done: false },
    { id: nextId(), title: "Call the vet about Bramble's check-up", category: 'home', icon: 'call', due: 'Tomorrow', done: false },
    { id: nextId(), title: 'Book flights for the Lisbon trip', category: 'work', icon: 'calendar', due: 'This week', done: false },
    { id: nextId(), title: 'Pick up dry cleaning', category: 'today', icon: 'plain', due: 'Today', done: false },
    { id: nextId(), title: 'Renew car insurance', category: 'home', icon: 'plain', due: 'Overdue', warn: true, done: false },
  ];

  const DEFAULT_SAVED_FOR_LATER = [
    { id: nextId(), title: 'Compare energy tariffs', isNote: false },
    { id: nextId(), title: 'Easy weeknight dinners', isNote: false },
  ];

  const DEFAULT_RECURRING = [
    { title: 'Bins out', freq: 'Every Wednesday' },
    { title: 'Water the plants', freq: 'Every Sunday' },
  ];

  /* Found: things captured throughout the day that haven't been decided on yet.
     `category` drives which of the three groups a still-active item sits in;
     `suggestion` is the one contextual action Daybase offers (only where a real
     action exists to take — creating a task, adding to the calendar, or saving). */
  const DEFAULT_FOUND = [
    { id: nextId(), source: 'email', title: 'High Street Dental confirmed your appointment', body: 'Reply requested to confirm your 2 PM slot today.', category: 'action', suggestion: { action: 'task', label: 'Create task' }, status: 'new' },
    { id: nextId(), source: 'voice', title: "Don't forget mum's birthday next week", body: 'Captured as a voice note, Tuesday 8:14 AM.', category: 'action', suggestion: { action: 'event', label: 'Add to calendar' }, due: 'Next week', status: 'new' },
    { id: nextId(), source: 'calendar', title: 'Team sync and the Lisbon call both start at 3 PM Thursday', body: 'Two events overlap — worth resolving before Thursday.', category: 'action', suggestion: { action: 'task', label: 'Create task' }, status: 'new' },
    { id: nextId(), source: 'link', title: 'Article: "How to run a calmer Monday standup"', body: 'Saved from Safari — worth a proper read when there’s time.', category: 'keep', suggestion: { action: 'save', label: 'Save' }, status: 'new' },
    { id: nextId(), source: 'note', title: 'Idea: a weekend trip to the Lake District', body: 'Jotted down after a chat with Sam — nothing planned yet.', category: 'dismiss', suggestion: null, status: 'new' },
  ];

  const state = {
    topThree: loadJSON(STORAGE.topThree, DEFAULT_TOP_THREE),
    found: loadJSON(STORAGE.found, DEFAULT_FOUND),
    tasks: loadJSON(STORAGE.tasks, DEFAULT_TASKS),
    recurring: loadJSON(STORAGE.recurring, DEFAULT_RECURRING),
    savedForLater: loadJSON(STORAGE.savedForLater, DEFAULT_SAVED_FOR_LATER),
    customEvents: loadJSON(STORAGE.customEvents, []),
    filters: { category: 'all', source: 'all', search: '' },
    dayIndex: 0,
    theme: localStorage.getItem('daybase:theme') || 'classic',
    accent: localStorage.getItem('daybase:accent') || 'classic',
    todayStats: null,
  };

  /* today's real calendar commitments — the single source of truth for both
     the Today timeline and the Calendar view's "Today" agenda */
  const TODAY_EVENTS = [
    { time: '2:00PM', duration: '1 hour', untilLabel: 'In 2 hours', title: 'Dentist', location: 'High Street Dental', directionsLabel: 'Directions' },
    { time: '5:30PM', duration: 'Before 6 PM', untilLabel: 'Closes at 6 PM', title: 'Pick up dry cleaning', location: 'Regal Dry Cleaners', directionsLabel: 'Get directions' },
  ];

  const THEMES = [
    { key: 'classic', kicker: 'TODAY', heading: 'Good morning.', name: 'CLASSIC', tagline: 'Quiet luxury.' },
    { key: 'midnight', kicker: 'TODAY', heading: 'After hours.', name: 'MIDNIGHT', tagline: 'After hours.' },
    { key: 'editorial', kicker: 'THE DAILY EDIT', heading: 'Good morning.', name: 'EDITORIAL', tagline: 'Cleanly considered.' },
    { key: 'velvet', kicker: 'TODAY', heading: 'Your evening.', name: 'VELVET', tagline: 'Boldly understated.' },
    { key: 'essential', kicker: 'TODAY', heading: 'GOOD MORNING.', name: 'ESSENTIAL', tagline: 'Nothing unnecessary.' },
  ];

  const ONBOARDING_STEPS = [
    { title: 'Welcome to Daybase', copy: 'One calm place for everything that needs your attention.' },
    { title: 'Nothing slips through', copy: 'Daybase reads what matters and turns it into a clear plan — you decide what happens next.' },
    { title: 'Ready when you are', copy: "Connect your calendar and inbox any time. Let's get your day started." },
  ];

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  let toastTimer = null;
  function showToast(message) {
    const toast = $('#toast');
    $('#toast-message').textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function setActiveView(name) {
    $$('.view-panel').forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === name));
    $$('.desktop-nav button[data-view], .bottom-nav button[data-view]').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.view === name);
    });
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  $$('[data-view]').forEach((el) => {
    el.addEventListener('click', () => setActiveView(el.dataset.view));
  });

  /* =====================================================================
     NATURAL-LANGUAGE CAPTURE PARSER

     Deterministic, transparent, entirely client-side. No AI or external
     service is involved — this is a fixed set of regex/keyword rules that
     look for explicit cues (a time, a weekday, "remember to…", "every…")
     and strip them out of the typed text to build a clean title. Where a
     phrase gives no strong signal either way (a date with no verb and no
     other cue), confidence is marked 'low' so the UI can offer a couple
     of alternate readings instead of silently guessing.
     ===================================================================== */
  const TASK_VERBS =
    /^(call|email|text|message|buy|get|pick up|book|pay|clean|finish|review|send|write|read|renew|water|cancel|schedule|order|fix|return|drop off|walk|feed|collect|submit|file|chase|confirm|cook|pack|print|update|prepare|organi[sz]e|check|find|research|plan)\b/i;

  const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  function capWord(s) {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  function formatClockTime(hour, minutes, period) {
    const min = minutes ? minutes.slice(1) : '00';
    if (!period) return `${parseInt(hour, 10)}:${min}`;
    let h = parseInt(hour, 10);
    if (h === 0) h = 12;
    if (h > 12) h -= 12;
    return `${h}:${min} ${period.toUpperCase()}`;
  }

  function parseCapture(raw) {
    let title = raw.trim();
    let due = null;
    let time = null;
    let recurring = null;

    const take = (regex) => {
      const lower = title.toLowerCase();
      const found = lower.match(regex);
      if (!found) return null;
      const idx = lower.indexOf(found[0]);
      title = (title.slice(0, idx) + title.slice(idx + found[0].length)).replace(/\s{2,}/g, ' ').trim();
      return found;
    };

    let m;
    const weekdayPattern = WEEKDAYS.join('|');
    if ((m = take(new RegExp(`\\bevery\\s+(${weekdayPattern})\\b`)))) {
      recurring = `Every ${capWord(m[1])}`;
    } else if ((m = take(/\bevery\s+(day|week|month|year)\b/))) {
      recurring = `Every ${m[1]}`;
    } else if ((m = take(/\b(daily|weekly|monthly|yearly)\b/))) {
      recurring = { daily: 'Every day', weekly: 'Every week', monthly: 'Every month', yearly: 'Every year' }[m[1]];
    }

    let reminderCue = false;
    let savedCue = false;
    if (/^(remember to|remind me to|don't forget to|dont forget to)\b/i.test(title)) {
      reminderCue = true;
      title = title.replace(/^(remember to|remind me to|don't forget to|dont forget to)\s*/i, '').trim();
    } else if (/^(look at this later|read this later|read later|check this out later|save this for later|save for later)\b/i.test(title)) {
      savedCue = true;
    }

    if ((m = take(/\bat\s+(\d{1,2})(:\d{2})?\s*(am|pm)?\b/))) {
      time = formatClockTime(m[1], m[2], m[3]);
    } else if ((m = take(/\b(\d{1,2})(:\d{2})?\s*(am|pm)\b/))) {
      time = formatClockTime(m[1], m[2], m[3]);
    }

    if ((m = take(/\btoday\b/))) due = 'Today';
    else if ((m = take(/\btomorrow\b/))) due = 'Tomorrow';
    else if ((m = take(/\bnext week\b/))) due = 'Next week';
    else if ((m = take(/\bnext month\b/))) due = 'Next month';
    else if ((m = take(new RegExp(`\\bnext\\s+(${weekdayPattern})\\b`)))) due = `Next ${capWord(m[1])}`;
    else if ((m = take(new RegExp(`\\b(${weekdayPattern})\\b`)))) due = capWord(m[1]);

    title = title.replace(/\s{2,}/g, ' ').replace(/^[\s,.\-]+|[\s,.\-]+$/g, '').trim();
    if (savedCue || !title) title = raw.trim();
    title = title.charAt(0).toUpperCase() + title.slice(1);

    let type;
    let confidence = 'high';
    let altTypes = [];
    const hasVerb = TASK_VERBS.test(title);

    if (recurring) {
      type = 'recurring';
    } else if (reminderCue) {
      type = 'reminder';
    } else if (savedCue) {
      type = 'saved';
    } else if (time) {
      type = 'event';
    } else if (hasVerb) {
      type = 'task';
    } else if (due) {
      type = 'note';
      confidence = 'low';
      altTypes = ['event', 'task'];
    } else {
      type = 'note';
    }

    return { title, type, due, time, recurring, confidence, altTypes };
  }

  /* ---------- today: derived views over the real task/event data ---------- */
  function getTodaysTasks() {
    return state.tasks.filter((t) => t.category === 'today' || t.due === 'Today');
  }

  function getOverdueTasks() {
    return state.tasks.filter((t) => !t.done && t.warn);
  }

  function getUpcomingTasks() {
    return state.tasks.filter((t) => !t.done && !t.warn && t.category !== 'today' && t.due !== 'Today').slice(0, 3);
  }

  function todayKey() {
    return new Date().toDateString();
  }

  function ensureTodayStats() {
    const key = todayKey();
    const saved = loadJSON(STORAGE.todayStats, null);
    if (saved && saved.date === key) return saved;
    const fresh = {
      date: key,
      total: state.topThree.length + getTodaysTasks().filter((t) => !t.done).length,
      done: 0,
    };
    saveJSON(STORAGE.todayStats, fresh);
    return fresh;
  }

  function bumpTodayDone(delta) {
    if (!state.todayStats) return;
    state.todayStats.done = Math.max(0, Math.min(state.todayStats.total, state.todayStats.done + delta));
    saveJSON(STORAGE.todayStats, state.todayStats);
    renderProgressStrip();
  }

  function growTodayTotal(delta) {
    if (!state.todayStats) return;
    state.todayStats.total = Math.max(0, state.todayStats.total + delta);
    saveJSON(STORAGE.todayStats, state.todayStats);
    renderProgressStrip();
  }

  /* ---------- greeting, date and adaptive subtitle ---------- */
  function formatEyebrowDate(d) {
    const weekday = d.toLocaleDateString(undefined, { weekday: 'long' }).toUpperCase();
    const month = d.toLocaleDateString(undefined, { month: 'long' }).toUpperCase();
    return `TODAY · ${weekday}, ${d.getDate()} ${month}`;
  }

  function renderGreeting() {
    const now = new Date();
    const hour = now.getHours();
    const greetingWord = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    $('#today-eyebrow').textContent = formatEyebrowDate(now);
    $('#today-greeting').textContent = `${greetingWord}, Jamie.`;

    const overdue = getOverdueTasks().length;
    const openToday = getTodaysTasks().filter((t) => !t.done).length;
    const eventsToday = getEventsForDay(0).length;
    const openTasks = openToday + state.topThree.length;
    const totalLoad = openTasks + eventsToday;
    const hasDoneSomething = state.todayStats && state.todayStats.done > 0;

    let subtitle;
    if (overdue > 0) {
      subtitle = `${overdue} thing${overdue > 1 ? 's' : ''} slipped through — worth a look first.`;
    } else if (openTasks === 0 && eventsToday === 0 && hasDoneSomething) {
      subtitle = "You're all caught up for today.";
    } else if (openTasks === 0 && eventsToday === 0) {
      subtitle = 'Nothing on the books today. Enjoy the space.';
    } else if (openTasks === 0 && hasDoneSomething) {
      subtitle = 'Your to-dos are clear — just your calendar left today.';
    } else if (totalLoad >= 6) {
      subtitle = "It's a full day — here's where to start.";
    } else {
      subtitle = "Here's what needs your attention.";
    }
    $('#today-subtitle').textContent = subtitle;
  }

  function renderProgressStrip() {
    const el = $('#today-progress');
    const stats = state.todayStats;
    if (!stats || stats.total <= 0) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    const pct = Math.max(0, Math.min(100, Math.round((stats.done / stats.total) * 100)));
    $('#today-progress-label').textContent = `${stats.done} of ${stats.total} done today`;
    $('#today-progress-bar').style.width = `${pct}%`;
  }

  /* ---------- top three ---------- */
  function renderTopThree() {
    const list = $('#top-three-list');
    list.innerHTML = '';
    if (!state.topThree.length) {
      list.innerHTML = `<div class="calm-empty">${ICONS.sparkle}<strong>All clear</strong><span>Nothing needs to be in your top three right now.</span></div>`;
      return;
    }
    state.topThree.forEach((item, i) => {
      const row = document.createElement('div');
      row.className = 'top-item';
      row.dataset.id = item.id;
      row.innerHTML = `
        <button class="task-check" type="button" data-id="${item.id}" aria-label="Complete">${ICONS.circle}</button>
        <span class="top-number">${String(i + 1).padStart(2, '0')}</span>
        <div><strong>${item.title}</strong><small>${item.subtitle}</small></div>
        <button class="drag-handle" type="button" aria-label="Reorder">${ICONS.grip}</button>`;
      row.querySelector('.task-check').addEventListener('click', () => completeTopThree(item.id));
      list.appendChild(row);
    });
  }

  function completeTopThree(id) {
    const idx = state.topThree.findIndex((t) => t.id === id);
    if (idx === -1) return;
    const row = $(`.top-item[data-id="${id}"]`);
    if (row) {
      row.classList.add('completing');
      const checkBtn = row.querySelector('.task-check');
      if (checkBtn) checkBtn.innerHTML = ICONS.check;
    }
    bumpTodayDone(1);
    showToast('Nice work — one less thing.');
    setTimeout(() => {
      const idx2 = state.topThree.findIndex((t) => t.id === id);
      if (idx2 !== -1) state.topThree.splice(idx2, 1);
      saveJSON(STORAGE.topThree, state.topThree);
      renderTopThree();
      renderGreeting();
    }, 420);
  }

  $('#top-three-change').addEventListener('click', () => showToast('Choosing your own priorities is coming soon'));

  /* ---------- found ---------- */
  const SOURCE_ICON = { email: ICONS.mail, voice: ICONS.mic, calendar: ICONS.calendar, link: ICONS.link, note: ICONS.note };
  const FOUND_GROUPS = [
    { key: 'action', title: 'Needs your attention' },
    { key: 'keep', title: 'Worth keeping' },
    { key: 'dismiss', title: "Might not need to stay" },
  ];

  function getFoundActive() {
    return state.found.filter((f) => f.status !== 'archived');
  }
  function getFoundArchived() {
    return state.found.filter((f) => f.status === 'archived');
  }

  function renderTodayFound() {
    const active = getFoundActive();
    const label = $('#today-found-count-label');
    if (label) label.textContent = `DAYBASE FOUND ${active.length} THING${active.length === 1 ? '' : 'S'}`;
    const list = $('#today-found-list');
    list.innerHTML = '';
    if (!active.length) {
      list.innerHTML = `<div class="calm-empty">${ICONS.sparkle}<strong>All clear</strong><span>Nothing waiting in Found right now.</span></div>`;
      return;
    }
    active.slice(0, 3).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'found-row';
      row.innerHTML = `
        <span class="source-icon">${SOURCE_ICON[item.source] || ICONS.dot}</span>
        <div><strong>${item.title}</strong><small>${item.body}</small></div>
        <button type="button">Review</button>`;
      row.querySelector('button').addEventListener('click', () => {
        setActiveView('found');
        showToast('Opening in Found');
      });
      list.appendChild(row);
    });
  }

  function buildFoundRow(item) {
    const archived = item.status === 'archived';
    const row = document.createElement('div');
    row.className = 'found-row' + (archived ? ' is-archived' : '');
    row.dataset.id = item.id;
    const suggestBtn = !archived && item.suggestion
      ? `<button type="button" class="found-suggest-btn" data-action="${item.suggestion.action}">${item.suggestion.label}</button>`
      : '';
    const secondaryBtns = archived
      ? `<button type="button" class="found-icon-btn" data-action="restore" aria-label="Restore" title="Restore">${ICONS.undo}</button>
         <button type="button" class="found-icon-btn" data-action="delete" aria-label="Delete" title="Delete">${ICONS.trash}</button>`
      : `<button type="button" class="found-icon-btn" data-action="archive" aria-label="Archive" title="Archive">${ICONS.archive}</button>
         <button type="button" class="found-icon-btn" data-action="delete" aria-label="Delete" title="Delete">${ICONS.trash}</button>`;
    row.innerHTML = `
      <span class="source-icon">${SOURCE_ICON[item.source] || ICONS.dot}</span>
      <div><strong>${item.title}</strong><small>${archived ? (item.resolution || 'Archived') : item.body}</small></div>
      <div class="found-row-actions">${suggestBtn}${secondaryBtns}</div>`;
    $$('button[data-action]', row).forEach((btn) => {
      btn.addEventListener('click', () => actOnFound(item, btn.dataset.action));
    });
    return row;
  }

  function actOnFound(item, action) {
    switch (action) {
      case 'task':
        addTask(item.title, { category: item.due === 'Today' ? 'today' : 'general', due: item.due || 'No date' });
        setFoundStatus(item.id, 'archived', 'Added as a task');
        showToast('Added as a task');
        break;
      case 'event':
        addCustomEvent({ title: item.title, due: item.due || 'Today' });
        setFoundStatus(item.id, 'archived', 'Added to your calendar');
        showToast('Added to your calendar');
        break;
      case 'save':
        addSavedItem(item.title);
        setFoundStatus(item.id, 'archived', 'Saved for later');
        showToast('Saved for later');
        break;
      case 'archive':
        setFoundStatus(item.id, 'archived', 'Archived');
        showToast('Archived');
        break;
      case 'restore':
        setFoundStatus(item.id, 'new', null);
        showToast('Restored');
        break;
      case 'delete':
        deleteFoundItem(item.id);
        showToast('Deleted');
        break;
    }
  }

  function setFoundStatus(id, status, resolution) {
    const item = state.found.find((f) => f.id === id);
    if (!item) return;
    item.status = status;
    item.resolution = resolution;
    saveJSON(STORAGE.found, state.found);
    renderFoundView();
    renderTodayFound();
    renderFoundBadges();
  }

  function deleteFoundItem(id) {
    state.found = state.found.filter((f) => f.id !== id);
    saveJSON(STORAGE.found, state.found);
    renderFoundView();
    renderTodayFound();
    renderFoundBadges();
  }

  function renderFoundBadges() {
    const n = getFoundActive().length;
    const label = n ? String(n) : '';
    const navBadge = $('#nav-found-badge');
    if (navBadge) navBadge.textContent = label;
    const bottomBadge = $('#bottom-found-badge');
    if (bottomBadge) bottomBadge.textContent = label;
  }

  function renderFoundView() {
    const active = getFoundActive();
    const archived = getFoundArchived();
    $('#found-count').textContent = `${active.length} waiting`;

    const groupsEl = $('#found-groups');
    if (!active.length) {
      groupsEl.innerHTML = `<div class="calm-empty large">${ICONS.sparkle}<strong>${archived.length ? 'All clear' : 'Nothing here yet'}</strong><span>${archived.length ? 'Nothing waiting to be sorted right now.' : 'Save a link, jot a voice note, or type something above — it lands here first.'}</span></div>`;
    } else {
      groupsEl.innerHTML = '';
      FOUND_GROUPS.forEach((g) => {
        const items = active.filter((f) => f.category === g.key);
        if (!items.length) return;
        const group = document.createElement('div');
        group.className = 'found-group';
        group.innerHTML = `<div class="list-heading"><h2>${g.title}</h2><span>${items.length}</span></div>`;
        const list = document.createElement('div');
        list.className = 'found-list';
        items.forEach((item) => list.appendChild(buildFoundRow(item)));
        group.appendChild(list);
        groupsEl.appendChild(group);
      });
    }

    const toggle = $('#found-archived-toggle');
    const archivedList = $('#found-archived-list');
    if (!archived.length) {
      toggle.hidden = true;
      archivedList.hidden = true;
      archivedList.innerHTML = '';
    } else {
      toggle.hidden = false;
      $('#found-archived-toggle-label').textContent = `Archived (${archived.length})`;
      if (!archivedList.hidden) {
        archivedList.innerHTML = '';
        archived.forEach((item) => archivedList.appendChild(buildFoundRow(item)));
      }
    }
  }

  $('#found-archived-toggle').addEventListener('click', () => {
    $('#found-archived-list').hidden = !$('#found-archived-list').hidden;
    renderFoundView();
  });

  $('#connect-outlook').addEventListener('click', () => {
    showToast("Outlook connection coming soon — add things manually for now.");
  });

  /* ---------- tasks ---------- */
  function buildTaskRow(task) {
    const row = document.createElement('div');
    row.className = 'task-row' + (task.done ? ' done' : '');
    const kindClass = task.kind === 'reminder' ? 'reminder' : task.kind === 'recurring' ? 'recurring' : task.icon !== 'plain' ? task.icon : '';
    const leadingIcon = task.done
      ? ICONS.check
      : task.kind === 'reminder'
      ? ICONS.bell
      : task.kind === 'recurring'
      ? ICONS.repeat
      : TASK_ICON[task.icon] || ICONS.dot;
    const showAction = !task.done && task.icon !== 'plain' && !task.kind;
    row.innerHTML = `
      <button class="task-icon ${kindClass}" type="button" data-id="${task.id}" aria-label="Toggle done">
        ${leadingIcon}
      </button>
      <div class="task-copy">
        <strong>${task.title}</strong>
        <span>
          ${task.warn && !task.done ? `<em>${task.due}</em>` : task.due ? `<b>${task.due}</b>` : ''}
        </span>
      </div>
      ${showAction ? `<button class="task-action" type="button" data-action="${task.icon}" aria-label="Quick action">${TASK_ICON[task.icon]}</button>` : ''}
      <button class="task-more" type="button" aria-label="More">${ICONS.more}</button>`;

    row.querySelector('.task-icon').addEventListener('click', () => toggleTaskDone(task.id));
    const actionBtn = row.querySelector('.task-action');
    if (actionBtn) {
      actionBtn.addEventListener('click', () => {
        const messages = { call: 'Calling…', link: 'Opening link…', calendar: 'Added to calendar' };
        showToast(messages[task.icon] || 'Done');
      });
    }
    row.querySelector('.task-more').addEventListener('click', () => showToast('More options coming soon'));
    return row;
  }

  function renderTasks() {
    const list = $('#task-list');
    list.innerHTML = '';
    const { category, search } = state.filters;
    const visible = state.tasks.filter((t) => {
      if (category !== 'all' && t.category !== category) return false;
      if (search && !t.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    if (!visible.length) {
      list.innerHTML = `<div class="calm-empty">${ICONS.sparkle}<strong>Nothing here</strong><span>Try a different filter or add a task above.</span></div>`;
    } else {
      visible.forEach((task) => list.appendChild(buildTaskRow(task)));
    }

    $('#task-open-count').textContent = `${state.tasks.filter((t) => !t.done).length} open`;
  }

  function renderTodayTasks() {
    const list = $('#today-tasks-list');
    const items = getTodaysTasks();
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = `<div class="calm-empty">${ICONS.sparkle}<strong>Nothing else today</strong><span>Add something above, or enjoy the space.</span></div>`;
    } else {
      items.forEach((task) => list.appendChild(buildTaskRow(task)));
    }
    $('#today-tasks-count').textContent = `${items.filter((t) => !t.done).length} open`;
  }

  function getUpcomingEvents() {
    return state.customEvents.filter((e) => resolveDueToDayIndex(e.due) === null);
  }

  function renderUpcoming() {
    const block = $('#upcoming-block');
    const taskItems = getUpcomingTasks().map((t) => ({ id: t.id, title: t.title, due: t.due, icon: TASK_ICON[t.icon] || ICONS.dot, kind: 'task' }));
    const eventItems = getUpcomingEvents().map((e) => ({ id: e.id, title: e.title, due: e.due, icon: ICONS.calendar, kind: 'event' }));
    const items = [...taskItems, ...eventItems];
    if (!items.length) {
      block.hidden = true;
      return;
    }
    block.hidden = false;
    const list = $('#upcoming-list');
    list.innerHTML = items
      .map(
        (it) => `
      <button type="button" class="recurring-row" data-id="${it.id}" data-kind="${it.kind}">
        ${it.icon}
        <span><strong>${it.title}</strong><small>${it.due}</small></span>
      </button>`
      )
      .join('');
    $$('.recurring-row', list).forEach((row) => {
      row.addEventListener('click', () => setActiveView(row.dataset.kind === 'event' ? 'calendar' : 'tasks'));
    });
  }

  function toggleTaskDone(id) {
    const task = state.tasks.find((t) => t.id === id);
    if (!task) return;
    task.done = !task.done;
    saveJSON(STORAGE.tasks, state.tasks);
    const isToday = task.category === 'today' || task.due === 'Today';
    if (isToday) bumpTodayDone(task.done ? 1 : -1);
    renderTasks();
    renderTodayTasks();
    renderUpcoming();
    renderGreeting();
    if (task.done) showToast('Nice — marked done.');
  }

  function addTask(title, { category = 'general', due = null, kind = null } = {}) {
    if (!title.trim()) return null;
    const task = { id: nextId(), title: title.trim(), category, icon: 'plain', due, done: false };
    if (kind) task.kind = kind;
    state.tasks.unshift(task);
    saveJSON(STORAGE.tasks, state.tasks);
    if (task.category === 'today' || task.due === 'Today') growTodayTotal(1);
    renderTasks();
    renderTodayTasks();
    renderUpcoming();
    renderGreeting();
    return task;
  }

  function addCustomEvent({ title, due, time }) {
    const ev = { id: nextId(), title, due: due || 'Today', time: time || null };
    state.customEvents.unshift(ev);
    saveJSON(STORAGE.customEvents, state.customEvents);
    renderTodayTimeline();
    renderAgenda();
    renderUpcoming();
    renderGreeting();
    return ev;
  }

  function addSavedItem(title, { isNote = false } = {}) {
    const item = { id: nextId(), title, isNote };
    state.savedForLater.unshift(item);
    saveJSON(STORAGE.savedForLater, state.savedForLater);
    renderSavedForLater();
    return item;
  }

  function renderSavedForLater() {
    const list = $('#saved-for-later-list');
    if (!list) return;
    if (!state.savedForLater.length) {
      list.innerHTML = `<p class="aside-empty">Nothing saved yet.</p>`;
      return;
    }
    list.innerHTML = state.savedForLater
      .map((item) => `<a href="#" data-id="${item.id}">${item.title} ${ICONS.chevronRight}</a>`)
      .join('');
    $$('#saved-for-later-list a').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Opening saved items is coming soon');
      });
    });
  }

  /* ---------- turning a parsed capture into something real ---------- */
  function commitCapture(parsed, type) {
    let landedMessage;
    switch (type) {
      case 'recurring': {
        const due = parsed.due || null;
        addTask(parsed.title, { category: due === 'Today' ? 'today' : 'general', due, kind: 'recurring' });
        state.recurring.unshift({ title: parsed.title, freq: parsed.recurring || 'Repeats' });
        saveJSON(STORAGE.recurring, state.recurring);
        renderRecurring();
        landedMessage = `Added as recurring — ${parsed.recurring || 'repeats'}`;
        break;
      }
      case 'reminder': {
        const due = parsed.due || 'No date';
        addTask(parsed.title, { category: due === 'Today' ? 'today' : 'general', due, kind: 'reminder' });
        landedMessage = 'Added as a reminder';
        break;
      }
      case 'event': {
        addCustomEvent({ title: parsed.title, due: parsed.due || 'Today', time: parsed.time });
        landedMessage = parsed.due && parsed.due !== 'Today' ? `Added to your calendar — ${parsed.due}` : 'Added to today’s calendar';
        break;
      }
      case 'saved': {
        addSavedItem(parsed.title);
        landedMessage = 'Saved for later';
        break;
      }
      case 'note': {
        addSavedItem(parsed.title, { isNote: true });
        landedMessage = 'Saved as a note';
        break;
      }
      default: {
        const due = parsed.due || 'No date';
        addTask(parsed.title, { category: due === 'Today' ? 'today' : 'general', due });
        landedMessage = parsed.due ? `Added to your tasks — ${parsed.due}` : 'Added to your tasks';
      }
    }
    return { type, landedMessage };
  }

  $$('#category-filters button').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#category-filters button').forEach((b) => b.classList.toggle('active', b === btn));
      state.filters.category = btn.dataset.category;
      renderTasks();
    });
  });

  $('#task-search').addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    renderTasks();
  });

  $('#task-options-toggle').addEventListener('click', () => {
    const panel = $('#task-options');
    panel.hidden = !panel.hidden;
    renderTaskComposerHint();
  });

  function renderTaskComposerHint() {
    const hintEl = $('#task-composer-hint');
    const input = $('#task-input');
    const optionsOpen = !$('#task-options').hidden;
    if (optionsOpen || !input.value.trim()) {
      hintEl.hidden = true;
      return;
    }
    const parsed = parseCapture(input.value);
    const meta = TYPE_META[parsed.type];
    const bits = [meta.label];
    if (parsed.due) bits.push(parsed.due);
    if (parsed.time) bits.push(parsed.time);
    if (parsed.recurring) bits.push(parsed.recurring);
    hintEl.hidden = false;
    hintEl.textContent = `Detected: ${bits.join(' · ')}`;
  }

  $('#task-input').addEventListener('input', renderTaskComposerHint);

  function submitTaskComposer() {
    const input = $('#task-input');
    if (!input.value.trim()) return;
    const optionsOpen = !$('#task-options').hidden;

    if (optionsOpen) {
      const due = $('#task-due').value;
      const category = $('#task-category').value === 'general' ? 'general' : $('#task-category').value;
      addTask(input.value, { category, due: due ? formatDueDate(due) : 'No date' });
      showToast('Task added');
    } else {
      const parsed = parseCapture(input.value);
      const result = commitCapture(parsed, parsed.type);
      showToast(result.landedMessage);
    }

    input.value = '';
    $('#task-due').value = '';
    renderTaskComposerHint();
  }

  function formatDueDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  }

  $('#task-submit').addEventListener('click', submitTaskComposer);
  $('#task-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitTaskComposer();
  });

  /* ---------- smart capture panel (Today) ---------- */
  let captureOverrideType = null;

  function renderCaptureChips(parsed, currentType) {
    const meta = TYPE_META[currentType];
    const parts = [`<button type="button" class="capture-chip capture-chip-type" id="capture-chip-type">${meta.icon}${meta.label}</button>`];
    if (parsed.due) parts.push(`<span class="capture-chip">${parsed.due}</span>`);
    if (parsed.time) parts.push(`<span class="capture-chip">${ICONS.clock}${parsed.time}</span>`);
    if (parsed.recurring) parts.push(`<span class="capture-chip">${parsed.recurring}</span>`);
    return parts.join('');
  }

  function renderCaptureAlt(parsed, currentType, forceShow) {
    const altEl = $('#capture-alt');
    const shouldShow = forceShow || parsed.confidence === 'low';
    if (!shouldShow) {
      altEl.hidden = true;
      altEl.innerHTML = '';
      return;
    }
    const pool = parsed.altTypes && parsed.altTypes.length ? parsed.altTypes : ALL_TYPES;
    const candidates = pool.filter((t) => t !== currentType).slice(0, 3);
    altEl.hidden = false;
    altEl.innerHTML =
      `<span class="capture-alt-label">Not quite — this is:</span>` +
      candidates.map((t) => `<button type="button" class="capture-alt-btn" data-type="${t}">${TYPE_META[t].icon}${TYPE_META[t].label}</button>`).join('');
    $$('.capture-alt-btn', altEl).forEach((btn) => {
      btn.addEventListener('click', () => {
        captureOverrideType = btn.dataset.type;
        updateCapturePreview();
        $('#quick-add-input').focus();
      });
    });
  }

  function updateCapturePreview() {
    const input = $('#quick-add-input');
    const value = input.value;
    const examplesEl = $('#capture-examples');
    const detectedEl = $('#capture-detected');

    if (!value.trim()) {
      examplesEl.hidden = false;
      detectedEl.hidden = true;
      $('#capture-alt').hidden = true;
      return;
    }
    const parsed = parseCapture(value);
    const type = captureOverrideType || parsed.type;
    examplesEl.hidden = true;
    detectedEl.hidden = false;
    $('#capture-chips').innerHTML = renderCaptureChips(parsed, type);
    const typeChip = $('#capture-chip-type');
    if (typeChip) {
      typeChip.addEventListener('click', () => {
        const altEl = $('#capture-alt');
        renderCaptureAlt(parsed, type, altEl.hidden);
        $('#quick-add-input').focus();
      });
    }
    renderCaptureAlt(parsed, type, false);
  }

  function submitCapture() {
    const input = $('#quick-add-input');
    const value = input.value;
    if (!value.trim()) return;
    const parsed = parseCapture(value);
    const type = captureOverrideType || parsed.type;
    const result = commitCapture(parsed, type);

    $('#capture-detected').hidden = true;
    $('#capture-alt').hidden = true;
    $('#capture-done-label').textContent = result.landedMessage;
    $('#capture-done').hidden = false;

    input.value = '';
    captureOverrideType = null;

    setTimeout(() => {
      $('#capture-done').hidden = true;
      updateCapturePreview();
    }, 1100);
  }

  $('#quick-add-submit').addEventListener('click', submitCapture);
  $('#quick-add-input').addEventListener('input', () => {
    captureOverrideType = null;
    updateCapturePreview();
  });
  $('#quick-add-input').addEventListener('focus', () => {
    $('#capture-panel').hidden = false;
    updateCapturePreview();
  });
  $('#quick-add-input').addEventListener('blur', () => {
    setTimeout(() => {
      const active = document.activeElement;
      if (active === $('#quick-add-input')) return;
      if (active && active.closest && active.closest('#capture-panel')) return;
      $('#capture-panel').hidden = true;
    }, 120);
  });
  $('#quick-add-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitCapture();
    } else if (e.key === 'Escape') {
      const input = e.target;
      if (input.value) {
        input.value = '';
        captureOverrideType = null;
        updateCapturePreview();
      } else {
        input.blur();
      }
    }
  });
  $$('.capture-example').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = $('#quick-add-input');
      input.value = btn.textContent;
      input.focus();
      captureOverrideType = null;
      updateCapturePreview();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    const active = document.activeElement;
    const isTyping = active && /^(input|textarea|select)$/i.test(active.tagName);
    if (isTyping) return;
    e.preventDefault();
    setActiveView('today');
    const input = $('#quick-add-input');
    input.focus();
  });

  function renderRecurring() {
    const list = $('#recurring-list');
    if (!state.recurring.length) {
      list.innerHTML = `<p class="aside-empty">No recurring tasks yet.</p>`;
      return;
    }
    list.innerHTML = state.recurring
      .map(
        (r) => `
      <button type="button" class="recurring-row">
        ${ICONS.repeat}
        <span><strong>${r.title}</strong><small>${r.freq}</small></span>
      </button>`
      )
      .join('');
    $$('.recurring-row', list).forEach((row) => row.addEventListener('click', () => showToast('Recurring task details coming soon')));
  }

  $('#add-recurring').addEventListener('click', () => showToast('Recurring tasks coming soon'));

  /* ---------- calendar ---------- */
  const WEEKDAY_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const WEEKDAY_FULL = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  function buildDays() {
    const days = [];
    const base = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(base);
      d.setDate(base.getDate() + i);
      days.push(d);
    }
    return days;
  }
  const DAYS = buildDays();

  function resolveDueToDayIndex(due) {
    if (!due) return null;
    const d = due.toLowerCase();
    if (d === 'today') return 0;
    if (d === 'tomorrow') return 1;
    if (d.startsWith('next ')) return null;
    const target = WEEKDAY_FULL.indexOf(d);
    if (target === -1) return null;
    for (let i = 1; i < DAYS.length; i++) {
      if (DAYS[i].getDay() === target) return i;
    }
    return null;
  }

  function getEventsForDay(dayIndex) {
    const events = [];
    if (dayIndex === 0) events.push(...TODAY_EVENTS);
    state.customEvents.forEach((e) => {
      if (resolveDueToDayIndex(e.due) === dayIndex) events.push(e);
    });
    return events;
  }

  function renderDaySelector() {
    const wrap = $('#day-selector');
    wrap.innerHTML = DAYS.map((d, i) => `
      <button type="button" class="${i === state.dayIndex ? 'active' : ''}" data-index="${i}">
        <span>${i === 0 ? 'Today' : WEEKDAY_SHORT[d.getDay()]}</span>
        <b>${d.getDate()}</b>
      </button>`).join('');
    $$('#day-selector button').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.dayIndex = Number(btn.dataset.index);
        renderDaySelector();
        renderAgenda();
      });
    });
  }

  function renderTodayTimeline() {
    const list = $('#today-timeline-list');
    const events = getEventsForDay(0);
    const countEl = $('#today-events-count');
    if (countEl) countEl.textContent = `${events.length} commitment${events.length === 1 ? '' : 's'}`;
    if (!events.length) {
      list.innerHTML = `<div class="calm-empty">${ICONS.calendar}<strong>No commitments today</strong><span>Your calendar is clear.</span></div>`;
      return;
    }
    list.innerHTML = events
      .map(
        (ev) => `
      <div class="timeline-event">
        <time>${ev.time || ''}${ev.untilLabel ? `<span>${ev.untilLabel}</span>` : ''}</time>
        <div class="timeline-line"></div>
        <div>
          <strong>${ev.title}</strong>
          ${ev.location ? `<small>${ev.location}</small>` : ''}
          ${ev.directionsLabel ? `<a href="#">${ICONS.pin}${ev.directionsLabel}</a>` : ''}
        </div>
      </div>`
      )
      .join('');
  }

  function renderAgenda() {
    const isToday = state.dayIndex === 0;
    $('#agenda-day-title').textContent = isToday ? 'Today' : WEEKDAY_SHORT[DAYS[state.dayIndex].getDay()];
    const events = getEventsForDay(state.dayIndex);
    const list = $('#agenda-list');
    if (!events.length) {
      $('#agenda-count').textContent = '0 events';
      list.innerHTML = `<div class="calm-empty">${ICONS.calendar}<strong>Nothing scheduled</strong><span>Enjoy the space in your day.</span></div>`;
      return;
    }
    $('#agenda-count').textContent = `${events.length} event${events.length === 1 ? '' : 's'}`;
    list.innerHTML = events
      .map(
        (ev) => `
      <article>
        <time>${ev.time || ''}${ev.duration ? `<span>${ev.duration}</span>` : ''}</time>
        <div>
          <strong>${ev.title}</strong>
          ${ev.location ? `<small>${ev.location}</small>` : ''}
          ${ev.directionsLabel ? `<a href="#">${ICONS.pin}<span>${ev.directionsLabel}</span></a>` : ''}
        </div>
      </article>`
      )
      .join('');
  }

  $('.calendar-add').addEventListener('click', () => showToast('Add-to-calendar coming soon'));

  /* ---------- settings / appearance ---------- */
  function applyTheme(key, { persist = true, toast = false } = {}) {
    state.theme = key;
    document.documentElement.setAttribute('data-theme', key);
    if (persist) localStorage.setItem('daybase:theme', key);
    const meta = THEMES.find((t) => t.key === key);
    $('#appearance-summary').textContent = `${meta.name[0]}${meta.name.slice(1).toLowerCase()} · ${meta.tagline}`;
    $$('#theme-grid .theme-choice').forEach((btn) => btn.classList.toggle('selected', btn.dataset.theme === key));
    if (toast) showToast(`Switched to ${meta.name[0]}${meta.name.slice(1).toLowerCase()}`);
  }

  function applyAccent(key, { persist = true } = {}) {
    state.accent = key;
    document.documentElement.setAttribute('data-accent', key);
    if (persist) localStorage.setItem('daybase:accent', key);
    $$('#accent-options button').forEach((btn) => btn.classList.toggle('selected', btn.dataset.accent === key));
  }

  function renderThemeGrid() {
    const grid = $('#theme-grid');
    grid.innerHTML = THEMES.map((t) => `
      <button type="button" class="theme-choice" data-theme="${t.key}">
        <div class="theme-preview preview-${t.key}">
          <span class="mini-kicker">${t.kicker}</span>
          <b>${t.heading}</b>
          <i></i>
          <div class="mini-list"><em>01</em><strong>Finish presentation</strong></div>
          <div class="mini-list"><em>02</em><strong>Book grooming</strong></div>
        </div>
        <div class="theme-meta">
          <span><strong>${t.name}</strong><small>${t.tagline}</small></span>
          ${ICONS.check}
        </div>
      </button>`).join('');
    $$('.theme-choice', grid).forEach((btn) => btn.addEventListener('click', () => applyTheme(btn.dataset.theme, { toast: true })));
    applyTheme(state.theme, { persist: false });
  }

  $$('#accent-options button').forEach((btn) => btn.addEventListener('click', () => applyAccent(btn.dataset.accent)));

  /* ---------- voice / tell daybase ----------
     Uses the browser's real Web Speech API (SpeechRecognition) — there is no
     server or AI service involved. Whatever gets transcribed is run through
     the same deterministic parseCapture() used for typed input, so a voice
     capture lands exactly where typing the same words would. */
  const trigger = $('#voice-trigger');
  const voiceReview = $('#voice-review');
  const SpeechRecognitionImpl = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognizer = null;
  let voiceDrafts = [];

  function buildVoiceDraft(transcript) {
    return { id: nextId(), transcript, parsed: parseCapture(transcript) };
  }

  function startListening() {
    voiceReview.hidden = false;
    $('#voice-review-title').textContent = 'Tell Daybase';
    $('#voice-tasks').innerHTML = '';
    voiceDrafts = [];
    $('#voice-add-all').disabled = true;
    trigger.classList.add('listening');
    $('#voice-status').textContent = 'Requesting microphone access…';

    let micStream = null;
    let safetyTimer = null;

    function stopListeningUI() {
      clearTimeout(safetyTimer);
      trigger.classList.remove('listening');
      $('#voice-add-all').disabled = !voiceDrafts.length;
      if (micStream) {
        micStream.getTracks().forEach((track) => track.stop());
        micStream = null;
      }
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      $('#voice-status').textContent = "This browser can't access the microphone — try typing instead.";
      stopListeningUI();
      return;
    }

    // Explicitly ask for the microphone first. This is what actually shows
    // the browser's permission prompt and gives clear, standard error names
    // to react to — relying on SpeechRecognition to request it implicitly
    // was inconsistent across browsers and could fail without any prompt
    // ever appearing.
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        micStream = stream;
        $('#voice-status').textContent = 'Listening…';

        // Some browsers never fire result/error/end once recognition has
        // actually started (a broken implementation) — this guarantees the
        // UI always recovers instead of looking stuck forever.
        safetyTimer = setTimeout(() => {
          $('#voice-status').textContent = "Didn't hear anything — try again when you're ready.";
          if (recognizer) { try { recognizer.abort(); } catch { /* already stopped */ } }
          stopListeningUI();
        }, 8000);

        try {
          recognizer = new SpeechRecognitionImpl();
          recognizer.lang = document.documentElement.lang || 'en-US';
          recognizer.interimResults = false;
          recognizer.maxAlternatives = 1;

          recognizer.addEventListener('result', (e) => {
            const transcript = e.results[0][0].transcript.trim();
            if (transcript) {
              voiceDrafts = [buildVoiceDraft(transcript)];
              $('#voice-review-title').textContent = "Here's what I heard";
              $('#voice-status').textContent = "Here's what I heard:";
            } else {
              $('#voice-status').textContent = "Didn't catch that — try again.";
            }
            renderVoiceDrafts();
          });
          recognizer.addEventListener('error', (e) => {
            const messages = {
              'not-allowed': 'Microphone access was blocked — allow it in your browser settings to use voice capture.',
              'no-speech': "Didn't hear anything — try again when you're ready.",
              'audio-capture': 'No microphone was found on this device.',
              network: "Couldn't reach the speech service — check your connection and try again.",
            };
            $('#voice-status').textContent = messages[e.error] || "Voice capture couldn't start — try typing instead.";
            stopListeningUI();
          });
          recognizer.addEventListener('end', stopListeningUI);

          recognizer.start();
        } catch {
          $('#voice-status').textContent = "Voice capture couldn't start — try again.";
          stopListeningUI();
        }
      })
      .catch((err) => {
        const messages = {
          NotAllowedError: 'Microphone access was blocked — allow it in your browser settings to use voice capture.',
          NotFoundError: 'No microphone was found on this device.',
          NotReadableError: 'Your microphone is being used by another app.',
          SecurityError: "This page can't access the microphone here.",
        };
        $('#voice-status').textContent = messages[err.name] || "Couldn't access your microphone — try again.";
        stopListeningUI();
      });
  }

  trigger.addEventListener('click', () => {
    if (trigger.classList.contains('listening')) {
      if (recognizer) recognizer.stop();
      return;
    }
    if (!SpeechRecognitionImpl) {
      // A toast alone fades in ~2s and is easy to miss — Safari (desktop and
      // iOS) doesn't implement speech-to-text at all, so this needs to be a
      // message that sits still until the person reads it, not a flash.
      voiceReview.hidden = false;
      $('#voice-review-title').textContent = 'Tell Daybase';
      $('#voice-tasks').innerHTML = '';
      $('#voice-add-all').disabled = true;
      $('#voice-status').textContent = "Voice capture needs Chrome or Edge — Safari doesn't support it yet. Type your task instead.";
      return;
    }
    startListening();
  });

  function renderVoiceDrafts() {
    const wrap = $('#voice-tasks');
    if (!voiceDrafts.length) {
      wrap.innerHTML = `<p class="aside-empty">Nothing to add yet.</p>`;
      $('#voice-add-all').disabled = true;
      return;
    }
    wrap.innerHTML = voiceDrafts.map((d) => {
      const meta = TYPE_META[d.parsed.type];
      const details = [d.parsed.due, d.parsed.time, d.parsed.recurring].filter(Boolean).join(' · ');
      return `
      <div class="voice-draft" data-id="${d.id}">
        <span class="draft-check">${ICONS.check}</span>
        <div>
          <input type="text" value="${d.parsed.title}">
          <span><b>${meta.label}</b>${details ? `<em>${details}</em>` : ''}</span>
        </div>
        <button type="button" aria-label="Remove">${ICONS.close}</button>
      </div>`;
    }).join('');
    $$('.voice-draft', wrap).forEach((row) => {
      row.querySelector('input').addEventListener('input', (e) => {
        const draft = voiceDrafts.find((d) => d.id === row.dataset.id);
        if (draft) draft.parsed.title = e.target.value;
      });
      row.querySelector('button').addEventListener('click', () => {
        voiceDrafts = voiceDrafts.filter((d) => d.id !== row.dataset.id);
        renderVoiceDrafts();
      });
    });
    $('#voice-add-all').disabled = false;
  }

  $('#voice-add-all').addEventListener('click', () => {
    const count = voiceDrafts.length;
    voiceDrafts.forEach((d) => commitCapture(d.parsed, d.parsed.type));
    voiceDrafts = [];
    voiceReview.hidden = true;
    if (count) showToast(`Added ${count} thing${count === 1 ? '' : 's'} to your plan.`);
  });

  $('#voice-close').addEventListener('click', () => {
    if (recognizer) recognizer.stop();
    trigger.classList.remove('listening');
    voiceReview.hidden = true;
    voiceDrafts = [];
  });

  /* ---------- onboarding ---------- */
  let onboardingStep = 0;

  function renderOnboardingStep() {
    const step = ONBOARDING_STEPS[onboardingStep];
    $('#onboarding-title').textContent = step.title;
    $('#onboarding-copy').textContent = step.copy;
    $$('#onboarding-dots span').forEach((dot, i) => dot.classList.toggle('active', i === onboardingStep));
    $('#onboarding-next').textContent = onboardingStep === ONBOARDING_STEPS.length - 1 ? 'Get started' : 'Next';
  }

  function closeOnboarding() {
    $('#onboarding').hidden = true;
    localStorage.setItem('daybase:onboarded', '1');
  }

  $('#onboarding-next').addEventListener('click', () => {
    if (onboardingStep === ONBOARDING_STEPS.length - 1) {
      closeOnboarding();
      showToast('Welcome aboard!');
    } else {
      onboardingStep += 1;
      renderOnboardingStep();
    }
  });
  $('#onboarding-skip').addEventListener('click', closeOnboarding);

  /* ---------- init ---------- */
  function init() {
    state.todayStats = ensureTodayStats();

    renderGreeting();
    renderProgressStrip();
    renderTopThree();
    renderTodayTasks();
    renderTodayTimeline();
    renderUpcoming();
    renderTodayFound();
    renderFoundView();
    renderFoundBadges();
    renderTasks();
    renderRecurring();
    renderSavedForLater();
    renderDaySelector();
    renderAgenda();
    renderThemeGrid();
    applyAccent(state.accent, { persist: false });

    if (!localStorage.getItem('daybase:onboarded')) {
      renderOnboardingStep();
      $('#onboarding').hidden = false;
    }
  }

  init();
})();
