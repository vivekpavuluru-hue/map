$ErrorActionPreference = "Stop"

$ciUrl = "https://github.com/bcit-ci/CodeIgniter/archive/refs/tags/3.1.13.zip"
Invoke-WebRequest -Uri $ciUrl -OutFile "ci.zip"
Expand-Archive -Path "ci.zip" -DestinationPath "ci_extracted" -Force

Copy-Item -Path "ci_extracted/CodeIgniter-3.1.13/system" -Destination "system" -Recurse -Force
Copy-Item -Path "ci_extracted/CodeIgniter-3.1.13/index.php" -Destination "index.php" -Force
Copy-Item -Path "ci_extracted/CodeIgniter-3.1.13/application/config" -Destination "application/config" -Recurse -Force
Copy-Item -Path "ci_extracted/CodeIgniter-3.1.13/application/core" -Destination "application/core" -Recurse -Force

# Edit config.php
$configPath = "application/config/config.php"
$configContent = Get-Content $configPath
$configContent = $configContent -replace "\`$config\['base_url'\] = '';", "`$config['base_url'] = 'http://localhost/map/';"
Set-Content -Path $configPath -Value $configContent

# Edit routes.php
$routesPath = "application/config/routes.php"
$routesContent = Get-Content $routesPath
$routesContent = $routesContent -replace "\`$route\['default_controller'\] = 'welcome';", "`$route['default_controller'] = 'map';"
Set-Content -Path $routesPath -Value $routesContent

# Cleanup
Remove-Item -Path "ci.zip" -Force
Remove-Item -Path "ci_extracted" -Recurse -Force
