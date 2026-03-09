// Configuration and Categories exactly matching screenshot
const mapCategories = [
    {
        id: "metal",
        title: "METAL",
        plants: [
            // Dark/Black background items (Baba Container)
            { id: "M01", name: "BABA CONTAINER MANUFACTURERS UNIT I (DRUM PLANT) | HYDERABAD", color: "black", coords: [17.3850, 78.4867], num: '01' },
            { id: "M02", name: "BABA CONTAINER MANUFACTURERS UNIT II (BITTUMEN BARREL PLANT) | VISAKHAPATNAM", color: "black", coords: [17.6868, 83.2185], num: '02' },
            { id: "M03", name: "BABA CONTAINER MANUFACTURERS UNIT II (COD-HPCL) | VISAKHAPATNAM", color: "black", coords: [17.6869, 83.2186], num: '03' },
            { id: "M04", name: "BABA CONTAINER MANUFACTURERS UNIT III (BITTUMEN BARREL PLANT) | RAIGAD, MAHARASHTRA", color: "black", coords: [18.5158, 73.1822], num: '04' },
            { id: "M05", name: "BABA CONTAINER MANUFACTURERS UNIT III (COD-HPCL) | RAIGAD, MAHARASHTRA", color: "black", coords: [18.5159, 73.1823], num: '05' },
            
            // Red background items (Chandra Container)
            { id: "M06", name: "CHANDRA CONTAINER MANUFACTURERS UNIT I (DRUM PLANT) | PATANCHERU, HYDERABAD", color: "red", coords: [17.5287, 78.2667], num: '01' },
            { id: "M07", name: "CHANDRA CONTAINER MANUFACTURERS UNIT II (BARREL PLANT) | PATANCHERU, HYDERABAD", color: "red", coords: [17.5288, 78.2668], num: '02' },
            { id: "M08", name: "CHANDRA CONTAINER MANUFACTURERS UNIT III (DRUM PLANT) | GUNDED, MAHABOOB NAGAR", color: "red", coords: [16.7432, 77.9859], num: '03' },
            { id: "M09", name: "CHANDRA CONTAINER MANUFACTURES UNIT-V (BARREL PLANT) | CHITTOOR", color: "red", coords: [13.2172, 79.1003], num: '04' }
        ]
    },
    {
        id: "plastic",
        title: "PLASTIC",
        plants: [
            // Blue background items (Saibaba Polymer Plastic)
            { id: "P01", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT I (PLASTIC PLANT) | SRIPEREMBUDUR, CHENNAI", color: "blue", coords: [12.9678, 79.9452], num: '01' },
            { id: "P02", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT III (PLASTIC PLANT) | GUNDED, MAHABOOB NAGAR", color: "blue", coords: [16.7433, 77.9860], num: '02' },
            { id: "P03", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT IV (PLASTIC PLANT) | RAMA BAI NAGAR, KANPUR", color: "blue", coords: [26.4499, 80.3319], num: '03' },
            { id: "P04", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT VII (PLASTIC PLANT) | IMT ROHTAK, HARYANA", color: "blue", coords: [28.8955, 76.5833], num: '04' },
            { id: "P05", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT-IX (PLASTIC PLANT) | LUCKNOW", color: "blue", coords: [26.8467, 80.9462], num: '05' },
            { id: "P06", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT-X (PLASTIC PLANT) | LUDHIANA", color: "blue", coords: [30.9010, 75.8573], num: '06' },
            { id: "P07", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD UNIT VI (PLASTIC PLANT) | MUMBAI, MAHARASHTRA", color: "blue", coords: [19.0760, 72.8777], num: '07' }
        ]
    },
    {
        id: "adblue",
        title: "ADBLUE",
        plants: [
            // Green background items (Saibaba Polymer Ad-Blue)
            { id: "A01", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | PATANCHERU, HYDERABAD", color: "green", coords: [17.5289, 78.2669], num: '01' },
            { id: "A02", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | ALAMATHI, CHENNAI", color: "green", coords: [13.2000, 80.1500], num: '02' },
            { id: "A03", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | KOLKATA", color: "green", coords: [22.5726, 88.3639], num: '03' },
            { id: "A04", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | BANGALORE", color: "green", coords: [12.9716, 77.5946], num: '04' },
            { id: "A05", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | RAIGAD, MAHARASHTRA", color: "green", coords: [18.5160, 73.1824], num: '05' },
            { id: "A06", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | RAIPUR, CHHATTISGARH", color: "green", coords: [21.2514, 81.6296], num: '06' },
            { id: "A07", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | RAMA BAI NAGAR, KANPUR", color: "green", coords: [26.4500, 80.3320], num: '07' },
            { id: "A08", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | CUTTACK, ODISHA", color: "green", coords: [20.4625, 85.8830], num: '08' },
            { id: "A09", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | COIMBATORE,TAMILNADU", color: "green", coords: [11.0168, 76.9558], num: '09' },
            { id: "A10", name: "SAIBABA POLYMER TECHNOLOGIES PVT LTD (AD-BLUE PLANT) | MANGLORE,KARNATAKA", color: "green", coords: [12.9141, 74.8560], num: '10' }
        ]
    }
];

// Color mapping for SVG pins based on string keys
const colorMap = {
    'black': '#000000',
    'red': '#c00000',
    'blue': '#0070c0',
    'green': '#00b050'
};

// Custom Num SVG Icon Generator (using pure HTML/SVG to overlay numbers on markers)// Function definitions
function createNumberedIconSVG(num, colorKey) {
    const hexColor = colorMap[colorKey];
    return `
        <svg class="pin-svg" viewBox="0 0 24 32" width="24" height="32" style="overflow:visible">
            <path fill="${hexColor}" stroke="#ffffff" stroke-width="1.5" d="M12,2C6.48,2 2,6.48 2,12C2,19.5 12,30 12,30C12,30 22,19.5 22,12C22,6.48 17.52,2 12,2Z"/>
            <text x="12" y="14" fill="white" font-weight="700" font-size="11px" text-anchor="middle" dominant-baseline="central">${num}</text>
        </svg>
    `;
}

// State
let markers = {}; 

// Initialize Application
function bootstrap() {
    initMap();
    renderSidebar();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
} else {
    bootstrap();
}

function initMap() {
    // GEOJSON_URL is provided by the CI View
    fetch(GEOJSON_URL)
        .then(response => {
            if (!response.ok) throw new Error("GeoJSON not found");
            return response.json();
        })
        .then(data => {
            // Filter out islands to focus on the mainland and maximize map scale
            const excludeStates = ['Andaman', 'Nicobar', 'Lakshadweep'];
            data.features = data.features.filter(feature => {
                const name = feature.properties.st_nm || '';
                return !excludeStates.some(exclude => name.includes(exclude));
            });

            // Determine which states have plants
            const statesWithPlants = new Set();
            
            // Collect all plant coordinates into an array of turf points
            const plantPoints = [];
            const allPlants = [];
            mapCategories.forEach(category => {
                category.plants.forEach(plant => {
                    // Turf expects [longitude, latitude]
                    plantPoints.push(turf.point([plant.coords[1], plant.coords[0]]));
                    allPlants.push(plant);
                });
            });
            const pts = turf.featureCollection(plantPoints);

            // Check each state polygon against plant points and collect polygons for dissolving
            const allPolygons = [];
            data.features.forEach(feature => {
                const stateName = feature.properties.st_nm;
                
                if (feature.geometry && (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon')) {
                    allPolygons.push(feature);
                    const ptsWithin = turf.pointsWithinPolygon(pts, feature);
                    if (ptsWithin.features.length > 0) {
                        statesWithPlants.add(stateName);
                    }
                }
            });

            // D3 Setup
            const mapDiv = document.getElementById('map');
            const width = mapDiv.clientWidth || 800; // fallback width
            const height = mapDiv.clientHeight || 600;

            const svg = d3.select('#map').append('svg')
                .attr('width', '100%')
                .attr('height', '100%')
                .attr('viewBox', `0 0 ${width} ${height}`);

            // Projection to fit the GeoJSON exactly
            const projection = d3.geoMercator()
                .fitExtent([[20, 20], [width - 20, height - 20]], data);
            
            const pathGenerator = d3.geoPath().projection(projection);

            // Draw shadow outline
            try {
                const featureCollection = turf.featureCollection(allPolygons);
                const unioned = turf.dissolve(featureCollection);
                
                svg.append('path')
                    .datum(unioned.features[0])
                    .attr('d', pathGenerator)
                    .attr('class', 'india-outline');
            } catch (e) {
                console.warn("Could not create outer outline", e);
            }

            // Draw individual state boundaries on top
            svg.selectAll('.state-boundary')
                .data(data.features)
                .enter().append('path')
                .attr('d', pathGenerator)
                .attr('class', d => {
                    const hasPlants = statesWithPlants.has(d.properties.st_nm);
                    return hasPlants ? 'state-boundary has-plants' : 'state-boundary';
                });

            // Create a tooltip div
            const tooltip = d3.select('body').append('div')
                .attr('class', 'custom-tooltip')
                .style('opacity', 0);

            // Draw markers
            const pins = svg.selectAll('.numbered-pin')
                .data(allPlants)
                .enter().append('g')
                .attr('class', 'numbered-pin')
                .attr('id', d => `pin-${d.id}`)
                .attr('transform', d => {
                    const p = projection([d.coords[1], d.coords[0]]);
                    return `translate(${p[0] - 12}, ${p[1] - 32})`;
                })
                .html(d => createNumberedIconSVG(d.num, d.color))
                .style('cursor', 'pointer');
                
            // Sort to put black/red on top
            pins.sort((a,b) => {
                const aTop = (a.color === 'black' || a.color === 'red') ? 1 : 0;
                const bTop = (b.color === 'black' || b.color === 'red') ? 1 : 0;
                return aTop - bTop;
            });

            // Marker Hover effects
            pins.on('mouseover', function(event, d) {
                d3.select(this).classed('active-marker', true);
                
                tooltip.transition().duration(200).style('opacity', 1);
                tooltip.html(`<h3 class="popup-title">${d.name}</h3>`)
                    .style('left', (event.pageX + 15) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
                
                highlightListItem(d.id);
            })
            .on('mouseout', function(event, d) {
                if (!document.getElementById(`list-${d.id}`).matches(':hover')) {
                    d3.select(this).classed('active-marker', false);
                }
                tooltip.transition().duration(500).style('opacity', 0);
                unhighlightListItem(d.id);
            });
        })
        .catch(err => {
            console.warn("Could not load india.geojson or D3 rendering failed", err);
        });
}

function renderSidebar() {
    const container = document.getElementById('plant-list');
    container.innerHTML = '';

    mapCategories.forEach(category => {
        // Add Category Header
        const header = document.createElement('h2');
        header.className = 'category-heading';
        header.textContent = category.title;
        container.appendChild(header);

        // Add Plants
        category.plants.forEach(plant => {
            const item = document.createElement('div');
            // e.g "plant-item bg-black"
            item.className = `plant-item bg-${plant.color}`;
            item.id = `list-${plant.id}`;
            
            // The text is identical to the upload. 
            item.textContent = plant.name;

            // Hover interactions fixing Leaflet dependencies
            item.addEventListener('mouseenter', () => {
                const marker = document.getElementById(`pin-${plant.id}`);
                if(marker) {
                    marker.classList.add('active-marker');
                }
            });
            
            item.addEventListener('mouseleave', () => {
                 const marker = document.getElementById(`pin-${plant.id}`);
                 if(marker) {
                    marker.classList.remove('active-marker');
                 }
            });

            container.appendChild(item);
        });
    });
}

function highlightListItem(id) {
    const item = document.getElementById(`list-${id}`);
    if (item) {
        document.querySelectorAll('.plant-item').forEach(el => el.classList.remove('active'));
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function unhighlightListItem(id) {
    const item = document.getElementById(`list-${id}`);
    if (item) {
        item.classList.remove('active');
    }
}
