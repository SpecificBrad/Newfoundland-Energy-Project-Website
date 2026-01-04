/**
 * FINANCIAL CHARTS MODULE
 * Interactive financial projections with multi-scenario analysis
 * 
 * IMPLEMENTATION GUIDE:
 * 1. Include in HTML: <script src="charts.js"></script>
 * 2. HTML Elements Required:
 *    - <select id="scenarioSelect"> for scenario switching
 *    - <canvas id="financialChart"></canvas> for the chart
 *    - <div id="totalRevenue">, <div id="totalCosts">, <div id="netProfit">, <div id="roi"> for metrics
 * 3. Chart.js must be loaded before this script
 * 4. Color palette uses green (#1a472a, #2d5a3d, #a8d5ba)
 */

// ============================================================================
// FINANCIAL DATA - THREE MARKET CAPTURE SCENARIOS
// ============================================================================

const financialScenarios = {
      50: {
                name: '50% Market Capture',
                data: {
                              years: Array.from({ length: 20 }, (_, i) => `Year ${i + 1}`),
                              revenue: [45, 95, 150, 215, 280, 350, 420, 485, 545, 600, 650, 695, 735, 770, 800, 825, 845, 860, 870, 875],
                              costs: [120, 130, 140, 135, 130, 125, 120, 115, 112, 110, 108, 107, 106, 105, 105, 105, 105, 105, 105, 105],
                              grossProfit: [],
                              cumulativeDebt: [200, 235, 265, 315, 365, 490, 590, 660, 693, 683, 635, 533, 362, 162, -88, -288, -588, -948, -1378, -1873]
                }
      },
      75: {
                name: '75% Market Capture',
                data: {
                              years: Array.from({ length: 20 }, (_, i) => `Year ${i + 1}`),
                              revenue: [65, 140, 225, 320, 425, 540, 655, 765, 870, 960, 1035, 1095, 1140, 1170, 1185, 1185, 1180, 1165, 1140, 1105],
                              costs: [120, 130, 140, 135, 130, 125, 120, 115, 112, 110, 108, 107, 106, 105, 105, 105, 105, 105, 105, 105],
                              grossProfit: [],
                              cumulativeDebt: [200, 190, 155, 70, -135, -400, -800, -1400, -2130, -2970, -3845, -4775, -5810, -6945, -8160, -9360, -10605, -11915, -13300, -14760]
                }
      },
      100: {
                name: '100% Market Capture',
                data: {
                              years: Array.from({ length: 20 }, (_, i) => `Year ${i + 1}`),
                              revenue: [85, 185, 300, 425, 565, 720, 880, 1040, 1195, 1330, 1440, 1525, 1585, 1615, 1615, 1590, 1540, 1465, 1360, 1225],
                              costs: [120, 130, 140, 135, 130, 125, 120, 115, 112, 110, 108, 107, 106, 105, 105, 105, 105, 105, 105, 105],
                              grossProfit: [],
                              cumulativeDebt: [200, 145, 85, 5, -185, -500, -900, -1375, -1905, -2480, -3095, -3755, -4460, -5215, -6025, -6890, -7835, -8870, -10010, -11260]
                }
      }
};

// Calculate gross profit for each scenario
Object.keys(financialScenarios).forEach(key => {
      const scenario = financialScenarios[key];
      scenario.data.grossProfit = scenario.data.revenue.map((r, i) => r - scenario.data.costs[i]);
});

// ============================================================================
// CHART INITIALIZATION & RENDERING
// ============================================================================

let financialChart = null;

/**
 * Initialize and render the financial chart
 */
