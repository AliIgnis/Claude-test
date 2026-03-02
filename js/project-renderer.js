var PortfolioApp = window.PortfolioApp || {};

/**
 * Project Renderer module.
 * Dynamically renders the project timeline from translation data.
 */
PortfolioApp.ProjectRenderer = (function() {
  var container = null;

  function init() {
    container = document.getElementById("project-timeline");
  }

  function render(projects) {
    if (!container || !projects) return;
    container.innerHTML = "";

    for (var i = 0; i < projects.length; i++) {
      container.appendChild(_createProjectCard(projects[i], i));
    }
  }

  function _createProjectCard(project, index) {
    var card = document.createElement("div");
    card.className = "timeline-item animate-on-scroll";
    card.style.transitionDelay = (index * 0.1) + "s";

    var dot = document.createElement("div");
    dot.className = "timeline-dot";
    if (index === 0) dot.classList.add("current");

    var content = document.createElement("div");
    content.className = "timeline-content";

    var header = document.createElement("div");
    header.className = "timeline-header";

    var company = document.createElement("h3");
    company.textContent = project.company;

    var period = document.createElement("span");
    period.className = "timeline-period";
    period.textContent = project.period;

    header.appendChild(company);
    header.appendChild(period);

    var role = document.createElement("p");
    role.className = "timeline-role";
    role.textContent = project.role;

    content.appendChild(header);
    content.appendChild(role);

    if (project.tasks && project.tasks.length > 0) {
      var taskList = document.createElement("ul");
      taskList.className = "timeline-tasks";
      for (var j = 0; j < project.tasks.length; j++) {
        var li = document.createElement("li");
        li.textContent = project.tasks[j];
        taskList.appendChild(li);
      }
      content.appendChild(taskList);
    }

    if (project.tech && project.tech.length > 0) {
      var techContainer = document.createElement("div");
      techContainer.className = "timeline-tech";
      for (var k = 0; k < project.tech.length; k++) {
        var badge = document.createElement("span");
        badge.className = "tech-badge";
        badge.textContent = project.tech[k];
        techContainer.appendChild(badge);
      }
      content.appendChild(techContainer);
    }

    card.appendChild(dot);
    card.appendChild(content);
    return card;
  }

  return {
    init: init,
    render: render
  };
})();
