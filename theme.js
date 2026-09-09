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


    function applyAccent(color) {

        document.documentElement.style.setProperty(
            "--classy-accent",
            color
        );

    }


    function addThemeStyles() {

        if (document.getElementById("classyThemeStyles")) {
            return;
        }


        const style = document.createElement("style");

        style.id = "classyThemeStyles";


        style.textContent = `

            /* =========================
               LIGHT THEME
            ========================= */

            body.classy-light {
                background: #f8f5f0 !important;
                color: #4d4642 !important;
            }

            body.classy-light .sidebar {
                background: #fffaf6 !important;
            }

            body.classy-light .course-card,
            body.classy-light .set-card,
            body.classy-light .note-card,
            body.classy-light .modal,
            body.classy-light .empty-state,
            body.classy-light .flashcard {
                background: #fffdfb !important;
                color: #4d4642 !important;
            }


            /* =========================
               SOFT THEME
            ========================= */

            body.classy-soft {
                background: #f3eee9 !important;
                color: #514944 !important;
            }

            body.classy-soft .sidebar {
                background: #fdf8f4 !important;
            }

            body.classy-soft .course-card,
            body.classy-soft .set-card,
            body.classy-soft .note-card,
            body.classy-soft .modal,
            body.classy-soft .empty-state,
            body.classy-soft .flashcard {
                background: #fffaf7 !important;
                color: #514944 !important;
            }

            body.classy-soft input,
            body.classy-soft select,
            body.classy-soft textarea {
                background: #fff8f4 !important;
                color: #514944 !important;
            }


            /* =========================
               DARK THEME
            ========================= */

            body.classy-dark {
                background: #242120 !important;
                color: #eee7e2 !important;
            }

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

            body.classy-dark .nav a {
                color: #d1c8c3 !important;
            }

            body.classy-dark .nav a:hover,
            body.classy-dark .nav a.active {
                background: #403937 !important;
                color: var(--classy-accent) !important;
            }

            body.classy-dark .main,
            body.classy-dark .study-overlay {
                background: #242120 !important;
            }

            body.classy-dark h1,
            body.classy-dark h2,
            body.classy-dark h3,
            body.classy-dark p,
            body.classy-dark label,
            body.classy-dark strong {
                color: #eee7e2 !important;
            }

            body.classy-dark .course-card,
            body.classy-dark .set-card,
            body.classy-dark .note-card,
            body.classy-dark .modal,
            body.classy-dark .empty-state,
            body.classy-dark .flashcard {
                background: #302b29 !important;
                border-color: #48413e !important;
                color: #eee7e2 !important;
            }

            body.classy-dark .course-label,
            body.classy-dark .card-count,
            body.classy-dark .subtitle,
            body.classy-dark .note-preview,
            body.classy-dark .note-date,
            body.classy-dark .progress-text,
            body.classy-dark .empty-state p,
            body.classy-dark .course-card .description,
            body.classy-dark .course-card .course-description,
            body.classy-dark .assignments {
                color: #b7ada7 !important;
            }

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

            body.classy-dark .secondary-button,
            body.classy-dark .close-study,
            body.classy-dark .cancel-course {
                background: #403936 !important;
                color: #e5ddd8 !important;
                border-color: #514a46 !important;
            }

            body.classy-dark .manage-button {
                background: #403b46 !important;
                color: #c8bdd3 !important;
            }

            body.classy-dark .delete-button {
                background: #443637 !important;
                color: #d09b9b !important;
            }

            body.classy-dark .study-button {
                background: #463638 !important;
                color: #dba4a4 !important;
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


            /* =========================
               ACCENT COLOR
            ========================= */

            .primary-button,
            .new-note-button,
            .save-button,
            .save-course {
                background: var(--classy-accent) !important;
            }

            .logo {
                color: var(--classy-accent) !important;
            }

            .nav a:hover,
            .nav a.active {
                color: var(--classy-accent) !important;
            }

        `;


        document.head.appendChild(style);

    }


    function initializeTheme() {

        const appearance = getAppearance();

        addThemeStyles();

        applyTheme(appearance.theme);

        applyAccent(appearance.color);

    }


    window.addEventListener(
        "storage",
        function (event) {

            if (event.key !== appearanceKey) {
                return;
            }

            initializeTheme();

        }
    );


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }

})();
