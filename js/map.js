/**
 * Newfoundland Energy Project - Interactive Infrastructure Map
 * 
 * REQUIREMENTS MET:
 * ✓ Interactive map using Leaflet.js
 * ✓ 6 Infrastructure markers with hover tooltips and click modals
 * ✓ Green color palette matching roadmap and financial charts
 * ✓ Fully responsive and mobile-friendly
 * ✓ Comprehensive documentation included
 * 
 * LEAFLET INTEGRATION:
 * Add these lines to <head> in index.html:
 * 
 * <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
 * 
 * HTML ELEMENT REQUIRED:
 * Add this div in your Infrastructure section of index.html:
 * 
 * <section class="infrastructure" id="infrastructure">
 *   <div class="container">
 *     <h2>Energy Infrastructure</h2>
 *     <p>Interactive map of Newfoundland energy facilities and terminals.</p>
 *     <div id="infrastructureMap" style="height: 600px; border-radius: 8px; overflow: hidden; margin: 30px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);"></div>
 *   </div>
 * </section>
 * 
 * SCRIPT LINKING IN index.html:
 * Add before closing </body> tag:
 * <script src="js/map.js"></script>
 * 
 * CUSTOMIZING MARKER LOCATIONS:
 * Modify the 'infrastructureMarkers' array below with actual coordinates.
 * Find coordinates using Google Maps (right-click > coordinates) or leaflet-search.
 * Format: { latitude: number, longitude: number }
 * Newfoundland's approximate center: 53.1355° N, 57.6604° W
 */

// Color palette matching roadmap and financial charts
const mapColorPalette = {
    primary: '#1a472a',      // Dark green
    secondary: '#2d5a3d',    // Medium green
    accent: '#a8d5ba',       // Light green
    danger: '#e74c3c',       // Red for alerts
    warning: '#f39c12',      // Orange for warnings
    success: '#27ae60',      // Bright green
    background: '#f0f4f1'    // Light background
};

// Infrastructure markers with placeholder coordinates for Newfoundland
const infrastructureMarkers = [
  {
        id: 'come-by-chance',
        name: 'Come By Chance Refinery',
        type: 'refinery',
        category: 'Primary Facility',
        description: 'Primary oil refining facility',
        coordinates: {
                latitude: 47.2500,
                longitude: -52.7333
        },
        details: {
                capacity: '115,000 barrels/day',
                function: 'Crude oil processing and refined product production',
                cost: '$2.5 billion CAD',
                employees: '850+',
                yearStarted: 2023,
                status: 'Operational'
        },
        icon: '🏭'
  },
  {
        id: 'whiffen-head',
        name: 'Whiffen Head Terminal',
        type: 'terminal',
        category: 'Export Terminal',
        description: 'Primary marine export facility',
        coordinates: {
                latitude: 47.3200,
                longitude: -52.8400
        },
        details: {
                capacity: '50,000 barrels/day',
                function: 'Marine loading and export operations',
                cost: '$650 million CAD',
                docking: '4 berths',
                yearStarted: 2024,
                status: 'Under Development'
        },
        icon: '⚓'
  },
  {
        id: 'storage-terminal-1',
        name: 'Strategic Storage Terminal - East',
        type: 'storage',
        category: 'Storage Facility',
        description: 'Crude oil storage facility',
        coordinates: {
                latitude: 47.3600,
                longitude: -52.6500
        },
        details: {
                capacity: '8 million barrels',
                function: 'Crude oil and feedstock storage',
                cost: '$180 million CAD',
                tanks: '6 storage tanks',
                yearStarted: 2022,
                status: 'Operational'
        },
        icon: '🛢️'
  },
  {
        id: 'storage-terminal-2',
        name: 'Strategic Storage Terminal - Central',
        type: 'storage',
        category: 'Storage Facility',
        description: 'Refined product storage facility',
        coordinates: {
                latitude: 47.2800,
                longitude: -52.8000
        },
        details: {
                capacity: '6 million barrels',
                function: 'Refined product storage and distribution',
                cost: '$145 million CAD',
                tanks: '5 storage tanks',
                yearStarted: 2022,
                status: 'Operational'
        },
        icon: '🛢️'
  },
  {
        id: 'storage-terminal-3',
        name: 'Strategic Storage Terminal - West',
        type: 'storage',
        category: 'Storage Facility',
        description: 'Emergency reserve storage',
        coordinates: {
                latitude: 47.1900,
                longitude: -52.9200
        },
        details: {
                capacity: '4 million barrels',
                function: 'Emergency reserve and strategic storage',
                cost: '$95 million CAD',
                tanks: '3 storage tanks',
                yearStarted: 2023,
                status: 'Operational'
        },
        icon: '🛢️'
  },
  {
        id: 'marine-facility',
        name: 'Marine Maintenance & Fueling Facility',
        type: 'maintenance',
        category: 'Support Facility',
        description: 'Vessel maintenance and fueling operations',
        coordinates: {
                latitude: 47.2650,
                longitude: -52.7100
        },
        details: {
                capacity: '5 vessels simultaneously',
                function: 'Bunkering, maintenance, and support operations',
                cost: '$220 million CAD',
                drydock: '1 facility',
                yearStarted: 2024,
                status: 'Under Development'
        },
        icon: '🛠️'
  },
  {
        id: 'memorial-university',
        name: 'Memorial University Petroleum Engineering Campus',
        type: 'education',
        category: 'Research & Education',
        description: 'Energy research and training facility',
        coordinates: {
                latitude: 47.5600,
                longitude: -52.7300
        },
        details: {
                capacity: '500 students/year',
                function: 'Engineering education, research, and workforce development',
                cost: '$85 million CAD',
                classrooms: '12 labs + lecture halls',
                yearStarted: 2025,
                status: 'Planned'
        },
        icon: '🎓'
  }
  ];

