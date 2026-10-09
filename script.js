/**
 * ====================================================================
 * RITIKA | COA STUDENT ACADEMIC DASHBOARD
 * Core Application Engine & Verified Student Data Store
 * ====================================================================
 */

// ====================================================================
// 1. VERIFIED STUDENT DATA SOURCE OF TRUTH (Derived from uploaded CV & Docs)
// ====================================================================
const studentData = {
    name: "Ritika",
    fullName: "Ritika Kadian",
    uid: "25BAI10012",
    course: "B.E. Computer Science and Engineering",
    courseShort: "B.E. CSE",
    specialization: "Microsoft AI",
    university: "Chandigarh University, Mohali, Punjab",
    academicYear: "2025–2029",
    currentYear: "1st Year",
    currentSubject: "Computer Organization and Architecture",
    subjectShort: "COA",
    section: "25BAI-601",
    location: "Jhajjar, Haryana",
    email: "ritikamajrad@gmail.com",
    firstYearGpa: "7.84",
    class12Percentage: "92.6%",
    class10Percentage: "94.8%",
    schoolName: "C.R. Sr. Sec. School, Jhajjar, Haryana",
    msLearnBadgesCount: 11
};

// ====================================================================
// 2. VERIFIED CERTIFICATIONS & ACHIEVEMENTS DATA
// ====================================================================
const certificationsData = [
    {
        id: "cert-az900",
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        organization: "Microsoft / Certiport",
        date: "November 19, 2025",
        verifyCode: "waNxd-Fa44",
        verifyUrl: "https://verify.certiport.com",
        imagePath: "assets/certificates/microsoft_azure_fundamentals_az900.jpg",
        pdfPath: "assets/certificates/microsoft_azure_fundamentals_az900.pdf",
        type: "Industry Certification"
    },
    {
        id: "cert-bytexl",
        title: "Workshop on AI & Automation using Python",
        organization: "byteXL & Chandigarh University",
        date: "February 27, 2026",
        verifyCode: "CU-BTXL-2026",
        verifyUrl: null,
        imagePath: "assets/certificates/bytexl_ai_automation.jpg",
        pdfPath: "assets/certificates/bytexl_ai_automation.pdf",
        type: "Workshop & Hands-on Training"
    },
    {
        id: "cert-coursera-entrepreneur",
        title: "Entrepreneurial Mindset: Build, Grow, & Lead Your Own Venture",
        organization: "Chandigarh University authorized via Coursera",
        date: "August 3, 2026",
        verifyCode: "N2OYRU51J67H",
        verifyUrl: "https://coursera.org/verify/N2OYRU51J67H",
        imagePath: null,
        pdfPath: "assets/certificates/coursera_entrepreneurial_mindset.pdf",
        type: "University Academic Certificate"
    },
    {
        id: "cert-coursera-research",
        title: "Critical Enquiry and Research Methodology",
        organization: "Chandigarh University authorized via Coursera",
        date: "August 3, 2026",
        verifyCode: "6U2H1MVWHBSC",
        verifyUrl: "https://coursera.org/verify/6U2H1MVWHBSC",
        imagePath: null,
        pdfPath: "assets/certificates/coursera_critical_enquiry_research.pdf",
        type: "University Academic Certificate"
    }
];

// ====================================================================
// 3. VERIFIED PROJECTS DATA (From CV)
// ====================================================================
const projectsData = [
    {
        id: "proj-edurisk",
        name: "EduRisk Matrix",
        technologies: ["Python", "AI Algorithms", "HTML", "Data Analysis"],
        date: "April 2026",
        description: "A Python-based academic intelligence system that evaluates student performance using attendance, marks, and participation data.",
        bullets: [
            "Designed and developed EduRisk Matrix, a Python-based academic intelligence system that evaluates student performance using attendance, marks, and participation data.",
            "Engineered logic to automatically compute GPA, assign grades, and classify students into risk levels, enabling early identification of at-risk learners.",
            "Integrated AI-driven insights into the evaluation pipeline to deliver data-backed, actionable recommendations for academic improvement."
        ],
        githubLink: null
    },
    {
        id: "proj-soc",
        name: "Security Operation Center",
        technologies: ["TypeScript", "JavaScript", "CSS", "Security Automation"],
        date: "November 2025",
        description: "A console-based security operations toolkit covering IDS monitoring, phishing detection, and alerting.",
        bullets: [
            "Built a console-based security operations toolkit covering IDS monitoring, phishing detection, and alerting.",
            "Implemented two-factor authentication and a password manager module to strengthen account security.",
            "Designed an alert center to centralize and surface security events for quick response."
        ],
        githubLink: null
    }
];

// ====================================================================
// 4. ACADEMIC & COA ASSIGNMENTS DATA (Single Verified Assignment-1)
// ====================================================================
const assignmentsData = [
    {
        id: "assignment-1",
        num: "Assignment-1",
        title: "Computer Organization and Architecture — Assignment 1",
        subject: "COA",
        subjectName: "Computer Organization and Architecture",
        submittedBy: "Ritika (UID: 25BAI10012, Sec: 25BAI-601)",
        submittedTo: "Dr. Ruchika Gupta",
        institution: "Chandigarh University",
        date: "Academic Year 2025–2026",
        description: "Comprehensive COA coursework covering Raspberry Pi & GPIO interfacing, AI Summit Takeaways, YOTTA Cloud, NPTEL, Programming Language Selection Criteria, RAM Size & Word Size, PC Specifications (16 GB RAM, x64 64-bit, Intel Core i5-1240H @ 2.00 GHz, Windows 11), GPU vs CPU architectural speedup, CPU vs GPU vs TPU definitions, 2025 Turing Award, Stampeding Herd Problem, Intel & AMD Founders, CPU Architecture, and Alan Turing / The Imitation Game.",
        pdfPath: "assets/assignments/Assignment-1.pdf",
        status: "available"
    }
];

// ====================================================================
// 5. ACADEMIC INTERESTS DATA
// ====================================================================
const academicInterestsData = [
    { title: "Artificial Intelligence", icon: "🤖", desc: "Machine learning models, neural processing, and safe AI development." },
    { title: "AI & Automation", icon: "⚡", desc: "Python automation pipelines and data evaluation systems." },
    { title: "Programming", icon: "💻", desc: "Software design and systems programming in C, C++, and Python." },
    { title: "Data Structures & Algorithms", icon: "🧩", desc: "Algorithmic optimization, search complexity, and graph logic." },
    { title: "Object-Oriented Programming", icon: "📦", desc: "Modular software design, inheritance, and clean encapsulation." },
    { title: "Computer Org. & Architecture", icon: "🖥️", desc: "Instruction sets, CPU/GPU/TPU pipelines, cache & word size." },
    { title: "Computer Systems & Hardware", icon: "⚙️", desc: "x64 architecture, Raspberry Pi single-board systems, and GPIO." },
    { title: "Cloud Computing & Azure", icon: "☁️", desc: "Microsoft Azure services, YOTTA data centers, and cloud infrastructure." },
    { title: "Software Development", icon: "🚀", desc: "Building scalable console tools, security centers, and web tools." },
    { title: "Problem Solving & Logic", icon: "💡", desc: "Analytical reasoning inspired by computing pioneers like Alan Turing." }
];

