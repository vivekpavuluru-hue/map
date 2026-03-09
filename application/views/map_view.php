<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Plant Locations</title>
    
    <!-- Google Fonts for Modern Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link rel="stylesheet" href="<?php echo base_url('assets/css/map_style.css?v=13'); ?>">
</head>
<body>

    <div class="app-container">
        <!-- Main Map Area (Left Side) -->
        <main class="map-container">
            <div id="map"></div>
        </main>

        <!-- Sidebar for List of Plants (Right Side) -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h1 class="main-title">PLANTS</h1>
                <hr class="title-divider">
            </div>
            
            <div class="sidebar-content" id="plant-list">
                <!-- Grouped plant items will be injected here via JavaScript -->
            </div>
        </aside>
    </div>

    <!-- D3.js -->
    <script src="https://d3js.org/d3.v7.min.js"></script>
    
    <!-- Turf.js for Geospatial Analysis -->
    <script src="https://cdn.jsdelivr.net/npm/@turf/turf@6/turf.min.js"></script>

    <!-- Map Configuration -->
    <script>
        const CI_BASE_URL = "<?php echo base_url(); ?>";
        const GEOJSON_URL = "<?php echo base_url('assets/geojson/india.geojson'); ?>";
    </script>
    
    <!-- Custom JS -->
    <script src="<?php echo base_url('assets/js/map_script.js?v=13'); ?>"></script>
</body>
</html>
