// Newfoundland Energy Project - 20-Year Roadmap Data
const roadmapData = [
  {
        phase: "Debt Repayment",
        startYear: 1,
        endYear: 10,
        cost: 1000000000,
        revenueImpact: 0,
        description: "Allocate 100% of gross profits to debt service"
  },
  {
        phase: "Refinery Expansion",
        startYear: 12,
        endYear: 15,
        cost: 400000000,
        revenueImpact: 200000000,
        description: "Double refinery capacity for surplus production"
  },
  {
        phase: "Cogeneration",
        startYear: 10,
        endYear: 12,
        cost: 100000000,
        revenueImpact: 50000000,
        description: "Add cogeneration units to support the grid"
  },
  {
        phase: "Strategic Storage",
        startYear: 1,
        endYear: 5,
        cost: 150000000,
        revenueImpact: 0,
        description: "Build crude oil and refined product storage facilities"
  },
  {
        phase: "Pipeline Completion",
        startYear: 6,
        endYear: 9,
        cost: 350000000,
        revenueImpact: 75000000,
        description: "Complete pipeline infrastructure for product distribution"
  },
  {
        phase: "Marine Facility",
        startYear: 8,
        endYear: 12,
        cost: 250000000,
        revenueImpact: 100000000,
        description: "Develop marine terminal for international shipping"
  },
  {
        phase: "University Campus",
        startYear: 13,
        endYear: 17,
        cost: 80000000,
        revenueImpact: 15000000,
        description: "Build energy research and training campus"
  },
  {
        phase: "Export Infrastructure",
        startYear: 16,
        endYear: 20,
        cost: 200000000,
        revenueImpact: 150000000,
        description: "Establish export hubs and international partnerships"
  }
  ];

// Format currency values
function formatCurrency(value) {
    return '$' + (value / 1000000).toFixed(0) + 'M';
}

// Initialize the chart
function initializeRoadmapChart() {
    // Get canvas element
  const ctx = document.getElementById('roadmapChart');
    if (!ctx) {
          console.error('Canvas element with id "roadmapChart" not found');
          return;
    }

  // Prepare chart data
  const labels = roadmapData.map(item => item.phase);
    const chartDatasets = [];

  // Create a dataset for each year (1-20)
  for (let year = 1; year <= 20; year++) {
        const yearData = roadmapData.map(phase => {
                // Check if this phase is active in this year
                                               if (year >= phase.startYear && year <= phase.endYear) {
                                                         return 1; // Phase is active
                                               }
                return 0; // Phase is not active
        });

      chartDatasets.push({
              label: `Year ${year}`,
              data: yearData,
              borderColor: '#1a472a',
              borderWidth: 1
      });
  }

  // Color palette for years (gradient from light to dark green)
  const colors = [
        '#d4f1de', '#c9ead7', '#bfe3d0', '#b4dcc9', '#a8d5ba', '#9dceac', '#92c79e',
        '#87c090', '#7cb982', '#71b274', '#66ab66', '#5ba458', '#509d4a', '#45963c',
        '#3a8f2e', '#2f8820', '#248112', '#1a7a04'
      ];

  // Assign colors to datasets
  chartDatasets.forEach((dataset, index) => {
        dataset.backgroundColor = colors[index % colors.length];
  });

  // Create the chart
  const roadmapChart = new Chart(ctx, {
        type: 'bar',
        data: {
                labels: labels,
                datasets: chartDatasets
        },
        options: {
                indexAxis: 'y', // Horizontal bar chart
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                          legend: {
                                      display: true,
                                      position: 'bottom',
                                      labels: {
                                                    boxWidth: 12,
                                                    font: {
                                                                    size: 11
                                                    },
                                                    padding: 10
                                      },
                                      maxHeight: 80
                          },
                          title: {
                                      display: true,
                                      text: 'Newfoundland Energy Project - 20-Year Roadmap',
                                      font: {
                                                    size: 16,
                                                    weight: 'bold'
                                      },
                                      padding: 20
                          },
                          tooltip: {
                                      enabled: true,
                                      backgroundColor: 'rgba(26, 71, 42, 0.9)',
                                      titleColor: '#fff',
                                      bodyColor: '#fff',
                                      padding: 12,
                                      cornerRadius: 6,
                                      displayColors: false,
                                      callbacks: {
                                                    title: function(context) {
                                                                    if (context.length > 0) {
                                                                                      const phaseIndex = context[0].dataIndex;
                                                                                      const phase = roadmapData[phaseIndex];
                                                                                      return phase.phase;
                                                                    }
                                                                    return '';
                                                    },
                                                    label: function(context) {
                                                                    return `Year ${context.dataset.label.split(' ')[1]} active`;
                                                    },
                                                    afterLabel: function(context) {
                                                                    const phaseIndex = context.dataIndex;
                                                                    const phase = roadmapData[phaseIndex];
                                                                    const lines = [];
                                                                    lines.push('');
                                                                    lines.push(`Duration: Year ${phase.startYear}-${phase.endYear}`);
                                                                    lines.push(`Cost: ${formatCurrency(phase.cost)}`);
                                                                    lines.push(`Revenue Impact: ${formatCurrency(phase.revenueImpact)}`);
                                                                    lines.push('');
                                                                    lines.push(`Description: ${phase.description}`);
                                                                    return lines;
                                                    }
                                      }
                          }
                },
                scales: {
                          x: {
                                      stacked: true,
                                      max: 20,
                                      ticks: {
                                                    callback: function(value) {
                                                                    return value;
                                                    }
                                      },
                                      title: {
                                                    display: true,
                                                    text: 'Project Years',
                                                    font: {
                                                                    size: 12,
                                                                    weight: 'bold'
                                                    }
                                      }
                          },
                          y: {
                                      stacked: true,
                                      title: {
                                                    display: true,
                                                    text: 'Project Phases',
                                                    font: {
                                                                    size: 12,
                                                                    weight: 'bold'
                                                    }
                                      }
                          }
                }
        }
  });

  return roadmapChart;
}