// ====================================================================
// 6. COA QUICK NOTES DATA (Derived directly from Assignment-1)
// ====================================================================
const coaNotesData = [
    {
        title: "Raspberry Pi & Single-Board Computers (Q1)",
        content: "Raspberry Pi is a small, low-cost single-board computer (SBC) widely used to learn programming, build electronics projects, and develop robotics and IoT applications. It connects directly with external sensors, actuators, and electronic devices via its onboard General Purpose Input/Output (GPIO) pins."
    },
    {
        title: "CPU vs GPU vs TPU Architecture (Q7 & Q8)",
        content: "<strong>CPU (Central Processing Unit):</strong> General-purpose processor with a few powerful, low-latency cores; runs the operating system and applications sequentially.<br><br><strong>GPU (Graphics Processing Unit):</strong> Highly parallel architecture containing thousands of smaller cores for handling massive simultaneous calculations; optimized for graphics rendering and AI model execution.<br><br><strong>TPU (Tensor Processing Unit):</strong> Specialized Application-Specific Integrated Circuit (ASIC) designed specifically to accelerate artificial intelligence and deep neural network matrix computations."
    },
    {
        title: "RAM Size, Word Size & PC Hardware Specifications (Q6 & Q12)",
        content: "<strong>RAM Size:</strong> Temporary primary memory used to store active program data. Larger RAM capacity enables seamless multitasking without swapping delays.<br><strong>Word Size:</strong> The amount of data a CPU can process in a single operation. A 64-bit processor handles 64 bits per cycle and accesses a vastly larger virtual memory space.<br><br><strong>Ritika's Verified System Specifications:</strong><br>&bull; <strong>RAM:</strong> 16 GB<br>&bull; <strong>Word Size:</strong> 64-bit (x64-based architecture)<br>&bull; <strong>Processor:</strong> Intel Core i5-1240H (Base Speed 2.00 GHz)<br>&bull; <strong>Operating System:</strong> Windows 11 Home Single Language"
    },
    {
        title: "The Stampeding Herd Problem in Systems (Q10)",
        content: "The <em>Stampeding Herd Problem</em> occurs when multiple concurrent clients or processes attempt to access or compute the same expensive shared resource simultaneously when a cache expires or invalidates. This sudden surge overwhelms system bandwidth and CPU queues. It is mitigated using distributed caching, mutex locks, load balancing, and intelligent request coalescing."
    },
    {
        title: "Pioneers & Semiconductor Industry Founders (Q9, Q11 & Q13)",
        content: "<strong>Intel Founders:</strong> Robert Noyce and Gordon Moore (1968).<br><strong>AMD Founders:</strong> Jerry Sanders and his founding engineering team (1969).<br><strong>2025 A.M. Turing Award:</strong> Awarded to Charles H. Bennett and Gilles Brassard for their breakthrough contributions to quantum information science.<br><strong>Alan Turing & Modern Computing:</strong> Alan Turing's mathematical formulation of universal computation and his work breaking the Enigma cipher laid the foundations for computer architecture, algorithmic theory, and Artificial Intelligence."
    },
    {
        title: "Cloud Infrastructure & Learning Ecosystems: YOTTA & NPTEL (Q3 & Q4)",
        content: "<strong>YOTTA:</strong> An Indian hyperscale data center and cloud computing enterprise providing high-density AI infrastructure and sovereign cloud services.<br><strong>NPTEL:</strong> (National Programme on Technology Enhanced Learning) An online education platform initiated by the Indian Institutes of Technology (IITs) and IISc offering accredited technical coursework across core computer science and engineering disciplines."
    }
];

// ====================================================================
// 7. INSTRUCTION ADDRESS FORMATS DETAILED SPECIFICATIONS
// ====================================================================
const instructionFormatsData = {
    "1": {
        badge: "1-ADDRESS FORMAT",
        name: "One-Address Instruction (Accumulator-Based)",
        syntax: "ADD A",
        operation: "AC ← AC + M[A]",
        definition: "A one-address instruction explicitly specifies only one operand address in the instruction word. The other operand is implicitly taken from the Accumulator (AC) register, and the final computation result is automatically stored back into the Accumulator.",
        advantages: [
            "Shortest instruction word length (fewer bits allocated for address fields).",
            "Hardware decoding is simple and straightforward.",
            "Reduces memory bandwidth consumed per instruction fetch."
        ],
        disadvantages: [
            "Requires many individual instructions to evaluate multi-term expressions.",
            "Extensive data shuttling (LOAD / STORE) through the single Accumulator bottleneck.",
            "Previous value in the Accumulator is overwritten on each operation."
        ]
    },
    "2": {
        badge: "2-ADDRESS FORMAT",
        name: "Two-Address Instruction (Register-Memory)",
        syntax: "ADD A, B",
        operation: "R1 ← R1 + R2  OR  M[A] ← M[A] + M[B]",
        definition: "A two-address instruction specifies two address fields. One field serves as both the destination and the first source operand, while the second field specifies the second source operand.",
        advantages: [
            "Good balance between instruction bit-width and total program line length.",
            "Commonly used in modern commercial CISC architectures like x86.",
            "Significantly reduces intermediate LOAD/STORE instructions compared to 1-address."
        ],
        disadvantages: [
            "Overwrites the original content of the destination operand (loss of source value).",
            "Instruction length is larger than 1-address format."
        ]
    },
    "3": {
        badge: "3-ADDRESS FORMAT",
        name: "Three-Address Instruction (General Register)",
        syntax: "ADD A, B, C",
        operation: "R1 ← R2 + R3  OR  M[A] ← M[B] + M[C]",
        definition: "A three-address instruction specifies three separate address fields: one destination address and two distinct source operand addresses. This format preserves both source operands unaltered.",
        advantages: [
            "Preserves original operand values in source registers without modification.",
            "Results in the shortest, most compact assembly program length (fewest total lines).",
            "Natural fit for RISC architectures, high-level language compilers, and pipelining."
        ],
        disadvantages: [
            "Longest instruction word size (requires many bits to encode three addresses).",
            "More complex decoding circuitry required inside the CPU Control Unit."
        ]
    }
};

// ====================================================================
// 8. HELP & FAQ ACCORDION DATA
// ====================================================================
const faqData = [
    {
        q: "How to use the Number System Converter?",
        a: "Navigate to the Learning Lab tab. Enter any valid number in the input box and select its source base (Decimal, Binary, Octal, or Hexadecimal). Select your desired target base and click 'CONVERT' or use the quick example buttons. Click 'SWAP' to quickly invert input and output bases."
    },
    {
        q: "How to view my academic assignments?",
        a: "Open the 'Assignments' view from the sidebar navigation. You can view Assignment-1, search for questions or topics (e.g., 'Raspberry Pi', 'GPU', 'Turing'), and open or download the verified submission PDF."
    },
    {
        q: "How to download my assignment PDF?",
        a: "On the Assignment-1 card in the 'Assignments' view, click the 'Download PDF' button. The verified 6-page document (`Assignment-1.pdf`) will immediately download to your computer."
    },
    {
        q: "How to view certificates in the Lightbox?",
        a: "Go to the 'Achievements & Certs' tab. Click 'View Certificate' on any certificate card. A high-resolution preview modal will appear with options to view the original PDF document or download it."
    },
    {
        q: "How to view and download my official CV?",
        a: "Click on 'My CV' in the sidebar navigation. You can preview the full official resume directly inside the embedded PDF viewer or click 'DOWNLOAD CV' to save the original file."
    },
    {
        q: "Where is my personal information stored & configured?",
        a: "All student profile data (Name, UID, Course, Section, Marks, Projects, etc.) is configured in the centralized `studentData` constant inside `script.js`."
    },
    {
        q: "How to use the 1/2/3 Address Instruction comparison tool?",
        a: "In the 'Learning Lab' tab, click on the 1-Address, 2-Address, or 3-Address cards. The simulator dynamically updates with detailed syntax, RTL operations, advantages, and disadvantages alongside a comparative analysis table."
    }
];

// ====================================================================
// 9. NOTIFICATIONS STORE
// ====================================================================
let notifications = [
    {
        id: 1,
        icon: "📄",
        title: "Assignment-1 Uploaded & Connected",
        desc: "Official COA Assignment-1 (Submitted to Dr. Ruchika Gupta) is now live.",
        time: "Just now",
        read: false
    },
    {
        id: 2,
        icon: "🏆",
        title: "Certificates Verified",
        desc: "Microsoft AZ-900, byteXL Python AI, and Coursera certificates linked.",
        time: "1 hour ago",
        read: false
    },
    {
        id: 3,
        icon: "⚡",
        title: "COA Learning Lab Active",
        desc: "Number Base Converter & Instruction Format tools ready to use.",
        time: "2 hours ago",
        read: false
    }
];

// Conversion history in session
let conversionHistory = [];

// ====================================================================
// 10. APPLICATION INITIALIZATION & EVENT BINDINGS
// ====================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNavigation();
    initDashboard();
    initProfileAndAbout();
    initConverter();
    initInstructionFormats();
    initCoaNotes();
    initCertificates();
    initAssignments();
    initProjects();
    initGlobalSearch();
    initNotifications();
    initSettings();
    initFaq();
});

