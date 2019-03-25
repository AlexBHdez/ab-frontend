const projects = $('app-project-item');

function showProjectHover(e) {
  const hoverDiv = $(this).find('.project__hover');
  hoverDiv.addClass('show');
};

function hideProjectHover(e) {
  const hoverDiv = $(this).find('.project__hover');
  hoverDiv.removeClass('show');
};

projects.hover(showProjectHover, hideProjectHover);