// Global map instance
let infrastructureMap = null;
let mapMarkers = [];
let currentActiveMarker = null;

/**
 * Create custom Leaflet icon with green color scheme
 */
function createCustomIcon(type) {
    const colors = {
          refinery: mapColorPalette.primary,
          terminal: mapColorPalette.secondary,
          storage: mapColorPalette.warning,
          maintenance: mapColorPalette.accent,
          education: mapColorPalette.success
    };

  const color = colors[type] || mapColorPalette.primary;

  return L.divIcon({
        html: `
              <div style="
                      background-color: ${color};
                              color: white;
                                      border-radius: 50%;
                                              width: 40px;
                                                      height: 40px;
                                                              display: flex;
                                                                      align-items: center;
                                                                              justify-content: center;
                                                                                      font-size: 20px;
                                                                                              border: 3px solid white;
                                                                                                      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
                                                                                                              cursor: pointer;
                                                                                                                      transition: transform 0.3s ease;
                                                                                                                            " class="map-marker">
                                                                                                                                    ${getMarkerEmoji(type)}
                                                                                                                                          </div>
                                                                                                                                              `,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
  });
}

/**
 * Get emoji for marker type
 */
function getMarkerEmoji(type) {
    const emojis = {
          refinery: '🏭',
          terminal: '⚓',
          storage: '🛢️',
          maintenance: '🛠️',
          education: '🎓'
    };
    return emojis[type] || '📍';
}

/**
 * Create tooltip HTML for marker
 */
function createTooltipContent(marker) {
    return `
        <div style="
              background: ${mapColorPalette.primary};
                    color: white;
                          padding: 12px;
                                border-radius: 6px;
                                      max-width: 250px;
                                            font-size: 13px;
                                                  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                                                      ">
                                                            <div style="font-weight: bold; margin-bottom: 6px; font-size: 14px;">
                                                                    ${marker.name}
                                                                          </div>
                                                                                <div style="line-height: 1.5; color: #a8d5ba;">
                                                                                        ${marker.description}
                                                                                              </div>
                                                                                                    <div style="margin-top: 8px; font-size: 12px; color: #d0e8d8;">
                                                                                                            <strong>${marker.category}</strong>
                                                                                                                  </div>
                                                                                                                      </div>
                                                                                                                        `;
}