// ====================================================================
// 11. THEME & SETTINGS ENGINE
// ====================================================================
function initTheme() {
    const savedTheme = localStorage.getItem("ritika_coa_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const reduceMotion = localStorage.getItem("ritika_coa_reduce_motion") === "true";
    if (reduceMotion) {
        document.body.classList.add("reduce-motion");
    }

    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const current = document.documentElement.getAttribute("data-theme");
            const next = current === "dark" ? "light" : "dark";
            setTheme(next);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ritika_coa_theme", theme);
    
    // Update settings buttons
    const darkBtn = document.getElementById("themeDarkChoice");
    const lightBtn = document.getElementById("themeLightChoice");
    if (darkBtn && lightBtn) {
        darkBtn.classList.toggle("active", theme === "dark");
        lightBtn.classList.toggle("active", theme === "light");
    }
    showToast(`Switched to ${theme.toUpperCase()} theme`, "info");
}

// ====================================================================
// 12. NAVIGATION CONTROLLER
// ====================================================================
function initNavigation() {
    const navButtons = document.querySelectorAll(".nav-item");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const view = btn.getAttribute("data-view");
            navigateTo(view);
        });
    });

    // Mobile Hamburger
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const closeSidebarBtn = document.getElementById("closeSidebarBtn");
    const sidebar = document.getElementById("sidebar");

    if (hamburgerBtn && sidebar) {
        hamburgerBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
        });
    }
    if (closeSidebarBtn && sidebar) {
        closeSidebarBtn.addEventListener("click", () => {
            sidebar.classList.remove("open");
        });
    }

    // Header Profile Dropdown
    const headerProfileBtn = document.getElementById("headerProfileBtn");
    const profileDropdown = document.getElementById("profileDropdownMenu");
    if (headerProfileBtn && profileDropdown) {
        headerProfileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle("show");
            document.getElementById("notifDropdown")?.classList.remove("show");
        });
    }

    document.addEventListener("click", () => {
        profileDropdown?.classList.remove("show");
        document.getElementById("notifDropdown")?.classList.remove("show");
        document.getElementById("searchResultsDropdown")?.classList.remove("show");
    });
}

function navigateTo(viewId) {
    // Hide all view panels
    const panels = document.querySelectorAll(".view-panel");
    panels.forEach(p => p.classList.remove("active"));

    // Deactivate all nav items
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active"));

    // Activate selected
    const targetPanel = document.getElementById(`view-${viewId}`);
    if (targetPanel) {
        targetPanel.classList.add("active");
    }

    const activeNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
    if (activeNav) {
        activeNav.classList.add("active");
    }

    // Update Header Title
    const titleElem = document.getElementById("currentViewTitle");
    const subtitleElem = document.getElementById("viewSubtitle");
    const titlesMap = {
        "dashboard": { title: "Dashboard", sub: "Academic Overview & Quick Stats" },
        "profile": { title: "My Profile", sub: "Student Details & Verified Academic Record" },
        "about": { title: "About Me", sub: "Academic Focus, Career Goals & Technical Profile" },
        "learning-lab": { title: "COA Learning Lab", sub: "Interactive Base Converter & Architectural Toolset" },
        "achievements": { title: "Achievements & Certs", sub: "Verified University, Industry & Coursera Credentials" },
        "assignments": { title: "Assignments", sub: "Verified COA Assignment-1 Submission" },
        "projects": { title: "Projects", sub: "Engineering Systems & Software Tools" },
        "cv": { title: "My Curriculum Vitae", sub: "Official Resume Preview & Download" },
        "settings": { title: "Settings", sub: "Theme & Application Preferences" },
        "help": { title: "Help & FAQ", sub: "Academic Dashboard User Guide" }
    };

    if (titlesMap[viewId]) {
        titleElem.textContent = titlesMap[viewId].title;
        subtitleElem.textContent = titlesMap[viewId].sub;
    }

    // Close mobile sidebar if open
    document.getElementById("sidebar")?.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ====================================================================
// 13. DASHBOARD VIEW INITIALIZATION
// ====================================================================
function initDashboard() {
    // Statistics Card values
    document.getElementById("statUid").textContent = studentData.uid;
    document.getElementById("statCourse").textContent = studentData.courseShort;
    document.getElementById("statSubject").textContent = studentData.subjectShort;
    document.getElementById("statCerts").textContent = certificationsData.length;

    // Academic Bar Chart
    const chartContainer = document.getElementById("academicBarChart");
    if (chartContainer) {
        const chartData = [
            { label: "Assignment-1", val: "100%", count: "Submitted" },
            { label: "Certificates", val: "100%", count: "4 Verified" },
            { label: "MS Badges", val: "90%", count: "11 Earned" },
            { label: "COA Labs", val: "100%", count: "Complete" },
            { label: "1st Yr GPA", val: "78.4%", count: "7.84 / 10" }
        ];

        chartContainer.innerHTML = chartData.map(item => `
            <div class="chart-bar-group">
                <span class="chart-bar-val">${item.count}</span>
                <div class="chart-bar-track">
                    <div class="chart-bar-fill" style="height: ${item.val};"></div>
                </div>
                <span class="chart-bar-label">${item.label}</span>
            </div>
        `).join("");
    }

    // Recent Activity Timeline
    const timelineContainer = document.getElementById("recentActivityTimeline");
    if (timelineContainer) {
        const activities = [
            { title: "COA Assignment-1 Submitted", date: "Academic 2025–2026", desc: "Submitted to Dr. Ruchika Gupta covering Raspberry Pi, CPU/GPU/TPU, Turing Award & x64 Architecture." },
            { title: "Workshop on AI & Automation using Python", date: "27 Feb 2026", desc: "Certified by byteXL & Chandigarh University." },
            { title: "Microsoft Azure Fundamentals (AZ-900) Earned", date: "19 Nov 2025", desc: "Official Microsoft certification verified via Certiport." },
            { title: "EduRisk Matrix Project Engineered", date: "April 2026", desc: "Python-based academic intelligence and GPA risk classifier system." },
            { title: "11 Microsoft Learn Badges Achieved", date: "Academic 2025–2026", desc: "Completed learning pathways across Azure Cloud & AI automation." }
        ];

        timelineContainer.innerHTML = activities.map(act => `
            <div class="timeline-item">
                <span class="timeline-date">${act.date}</span>
                <h4 class="timeline-title">${act.title}</h4>
                <p class="timeline-desc">${act.desc}</p>
            </div>
        `).join("");
    }

    // Dashboard Recent Assignments
    const dashAssignList = document.getElementById("dashboardAssignmentsList");
    if (dashAssignList) {
        dashAssignList.innerHTML = assignmentsData.map(a => `
            <div class="recent-assign-item">
                <div class="recent-assign-info">
                    <h4>${a.title}</h4>
                    <span>${a.subjectName} &bull; Submitted to: ${a.submittedTo}</span>
                </div>
                <button class="btn btn-sm btn-outline" onclick="openAssignmentPdf('${a.pdfPath}', '${a.status}')">View PDF</button>
            </div>
        `).join("");
    }

    // Academic Interests Grid
    const dashInterests = document.getElementById("dashboardInterestsGrid");
    if (dashInterests) {
        renderInterests(dashInterests, 6);
    }
}

// ====================================================================
// 14. PROFILE & ABOUT ME INITIALIZATION
// ====================================================================
function initProfileAndAbout() {
    const aboutInterests = document.getElementById("aboutInterestsGrid");
    if (aboutInterests) {
        renderInterests(aboutInterests, academicInterestsData.length);
    }
}

function renderInterests(container, count) {
    container.innerHTML = academicInterestsData.slice(0, count).map(int => `
        <div class="interest-card">
            <div class="interest-card-icon">${int.icon}</div>
            <div class="interest-card-info">
                <h4>${int.title}</h4>
                <p>${int.desc}</p>
            </div>
        </div>
    `).join("");
}

// ====================================================================
// 15. NUMBER SYSTEM CONVERTER (REAL JS LOGIC & VALIDATION)
// ====================================================================
function initConverter() {
    const inputField = document.getElementById("converterInput");
    const outputField = document.getElementById("converterOutput");
    const inputBaseSelect = document.getElementById("inputBaseSelect");
    const outputBaseSelect = document.getElementById("outputBaseSelect");
    const convertBtn = document.getElementById("convertBtn");
    const clearBtn = document.getElementById("clearConverterBtn");
    const swapBtn = document.getElementById("swapBasesBtn");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");

    if (!inputField || !outputField) return;

    performConversion();

    convertBtn.addEventListener("click", performConversion);
    inputField.addEventListener("input", () => {
        clearConverterError();
        performConversion();
    });

    inputBaseSelect.addEventListener("change", () => {
        updateBaseHints();
        performConversion();
    });

    outputBaseSelect.addEventListener("change", () => {
        updateBaseHints();
        performConversion();
    });

    clearBtn.addEventListener("click", () => {
        inputField.value = "";
        outputField.value = "";
        clearConverterError();
        inputField.focus();
    });

    swapBtn.addEventListener("click", () => {
        const prevInputBase = inputBaseSelect.value;
        const prevOutputBase = outputBaseSelect.value;
        const currentResult = outputField.value.trim();

        inputBaseSelect.value = prevOutputBase;
        outputBaseSelect.value = prevInputBase;

        if (currentResult && !currentResult.includes("Error")) {
            inputField.value = currentResult;
        }

        updateBaseHints();
        performConversion();
        showToast("Swapped input and output bases", "info");
    });

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", () => {
            conversionHistory = [];
            renderConversionHistory();
            showToast("Conversion history cleared", "info");
        });
    }
}

