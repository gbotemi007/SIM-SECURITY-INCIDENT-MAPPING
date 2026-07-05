// SIM — Security Incident Mapping (mini prototype)
// Client-side only demo: reports are held in memory and reset on page reload.
// In a production build, the submit handler would POST to a backend API
// (see SRS document, section 3 — Functional Requirements, for the intended
// server-side data model and endpoints).

(function () {
  "use strict";

  /** @type {Array<Object>} */
  const reports = [];

  const form = document.getElementById("reportForm");
  const anonymousBox = document.getElementById("anonymous");
  const reporterIdBlock = document.getElementById("reporterIdBlock");
  const reporterIdInput = document.getElementById("reporterId");
  const formMsg = document.getElementById("formMsg");

  const feedList = document.getElementById("feedList");
  const emptyState = document.getElementById("emptyState");
  const filterType = document.getElementById("filterType");

  const statTotal = document.getElementById("statTotal");
  const statCritical = document.getElementById("statCritical");
  const statPending = document.getElementById("statPending");

  // Toggle the optional identity field based on the anonymous checkbox
  anonymousBox.addEventListener("change", () => {
    reporterIdBlock.style.display = anonymousBox.checked ? "none" : "block";
    if (anonymousBox.checked) reporterIdInput.value = "";
  });

  function severityOf(selectEl) {
    const opt = selectEl.options[selectEl.selectedIndex];
    return (opt && opt.dataset.severity) || "low";
  }

  function timeAgoLabel() {
    return "Just now";
  }

  function render() {
    const activeFilter = filterType.value;
    const visible = reports.filter(
      (r) => activeFilter === "all" || r.type === activeFilter
    );

    feedList.innerHTML = "";
    emptyState.style.display = visible.length ? "none" : "block";

    visible
      .slice()
      .reverse() // newest first
      .forEach((r) => {
        const li = document.createElement("li");
        li.className = `report-item sev-${r.severity}`;

        const pulseClass = r.severity === "critical" ? "pulse" : "";

        li.innerHTML = `
          <div class="report-top">
            <span class="report-type">${r.type}
              <span class="badge sev-${r.severity} ${pulseClass}">${r.severity}</span>
              ${r.anonymous ? '<span class="badge anon">anonymous</span>' : ""}
            </span>
            <span class="report-time">${r.timeLabel} · ${r.status}</span>
          </div>
          <div class="report-meta">📍 ${escapeHtml(r.location)} · reported by ${escapeHtml(r.reporterType)}</div>
          <div class="report-desc">${escapeHtml(r.description)}</div>
        `;
        feedList.appendChild(li);
      });

    statTotal.textContent = String(reports.length);
    statCritical.textContent = String(
      reports.filter((r) => r.severity === "critical").length
    );
    statPending.textContent = String(
      reports.filter((r) => r.status === "Pending review").length
    );
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  filterType.addEventListener("change", render);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const reporterType = document.getElementById("reporterType").value;
    const incidentTypeEl = document.getElementById("incidentType");
    const incidentType = incidentTypeEl.value;
    const location = document.getElementById("location").value.trim();
    const description = document.getElementById("description").value.trim();
    const anonymous = anonymousBox.checked;

    if (!reporterType || !incidentType || !location || !description) {
      formMsg.textContent = "Please fill in all required fields.";
      formMsg.className = "form-msg error";
      return;
    }

    const report = {
      id: Date.now(),
      reporterType,
      type: incidentType,
      severity: severityOf(incidentTypeEl),
      location,
      description,
      anonymous,
      status: "Pending review",
      timeLabel: timeAgoLabel(),
    };

    reports.push(report);
    render();

    formMsg.textContent = anonymous
      ? "Report submitted anonymously. Campus security has been notified."
      : "Report submitted. You can track its status in a future login-based version.";
    formMsg.className = "form-msg success";

    form.reset();
    reporterIdBlock.style.display = "block";
  });

  // Initial render
  render();
})();
