// Function to handle tab changes
function changeTabPanel(e) {

   // This function handles the tab click event

  // Extract necessary information from the clicked tab
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  // Find the containers for the tabs and main content
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // Hide the previously selected tab and show the new one
  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  // Hide all panels and images, then show the selected ones
  mainContainer
    .querySelectorAll('[role="tabpanel"]')
    .forEach((panel) => panel.setAttribute("hidden", true));

  mainContainer.querySelector(`#${targetPanel}`).removeAttribute("hidden");

  mainContainer
    .querySelectorAll("picture")
    .forEach((picture) => picture.setAttribute("hidden", true));

  mainContainer.querySelector(`#${targetImage}`).removeAttribute("hidden");
}

// Function to set up tab event listeners for a specific tablist
function setupTabListeners(tabListId) {
  // This function sets up click event listeners for tabs within a specific tablist

  // Find the tablist and tabs based on the provided ID
  const tabList = document.getElementById(tabListId);
  const tabs = tabList.querySelectorAll('[role="tab"]');

  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
  });
}

// Set up listeners for both tablists
setupTabListeners("project-tablist");
setupTabListeners("playground-tablist");