function updateBaseHints() {
    const inputBase = parseInt(document.getElementById("inputBaseSelect").value, 10);
    const outputBase = parseInt(document.getElementById("outputBaseSelect").value, 10);
    const hintElem = document.getElementById("inputBaseHint");
    const outHintElem = document.getElementById("outputBaseHint");

    const hints = {
        10: "Allowed: Decimal digits 0–9",
        2: "Allowed: Binary bits 0 and 1 only",
        8: "Allowed: Octal digits 0–7",
        16: "Allowed: Hexadecimal 0–9 and A–F"
    };

    if (hintElem) hintElem.textContent = hints[inputBase] || "";
    if (outHintElem) outHintElem.textContent = `Target Base: ${outputBase} (${getBaseName(outputBase)})`;
}

function getBaseName(base) {
    const names = { 10: "Decimal", 2: "Binary", 8: "Octal", 16: "Hexadecimal" };
    return names[base] || `Base ${base}`;
}

function performConversion() {
    const inputVal = document.getElementById("converterInput").value.trim();
    const inputBase = parseInt(document.getElementById("inputBaseSelect").value, 10);
    const outputBase = parseInt(document.getElementById("outputBaseSelect").value, 10);
    const outputField = document.getElementById("converterOutput");
    const statusBadge = document.getElementById("converterStatusBadge");

    if (!inputVal) {
        outputField.value = "";
        clearConverterError();
        if (statusBadge) {
            statusBadge.textContent = "Waiting for input";
            statusBadge.style.color = "var(--text-muted)";
            statusBadge.style.background = "var(--bg-badge)";
        }
        return;
    }

    let isValid = false;
    let errorMsg = "";

    if (inputBase === 2) {
        isValid = /^[01]+$/.test(inputVal);
        errorMsg = "Invalid binary number. Binary values can contain only digits 0 and 1.";
    } else if (inputBase === 8) {
        isValid = /^[0-7]+$/.test(inputVal);
        errorMsg = "Invalid octal number. Octal values can contain only digits 0 through 7.";
    } else if (inputBase === 10) {
        isValid = /^-?\d+$/.test(inputVal);
        errorMsg = "Invalid decimal number. Decimal values must contain only digits 0 through 9.";
    } else if (inputBase === 16) {
        isValid = /^[0-9a-fA-F]+$/.test(inputVal);
        errorMsg = "Invalid hexadecimal number. Hex values can contain only digits 0–9 and letters A–F.";
    }

    if (!isValid) {
        showConverterError(errorMsg);
        outputField.value = "";
        if (statusBadge) {
            statusBadge.textContent = "Validation Error";
            statusBadge.style.color = "var(--rose)";
            statusBadge.style.background = "var(--rose-bg)";
        }
        return;
    }

    clearConverterError();

    try {
        let decimalValue;
        if (inputBase === 10) {
            decimalValue = BigInt(inputVal);
        } else {
            decimalValue = parseBigIntWithBase(inputVal, inputBase);
        }

        let resultString = "";
        if (outputBase === 16) {
            resultString = decimalValue.toString(16).toUpperCase();
        } else if (outputBase === 8) {
            resultString = decimalValue.toString(8);
        } else if (outputBase === 2) {
            resultString = decimalValue.toString(2);
        } else {
            resultString = decimalValue.toString(10);
        }

        outputField.value = resultString;

        if (statusBadge) {
            statusBadge.textContent = "Converted ✓";
            statusBadge.style.color = "var(--emerald)";
            statusBadge.style.background = "var(--emerald-bg)";
        }

        addToConversionHistory(inputVal, inputBase, resultString, outputBase);
    } catch (err) {
        showConverterError("Numerical range or parsing error: " + err.message);
        outputField.value = "";
    }
}

function parseBigIntWithBase(str, base) {
    str = str.toLowerCase();
    const digits = "0123456789abcdef";
    let result = 0n;
    const bigBase = BigInt(base);
    for (let i = 0; i < str.length; i++) {
        const val = digits.indexOf(str[i]);
        if (val === -1 || val >= base) {
            throw new Error(`Invalid character '${str[i]}' for base ${base}`);
        }
        result = result * bigBase + BigInt(val);
    }
    return result;
}

function showConverterError(msg) {
    const errBox = document.getElementById("converterErrorMsg");
    if (errBox) {
        errBox.textContent = msg;
        errBox.style.display = "block";
    }
}

function clearConverterError() {
    const errBox = document.getElementById("converterErrorMsg");
    if (errBox) {
        errBox.style.display = "none";
        errBox.textContent = "";
    }
}

function setConverterExample(val, inBase, outBase) {
    document.getElementById("converterInput").value = val;
    document.getElementById("inputBaseSelect").value = inBase;
    document.getElementById("outputBaseSelect").value = outBase;
    updateBaseHints();
    performConversion();
    showToast(`Loaded example: ${val} (Base ${inBase}) &rarr; Base ${outBase}`, "info");
}

function addToConversionHistory(inputVal, inBase, outVal, outBase) {
    const entry = `${inputVal}<sub>(${inBase})</sub> &rarr; ${outVal}<sub>(${outBase})</sub>`;
    if (conversionHistory.length > 0 && conversionHistory[0].raw === `${inputVal}-${inBase}-${outBase}`) {
        return;
    }
    conversionHistory.unshift({
        raw: `${inputVal}-${inBase}-${outBase}`,
        html: entry,
        inputVal,
        inBase,
        outBase
    });

    if (conversionHistory.length > 6) {
        conversionHistory.pop();
    }
    renderConversionHistory();
}

function renderConversionHistory() {
    const container = document.getElementById("historyChipsContainer");
    if (!container) return;

    if (conversionHistory.length === 0) {
        container.innerHTML = `<span class="no-history-text">No conversions performed yet in this session.</span>`;
        return;
    }

    container.innerHTML = conversionHistory.map(item => `
        <button class="history-chip" onclick="setConverterExample('${item.inputVal}', '${item.inBase}', '${item.outBase}')" title="Click to reload this conversion">
            ${item.html}
        </button>
    `).join("");
}

// ====================================================================
// 16. ADDRESS FORMAT CONVERTER ENGINE
// ====================================================================

function initInstructionFormats() {
    // Wire up Generate button
    const generateBtn = document.getElementById('addrGenerateBtn');
    const clearInputBtn = document.getElementById('addrClearInputBtn');
    const clearResultBtn = document.getElementById('addrClearResultBtn');
    const copyBtn = document.getElementById('addrCopyBtn');

    if (generateBtn) generateBtn.addEventListener('click', runAddressConverter);
    if (clearInputBtn) clearInputBtn.addEventListener('click', clearAddrInput);
    if (clearResultBtn) clearResultBtn.addEventListener('click', clearAddrResult);
    if (copyBtn) copyBtn.addEventListener('click', copyAddrResult);

    // Allow Enter on textarea to trigger generate (Shift+Enter = new line)
    const textarea = document.getElementById('addrExprInput');
    if (textarea) {
        textarea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                runAddressConverter();
            }
        });
    }
}