// Enhanced version with custom hover cards
function createEnhancedRoadmap() {
    const container = document.getElementById('roadmapContainer');
    if (!container) {
          console.error('Container with id "roadmapContainer" not found');
          return;
    }

  // Create timeline container
  const timelineHTML = `
      <div class="timeline-container">
            <div class="timeline-header">
                    <div class="timeline-phase-names">
                              <div class="phase-label">Phases</div>
                                      </div>
                                              <div class="timeline-years">
                                                        ${Array.from({length: 20}, (_, i) => `<div class="year-label">Year ${i + 1}</div>`).join('')}
                                                                </div>
                                                                      </div>
                                                                            <div class="timeline-rows">
                                                                                    ${roadmapData.map((phase, index) => `
                                                                                              <div class="timeline-row" data-phase="${phase.phase}">
                                                                                                          <div class="timeline-phase-name">${phase.phase}</div>
                                                                                                                      <div class="timeline-bars">
                                                                                                                                    <div class="timeline-bar-container">
                                                                                                                                                    <div class="timeline-bar" 
                                                                                                                                                                         style="left: ${(phase.startYear - 1) * 5}%; width: ${(phase.endYear - phase.startYear + 1) * 5}%;"
                                                                                                                                                                                              data-phase-index="${index}"
                                                                                                                                                                                                                   title="Click for details">
                                                                                                                                                                                                                                   </div>
                                                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                                                             </div>
                                                                                                                                                                                                                                                                       </div>
                                                                                                                                                                                                                                                                               `).join('')}
                                                                                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                           `;

  container.innerHTML = timelineHTML;

  // Add click handlers for detailed information
  const bars = container.querySelectorAll('.timeline-bar');
    bars.forEach(bar => {
          bar.addEventListener('click', function(e) {
                  e.stopPropagation();
                  const phaseIndex = parseInt(this.dataset.phaseIndex);
                  const phase = roadmapData[phaseIndex];
                  showPhaseDetails(phase, this);
          });

                     bar.addEventListener('mouseenter', function() {
                             const phaseIndex = parseInt(this.dataset.phaseIndex);
                             const phase = roadmapData[phaseIndex];
                             showHoverTooltip(phase, this);
                     });

                     bar.addEventListener('mouseleave', function() {
                             removeHoverTooltip();
                     });
    });
}

// Show hover tooltip
function showHoverTooltip(phase, element) {
    // Remove existing tooltip
  removeHoverTooltip();

  const tooltip = document.createElement('div');
    tooltip.className = 'phase-tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-title">${phase.phase}</div>
            <div class="tooltip-content">
                  <p><strong>Duration:</strong> Year ${phase.startYear} - ${phase.endYear}</p>
                        <p><strong>Cost:</strong> ${formatCurrency(phase.cost)}</p>
                              <p><strong>Revenue Impact:</strong> ${formatCurrency(phase.revenueImpact)}</p>
                                    <p><strong>Description:</strong> ${phase.description}</p>
                                        </div>
                                          `;

  document.body.appendChild(tooltip);

  // Position tooltip
  const rect = element.getBoundingClientRect();
    tooltip.style.position = 'fixed';
    tooltip.style.left = (rect.left + rect.width / 2) + 'px';
    tooltip.style.top = (rect.top - 10) + 'px';
    tooltip.style.transform = 'translate(-50%, -100%)';
    tooltip.style.zIndex = '1000';
}

// Remove hover tooltip
function removeHoverTooltip() {
    const existingTooltip = document.querySelector('.phase-tooltip');
    if (existingTooltip) {
          existingTooltip.remove();
    }
}

// Show detailed phase information in modal
function showPhaseDetails(phase, element) {
    const modal = document.createElement('div');
    modal.className = 'phase-modal';
    modal.innerHTML = `
        <div class="modal-content">
              <button class="modal-close">×</button>
                    <h2>${phase.phase}</h2>
                          <div class="modal-details">
                                  <div class="detail-row">
                                            <span class="detail-label">Timeline:</span>
                                                      <span class="detail-value">Year ${phase.startYear} - Year ${phase.endYear} (${phase.endYear - phase.startYear + 1} years)</span>
                                                              </div>
                                                                      <div class="detail-row">
                                                                                <span class="detail-label">Total Cost:</span>
                                                                                          <span class="detail-value">${formatCurrency(phase.cost)}</span>
                                                                                                  </div>
                                                                                                          <div class="detail-row">
                                                                                                                    <span class="detail-label">Revenue Impact:</span>
                                                                                                                              <span class="detail-value">${formatCurrency(phase.revenueImpact)}</span>
                                                                                                                                      </div>
                                                                                                                                              <div class="detail-row">
                                                                                                                                                        <span class="detail-label">Net Impact:</span>
                                                                                                                                                                  <span class="detail-value">${formatCurrency(phase.revenueImpact - phase.cost)}</span>
                                                                                                                                                                          </div>
                                                                                                                                                                                  <div class="detail-section">
                                                                                                                                                                                            <p>${phase.description}</p>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                `;

  document.body.appendChild(modal);

  // Add close functionality
  modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
          if (e.target === modal) modal.remove();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Chart.js visualization
                            initializeRoadmapChart();

                            // Create enhanced timeline
                            createEnhancedRoadmap();
});
