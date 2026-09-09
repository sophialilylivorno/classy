(function () {
    const saved = JSON.parse(
        localStorage.getItem("classyAppearance") || "{}"
    );

    const theme = saved.theme || "light";
    const color = saved.color || "rose";

    const accentColors = {
        rose: "#c98787",
        sage: "#8fa58b",
        lavender: "#9d91b5",
        beige: "#b8a58e"
    };

    const accent = accentColors[color] || color || "#c98787";

    // Apply theme
    document.documentElement.dataset.classyTheme = theme;

    // Apply accent color
    document.documentElement.style.setProperty(
        "--classy-accent",
        accent
    );

    // Add global Classy theme styles
    const style = document.createElement("style");

    style.textContent = `
        :root {
            --classy-accent: ${accent};
        }

        /* =========================
           LIGHT THEME
           ========================= */

        html[data-classy-theme="light"] body {
            background: #f8f5f0 !important;
            color: #4d4642 !important;
        }

        html[data-classy-theme="light"] .sidebar {
            background: #fffaf6 !important;
            border-color: #e7e1da !important;
        }

        html[data-classy-theme="light"] .card,
        html[data-classy-theme="light"] .course-card,
        html[data-classy-theme="light"] .set-card,
        html[data-classy-theme="light"] .note-card,
        html[data-classy-theme="light"] .assignment-card,
        html[data-classy-theme="light"] .calendar-container,
        html[data-classy-theme="light"] .modal-content,
        html[data-classy-theme="light"] .ai-container,
        html[data-classy-theme="light"] .settings-card {
            background: #fffdfb !important;
            color: #4d4642 !important;
            border-color: #ebe4dd !important;
        }

        /* =========================
           SOFT THEME
           ========================= */

        html[data-classy-theme="soft"] body {
            background: #eee5e0 !important;
            color: #514946 !important;
        }

        html[data-classy-theme="soft"] .sidebar {
            background: #f8efeb !important;
            border-color: #ded2cc !important;
        }

        html[data-classy-theme="soft"] .card,
        html[data-classy-theme="soft"] .course-card,
        html[data-classy-theme="soft"] .set-card,
        html[data-classy-theme="soft"] .note-card,
        html[data-classy-theme="soft"] .assignment-card,
        html[data-classy-theme="soft"] .calendar-container,
        html[data-classy-theme="soft"] .modal-content,
        html[data-classy-theme="soft"] .ai-container,
        html[data-classy-theme="soft"] .settings-card {
            background: #faf5f2 !important;
            color: #514946 !important;
            border-color: #ded2cc !important;
        }

        html[data-classy-theme="soft"] input,
        html[data-classy-theme="soft"] textarea,
        html[data-classy-theme="soft"] select {
            background: #fffaf8 !important;
            color: #514946 !important;
            border-color: #d9ccc5 !important;
        }

        /* =========================
           DARK THEME
           ========================= */

        html[data-classy-theme="dark"] body {
            background: #211f1e !important;
            color: #eee7e2 !important;
        }

        html[data-classy-theme="dark"] .sidebar {
            background: #292625 !important;
            border-color: #3d3835 !important;
        }

        html[data-classy-theme="dark"] .card,
        html[data-classy-theme="dark"] .course-card,
        html[data-classy-theme="dark"] .set-card,
        html[data-classy-theme="dark"] .note-card,
        html[data-classy-theme="dark"] .assignment-card,
        html[data-classy-theme="dark"] .calendar-container,
        html[data-classy-theme="dark"] .modal-content,
        html[data-classy-theme="dark"] .ai-container,
        html[data-classy-theme="dark"] .settings-card {
            background: #2b2827 !important;
            color: #eee7e2 !important;
            border-color: #403b38 !important;
        }

        html[data-classy-theme="dark"] input,
        html[data-classy-theme="dark"] textarea,
        html[data-classy-theme="dark"] select {
            background: #211f1e !important;
            color: #eee7e2 !important;
            border-color: #49423f !important;
        }

        html[data-classy-theme="dark"] input::placeholder,
        html[data-classy-theme="dark"] textarea::placeholder {
            color: #a9a09b !important;
        }

        html[data-classy-theme="dark"] .nav-item {
            color: #d0c7c2 !important;
        }

        html[data-classy-theme="dark"] .nav-item:hover {
            background: #383331 !important;
        }

        /* =========================
           ACCENT COLORS
           ========================= */

        .logo {
            color: var(--classy-accent) !important;
        }

        .nav-item.active {
            background: color-mix(
                in srgb,
                var(--classy-accent) 18%,
                transparent
            ) !important;

            color: var(--classy-accent) !important;
        }

        .primary-button,
        .ai-button,
        .add-button {
            background: var(--classy-accent) !important;
        }

        .primary-button:hover,
        .ai-button:hover,
        .add-button:hover {
            filter: brightness(0.94);
        }

        .accent-text {
            color: var(--classy-accent) !important;
        }

        /* Dark mode text adjustments */
        html[data-classy-theme="dark"] h1,
        html[data-classy-theme="dark"] h2,
        html[data-classy-theme="dark"] h3,
        html[data-classy-theme="dark"] h4,
        html[data-classy-theme="dark"] p,
        html[data-classy-theme="dark"] label,
        html[data-classy-theme="dark"] span {
            color: inherit;
        }
    `;

    document.head.appendChild(style);
})();