// ---- Utility: set example expression ----
function setAddrExample(expr) {
    const ta = document.getElementById('addrExprInput');
    if (ta) { ta.value = expr; ta.focus(); }
    hideAddrError();
}

// ---- Clear functions ----
function clearAddrInput() {
    const ta = document.getElementById('addrExprInput');
    if (ta) { ta.value = ''; ta.focus(); }
    hideAddrError();
    clearAddrResult();
}

function clearAddrResult() {
    const panel = document.getElementById('addrResultPanel');
    if (panel) panel.style.display = 'none';
    const body = document.getElementById('addrResultBody');
    if (body) body.innerHTML = '';
    const statusBadge = document.getElementById('addrConverterStatus');
    if (statusBadge) {
        statusBadge.textContent = 'Ready';
        statusBadge.style.color = '';
        statusBadge.style.background = '';
    }
}

function showAddrError(msg) {
    const el = document.getElementById('addrErrorMsg');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
    const statusBadge = document.getElementById('addrConverterStatus');
    if (statusBadge) {
        statusBadge.textContent = 'Error';
        statusBadge.style.color = 'var(--rose)';
        statusBadge.style.background = 'var(--rose-bg)';
    }
}

function hideAddrError() {
    const el = document.getElementById('addrErrorMsg');
    if (el) { el.style.display = 'none'; el.textContent = ''; }
}