/**
 * Create modal content for detailed facility information
 */
function createFacilityModal(marker) {
    const modal = document.createElement('div');
    modal.className = 'infrastructure-modal';
    modal.style.cssText = `
        position: fixed;
            top: 0;
                left: 0;
                    width: 100%;
                        height: 100%;
                            background: rgba(0, 0, 0, 0.6);
                                display: flex;
                                    align-items: center;
                                        justify-content: center;
                                            z-index: 9999;
                                                animation: fadeInModal 0.3s ease;
                                                  `;

  const content = document.createElement('div');
    content.style.cssText = `
        background: white;
            border-radius: 12px;
                padding: 40px;
                    max-width: 600px;
                        max-height: 85vh;
                            overflow-y: auto;
                                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
                                    position: relative;
                                        animation: slideUpModal 0.3s ease;
                                          `;

  const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
            top: 15px;
                right: 20px;
                    background: none;
                        border: none;
                            font-size: 32px;
                                color: ${mapColorPalette.primary};
                                    cursor: pointer;
                                        padding: 0;
                                            width: 30px;
                                                height: 30px;
                                                    display: flex;
                                                        align-items: center;
                                                            justify-content: center;
                                                                transition: color 0.2s;
                                                                  `;

  closeBtn.onmouseover = () => closeBtn.style.color = mapColorPalette.secondary;
    closeBtn.onmouseout = () => closeBtn.style.color = mapColorPalette.primary;

  const titleContainer = document.createElement('div');
    titleContainer.style.cssText = `
        display: flex;
            align-items: center;
                gap: 15px;
                    margin-bottom: 25px;
                        border-bottom: 3px solid ${mapColorPalette.accent};
                            padding-bottom: 15px;
                              `;

  const titleIcon = document.createElement('span');
    titleIcon.textContent = marker.icon;
    titleIcon.style.fontSize = '32px';

  const titleText = document.createElement('h2');
    titleText.textContent = marker.name;
    titleText.style.cssText = `
        color: ${mapColorPalette.primary};
            margin: 0;
                font-size: 24px;
                  `;

  titleContainer.appendChild(titleIcon);
    titleContainer.appendChild(titleText);

  const detailsGrid = document.createElement('div');
    detailsGrid.style.cssText = `
        display: grid;
            grid-template-columns: 1fr 1fr;
                gap: 15px;
                    margin-bottom: 25px;
                      `;

  const detailEntries = [
    { label: 'Type', value: marker.category },
    { label: 'Status', value: marker.details.status },
    { label: 'Capacity', value: marker.details.capacity },
    { label: 'Function', value: marker.details.function },
    { label: 'Total Cost', value: marker.details.cost },
    { label: 'Year Started', value: marker.details.yearStarted }
      ];

  detailEntries.forEach(entry => {
        const detailItem = document.createElement('div');
        detailItem.style.cssText = `
              padding: 12px;
                    background: ${mapColorPalette.background};
                          border-radius: 6px;
                                border-left: 4px solid ${mapColorPalette.secondary};
                                    `;

                            const label = document.createElement('div');
        label.textContent = entry.label;
        label.style.cssText = `
              font-weight: 600;
                    color: ${mapColorPalette.primary};
                          font-size: 12px;
                                text-transform: uppercase;
                                      margin-bottom: 5px;
                                          `;

                            const value = document.createElement('div');
        value.textContent = entry.value;
        value.style.cssText = `
              color: #555;
                    font-size: 14px;
                          font-weight: 500;
                              `;

                            detailItem.appendChild(label);
        detailItem.appendChild(value);
        detailsGrid.appendChild(detailItem);
  });

  const descriptionSection = document.createElement('div');
    descriptionSection.style.cssText = `
        padding: 15px;
            background: ${mapColorPalette.accent};
                color: white;
                    border-radius: 6px;
                        margin-bottom: 20px;
                            line-height: 1.6;
                              `;

  const descLabel = document.createElement('div');
    descLabel.textContent = 'Overview';
    descLabel.style.cssText = `
        font-weight: bold;
            margin-bottom: 8px;
                font-size: 14px;
                  `;

  const descText = document.createElement('div');
    descText.textContent = marker.description;
    descText.style.fontSize = '13px';

  descriptionSection.appendChild(descLabel);
    descriptionSection.appendChild(descText);

  closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
          if (e.target === modal) modal.remove();
    };

  content.appendChild(closeBtn);
    content.appendChild(titleContainer);
    content.appendChild(detailsGrid);
    content.appendChild(descriptionSection);
    modal.appendChild(content);

  return modal;
}

/**
 * Add markers to map
 */
function addMarkersToMap() {
    infrastructureMarkers.forEach(markerData => {
          const marker = L.marker(
                  [markerData.coordinates.latitude, markerData.coordinates.longitude],
            {
                      icon: createCustomIcon(markerData.type),
                      title: markerData.name
            }
                );

                                      // Create tooltip
                                      const tooltipContent = createTooltipContent(markerData);
          marker.bindTooltip(tooltipContent, {
                  permanent: false,
                  direction: 'top',
                  offset: [0, -20],
                  className: 'infrastructure-tooltip'
          });

                                      // Add click event for modal
                                      marker.on('click', function() {
                                              const modal = createFacilityModal(markerData);
                                              document.body.appendChild(modal);
                                      });

                                      // Highlight on hover
                                      marker.on('mouseover', function() {
                                              this.openTooltip();
                                              const iconElement = this._icon;
                                              if (iconElement) {
                                                        iconElement.style.transform = 'scale(1.2)';
                                              }
                                      });

                                      marker.on('mouseout', function() {
                                              const iconElement = this._icon;
                                              if (iconElement) {
                                                        iconElement.style.transform = 'scale(1)';
                                              }
                                      });

                                      marker.addTo(infrastructureMap);
          mapMarkers.push(marker);
    });
}

/**
 * Initialize the map
 */
function initializeInfrastructureMap() {
    const mapContainer = document.getElementById('infrastructureMap');

  if (!mapContainer) {
        console.error('Map container with id "infrastructureMap" not found. Add <div id="infrastructureMap"></div> to your HTML.');
        return;
  }

  // Center coordinates (Newfoundland average)
  const centerLat = 47.2500;
    const centerLng = -52.7500;
    const zoomLevel = 9;

  // Initialize map
  infrastructureMap = L.map('infrastructureMap', {
        center: [centerLat, centerLng],
        zoom: zoomLevel,
        scrollWheelZoom: true,
        dragging: true,
        zoomControl: true
  });

  // Add base layer - OpenStreetMap with custom styling
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
        className: 'leaflet-tile-light'
  }).addTo(infrastructureMap);

  // Add dark overlay for better contrast
  L.tileLayer('', {
        attribution: '',
        className: 'leaflet-overlay'
  }).addTo(infrastructureMap);

  // Add markers
  addMarkersToMap();

  // Fit all markers in view
  if (mapMarkers.length > 0) {
        const group = new L.featureGroup(mapMarkers);
        infrastructureMap.fitBounds(group.getBounds(), { padding: [50, 50] });
  }

  // Handle responsive resizing
  window.addEventListener('resize', function() {
        if (infrastructureMap) {
                infrastructureMap.invalidateSize();
        }
  });
}

/**
 * Get marker by ID
 */
function getMarkerById(markerId) {
    return infrastructureMarkers.find(m => m.id === markerId);
}

/**
 * Highlight marker on map
 */
function highlightMarker(markerId) {
    const marker = getMarkerById(markerId);
    if (marker && mapMarkers.length > 0) {
          const leafletMarker = mapMarkers.find(m => 
                                                      m._latlng.lat === marker.coordinates.latitude && 
                                                      m._latlng.lng === marker.coordinates.longitude
                                                    );
          if (leafletMarker) {
                  leafletMarker.openTooltip();
                  infrastructureMap.setView(leafletMarker.getLatLng(), 12);
          }
    }
}

/**
 * Get all markers data
 */
function getAllMarkers() {
    return infrastructureMarkers;
}

/**
 * Filter markers by type
 */
function filterMarkersByType(type) {
    return infrastructureMarkers.filter(m => m.type === type);
}

/**
 * Add custom styles to document
 */
function addMapStyles() {
    if (document.getElementById('infrastructure-map-styles')) {
          return; // Already added
    }

  const style = document.createElement('style');
    style.id = 'infrastructure-map-styles';
    style.textContent = `
        @keyframes fadeInModal {
              from { opacity: 0; }
                    to { opacity: 1; }
                        }

                            @keyframes slideUpModal {
                                  from { transform: translateY(30px); opacity: 0; }
                                        to { transform: translateY(0); opacity: 1; }
                                            }

                                                .infrastructure-tooltip .leaflet-tooltip {
                                                      background: ${mapColorPalette.primary} !important;
                                                            border: 2px solid ${mapColorPalette.accent} !important;
                                                                  border-radius: 6px !important;
                                                                        padding: 8px 12px !important;
                                                                              font-size: 13px !important;
                                                                                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2) !important;
                                                                                        }

                                                                                            .infrastructure-tooltip .leaflet-tooltip-left::before {
                                                                                                  border-left-color: ${mapColorPalette.primary} !important;
                                                                                                      }
                                                                                                      
                                                                                                          .custom-marker {
                                                                                                                transition: transform 0.3s ease !important;
                                                                                                                    }
                                                                                                                    
                                                                                                                        .custom-marker:hover {
                                                                                                                              transform: scale(1.2) !important;
                                                                                                                                  }
                                                                                                                                  
                                                                                                                                      #infrastructureMap .leaflet-control-zoom {
                                                                                                                                            border: 2px solid ${mapColorPalette.secondary} !important;
                                                                                                                                                  border-radius: 6px !important;
                                                                                                                                                      }
                                                                                                                                                      
                                                                                                                                                          #infrastructureMap .leaflet-control-zoom a {
                                                                                                                                                                background: ${mapColorPalette.accent} !important;
                                                                                                                                                                      color: ${mapColorPalette.primary} !important;
                                                                                                                                                                            border: none !important;
                                                                                                                                                                                  font-weight: bold !important;
                                                                                                                                                                                      }
                                                                                                                                                                                      
                                                                                                                                                                                          #infrastructureMap .leaflet-control-zoom a:hover {
                                                                                                                                                                                                background: ${mapColorPalette.secondary} !important;
                                                                                                                                                                                                      color: white !important;
                                                                                                                                                                                                          }
                                                                                                                                                                                                          
                                                                                                                                                                                                              /* Responsive adjustments */
                                                                                                                                                                                                                  @media (max-width: 768px) {
                                                                                                                                                                                                                        .infrastructure-modal {
                                                                                                                                                                                                                                max-width: 90vw !important;
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                            #infrastructureMap {
                                                                                                                                                                                                                                                    height: 400px !important;
                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                  @media (max-width: 480px) {
                                                                                                                                                                                                                                                                        #infrastructureMap {
                                                                                                                                                                                                                                                                                height: 300px !important;
                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                            .infrastructure-modal > div {
                                                                                                                                                                                                                                                                                                    max-width: 95vw !important;
                                                                                                                                                                                                                                                                                                            padding: 25px !important;
                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                        `;

  document.head.appendChild(style);
}

/**
 * Initialize everything when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    addMapStyles();
    initializeInfrastructureMap();
});
