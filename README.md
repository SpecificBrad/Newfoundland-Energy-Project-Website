# Newfoundland Energy Transformation Project Website

**Live Site:** https://SpecificBrad.github.io/Newfoundland-Energy-Project-Website/

A professional, interactive website showcasing a 20-year energy transformation initiative for Newfoundland and Labrador. The site features interactive charts, financial projections, infrastructure mapping, and comprehensive project documentation.

## 🎯 Project Overview

The Newfoundland Energy Transformation Project website provides stakeholders with:

- **20-Year Energy Roadmap** - Interactive timeline visualization of strategic initiatives
- - **Financial Projections** - Multi-scenario analysis with 50%, 75%, and 100% market capture models
  - - **Infrastructure Mapping** - Interactive Leaflet.js map showing 7 key facilities
    - - **Project Phases** - Detailed breakdown of debt repayment, expansion, and technology integration
      - - **Impact Analysis** - Economic, employment, environmental, and regional development metrics
       
        - ## 📋 Features
       
        - ### Interactive Components
        - - ✅ **Chart.js Visualizations** - 20-year roadmap with hover tooltips
          - - ✅ **Financial Dashboard** - Real-time scenario switching with metrics display
            - - ✅ **Leaflet Infrastructure Map** - Geospatial markers with facility modals
              - - ✅ **Responsive Design** - Desktop, tablet (768px), and mobile (480px) optimized
                - - ✅ **Professional UI** - Consistent green color palette (#1a472a, #2d5a3d, #a8d5ba)
                 
                  - ### Technical Stack
                  - - HTML5 semantic markup
                    - - CSS3 with responsive Grid and Flexbox layouts
                      - - Vanilla JavaScript (no framework dependencies)
                        - - Chart.js 4.4.0 - Financial and roadmap visualization
                          - - Leaflet.js 1.9.4 - Interactive mapping
                            - - SVG illustrations - Production-ready vector graphics
                             
                              - ## 🚀 Quick Start
                             
                              - ### Prerequisites
                              - - Node.js (optional - for local development)
                                - - Modern web browser (Chrome, Firefox, Safari, Edge)
                                  - - Git
                                   
                                    - ### Local Development
                                   
                                    - 1. **Clone the repository:**
                                      2.    ```bash
                                               git clone https://github.com/SpecificBrad/Newfoundland-Energy-Project-Website.git
                                               cd Newfoundland-Energy-Project-Website
                                               ```

                                            2. **Open in browser (direct file method):**
                                            3.    ```bash
                                                     # macOS
                                                     open index.html

                                                     # Windows
                                                     start index.html

                                                     # Linux
                                                     xdg-open index.html
                                                     ```

                                                  3. **Or use a local HTTP server:**
                                                  4.    ```bash
                                                           # Python 3
                                                           python -m http.server 8000

                                                           # Node.js (http-server)
                                                           npx http-server

                                                           # Then visit: http://localhost:8000
                                                           ```

                                                        ## 📂 File Structure

                                                    ```
                                                    Newfoundland-Energy-Project-Website/
                                                    ├── index.html              # Main landing page
                                                    ├── style.css               # All CSS styling (responsive breakpoints)
                                                    ├── roadmap.js              # 20-year roadmap Chart.js visualization
                                                    ├── charts.js               # Financial projections with scenario switching
                                                    ├── README.md               # This file
                                                    ├── js/
                                                    │   └── map.js              # Leaflet.js infrastructure mapping
                                                    └── assets/images/
                                                        ├── refinery.svg        # Oil refinery illustration
                                                        ├── cogeneration.svg    # Cogeneration plant illustration
                                                        ├── marine_facility.svg # Marine facility illustration
                                                        └── university_campus.svg # University campus illustration
                                                    ```

                                                    ## 🔗 Script and Asset References

                                              ### HTML Head (CDN Links)
                                        ```html
                                        <!-- Main Stylesheet -->
                                        <link rel="stylesheet" href="style.css">

                                        <!-- Chart.js -->
                                        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

                                        <!-- Leaflet.js -->
                                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.css" />
                                        <script src="https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js"></script>
                                        ```

                                        ### JavaScript Files (Before Closing </body>)
                                      ```html
                                      <script src="roadmap.js"></script>
                                      <script src="charts.js"></script>
                                      <script src="js/map.js"></script>
                                      ```

                                      ### SVG Assets
                                      SVG illustrations are located in `assets/images/`:
                                      - `refinery.svg` - 120KB, responsive scaling
                                      - - `cogeneration.svg` - 85KB, responsive scaling
                                        - - `marine_facility.svg` - 95KB, responsive scaling
                                          - - `university_campus.svg` - 110KB, responsive scaling
                                           
                                            - All paths are relative and work correctly with GitHub Pages hosting.
                                           
                                            - ## 🌐 GitHub Pages Deployment
                                           
                                            - ### Enable GitHub Pages (Already Configured)
                                           
                                            - 1. Go to repository **Settings** → **Pages**
                                              2. 2. **Source:** Select "Deploy from a branch"
                                                 3. 3. **Branch:** Select "main"
                                                    4. 4. **Folder:** Select "/(root)"
                                                       5. 5. Click **Save**
                                                         
                                                          6. The site is now live at: `https://SpecificBrad.github.io/Newfoundland-Energy-Project-Website/`
                                                         
                                                          7. ### Custom Domain Setup (Optional)
                                                         
                                                          8. To use a custom domain like `newfoundlandenergy.ca`:
                                                         
                                                          9. 1. **Purchase domain** from registrar (GoDaddy, Namecheap, etc.)
                                                             2. 2. **In GitHub repository Settings → Pages:**
                                                                3.    - Add custom domain: `newfoundlandenergy.ca`
                                                                      -    - Enable "Enforce HTTPS"
                                                                           - 3. **Update DNS settings** at your registrar:
                                                                             4.    ```
                                                                                      Type: A
                                                                                      Name: @
                                                                                      Value: 185.199.108.153
                                                                                              185.199.109.153
                                                                                              185.199.110.153
                                                                                              185.199.111.153
                                                                                      ```
                                                                                   4. **DNS validation** takes 24 hours. GitHub will confirm with a green checkmark.
                                                                               
                                                                                   5. See: [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
                                                                               
                                                                                   6. ## 🎨 Customization Guide
                                                                               
                                                                                   7. ### Updating Content
                                                                               
                                                                                   8. #### Chart Data
                                                                                   9. Edit `charts.js` - Financial scenarios object:
                                                                                   10. ```javascript
                                                                                       const financialScenarios = {
                                                                                           50: { name: '50% Market Capture', data: { ... } },
                                                                                           75: { name: '75% Market Capture', data: { ... } },
                                                                                           100: { name: '100% Market Capture', data: { ... } }
                                                                                       };
                                                                                       ```

                                                                                       #### Infrastructure Markers
                                                                                       Edit `js/map.js` - Modify `infrastructureMarkers` array:
                                                                                       ```javascript
                                                                                       const infrastructureMarkers = [
                                                                                           {
                                                                                               name: 'Facility Name',
                                                                                               type: 'refinery', // or 'terminal', 'storage', etc.
                                                                                               coordinates: { latitude: 47.25, longitude: -52.73 },
                                                                                               details: { capacity: '...', function: '...' },
                                                                                               ...
                                                                                           }
                                                                                       ];
                                                                                       ```

                                                                                       #### Roadmap Phases
                                                                                       Edit `roadmap.js` - Modify `roadmapData` array with new phases.

                                                                                       #### Styling (Color Palette)
                                                                                       Edit `style.css` - Update CSS variables:
                                                                                       ```css
                                                                                       :root {
                                                                                           --primary-color: #1a472a;      /* Dark green */
                                                                                           --secondary-color: #2d5a3d;    /* Medium green */
                                                                                           --accent-color: #a8d5ba;       /* Light green */
                                                                                       }
                                                                                       ```

                                                                                       ### Adding New Sections

                                                                                       1. **Add HTML in index.html:**
                                                                                       2.    ```html
                                                                                                <section id="new-section" class="new-section">
                                                                                                    <div class="container">
                                                                                                        <h2>New Section Title</h2>
                                                                                                        <!-- Content here -->
                                                                                                    </div>
                                                                                                </section>
                                                                                                ```

                                                                                             2. **Add CSS in style.css:**
                                                                                             3.    ```css
                                                                                                      .new-section {
                                                                                                          padding: 4rem 0;
                                                                                                          background: white;
                                                                                                          border-bottom: 1px solid var(--border-color);
                                                                                                      }
                                                                                                      ```

                                                                                                   3. **Link in navigation** - Update nav menu in header.
                                                                                               
                                                                                                   4. ### Responsive Design Breakpoints
                                                                                               
                                                                                                   5. - **Desktop:** 1200px+ (2-3 column layouts)
                                                                                                      - - **Tablet:** 768px-1199px (2-column layouts)
                                                                                                        - - **Mobile:** 480px-767px (single column)
                                                                                                          - - **Small Mobile:** < 480px (full-width)
                                                                                                           
                                                                                                            - All components automatically adapt at these breakpoints using CSS Grid and media queries.
                                                                                                           
                                                                                                            - ## 🧪 Testing & Verification
                                                                                                           
                                                                                                            - ### Cross-Browser Testing
                                                                                                            - Verified on:
                                                                                                            - - ✅ Chrome/Chromium (latest)
                                                                                                              - - ✅ Firefox (latest)
                                                                                                                - - ✅ Safari (latest)
                                                                                                                  - - ✅ Edge (latest)
                                                                                                                   
                                                                                                                    - ### Responsiveness Testing
                                                                                                                    - Tested at:
                                                                                                                    - - ✅ Mobile: 320px, 375px, 480px
                                                                                                                      - - ✅ Tablet: 768px, 1024px
                                                                                                                        - - ✅ Desktop: 1200px, 1440px, 1920px
                                                                                                                         
                                                                                                                          - ### Console Checks
                                                                                                                          - - No JavaScript errors
                                                                                                                            - - No mixed content warnings (all HTTPS CDNs)
                                                                                                                              - - All images and SVGs load correctly
                                                                                                                               
                                                                                                                                - ## 📊 Performance
                                                                                                                               
                                                                                                                                - ### File Sizes
                                                                                                                                - - `index.html` - 7.5 KB
                                                                                                                                  - - `style.css` - 15.2 KB
                                                                                                                                    - - `roadmap.js` - 9.8 KB
                                                                                                                                      - - `charts.js` - 6.3 KB
                                                                                                                                        - - `js/map.js` - 34.3 KB
                                                                                                                                          - - **Total (uncompressed):** ~73 KB
                                                                                                                                           
                                                                                                                                            - ### Optimization Tips
                                                                                                                                            - - CSS and JS are already minified-ready
                                                                                                                                              - - SVG assets use SVGZ compression (optional)
                                                                                                                                                - - CDN resources (Chart.js, Leaflet) are cached by browsers
                                                                                                                                                  - - Consider enabling gzip compression on server
                                                                                                                                                   
                                                                                                                                                    - ## 🔒 Security & Compliance
                                                                                                                                                   
                                                                                                                                                    - - ✅ HTTPS enforced on GitHub Pages
                                                                                                                                                      - - ✅ No sensitive data in client-side code
                                                                                                                                                        - - ✅ Content Security Policy friendly
                                                                                                                                                          - - ✅ No tracking/analytics (privacy-focused)
                                                                                                                                                            - - ✅ Semantic HTML with ARIA labels
                                                                                                                                                              - - ✅ WCAG AA accessibility compliant
                                                                                                                                                               
                                                                                                                                                                - ## 📝 Updating & Maintenance
                                                                                                                                                               
                                                                                                                                                                - ### Regular Updates
                                                                                                                                                                - 1. **Content Updates:**
                                                                                                                                                                  2.    ```bash
                                                                                                                                                                           # Edit index.html sections directly
                                                                                                                                                                           git add index.html
                                                                                                                                                                           git commit -m "Update content: [description]"
                                                                                                                                                                           git push origin main
                                                                                                                                                                           ```
                                                                                                                                                                        
                                                                                                                                                                        2. **Data Updates (Charts/Map):**
                                                                                                                                                                        3.    ```bash
                                                                                                                                                                                 # Edit data files
                                                                                                                                                                                 git add charts.js js/map.js
                                                                                                                                                                                    git commit -m "Update financial/infrastructure data"
                                                                                                                                                                                 git push origin main
                                                                                                                                                                                 ```
                                                                                                                                                                              
                                                                                                                                                                              3. **Style Updates:**
                                                                                                                                                                              4.    ```bash
                                                                                                                                                                                       git add style.css
                                                                                                                                                                                       git commit -m "Update styles: [description]"
                                                                                                                                                                                          git push origin main
                                                                                                                                                                                       ```
                                                                                                                                                                                    
                                                                                                                                                                                    ### Rollback Changes
                                                                                                                                                                                ```bash
                                                                                                                                                                                # View commit history
                                                                                                                                                                                git log --oneline

                                                                                                                                                                                # Revert to previous commit
                                                                                                                                                                                git revert <commit-hash>
                                                                                                                                                                                git push origin main
                                                                                                                                                                                ```
                                                                                                                                                                                
                                                                                                                                                                                ## 🐛 Troubleshooting
                                                                                                                                                                                
                                                                                                                                                                                ### Site Not Loading
                                                                                                                                                                          - Check GitHub Pages is enabled in Settings → Pages
                                                                                                                                                                          - - Verify branch is set to "main"
                                                                                                                                                                            - - Check URL matches: `https://SpecificBrad.github.io/Newfoundland-Energy-Project-Website/`
                                                                                                                                                                            - Clear browser cache (Ctrl+Shift+Delete)
                                                                                                                                                                           
                                                                                                                                                                            - ### Charts Not Displaying
                                                                                                                                                                            - - Verify Chart.js CDN is accessible
                                                                                                                                                                              - - Check browser console for errors (F12)
                                                                                                                                                                              - Ensure `charts.js` and `roadmap.js` are linked in index.html
                                                                                                                                                                             
                                                                                                                                                                              - ### Map Not Loading
                                                                                                                                                                              - Verify Leaflet CDN links in index.html head
                                                                                                                                                                              - Check browser console for Leaflet errors
                                                                                                                                                                              - Ensure `js/map.js` is linked before closing </body>
                                                                                                                                                                              - Verify OpenStreetMap tiles are accessible
                                                                                                                                                                              
                                                                                                                                                                              ### SVG Images Not Showing
                                                                                                                                                                              - Check file paths: `assets/images/[filename].svg`
                                                                                                                                                                              - - Verify SVG files exist in repository
                                                                                                                                                                              - Check browser console for 404 errors
                                                                                                                                                                              - - Try clearing browser cache
                                                                                                                                                                                - 
                                                                                                                                                                                ## 📧 Contact & Support
                                                                                                                                                                                
                                                                                                                                                                                For questions, feature requests, or issues:
                                                                                                                                                                                - **GitHub Issues:** Create an issue in the repository
                                                                                                                                                                                - **Email:** [Contact information]
                                                                                                                                                                                - **Repository:** https://github.com/SpecificBrad/Newfoundland-Energy-Project-Website
                                                                                                                                                                                
                                                                                                                                                                                ## 📄 License
                                                                                                                                                                                
                                                                                                                                                                                This project is open source and available under the MIT License.
                                                                                                                                                                                
                                                                                                                                                                                ## 🙏 Credits & Acknowledgments
                                                                                                                                                                                
                                                                                                                                                                                - **Chart.js** - https://www.chartjs.org/
                                                                                                                                                                                - **Leaflet.js** - https://leafletjs.com/
                                                                                                                                                                                - **OpenStreetMap** - https://www.openstreetmap.org/
                                                                                                                                                                                - **Project Design** - Newfoundland Energy Transformation Initiative
                                                                                                                                                                                
                                                                                                                                                                                ---
                                                                                                                                                                                
                                                                                                                                                                                **Last Updated:** January 4, 2026  
                                                                                                                                                                                **Status:** Production Ready ✅  
                                                                                                                                                                                **GitHub Pages:** Active
                                                                                                                                                                                **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)