// ---- Copy result ----
function copyAddrResult() {
    const copyText = document.getElementById('addrResultPanel')?.dataset.rawInstructions || '';
    if (!copyText) return;
    navigator.clipboard.writeText(copyText).then(() => {
        const btn = document.getElementById('addrCopyBtn');
        if (btn) {
            const prev = btn.innerHTML;
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
            btn.style.color = 'var(--emerald)';
            btn.style.borderColor = 'var(--emerald)';
            setTimeout(() => {
                btn.innerHTML = prev;
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 2000);
        }
        showToast('Instructions copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Copy failed. Please select text manually.', 'error');
    });
}

// ====================================================================
// TOKENIZER
// ====================================================================
function tokenize(expr) {
    const tokens = [];
    let i = 0;
    while (i < expr.length) {
        const ch = expr[i];
        if (/\s/.test(ch)) { i++; continue; }
        if (/[a-zA-Z_][a-zA-Z0-9_]*/.test(ch)) {
            // identifier
            let j = i;
            while (j < expr.length && /[a-zA-Z0-9_]/.test(expr[j])) j++;
            tokens.push({ type: 'ID', val: expr.slice(i, j) });
            i = j;
        } else if ('+-*/()='.includes(ch)) {
            if (ch === '=') {
                tokens.push({ type: 'ASSIGN', val: '=' });
            } else if (ch === '(') {
                tokens.push({ type: 'LPAREN', val: '(' });
            } else if (ch === ')') {
                tokens.push({ type: 'RPAREN', val: ')' });
            } else {
                tokens.push({ type: 'OP', val: ch });
            }
            i++;
        } else {
            throw new Error(`Unsupported character: '${ch}'`);
        }
    }
    return tokens;
}

// ====================================================================
// PARSER — produces an AST
// AST node: { type: 'BinOp', op, left, right } | { type: 'Var', name }
// ====================================================================
function parseExpression(tokens) {
    let pos = 0;

    function peek() { return tokens[pos]; }
    function consume(expectedType) {
        const t = tokens[pos];
        if (!t) throw new Error('Unexpected end of expression.');
        if (expectedType && t.type !== expectedType) {
            throw new Error(`Expected ${expectedType} but got '${t.val}'.`);
        }
        pos++;
        return t;
    }

    function parseAddSub() {
        let left = parseMulDiv();
        while (peek() && peek().type === 'OP' && (peek().val === '+' || peek().val === '-')) {
            const op = consume('OP').val;
            const right = parseMulDiv();
            left = { type: 'BinOp', op, left, right };
        }
        return left;
    }

    function parseMulDiv() {
        let left = parseUnary();
        while (peek() && peek().type === 'OP' && (peek().val === '*' || peek().val === '/')) {
            const op = consume('OP').val;
            const right = parseUnary();
            left = { type: 'BinOp', op, left, right };
        }
        return left;
    }

    function parseUnary() {
        return parsePrimary();
    }

    function parsePrimary() {
        const t = peek();
        if (!t) throw new Error('Unexpected end of expression.');
        if (t.type === 'LPAREN') {
            consume('LPAREN');
            const node = parseAddSub();
            consume('RPAREN');
            return node;
        }
        if (t.type === 'ID') {
            consume('ID');
            return { type: 'Var', name: t.val };
        }
        throw new Error(`Unexpected token: '${t.val}'.`);
    }

    // Top-level: LHS = RHS
    // Find ASSIGN token
    const assignIdx = tokens.findIndex(t => t.type === 'ASSIGN');
    if (assignIdx === -1) throw new Error('Missing "=" in expression. Use format: X = expression');
    if (assignIdx !== 1) throw new Error('Left-hand side must be a single variable (e.g., X = A + B).');

    const lhsToken = tokens[0];
    if (lhsToken.type !== 'ID') throw new Error('Left-hand side must be a variable identifier.');

    pos = assignIdx + 1; // skip past '='
    const rhs = parseAddSub();

    if (pos < tokens.length) {
        throw new Error(`Unexpected token after expression: '${tokens[pos].val}'.`);
    }

    return { lhs: lhsToken.val, rhs };
}

// ====================================================================
// CODE GENERATION
// ====================================================================

// Flatten AST into 3-address instructions, returning the result variable name
let tempCounter = 0;

function newTemp() {
    tempCounter++;
    return 'T' + tempCounter;
}

function opMnemonic(op) {
    return { '+': 'ADD', '-': 'SUB', '*': 'MUL', '/': 'DIV' }[op] || op;
}

// Returns { instructions: [{op, dest, src1, src2}], resultVar }
// For 3-address style (used as the canonical IR)
function flattenToThreeAddress(node, destHint) {
    if (node.type === 'Var') {
        return { instructions: [], resultVar: node.name };
    }
    // BinOp
    const left = flattenToThreeAddress(node.left, null);
    const right = flattenToThreeAddress(node.right, null);
    const dest = destHint || newTemp();
    const instr = {
        op: node.op,
        mnemonic: opMnemonic(node.op),
        dest,
        src1: left.resultVar,
        src2: right.resultVar
    };
    return {
        instructions: [...left.instructions, ...right.instructions, instr],
        resultVar: dest
    };
}

// ---- 3-Address Code ----
function generate3Address(lhs, rhs) {
    tempCounter = 0;
    // Flatten, but use lhs as hint for the root operation
    const { instructions } = flattenToThreeAddrWithDest(rhs, lhs);
    return instructions;
}

function flattenToThreeAddrWithDest(node, destHint) {
    if (node.type === 'Var') {
        return { instructions: [], resultVar: node.name };
    }
    const left = flattenToThreeAddrWithDest(node.left, null);
    const right = flattenToThreeAddrWithDest(node.right, null);
    const isRoot = !!destHint;
    const dest = isRoot ? destHint : newTemp();
    const instr = {
        op: node.op,
        mnemonic: opMnemonic(node.op),
        dest,
        src1: left.resultVar,
        src2: right.resultVar
    };
    return {
        instructions: [...left.instructions, ...right.instructions, instr],
        resultVar: dest
    };
}

// ---- 2-Address Code ----
// Generates: MOV dest, src1 ; OP dest, src2
function generate2Address(lhs, rhs) {
    tempCounter = 0;
    const threeAddr = generate3Address(lhs, rhs);
    const twoAddr = [];
    for (const instr of threeAddr) {
        if (instr.src1 === instr.dest) {
            // dest is already src1
            twoAddr.push({ mnemonic: instr.mnemonic, dest: instr.dest, src: instr.src2 });
        } else {
            twoAddr.push({ mnemonic: 'MOV', dest: instr.dest, src: instr.src1 });
            twoAddr.push({ mnemonic: instr.mnemonic, dest: instr.dest, src: instr.src2 });
        }
    }
    return twoAddr;
}

// ---- 1-Address Code ----
// Generates accumulator-based instructions: LOAD, ADD/SUB/MUL/DIV, STORE
function generate1Address(lhs, rhs) {
    tempCounter = 0;
    const threeAddr = generate3Address(lhs, rhs);
    const oneAddr = [];
    // We track what's in the accumulator
    let acContent = null;

    for (const instr of threeAddr) {
        const { mnemonic, dest, src1, src2 } = instr;
        // Load src1 into AC if needed
        if (acContent !== src1) {
            oneAddr.push({ mnemonic: 'LOAD', operand: src1 });
            acContent = src1;
        }
        // Perform operation with src2
        oneAddr.push({ mnemonic, operand: src2 });
        acContent = dest; // AC now holds dest
        // Store result if it's a temp or final
        oneAddr.push({ mnemonic: 'STORE', operand: dest });
    }
    return oneAddr;
}

// ====================================================================
// STEP-BY-STEP EXPLANATION BUILDER
// ====================================================================

function buildStepExplanation(rhs, instructions, format) {
    const steps = [];

    // Step 1: Parse the expression tree into operations in order
    // We'll explain each 3-address instruction in a friendly way
    const threeAddr = (() => {
        tempCounter = 0;
        return generate3Address('__ROOT__', rhs).map(i => ({...i, dest: i.dest === '__ROOT__' ? instructions[instructions.length-1]?.dest || i.dest : i.dest}));
    })();

    // Actually just re-generate cleanly
    tempCounter = 0;
    const canonical = [];
    const lhsPlaceholder = instructions.length > 0 ? (format === '3' ? instructions[instructions.length-1]?.dest : (format === '2' ? instructions[instructions.length-1]?.dest : instructions.find(i => i.operand && i.mnemonic === 'STORE' && !i.operand.startsWith('T'))?.operand)) : 'X';

    // Re-generate 3-address to get the canonical op list for explanation
    tempCounter = 0;
    const explainOps = [];
    function flattenForExplain(node, destHint) {
        if (node.type === 'Var') return node.name;
        const lv = flattenForExplain(node.left, null);
        const rv = flattenForExplain(node.right, null);
        const isRoot = !!destHint;
        const dest = isRoot ? destHint : newTemp();
        explainOps.push({ op: node.op, dest, src1: lv, src2: rv });
        return dest;
    }
    flattenForExplain(rhs, lhsPlaceholder);

    return explainOps;
}

// ====================================================================
// RENDER RESULT
// ====================================================================

function opSymbol(op) {
    return { '+': '+', '-': '−', '*': '×', '/': '÷' }[op] || op;
}

function renderAddrResult(lhs, expr, format, explainOps, finalInstructions, rawInstructions) {
    const formatNames = { '1': '1-Address (Accumulator)', '2': '2-Address (Dest, Source)', '3': '3-Address (Dest, Src1, Src2)' };
    const panel = document.getElementById('addrResultPanel');
    const body = document.getElementById('addrResultBody');
    const badge = document.getElementById('addrResultBadge');

    if (badge) badge.textContent = `${format}-ADDRESS RESULT`;

    // Build step explanations
    let stepsHtml = '';
    explainOps.forEach((op, idx) => {
        const isLast = idx === explainOps.length - 1;
        const opName = { '+': 'Addition', '-': 'Subtraction', '*': 'Multiplication', '/': 'Division' }[op.op] || op.op;
        let desc = '';
        if (!isLast) {
            desc = `<strong>${op.src1} ${opSymbol(op.op)} ${op.src2}</strong> must be evaluated. Store result in temporary variable <code>${op.dest}</code>.`;
        } else {
            desc = `<strong>${op.src1} ${opSymbol(op.op)} ${op.src2}</strong> — final ${opName.toLowerCase()} gives the result assigned to <code>${op.dest}</code>.`;
        }
        stepsHtml += `
            <div class="addr-step-item">
                <div class="addr-step-badge">STEP ${idx + 1}</div>
                <div class="addr-step-content">
                    <div class="addr-step-operation">${op.dest} = ${op.src1} ${opSymbol(op.op)} ${op.src2}</div>
                    <div class="addr-step-desc">${desc}</div>
                </div>
            </div>`;
    });

    // Build instructions display
    let instrHtml = '';
    if (format === '3') {
        finalInstructions.forEach((instr, i) => {
            instrHtml += `<div class="addr-instr-line"><span class="addr-instr-idx">${i + 1}.</span> <code class="addr-code-line">${instr.mnemonic} ${instr.dest}, ${instr.src1}, ${instr.src2}</code></div>`;
        });
    } else if (format === '2') {
        finalInstructions.forEach((instr, i) => {
            instrHtml += `<div class="addr-instr-line"><span class="addr-instr-idx">${i + 1}.</span> <code class="addr-code-line">${instr.mnemonic} ${instr.dest}, ${instr.src}</code></div>`;
        });
    } else if (format === '1') {
        finalInstructions.forEach((instr, i) => {
            instrHtml += `<div class="addr-instr-line"><span class="addr-instr-idx">${i + 1}.</span> <code class="addr-code-line">${instr.mnemonic} ${instr.operand}</code></div>`;
        });
    }

    body.innerHTML = `
        <div class="addr-result-section">
            <div class="addr-result-meta-row">
                <div class="addr-result-meta-item">
                    <span class="addr-result-meta-label">INPUT EXPRESSION</span>
                    <span class="addr-result-meta-val font-mono">${lhs} = ${expr}</span>
                </div>
                <div class="addr-result-meta-item">
                    <span class="addr-result-meta-label">SELECTED FORMAT</span>
                    <span class="addr-result-meta-val">${formatNames[format]}</span>
                </div>
            </div>
        </div>

        <div class="addr-result-section">
            <div class="addr-section-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>
                Step-by-Step Conversion
            </div>
            ${stepsHtml || '<p class="text-muted" style="font-size:13px;">Single variable — no operations needed.</p>'}
        </div>

        <div class="addr-result-section">
            <div class="addr-section-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                Generated Instructions (${format}-Address)
            </div>
            <div class="addr-instr-list">
                ${instrHtml}
            </div>
        </div>

        <div class="addr-final-answer-box">
            <div class="addr-final-answer-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                FINAL ANSWER — ${format}-Address Code
            </div>
            <pre class="addr-final-code">${rawInstructions}</pre>
        </div>`;

    panel.dataset.rawInstructions = rawInstructions;
    panel.style.display = 'block';

    // Scroll to result
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================================================
// MAIN CONVERTER ENTRY POINT
// ====================================================================
function runAddressConverter() {
    hideAddrError();
    const ta = document.getElementById('addrExprInput');
    const formatSelect = document.getElementById('addrFormatSelect');
    const statusBadge = document.getElementById('addrConverterStatus');

    const input = (ta?.value || '').trim();
    const format = formatSelect?.value || '3';

    // Validation: empty
    if (!input) {
        showAddrError('Please enter an expression.');
        clearAddrResult();
        return;
    }

    // Tokenize
    let tokens;
    try {
        tokens = tokenize(input);
    } catch (e) {
        showAddrError('Invalid expression: ' + e.message);
        clearAddrResult();
        return;
    }

    // Check parentheses balance
    let depth = 0;
    for (const t of tokens) {
        if (t.type === 'LPAREN') depth++;
        if (t.type === 'RPAREN') depth--;
        if (depth < 0) { showAddrError('Unbalanced parentheses. Too many closing ")" brackets.'); clearAddrResult(); return; }
    }
    if (depth !== 0) { showAddrError('Unbalanced parentheses. Missing closing ")" bracket.'); clearAddrResult(); return; }

    // Parse
    let parsed;
    try {
        parsed = parseExpression(tokens);
    } catch (e) {
        showAddrError('Invalid expression. ' + e.message);
        clearAddrResult();
        return;
    }

    const { lhs, rhs } = parsed;

    // Generate instructions
    let finalInstructions, rawLines, explainOps;
    try {
        // Build step explanation (uses canonical 3-address IR)
        tempCounter = 0;
        const explainList = [];
        function flatForExplain(node, destHint) {
            if (node.type === 'Var') return node.name;
            const lv = flatForExplain(node.left, null);
            const rv = flatForExplain(node.right, null);
            const dest = destHint || newTemp();
            explainList.push({ op: node.op, dest, src1: lv, src2: rv });
            return dest;
        }
        flatForExplain(rhs, lhs);
        explainOps = explainList;

        if (format === '3') {
            tempCounter = 0;
            finalInstructions = generate3Address(lhs, rhs);
            rawLines = finalInstructions.map(i => `${i.mnemonic} ${i.dest}, ${i.src1}, ${i.src2}`).join('\n');
        } else if (format === '2') {
            tempCounter = 0;
            finalInstructions = generate2Address(lhs, rhs);
            rawLines = finalInstructions.map(i => `${i.mnemonic} ${i.dest}, ${i.src}`).join('\n');
        } else {
            tempCounter = 0;
            finalInstructions = generate1Address(lhs, rhs);
            rawLines = finalInstructions.map(i => `${i.mnemonic} ${i.operand}`).join('\n');
        }
    } catch (e) {
        showAddrError('Generation error: ' + e.message);
        clearAddrResult();
        return;
    }

    // Build a readable expression string for display
    function nodeToStr(node) {
        if (node.type === 'Var') return node.name;
        const l = nodeToStr(node.left);
        const r = nodeToStr(node.right);
        const needParens = (op) => op === '+' || op === '-';
        const leftStr = (node.left.type === 'BinOp' && !needParens(node.left.op) && needParens(node.op)) ? `(${l})` : l;
        const rightStr = (node.right.type === 'BinOp') ? `(${r})` : r;
        return `${leftStr} ${node.op} ${r}`;
    }
    const exprStr = nodeToStr(rhs);

    // Update status badge
    if (statusBadge) {
        statusBadge.textContent = 'Generated ✓';
        statusBadge.style.color = 'var(--emerald)';
        statusBadge.style.background = 'var(--emerald-bg)';
    }

    renderAddrResult(lhs, exprStr, format, explainOps, finalInstructions, rawLines);
    showToast(`${format}-Address code generated successfully!`, 'success');
}



// ====================================================================
// 17. COA QUICK NOTES ENGINE (From Assignment-1 Questions)
// ====================================================================
function initCoaNotes() {
    const accordion = document.getElementById("coaTopicsAccordion");
    if (!accordion) return;

    accordion.innerHTML = coaNotesData.map((note, index) => `
        <div class="topic-accordion-item ${index === 0 ? "open" : ""}" id="coaTopic${index}">
            <div class="topic-accordion-header" onclick="toggleCoaTopic(${index})">
                <span>${note.title}</span>
                <span class="topic-accordion-icon">&#9662;</span>
            </div>
            <div class="topic-accordion-content">
                <p>${note.content}</p>
            </div>
        </div>
    `).join("");
}

function toggleCoaTopic(index) {
    const item = document.getElementById(`coaTopic${index}`);
    if (item) {
        item.classList.toggle("open");
    }
}

// ====================================================================
// 18. CERTIFICATES & ACHIEVEMENTS ENGINE
// ====================================================================
function initCertificates() {
    const certsGrid = document.getElementById("certsGrid");
    if (!certsGrid) return;

    certsGrid.innerHTML = certificationsData.map(cert => `
        <div class="cert-card">
            <div class="cert-preview-img-wrap" onclick="openCertModal('${cert.id}')" style="cursor: pointer;">
                ${cert.imagePath ? `
                    <img src="${cert.imagePath}" alt="${cert.title}" class="cert-preview-img">
                ` : `
                    <div class="cert-fallback-icon">📜</div>
                `}
            </div>
            <div class="cert-info-body">
                <span class="meta-tag meta-tag-subject mb-2">${cert.type}</span>
                <h4 class="cert-title">${cert.title}</h4>
                <p class="cert-org">${cert.organization}</p>
                <span class="cert-date">Issued: ${cert.date}</span>
                <div class="cert-actions">
                    <button class="btn btn-sm btn-primary" onclick="openCertModal('${cert.id}')">View Certificate</button>
                    <a href="${cert.pdfPath}" download class="btn btn-sm btn-outline" title="Download PDF">PDF</a>
                </div>
            </div>
        </div>
    `).join("");

    const modal = document.getElementById("certModal");
    const closeBtn = document.getElementById("closeCertModalBtn");
    const dismissBtn = document.getElementById("modalDismissBtn");

    if (closeBtn) closeBtn.addEventListener("click", () => modal.style.display = "none");
    if (dismissBtn) dismissBtn.addEventListener("click", () => modal.style.display = "none");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.style.display = "none";
        });
    }
}

