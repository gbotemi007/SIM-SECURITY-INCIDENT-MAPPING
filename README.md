# SIM — Security Incident Mapping

**SEN202 Weekly Dev — Weekend 1 (01/07/26)**

SIM is a web-based platform concept that lets students, villa-mates, staff, and landlords quickly report campus/community security incidents (stabbing, rape, theft/stealing, murder, and more) — anonymously if needed — so that campus security can respond faster and reduce the community-crime contribution to Nigeria's broader insecurity problem.
|

**Google Form for the stakeholders questionaire:** https://forms.gle/5hgiGiuKNnzA7NFs9

**Live responses (view submitted answers):** https://docs.google.com/spreadsheets/d/1nsWsuvgtWOG53XFPd7z6jZa7eqPbajy4wDyvr3-tRvY/edit?resourcekey=&gid=1309599286#gid=1309599286

## Contents of this repository

| Deliverable | Location | Description |
|---|---|---|
| a. Stakeholder Questionnaire | [`questionnaire/SIM_Questionnaire_Design.md`]( https://forms.gle/5hgiGiuKNnzA7NFs9) | Question design for students, staff, and landlords, ready to transfer into Google Forms. **Google Form link: `<paste your live form link here>`** |
| b. Ishikawa (Fishbone) Analysis | [`ishikawa/SIM_Ishikawa.drawio`](ishikawa/SIM_Ishikawa.drawio) | Root-cause analysis of why campus security incidents go unreported/unresolved. Open in [draw.io](https://app.diagrams.net). |
| c. Mini Web Interface | [`webapp/`](webapp/) | A client-side prototype: incident report form + live report feed with basic stats. Open `webapp/index.html` in a browser, or enable GitHub Pages (see `docs/GITHUB_SETUP_GUIDE.md`). |
| d. Use-Case Diagram | [`usecase/SIM_UseCase_Diagram.svg`](usecase/SIM_UseCase_Diagram.svg) | Shows how Students/Villa-mates, Staff, Landlords, and Security Admin interact with the system. |
| e. SRS Document | [`srs/SIM_SRS.docx`](srs/SIM_SRS.docx) | Full Software Requirements Specification, including functional and non-functional requirements. |
| f/g. GitHub | This repository | See `docs/GITHUB_SETUP_GUIDE.md` for setup/publishing steps. |

## Problem statement

Insecurity is a major national challenge in Nigeria, and much of it is fed by unresolved community-level crime — including on and around university campuses. Root-cause analysis (see the Ishikawa diagram) points to factors like fear of reprisal, lack of a standard reporting channel, poor lighting/infrastructure, and weak coordination between students, staff, security, and landlords. SIM addresses this by giving the community a fast, low-friction, optionally anonymous way to report incidents.

## Running the mini web app locally

```bash
cd webapp
# then simply open index.html in your browser, e.g.:
open index.html      # macOS
start index.html      # Windows
```

No installation or backend is required — this is a front-end-only prototype (see the SRS, Section 2.5, for the intentional scope limitation given the submission timeline).

## Tech stack

- **Prototype front-end:** HTML5, CSS3, vanilla JavaScript (no frameworks/build step)
- **Diagrams:** draw.io (Ishikawa), SVG (use-case)
- **Documentation:** Markdown, Microsoft Word (.docx)
- **Survey:** Google Forms

## Author

Software Engineering Student — SEN202
