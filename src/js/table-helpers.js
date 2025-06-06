import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let floatingHeader = null;
let cleanup = null;

function createFloatingHeader(originalHeader) {
  if (floatingHeader) return floatingHeader;

  // Get the original table for width measurements
  const originalTable = originalHeader.closest("table");

  // Clone the original header
  const headerClone = originalHeader.cloneNode(true);

  // Create floating container
  floatingHeader = document.createElement("div");

  // Check if we're on a wide screen where sidebar is visible
  const isWideScreen = window.innerWidth >= 997;

  // Get the actual sidebar width from CSS variables
  let sidebarWidth = "0px";
  if (isWideScreen) {
    const computedStyle = getComputedStyle(document.documentElement);
    const docSidebarWidth = computedStyle.getPropertyValue(
      "--doc-sidebar-width"
    );
    sidebarWidth = docSidebarWidth || "300px"; // fallback to 300px
  }

  floatingHeader.style.cssText = `
    position: fixed;
    top: 60px;
    left: ${sidebarWidth};
    right: 0;
    z-index: 1000;
    background: var(--ifm-background-color);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: none;
    overflow-x: auto;
    padding: 0 20px;
  `;

  // Create table wrapper for the floating header
  const floatingTable = document.createElement("table");
  floatingTable.className = "simplified-pricing-table";
  floatingTable.style.cssText = `
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    table-layout: fixed;
    border-collapse: collapse;
  `;

  floatingTable.appendChild(headerClone);
  floatingHeader.appendChild(floatingTable);
  document.body.appendChild(floatingHeader);

  // Copy column widths from original table to floating table
  const originalCells = originalHeader.querySelectorAll("th");
  const floatingCells = headerClone.querySelectorAll("th");

  // Get the computed width of the original table
  const originalTableRect = originalTable.getBoundingClientRect();
  floatingTable.style.width = originalTableRect.width + "px";

  originalCells.forEach((originalCell, index) => {
    if (floatingCells[index]) {
      const cellRect = originalCell.getBoundingClientRect();
      floatingCells[index].style.width = cellRect.width + "px";
      floatingCells[index].style.minWidth = cellRect.width + "px";
      floatingCells[index].style.maxWidth = cellRect.width + "px";
    }
  });

  return floatingHeader;
}

function handleScroll(originalHeader) {
  if (!originalHeader) return;

  const headerRect = originalHeader.getBoundingClientRect();
  const isHeaderVisible = headerRect.bottom > 60; // Account for navbar

  if (!isHeaderVisible) {
    // Original header is out of view, show floating header
    const floating = createFloatingHeader(originalHeader);
    floating.style.display = "block";
  } else {
    // Original header is visible, hide floating header
    if (floatingHeader) {
      floatingHeader.style.display = "none";
    }
  }
}

function findPricingTable() {
  // Try multiple selectors to find the table
  let table = document.getElementById("pricing-table");
  if (!table) {
    table = document.querySelector(".simplified-pricing-table");
  }

  let originalHeader = document.getElementById("table-header");
  if (!originalHeader && table) {
    originalHeader = table.querySelector("thead");
  }

  return { table, originalHeader };
}

function initFloatingHeader() {
  // Clean up any existing setup
  if (cleanup) cleanup();

  const { table, originalHeader } = findPricingTable();

  if (!table || !originalHeader) {
    // Table might not be rendered yet (React component), try again later
    setTimeout(initFloatingHeader, 500);
    return;
  }

  const scrollHandler = () => handleScroll(originalHeader);

  // Use passive event listeners for better performance
  window.addEventListener("scroll", scrollHandler, { passive: true });

  // Handle window resize to update column widths
  const resizeHandler = () => {
    if (floatingHeader) {
      // Remove and recreate floating header with new measurements
      if (floatingHeader.parentNode) {
        floatingHeader.parentNode.removeChild(floatingHeader);
      }
      floatingHeader = null;
    }
  };
  window.addEventListener("resize", resizeHandler, { passive: true });

  // Listen for pricing changes from React component
  const pricingChangeHandler = () => {
    if (floatingHeader) {
      // Remove and recreate floating header with updated pricing
      if (floatingHeader.parentNode) {
        floatingHeader.parentNode.removeChild(floatingHeader);
      }
      floatingHeader = null;
    }
  };
  window.addEventListener("pricingChanged", pricingChangeHandler);

  // Cleanup function
  cleanup = () => {
    window.removeEventListener("scroll", scrollHandler);
    window.removeEventListener("resize", resizeHandler);
    window.removeEventListener("pricingChanged", pricingChangeHandler);
    if (floatingHeader && floatingHeader.parentNode) {
      floatingHeader.parentNode.removeChild(floatingHeader);
      floatingHeader = null;
    }
  };
}

if (ExecutionEnvironment.canUseDOM) {
  // Initialize on route changes
  if (typeof window !== "undefined") {
    // Safari might need a longer delay
    const isSafari =
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");
    const delay = isSafari ? 300 : 100;

    // Initial setup with longer delay for React rendering
    setTimeout(initFloatingHeader, delay);

    // Setup for route changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    const onRouteChange = () => {
      setTimeout(initFloatingHeader, delay);
    };

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      onRouteChange();
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      onRouteChange();
    };

    window.addEventListener("popstate", onRouteChange);
  }
}