function openCertModal(certId) {
    const cert = certificationsData.find(c => c.id === certId);
    if (!cert) return;

    const modal = document.getElementById("certModal");
    const title = document.getElementById("modalCertTitle");
    const org = document.getElementById("modalCertOrg");
    const body = document.getElementById("modalCertBody");
    const openBtn = document.getElementById("modalPdfOpenBtn");
    const downloadBtn = document.getElementById("modalPdfDownloadBtn");

    title.textContent = cert.title;
    org.textContent = `${cert.organization} • Issued: ${cert.date}`;

    if (cert.imagePath) {
        body.innerHTML = `<img src="${cert.imagePath}" alt="${cert.title}">`;
    } else {
        body.innerHTML = `<iframe src="${cert.pdfPath}#toolbar=1" title="${cert.title}"></iframe>`;
    }

    openBtn.href = cert.pdfPath;
    downloadBtn.href = cert.pdfPath;
    downloadBtn.setAttribute("download", `${cert.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`);

    modal.style.display = "flex";
}

// ====================================================================
// 19. ASSIGNMENTS ENGINE (Single Verified Assignment-1)
// ====================================================================
let currentSubjectFilter = "all";
let currentStatusFilter = "all";
let currentSearchQuery = "";

function initAssignments() {
    renderAssignments();

    const searchInput = document.getElementById("assignmentSearchInput");
    const clearSearchBtn = document.getElementById("clearAssignmentSearchBtn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            if (clearSearchBtn) {
                clearSearchBtn.style.display = currentSearchQuery ? "block" : "none";
            }
            renderAssignments();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearchQuery = "";
            clearSearchBtn.style.display = "none";
            renderAssignments();
            searchInput.focus();
        });
    }

    // Subject Filters
    document.querySelectorAll("[data-filter-subject]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-filter-subject]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentSubjectFilter = btn.getAttribute("data-filter-subject");
            renderAssignments();
        });
    });

    // Status Filters
    document.querySelectorAll("[data-filter-status]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-filter-status]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentStatusFilter = btn.getAttribute("data-filter-status");
            renderAssignments();
        });
    });
}

