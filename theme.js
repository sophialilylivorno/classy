(function () {

    const appearanceKey = "classyAppearance";

    const defaultAppearance = {
        theme: "light",
        color: "#c98787"
    };

    function getAppearance() {
        try {
            const saved = JSON.parse(
                localStorage.getItem(appearanceKey) || "{}"
            );

            return {
                theme: saved.theme || defaultAppearance.theme,
                color: saved.color || defaultAppearance.color
            };

        } catch (error) {

            return {
                ...defaultAppearance
            };

        }
    }


    /* =========================
       ACCENT COLORS
    ========================= */

    function getAccentColor(color) {

        const accentColors = {
            rose: "#c98787",
            sage: "#8fa58b",
            lavender: "#9d91b5",
            beige: "#b8a58e"
        };

        return accentColors[color] || color || "#c98787";
    }


    function applyAccent(color) {

        document.documentElement.style.setProperty(
            "--classy-accent",
            getAccentColor(color)
        );

    }


    /* =========================
       THEME
    ========================= */

    function applyTheme(theme) {

        document.body.classList.remove(
            "classy-light",
            "classy-soft",
            "classy-dark"
        );

        document.body.classList.add(
            "classy-" + theme
        );

    }


    /* =========================
       GLOBAL THEME STYLES
    ========================= */

    function addThemeStyles() {

        if (document.getElementById("classyThemeStyles")) {
            return;
        }

        const style = document.createElement("style");

        style.id = "classyThemeStyles";

        style.textContent = `

        /* =====================================================
           LIGHT THEME
        ===================================================== */

        body.classy-light {
            background: #f8f5f0 !important;
            color: #4d4642 !important;
        }

        body.classy-light .sidebar {
            background: #fffaf6 !important;
            border-color: #eadfd7 !important;
        }

        body.classy-light .card,
        body.classy-light .course-card,
        body.classy-light .set-card,
        body.classy-light .note-card,
        body.classy-light .section,
        body.classy-light .stat,
        body.classy-light .calendar-section,
        body.classy-light .upcoming-section,
        body.classy-light .modal,
        body.classy-light .empty-state,
        body.classy-light .flashcard,
        body.classy-light .settings-card,
        body.classy-light .setting-card,
        body.classy-light .panel {
            background: #fffdfb !important;
            color: #4d4642 !important;
            border-color: #eadfd7 !important;
        }


        /* =====================================================
           SOFT THEME
        ===================================================== */

        body.classy-soft {
            background: #f3eee9 !important;
            color: #514944 !important;
        }

        body.classy-soft .sidebar {
            background: #fdf8f4 !important;
            border-color: #e4d9d1 !important;
        }

        body.classy-soft .card,
        body.classy-soft .course-card,
        body.classy-soft .set-card,
        body.classy-soft .note-card,
        body.classy-soft .section,
        body.classy-soft .stat,
        body.classy-soft .calendar-section,
        body.classy-soft .upcoming-section,
        body.classy-soft .modal,
        body.classy-soft .empty-state,
        body.classy-soft .flashcard,
        body.classy-soft .settings-card,
        body.classy-soft .setting-card,
        body.classy-soft .panel {
            background: #fffaf7 !important;
            color: #514944 !important;
            border-color: #e6dbd3 !important;
        }

        body.classy-soft input,
        body.classy-soft select,
        body.classy-soft textarea {
            background: #fff8f4 !important;
            color: #514944 !important;
            border-color: #ddd0c8 !important;
        }


        /* =====================================================
           DARK THEME — PAGE BACKGROUNDS
        ===================================================== */

        body.classy-dark {
            background: #242120 !important;
            color: #eee7e2 !important;
        }

        body.classy-dark .app,
        body.classy-dark .main {
            background: #242120 !important;
        }


        /* =====================================================
           DARK THEME — SIDEBAR
        ===================================================== */

        body.classy-dark .sidebar {
            background: #2d2927 !important;
            border-color: #46403d !important;
        }

        body.classy-dark .logo {
            color: var(--classy-accent) !important;
        }

        body.classy-dark .tagline {
            color: #aaa09b !important;
        }

        body.classy-dark .nav a,
        body.classy-dark .nav-item {
            color: #d1c8c3 !important;
        }

        body.classy-dark .nav a:hover,
        body.classy-dark .nav a.active,
        body.classy-dark .nav-item:hover,
        body.classy-dark .nav-item.active {
            background: #403937 !important;
            color: var(--classy-accent) !important;
        }


        /* =====================================================
           DARK THEME — HEADINGS / TEXT
        ===================================================== */

        body.classy-dark h1,
        body.classy-dark h2,
        body.classy-dark h3,
        body.classy-dark h4,
        body.classy-dark strong {
            color: #eee7e2 !important;
        }

        body.classy-dark p,
        body.classy-dark label {
            color: #b7ada7 !important;
        }

        body.classy-dark .welcome p,
        body.classy-dark .title p,
        body.classy-dark .header p,
        body.classy-dark .subtitle,
        body.classy-dark .description,
        body.classy-dark .course-description,
        body.classy-dark .professor,
        body.classy-dark .course-label,
        body.classy-dark .card-description,
        body.classy-dark .note-preview,
        body.classy-dark .note-date,
        body.classy-dark .card-count,
        body.classy-dark .progress-text,
        body.classy-dark .assignments {
            color: #b7ada7 !important;
        }


        /* =====================================================
           DARK THEME — ALL MAJOR CARDS / PANELS
        ===================================================== */

        body.classy-dark .card,
        body.classy-dark .course-card,
        body.classy-dark .set-card,
        body.classy-dark .note-card,
        body.classy-dark .section,
        body.classy-dark .stat,
        body.classy-dark .calendar-section,
        body.classy-dark .upcoming-section,
        body.classy-dark .modal,
        body.classy-dark .empty-state,
        body.classy-dark .flashcard,
        body.classy-dark .settings-card,
        body.classy-dark .setting-card,
        body.classy-dark .panel,
        body.classy-dark .course-header {
            background: #302b29 !important;
            border-color: #48413e !important;
            color: #eee7e2 !important;
        }


        /* =====================================================
           DARK THEME — INNER DASHBOARD ELEMENTS
        ===================================================== */

        body.classy-dark .course {
            background: #292522 !important;
            color: #eee7e2 !important;
        }

        body.classy-dark .assignment {
            border-color: #453e3a !important;
        }

        body.classy-dark .assignment-icon {
            background: #403634 !important;
        }

        body.classy-dark .ai-box {
            background: #39302f !important;
            color: #eee7e2 !important;
        }

        body.classy-dark .ai-box p {
            color: #b7ada7 !important;
        }


        /* =====================================================
           DARK THEME — PLANNER
        ===================================================== */

        body.classy-dark .calendar-section,
        body.classy-dark .upcoming-section {
            background: #302b29 !important;
        }

        body.classy-dark .calendar-header,
        body.classy-dark .calendar-controls {
            color: #eee7e2 !important;
        }

        body.classy-dark .weekday {
            color: #aaa09b !important;
        }

        body.classy-dark .day {
            background: #292522 !important;
            border-color: #453e3a !important;
            color: #eee7e2 !important;
        }

        body.classy-dark .day.other-month {
            background: #252220 !important;
            color: #756d68 !important;
        }

        body.classy-dark .calendar-button {
            background: #403936 !important;
            color: #eee7e2 !important;
            border-color: #514a46 !important;
        }


        /* =====================================================
           DARK THEME — COURSES
        ===================================================== */

        body.classy-dark .course-card .description,
        body.classy-dark .course-card .course-description {
            color: #b7ada7 !important;
        }

        body.classy-dark .progress-label,
        body.classy-dark .progress-label span {
            color: #b7ada7 !important;
        }

        body.classy-dark .stat-label {
            color: #aaa09b !important;
        }

        body.classy-dark .stat-value {
            color: #eee7e2 !important;
        }

        body.classy-dark .empty {
            background: #292522 !important;
            color: #aaa09b !important;
        }


        /* =====================================================
           DARK THEME — STUDY SETS
        ===================================================== */

        body.classy-dark .set-card {
            background: #302b29 !important;
        }

        body.classy-dark .study-button {
            background: #463638 !important;
            color: #dba4a4 !important;
        }

        body.classy-dark .manage-button {
            background: #403b46 !important;
            color: #c8bdd3 !important;
        }

        body.classy-dark .delete-button {
            background: #443637 !important;
            color: #d09b9b !important;
        }

        body.classy-dark .empty-state {
            background: #302b29 !important;
        }

        body.classy-dark .card-editor {
            background: #292522 !important;
            border-color: #49423e !important;
        }

        body.classy-dark .add-card-button {
            background: #302b29 !important;
            border-color: #625752 !important;
            color: #d2aaa2 !important;
        }


        /* =====================================================
           DARK THEME — STUDY MODE
        ===================================================== */

        body.classy-dark .study-overlay {
            background: #242120 !important;
        }

        body.classy-dark .study-container {
            color: #eee7e2 !important;
        }

        body.classy-dark .flashcard {
            background: #302b29 !important;
            border-color: #48413e !important;
        }

        body.classy-dark .flashcard-label {
            color: #d2aaa2 !important;
        }

        body.classy-dark .close-study {
            background: #403936 !important;
            color: #eee7e2 !important;
            border-color: #514a46 !important;
        }


        /* =====================================================
           DARK THEME — NOTES
        ===================================================== */

        body.classy-dark .note-card {
            background: #302b29 !important;
            border-color: #48413e !important;
        }

        body.classy-dark .note-title {
            color: #eee7e2 !important;
        }

        body.classy-dark .note-preview,
        body.classy-dark .note-date {
            color: #b7ada7 !important;
        }


        /* =====================================================
           DARK THEME — AI ASSISTANT
        ===================================================== */

        body.classy-dark .chat-container,
        body.classy-dark .chat-panel,
        body.classy-dark .chat-box,
        body.classy-dark .assistant-panel,
        body.classy-dark .ai-panel {
            background: #302b29 !important;
            border-color: #48413e !important;
            color: #eee7e2 !important;
        }

        body.classy-dark .message,
        body.classy-dark .chat-message,
        body.classy-dark .quick-prompt,
        body.classy-dark .prompt-card,
        body.classy-dark .data-card {
            background: #292522 !important;
            border-color: #453e3a !important;
            color: #eee7e2 !important;
        }


        /* =====================================================
           DARK THEME — FORMS / INPUTS
        ===================================================== */

        body.classy-dark input,
        body.classy-dark select,
        body.classy-dark textarea {
            background: #272321 !important;
            border-color: #504944 !important;
            color: #eee7e2 !important;
        }

        body.classy-dark input::placeholder,
        body.classy-dark textarea::placeholder {
            color: #8f8580 !important;
        }

        body.classy-dark option {
            background: #272321 !important;
            color: #eee7e2 !important;
        }


        /* =====================================================
           DARK THEME — BUTTONS
        ===================================================== */

        body.classy-dark .secondary-button,
        body.classy-dark .close-button,
        body.classy-dark .cancel-course,
        body.classy-dark .cancel-assignment {
            background: #403936 !important;
            color: #e5ddd8 !important;
            border-color: #514a46 !important;
        }

        body.classy-dark .primary-button,
        body.classy-dark .save-button,
        body.classy-dark .save-course,
        body.classy-dark .save-assignment,
        body.classy-dark .add-button,
        body.classy-dark .ai-button,
        body.classy-dark .new-note-button {
            background: var(--classy-accent) !important;
            color: white !important;
        }


        /* =====================================================
           ACCENT COLOR
        ===================================================== */

        .logo {
            color: var(--classy-accent) !important;
        }

        .primary-button,
        .save-button,
        .save-course,
        .save-assignment,
        .new-note-button {
            background: var(--classy-accent) !important;
        }

        .nav a:hover,
        .nav a.active,
        .nav-item:hover,
        .nav-item.active {
            color: var(--classy-accent) !important;
        }

        .progress-bar {
            background: var(--classy-accent) !important;
        }

        `;

        document.head.appendChild(style);
    }


    /* =========================
       INITIALIZE
    ========================= */

    function initializeTheme() {

        const appearance = getAppearance();

        addThemeStyles();

        applyTheme(appearance.theme);

        applyAccent(appearance.color);

    }


    /* =========================
       WATCH FOR SETTINGS CHANGES
    ========================= */

    window.addEventListener("storage", function (event) {

        if (event.key !== appearanceKey) {
            return;
        }

        initializeTheme();

    });


    /* =========================
       START
    ========================= */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }

})();