function initializeFinancialChart() {
      const ctx = document.getElementById('financialChart');
      if (!ctx) {
                console.error('Canvas element with id "financialChart" not found');
                return;
      }

    const currentScenario = financialScenarios[75]; // Default to 75%

    financialChart = new Chart(ctx, {
              type: 'line',
              data: {
                            labels: currentScenario.data.years,
                            datasets: [
                              {
                                                    label: 'Revenue',
                                                    data: currentScenario.data.revenue,
                                                    borderColor: '#1a472a',
                                                    backgroundColor: 'rgba(26, 71, 42, 0.05)',
                                                    borderWidth: 3,
                                                    fill: true,
                                                    tension: 0.4,
                                                    pointRadius: 5,
                                                    pointBackgroundColor: '#1a472a',
                                                    pointBorderColor: '#fff',
                                                    pointBorderWidth: 2,
                                                    pointHoverRadius: 7
                              },
                              {
                                                    label: 'Operating Costs',
                                                    data: currentScenario.data.costs,
                                                    borderColor: '#f39c12',
                                                    backgroundColor: 'rgba(243, 156, 18, 0.05)',
                                                    borderWidth: 2,
                                                    fill: true,
                                                    tension: 0.4,
                                                    pointRadius: 4,
                                                    pointBackgroundColor: '#f39c12',
                                                    pointBorderColor: '#fff',
                                                    pointBorderWidth: 2,
                                                    pointHoverRadius: 6
                              },
                              {
                                                    label: 'Gross Profit',
                                                    data: currentScenario.data.grossProfit,
                                                    borderColor: '#27ae60',
                                                    backgroundColor: 'rgba(39, 174, 96, 0.08)',
                                                    borderWidth: 2,
                                                    fill: true,
                                                    tension: 0.4,
                                                    pointRadius: 4,
                                                    pointBackgroundColor: '#27ae60',
                                                    pointBorderColor: '#fff',
                                                    pointBorderWidth: 2,
                                                    pointHoverRadius: 6
                              },
                              {
                                                    label: 'Cumulative Debt',
                                                    data: currentScenario.data.cumulativeDebt,
                                                    borderColor: '#e74c3c',
                                                    backgroundColor: 'rgba(231, 76, 60, 0.08)',
                                                    borderWidth: 2,
                                                    fill: false,
                                                    tension: 0.4,
                                                    borderDash: [5, 5],
                                                    pointRadius: 4,
                                                    pointBackgroundColor: '#e74c3c',
                                                    pointBorderColor: '#fff',
                                                    pointBorderWidth: 2,
                                                    pointHoverRadius: 6
                              }
                                          ]
              },
              options: {
                            responsive: true,
                            maintainAspectRatio: true,
                            plugins: {
                                              legend: {
                                                                    display: true,
                                                                    position: 'top',
                                                                    labels: {
                                                                                              usePointStyle: true,
                                                                                              padding: 20,
                                                                                              font: {
                                                                                                                            size: 12,
                                                                                                                            weight: '500'
                                                                                                },
                                                                                              color: '#333'
                                                                    }
                                              },
                                              tooltip: {
                                                                    mode: 'index',
                                                                    intersect: false,
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                                                    padding: 12,
                                                                    titleFont: {
                                                                                              size: 13,
                                                                                              weight: 'bold'
                                                                    },
                                                                    bodyFont: {
                                                                                              size: 12
                                                                    },
                                                                    callbacks: {
                                                                                              label: function(context) {
                                                                                                                            let label = context.dataset.label || '';
                                                                                                                            if (label) {
                                                                                                                                                              label += ': ';
                                                                                                                              }
                                                                                                                            if (context.parsed.y !== null) {
                                                                                                                                                              label += '$' + context.parsed.y.toFixed(0) + 'M';
                                                                                                                              }
                                                                                                                            return label;
                                                                                                }
                                                                    }
                                              }
                            },
                            scales: {
                                              y: {
                                                                    beginAtZero: false,
                                                                    title: {
                                                                                              display: true,
                                                                                              text: 'CAD ($ Millions)'
                                                                    },
                                                                    ticks: {
                                                                                              callback: function(value) {
                                                                                                                            return '$' + value + 'M';
                                                                                                },
                                                                                              color: '#666'
                                                                    },
                                                                    grid: {
                                                                                              color: 'rgba(0, 0, 0, 0.05)'
                                                                    }
                                              },
                                              x: {
                                                                    ticks: {
                                                                                              color: '#666'
                                                                    },
                                                                    grid: {
                                                                                              display: false
                                                                    }
                                              }
                            }
              }
    });

    updateFinancialMetrics(75);
}

// ============================================================================
// SCENARIO SWITCHING
// ============================================================================

/**
 * Update chart data based on selected scenario
 */
function updateChartScenario(scenarioValue) {
      if (!financialChart || !financialScenarios[scenarioValue]) {
                return;
      }

    const scenario = financialScenarios[scenarioValue];

    financialChart.data.datasets[0].data = scenario.data.revenue;
      financialChart.data.datasets[1].data = scenario.data.costs;
      financialChart.data.datasets[2].data = scenario.data.grossProfit;
      financialChart.data.datasets[3].data = scenario.data.cumulativeDebt;

    financialChart.update();
      updateFinancialMetrics(scenarioValue);
}

/**
 * Calculate and display financial metrics
 */
function updateFinancialMetrics(scenarioValue) {
      const scenario = financialScenarios[scenarioValue];
      const data = scenario.data;

    // Calculate totals
    const totalRevenue = data.revenue.reduce((a, b) => a + b, 0);
      const totalCosts = data.costs.reduce((a, b) => a + b, 0);
      const netProfit = totalRevenue - totalCosts;
      const roi = ((netProfit / totalCosts) * 100).toFixed(1);

    // Update DOM elements
    const revenueEl = document.getElementById('totalRevenue');
      const costsEl = document.getElementById('totalCosts');
      const profitEl = document.getElementById('netProfit');
      const roiEl = document.getElementById('roi');

    if (revenueEl) revenueEl.textContent = '$' + totalRevenue.toFixed(0) + 'M';
      if (costsEl) costsEl.textContent = '$' + totalCosts.toFixed(0) + 'M';
      if (profitEl) {
                profitEl.textContent = '$' + netProfit.toFixed(0) + 'M';
                profitEl.style.color = netProfit >= 0 ? '#27ae60' : '#e74c3c';
      }
      if (roiEl) {
                roiEl.textContent = roi + '%';
                roiEl.style.color = roi >= 0 ? '#27ae60' : '#e74c3c';
      }
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
      initializeFinancialChart();

                              // Scenario selector change event
                              const scenarioSelect = document.getElementById('scenarioSelect');
      if (scenarioSelect) {
                scenarioSelect.addEventListener('change', function(e) {
                              updateChartScenario(parseInt(e.target.value));
                });
      }
});