function renderAssignments() {
    const container = document.getElementById("assignmentsListContainer");
    if (!container) return;

    const filtered = assignmentsData.filter(item => {
        if (currentSubjectFilter !== "all" && item.subject !== currentSubjectFilter) {
            return false;
        }
        if (currentStatusFilter !== "all" && item.status !== currentStatusFilter) {
            return false;
        }
        if (currentSearchQuery) {
            const matchesTitle = item.title.toLowerCase().includes(currentSearchQuery);
            const matchesDesc = item.description.toLowerCase().includes(currentSearchQuery);
            const matchesNum = item.num.toLowerCase().includes(currentSearchQuery);
            const matchesSub = item.subjectName.toLowerCase().includes(currentSearchQuery);
            if (!matchesTitle && !matchesDesc && !matchesNum && !matchesSub) {
                return false;
            }
        }
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="card text-center" style="padding: 40px;">
                <h3>No matching assignments found</h3>
                <p class="text-muted mt-2">Try searching for 'Raspberry Pi', 'GPU', 'RAM', or 'Turing'.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(a => `
        <div class="assignment-card">
            <div class="assign-card-left">
                <span class="assign-num-badge">${a.num}</span>
                <div class="assign-card-details">
                    <h4>${a.title}</h4>
                    <p>${a.description}</p>
                    <div class="assign-meta-tags">
                        <span class="meta-tag meta-tag-subject">${a.subjectName}</span>
                        <span class="meta-tag meta-tag-date">Submitted To: ${a.submittedTo}</span>
                        <span class="meta-tag status-badge-avail">✓ PDF Available</span>
                    </div>
                </div>
            </div>
            <div class="assign-card-actions">
                <button class="btn btn-sm btn-primary" onclick="openAssignmentPdf('${a.pdfPath}', '${a.status}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    View PDF
                </button>
                <button class="btn btn-sm btn-secondary" onclick="downloadAssignmentPdf('${a.pdfPath}', '${a.num}', '${a.status}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download PDF
                </button>
            </div>
        </div>
    `).join("");
}

function openAssignmentPdf(pdfPath, status) {
    if (status !== "available" || !pdfPath) {
        showToast("File not uploaded yet.", "error");
        return;
    }
    window.open(pdfPath, "_blank");
}

function downloadAssignmentPdf(pdfPath, title, status) {
    if (status !== "available" || !pdfPath) {
        showToast("File not uploaded yet.", "error");
        return;
    }
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Download started: Assignment-1.pdf", "success");
}

// ====================================================================
// 20. PROJECTS VIEW ENGINE
// ====================================================================
function initProjects() {
    const container = document.getElementById("projectsContainer");
    if (!container) return;

    container.innerHTML = projectsData.map(proj => `
        <div class="project-card">
            <div>
                <div class="project-header-row">
                    <h3 class="project-name">${proj.name}</h3>
                    <span class="project-date">${proj.date}</span>
                </div>
                <div class="project-tech-pills">
                    ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join("")}
                </div>
                <ul class="project-bullets">
                    ${proj.bullets.map(b => `<li>${b}</li>`).join("")}
                </ul>
            </div>
            <div class="project-footer">
                <span class="meta-tag status-badge-avail">Verified Academic Project</span>
            </div>
        </div>
    `).join("");
}

// ====================================================================
// 21. GLOBAL SEARCH ENGINE
// ====================================================================
function initGlobalSearch() {
    const searchInput = document.getElementById("globalSearchInput");
    const dropdown = document.getElementById("searchResultsDropdown");

    if (!searchInput || !dropdown) return;

    document.addEventListener("keydown", (e) => {
        if (e.key === "/" && document.activeElement !== searchInput && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
            e.preventDefault();
            searchInput.focus();
        }
    });

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            dropdown.classList.remove("show");
            return;
        }

        const results = [];

        // Search in Assignments
        assignmentsData.forEach(a => {
            if (a.title.toLowerCase().includes(query) || a.description.toLowerCase().includes(query) || a.num.toLowerCase().includes(query)) {
                results.push({
                    type: "Assignment",
                    title: a.num + ": " + a.title,
                    sub: `Submitted to ${a.submittedTo}`,
                    action: () => { navigateTo("assignments"); }
                });
            }
        });

        // Search in Certifications
        certificationsData.forEach(c => {
            if (c.title.toLowerCase().includes(query) || c.organization.toLowerCase().includes(query)) {
                results.push({
                    type: "Certification",
                    title: c.title,
                    sub: c.organization,
                    action: () => { navigateTo("achievements"); }
                });
            }
        });

        // Search in Projects
        projectsData.forEach(p => {
            if (p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) {
                results.push({
                    type: "Project",
                    title: p.name,
                    sub: p.technologies.join(", "),
                    action: () => { navigateTo("projects"); }
                });
            }
        });

        // Search in Learning Lab
        if ("number base converter binary hexadecimal decimal octal".includes(query)) {
            results.push({
                type: "Tool",
                title: "Number System Converter",
                sub: "Interactive Base Conversions (COA)",
                action: () => { navigateTo("learning-lab"); }
            });
        }
        if ("instruction address 1-address 2-address 3-address".includes(query)) {
            results.push({
                type: "Tool",
                title: "Instruction Address Formats",
                sub: "1-Address, 2-Address, 3-Address Simulators",
                action: () => { navigateTo("learning-lab"); }
            });
        }

        // Search in Student Info
        if (studentData.name.toLowerCase().includes(query) || studentData.uid.toLowerCase().includes(query) || "profile cv resume".includes(query)) {
            results.push({
                type: "Profile",
                title: `${studentData.name} (${studentData.uid})`,
                sub: studentData.course,
                action: () => { navigateTo("profile"); }
            });
        }

        renderGlobalSearchResults(results);
    });
}

function renderGlobalSearchResults(results) {
    const dropdown = document.getElementById("searchResultsDropdown");
    if (!dropdown) return;

    if (results.length === 0) {
        dropdown.innerHTML = `<div class="no-results-msg">No matching items found</div>`;
    } else {
        dropdown.innerHTML = results.slice(0, 6).map((item, i) => `
            <div class="search-result-item" id="searchResItem${i}">
                <span class="search-item-type">${item.type}</span>
                <span class="search-item-title">${item.title}</span>
                <span class="search-item-sub">${item.sub}</span>
            </div>
        `).join("");

        results.slice(0, 6).forEach((item, i) => {
            document.getElementById(`searchResItem${i}`).addEventListener("click", () => {
                dropdown.classList.remove("show");
                item.action();
            });
        });
    }

    dropdown.classList.add("show");
}

// ====================================================================
// 22. NOTIFICATIONS CONTROLLER
// ====================================================================
function initNotifications() {
    const notifBtn = document.getElementById("notifBtn");
    const notifDropdown = document.getElementById("notifDropdown");
    const markAllReadBtn = document.getElementById("markAllReadBtn");

    if (notifBtn && notifDropdown) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifDropdown.classList.toggle("show");
            document.getElementById("profileDropdownMenu")?.classList.remove("show");
        });
    }

    if (markAllReadBtn) {
        markAllReadBtn.addEventListener("click", () => {
            notifications.forEach(n => n.read = true);
            renderNotifications();
            showToast("All notifications marked as read", "info");
        });
    }

    renderNotifications();
}

function renderNotifications() {
    const list = document.getElementById("notifList");
    const badge = document.getElementById("notifBadge");
    if (!list || !badge) return;

    const unreadCount = notifications.filter(n => !n.read).length;
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? "flex" : "none";

    list.innerHTML = notifications.map(n => `
        <div class="notif-item ${n.read ? '' : 'unread'}">
            <span class="notif-item-icon">${n.icon}</span>
            <div class="notif-item-content">
                <strong>${n.title}</strong>
                <p>${n.desc}</p>
                <span class="notif-time">${n.time}</span>
            </div>
        </div>
    `).join("");
}

// ====================================================================
// 23. SETTINGS & FAQ ACCORDION ENGINE
// ====================================================================
function initSettings() {
    const darkBtn = document.getElementById("themeDarkChoice");
    const lightBtn = document.getElementById("themeLightChoice");
    const reduceMotionToggle = document.getElementById("reduceMotionToggle");
    const landingSelect = document.getElementById("defaultLandingSelect");

    const currentTheme = localStorage.getItem("ritika_coa_theme") || "dark";
    if (darkBtn && lightBtn) {
        darkBtn.classList.toggle("active", currentTheme === "dark");
        lightBtn.classList.toggle("active", currentTheme === "light");

        darkBtn.addEventListener("click", () => setTheme("dark"));
        lightBtn.addEventListener("click", () => setTheme("light"));
    }

    if (reduceMotionToggle) {
        reduceMotionToggle.checked = localStorage.getItem("ritika_coa_reduce_motion") === "true";
        reduceMotionToggle.addEventListener("change", (e) => {
            document.body.classList.toggle("reduce-motion", e.target.checked);
            localStorage.setItem("ritika_coa_reduce_motion", e.target.checked);
            showToast(e.target.checked ? "Motion animations disabled" : "Motion animations enabled", "info");
        });
    }

    if (landingSelect) {
        landingSelect.value = localStorage.getItem("ritika_coa_default_view") || "dashboard";
        landingSelect.addEventListener("change", (e) => {
            localStorage.setItem("ritika_coa_default_view", e.target.value);
            showToast(`Default view updated to ${e.target.value}`, "info");
        });
    }
}

function initFaq() {
    const accordion = document.getElementById("faqAccordion");
    if (!accordion) return;

    accordion.innerHTML = faqData.map((item, index) => `
        <div class="faq-item" id="faqItem${index}">
            <div class="faq-question" onclick="toggleFaq(${index})">
                <span>${item.q}</span>
                <span class="faq-icon">&#9662;</span>
            </div>
            <div class="faq-answer">
                <p>${item.a}</p>
            </div>
        </div>
    `).join("");
}

function toggleFaq(index) {
    const item = document.getElementById(`faqItem${index}`);
    if (item) {
        item.classList.toggle("open");
    }
}

// ====================================================================
// 24. TOAST NOTIFICATION UTILITY
// ====================================================================
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const iconMap = { info: "ℹ️", success: "✅", error: "⚠️" };
    toast.innerHTML = `<span>${iconMap[type] || "ℹ️"}</span> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(40px)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}
