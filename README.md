# Ritika | COA Student Academic Dashboard

A modern, responsive, and interactive Student Academic Management Dashboard designed for **Computer Organization and Architecture (COA)** at **Chandigarh University, Mohali, Punjab**.

---

## 📌 Student Details (Verified Source of Truth)

- **Name:** Ritika (Ritika Kadian)
- **Student UID:** `25BAI10012`
- **Course:** B.E. Computer Science and Engineering
- **Specialization:** Microsoft AI
- **University:** Chandigarh University, Mohali, Punjab
- **Academic Session:** 2025–2029 (1st Year)
- **Section:** 25BAI-601
- **Current Subject:** Computer Organization and Architecture (COA)
- **Official Email:** `ritikamajrad@gmail.com`
- **1st Year GPA:** 7.84
- **Senior Secondary (Class XII):** 92.6% (HBSE)
- **Matriculation (Class X):** 94.8% (HBSE)

---

## 🚀 Key Features

1. **Academic Overview Dashboard**
   - Live summary stat cards: UID, Course, Subject, Verified Certifications.
   - Interactive CSS/JS Academic Progress bar chart.
   - Verified chronological milestone timeline.
   - Quick COA tools & Academic Interests cards.

2. **Computer Organization & Architecture (COA) Learning Lab**
   - **Interactive Number System Converter:** Full bidirectional conversion between Decimal, Binary, Octal, and Hexadecimal with real math parsing (`BigInt`), input validation, base swap, clear, quick examples (e.g., 25 &rarr; Binary, FF &rarr; Decimal), and session history.
   - **Instruction Address Formats Simulator:** 1-Address (Accumulator-based), 2-Address, and 3-Address interactive cards, detailed RTL micro-operations, advantages, trade-offs, and a full comparative analysis table.
   - **COA Quick Notes:** Derived directly from the uploaded **Assignment-1** questions:
     - Raspberry Pi & IoT Architecture (Q1)
     - CPU vs GPU vs TPU Architecture (Q7 & Q8)
     - RAM Size, Word Size & PC Specifications (`16 GB RAM`, `x64 64-bit`, `Intel Core i5-1240H`, `Windows 11`) (Q6 & Q12)
     - Stampeding Herd Problem in Systems (Q10)
     - Pioneers: Intel (Robert Noyce, Gordon Moore), AMD (Jerry Sanders), 2025 Turing Award & Alan Turing (Q9, Q11, Q13)
     - Cloud Infrastructure: YOTTA & NPTEL (Q3 & Q4)

3. **Certificates & Achievements**
   - **Microsoft Certified: Azure Fundamentals (AZ-900)** (Certiport Verification: `waNxd-Fa44`).
   - **Workshop on AI & Automation using Python** (byteXL & Chandigarh University).
   - **Entrepreneurial Mindset: Build, Grow, & Lead Your Own Venture** (Chandigarh University via Coursera).
   - **Critical Enquiry and Research Methodology** (Chandigarh University via Coursera).
   - **11 Microsoft Learn Badges**.
   - Interactive Lightbox modal viewer with working PDF view and download actions.

4. **Assignments Management Dashboard**
   - **Assignment-1:** Official verified 6-page submission for *Computer Organization and Architecture* (Submitted to **Dr. Ruchika Gupta**).
   - Live search bar supporting topics like `Raspberry Pi`, `GPU`, `Turing`, `RAM`, `YOTTA`, etc.
   - One-click **View PDF** and **Download PDF** for `assets/assignments/Assignment-1.pdf`.

5. **Student Profile & About Me**
   - Verified student photo, academic history, skills categorization, future goals, and hobbies.

6. **Projects Showcase**
   - **EduRisk Matrix:** Python-based academic intelligence system with risk classification & AI-driven evaluation.
   - **Security Operation Center:** Console-based security operations toolkit with IDS monitoring & 2FA.

7. **My CV (Curriculum Vitae)**
   - Embedded PDF preview frame and direct PDF download button for `Ritika_Resume.pdf`.

8. **Settings & Help Center**
   - Theme switch (Dark Mode / Light Mode) persisted in `localStorage`.
   - Motion reduction accessibility toggle.
   - Interactive FAQ accordions covering dashboard navigation and tools.

---

## 📁 File Structure

```text
Ritika_COA/
├── index.html              # Main application single-page structure
├── style.css               # Full responsive stylesheet (Dark & Light themes)
├── script.js               # Application logic, studentData store & simulators
├── README.md               # Project documentation & run guide
└── assets/
    ├── profile/
    │   ├── profile.jpg     # Verified student portrait
    │   └── ritika_profile.pdf
    ├── cv/
    │   └── Ritika_Resume.pdf # Verified official resume PDF
    ├── certificates/
    │   ├── microsoft_azure_fundamentals_az900.pdf
    │   ├── microsoft_azure_fundamentals_az900.jpg
    │   ├── bytexl_ai_automation.pdf
    │   ├── bytexl_ai_automation.jpg
    │   ├── coursera_entrepreneurial_mindset.pdf
    │   ├── coursera_critical_enquiry_research.pdf
    │   └── all_certificates.pdf
    └── assignments/
        ├── Assignment-1.pdf  # Verified COA Assignment 1 (Submitted to Dr. Ruchika Gupta)
        └── 25BAI10012_Ritika.pdf
```

---

## 💻 How to Run

1. Simply double-click [`index.html`](file:///c:/Users/hites/OneDrive/Desktop/Ritika_COA/index.html) or open it in any modern web browser.
2. Or serve it via any local HTTP server:
   ```bash
   py -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.
