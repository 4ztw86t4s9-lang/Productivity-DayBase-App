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
  };

  const TASK_ICON = { call: ICONS.call, link: ICONS.link, calendar: ICONS.calendar, plain: ICONS.dot };

  /* ---------- state ---------- */
  let uid = 100;
  const nextId = () => String(++uid);

  const state = {
    topThree: [
      { id: nextId(), title: 'Reply to Sarah about the Henderson proposal', subtitle: "She's waiting on your go-ahead" },
      { id: nextId(), title: 'Finish the Q3 budget deck', subtitle: "Due before Monday's review" },
      { id: nextId(), title: 'Pick up dry cleaning before 6 PM', subtitle: 'Regal Dry Cleaners closes at 6' },
    ],
    found: [
      { id: nextId(), source: 'email', title: 'High Street Dental confirmed your appointment', body: 'Reply requested to confirm your 2 PM slot today.' },
      { id: nextId(), source: 'voice', title: "Voice note: “Don't forget mum's birthday next week”", body: 'Captured Tuesday at 8:14 AM · Suggested: add reminder' },
      { id: nextId(), source: 'calendar', title: 'Two events overlap on Thursday', body: 'Team sync and the Lisbon call both start at 3 PM' },
    ],
    tasks: [
      { id: nextId(), title: 'Review the client proposal doc', category: 'work', icon: 'link', due: 'Today', done: false },
      { id: nextId(), title: "Call the vet about Bramble's check-up", category: 'home', icon: 'call', due: 'Tomorrow', done: false },
      { id: nextId(), title: 'Book flights for the Lisbon trip', category: 'work', icon: 'calendar', due: 'This week', done: false },
      { id: nextId(), title: 'Pick up dry cleaning', category: 'today', icon: 'plain', due: 'Today', done: false },
      { id: nextId(), title: 'Renew car insurance', category: 'home', icon: 'plain', due: 'Overdue', warn: true, done: false },
    ],
    recurring: [
      { title: 'Bins out', freq: 'Every Wednesday' },
      { title: 'Water the plants', freq: 'Every Sunday' },
    ],
    filters: { category: 'all', source: 'all', search: '' },
    dayIndex: 0,
    theme: localStorage.getItem('daybase:theme') || 'classic',
    accent: localStorage.getItem('daybase:accent') || 'classic',
  };

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
    state.topThree.splice(idx, 1);
    renderTopThree();
    showToast('Nice work — one less thing.');
  }

  /* ---------- found ---------- */
  const SOURCE_ICON = { email: ICONS.mail, voice: ICONS.mic, calendar: ICONS.calendar };

  function renderTodayFound() {
    const list = $('#today-found-list');
    list.innerHTML = '';
    state.found.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'found-row';
      row.innerHTML = `
        <span class="source-icon">${SOURCE_ICON[item.source]}</span>
        <div><strong>${item.title}</strong><small>${item.body}</small></div>
        <button type="button">Review</button>`;
      row.querySelector('button').addEventListener('click', () => {
        setActiveView('found');
        showToast('Opening in Found');
      });
      list.appendChild(row);
    });
  }

  function renderFoundView() {
    $('#found-count').textContent = `${state.found.length} detected`;
  }

  $$('#source-pills button').forEach((btn) => {
    btn.addEventListener('click', () => {
      $$('#source-pills button').forEach((b) => b.classList.toggle('active', b === btn));
      state.filters.source = btn.dataset.source;
      showToast(btn.dataset.source === 'all' ? 'Showing everything' : `Filtering by ${btn.dataset.source}`);
    });
  });

  $('#connect-outlook').addEventListener('click', () => {
    showToast("Outlook connection coming soon — add things manually for now.");
  });

  /* ---------- tasks ---------- */
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
      visible.forEach((task) => {
        const row = document.createElement('div');
        row.className = 'task-row' + (task.done ? ' done' : '');
        const iconKey = task.done ? 'plain' : task.icon;
        const showAction = !task.done && task.icon !== 'plain';
        row.innerHTML = `
          <button class="task-icon ${task.icon !== 'plain' ? task.icon : ''}" type="button" data-id="${task.id}" aria-label="Toggle done">
            ${task.done ? ICONS.check : TASK_ICON[iconKey]}
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
        list.appendChild(row);
      });
    }

    $('#task-open-count').textContent = `${state.tasks.filter((t) => !t.done).length} open`;
  }

  function toggleTaskDone(id) {
    const task = state.tasks.find((t) => t.id === id);
    if (!task) return;
    task.done = !task.done;
    renderTasks();
    if (task.done) showToast('Nice — marked done.');
  }

  function addTask(title, { category = 'general', due = null } = {}) {
    if (!title.trim()) return;
    state.tasks.unshift({ id: nextId(), title: title.trim(), category, icon: 'plain', due, done: false });
    renderTasks();
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
  });

  function submitTaskComposer() {
    const input = $('#task-input');
    const due = $('#task-due').value;
    const category = $('#task-category').value === 'general' ? 'general' : $('#task-category').value;
    if (!input.value.trim()) return;
    addTask(input.value, { category, due: due ? formatDueDate(due) : 'No date' });
    input.value = '';
    $('#task-due').value = '';
    showToast('Task added');
  }

  function formatDueDate(iso) {
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  }

  $('#task-submit').addEventListener('click', submitTaskComposer);
  $('#task-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitTaskComposer();
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

  function renderAgenda() {
    const isToday = state.dayIndex === 0;
    $('#agenda-day-title').textContent = isToday ? 'Today' : WEEKDAY_SHORT[DAYS[state.dayIndex].getDay()];
    const list = $('#agenda-list');
    if (!isToday) {
      $('#agenda-count').textContent = '0 events';
      list.innerHTML = `<div class="calm-empty">${ICONS.calendar}<strong>Nothing scheduled</strong><span>Enjoy the space in your day.</span></div>`;
      return;
    }
    $('#agenda-count').textContent = '2 events';
    list.innerHTML = `
      <article>
        <time>2:00PM<span>1 hour</span></time>
        <div>
          <strong>Dentist</strong>
          <small>High Street Dental</small>
          <a href="#">${ICONS.mail.replace('<svg', '<svg width="13"')}<span>Directions</span></a>
        </div>
      </article>
      <article>
        <time>5:30PM<span>Before 6 PM</span></time>
        <div>
          <strong>Pick up dry cleaning</strong>
          <small>Regal Dry Cleaners</small>
          <a href="#">${ICONS.mail.replace('<svg', '<svg width="13"')}<span>Directions</span></a>
        </div>
      </article>`;
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

  /* ---------- voice / tell daybase ---------- */
  const trigger = $('#voice-trigger');
  const voiceReview = $('#voice-review');
  let voiceDrafts = [];

  trigger.addEventListener('click', () => {
    trigger.classList.add('listening');
    $('#voice-status').textContent = 'Listening…';
    voiceReview.hidden = false;
    $('#voice-tasks').innerHTML = '';
    setTimeout(() => {
      trigger.classList.remove('listening');
      $('#voice-status').textContent = 'I picked up 2 tasks:';
      voiceDrafts = [
        { id: nextId(), title: 'Call the plumber', category: 'Home', due: 'Tomorrow' },
        { id: nextId(), title: 'Pick up a birthday card for mum', category: 'Home', due: 'This week' },
      ];
      renderVoiceDrafts();
    }, 1300);
  });

  function renderVoiceDrafts() {
    const wrap = $('#voice-tasks');
    if (!voiceDrafts.length) {
      wrap.innerHTML = `<p class="aside-empty">Nothing left to add.</p>`;
      return;
    }
    wrap.innerHTML = voiceDrafts.map((d) => `
      <div class="voice-draft" data-id="${d.id}">
        <span class="draft-check">${ICONS.check}</span>
        <div>
          <input type="text" value="${d.title}">
          <span><b>${d.category}</b><em>${d.due}</em></span>
        </div>
        <button type="button" aria-label="Remove">${ICONS.close}</button>
      </div>`).join('');
    $$('.voice-draft', wrap).forEach((row) => {
      row.querySelector('input').addEventListener('input', (e) => {
        const draft = voiceDrafts.find((d) => d.id === row.dataset.id);
        if (draft) draft.title = e.target.value;
      });
      row.querySelector('button').addEventListener('click', () => {
        voiceDrafts = voiceDrafts.filter((d) => d.id !== row.dataset.id);
        renderVoiceDrafts();
      });
    });
  }

  $('#voice-add-all').addEventListener('click', () => {
    const count = voiceDrafts.length;
    voiceDrafts.forEach((d) => addTask(d.title, { category: 'home', due: d.due }));
    voiceDrafts = [];
    voiceReview.hidden = true;
    if (count) showToast(`Added ${count} task${count === 1 ? '' : 's'} to your list.`);
  });

  $('#voice-close').addEventListener('click', () => {
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
    renderTopThree();
    renderTodayFound();
    renderFoundView();
    renderTasks();
    renderRecurring();
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
