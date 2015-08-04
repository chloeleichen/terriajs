Change Log
==========

### 1.0.41

* Improvements to `AbsIttCatalogItem` caching from the Tools menu.

### 1.0.40

* `ArcGisMapServerCatalogItem` now shows "NoData" tiles by default even after showing the popup message saying that max zoom is exceeded.  This can be disabled by setting its `showTilesAfterMessage` property to false.

### 1.0.39

* Fixed a race condition in `AbsIttCatalogItem` that could cause the legend and map to show different state than the Now Viewing UI suggested.
* Fixed a bug where an ABS concept with a comma in its name (e.g. "South Eastern Europe,nfd(c)" in Country of Birth) would cause values for concept that follow to be misappropriated to the wrong concepts.

### 1.0.38

* `AbsIttCatalogItem` now allows the region type to be set on demand rather than only at load time.
* `CsvCatalogItem` can now have no display variable selected, in which case all points are the same color.

### 1.0.37

* Added `CswCatalogGroup` for populating a catalog by querying an OGC CSW service.
* Added `CatalogMember.infoSectionOrder` property, to allow the order of info sections to be configured per catalog item when necessary.
* Fixed a bug that prevented WMTS layers with a single `TileMatrixSetLink` from working correctly.
* Added support for WMTS layers that can only provide tiles in JPEG format.
* Fixed testing and caching of ArcGis layers from tools and added More information option for imagery layers.
* TerriaJS no longer requires Google Analytics.  If a global `ga` function exists, it is used just as before.  Otherwise, events are, by default, logged to the console.
* The default event analytics behavior can be specified by passing an instance of `ConsoleAnalytics` or `GoogleAnalytics` to the `Terria` constructor.  The API key to use with `GoogleAnalytics` can be specified explicitly to its constructor, or it can be specified in the `parameter.googleAnalyticsKey` property in `config.json`.
* Made polygons drastically faster in 2D.
* TerriaJS now shortens share URLs by default when a URL shortener is available.
* Added Google Analytics reporting of the application URL.  This is useful for tracking use of share URLs.
* Added the ability to specify a specific dynamic layer of an ArcGIS Server using just a URL.

### 1.0.36

* Calculate extent of TopoJSON files so that the viewer correctly pans+zooms when a TopoJSON file is loaded.
* Fixed a bug that caused the `Terria#clock` to keep ticking (and therefore using CPU / battery) once started even after selecting a non-time-dynamic dataset.
* Fixed a bug that caused the popup message to appear twice when a dataset failed to load.
* Added layer information to the Info popup for WMS datasets.
* Added ability to filter catalog search results by:
  * type: `is:wms`, `-is:esri-mapserver`. A result must match any 'is:' and no '-is:'.
  * url: `url:vic.gov.au`, `-url:nicta.com.au`. A result must match any 'url:', and no '-url:'.
* Added ability to control the number of catalog search results: `show:20`, `show:all`

### 1.0.35

* Polygons from GeoJSON datasets are now filled.
* Left-aligned feature info table column and added some space between columns.
* Added `EarthGravityModel1996`.
* Extended `LocationBarViewModel` to show heights relative to a geoid / mean sea level model.  By default, EGM96 is used.
* Added support for styling GeoJSON files, either in catalog (add .style{} object) or embedded directly in the file following the [SimpleStyle spec](https://github.com/mapbox/simplestyle-spec).
* Fixed a bug that caused the 3D view to use significant CPU time even when idle.
* Added CartoDB's Positron and Dark Matter base maps to `createGlobalBaseMapOptions`.
* Added support for subdomains to `OpenStreetMapCatalogItem`.

### 1.0.34

* Fixed a bug that prevented catalog items inside groups on the Search tab from being enabled.
* Added `PopupMessageConfirmationViewModel`. It prevents the Popup from being closed unless the confirm button is pressed. Can also optionally have a deny button with a custom action.
* Added support for discovering GeoJSON datasets from CKAN.
* Added support for zipped GeoJSON files.
* Made `KmlCatalogItem` use the proxy when required.
* Made `FeatureInfoPanelViewModel` use the white panel background in more cases.
* Significantly improved the experience on devices with small screens, such as phones.
* Fixed a bug that caused only the portion of a CKAN group name before the first comma to be used.

### 1.0.33

* Added the `legendUrls` property to allow a catalog item to optionally have multiple legend images.
* Added a popup message when zooming in to the "No Data" scales of an `ArcGisMapServerCatalogItem`.
* Added `CatalogGroup.sortFunction` property to allow custom sorting of catalog items within a group.
* Added `ImageryLayerCatalogItem.treat403AsError` property.
* Added a title text when hovering over the label of an enabled catalog item.  The title text informs the user that clicking will zoom to the item.
* Added `createBingBaseMapOptions` function.
* Added an option to `KnockoutMarkdownBinding` to optionally skip HTML sanitization and therefore to allow unsafe HTML.
* Upgraded to Cesium 1.11.
* `CatalogItem.zoomTo` can now zoom to much smaller bounding box rectangles.

### 1.0.32

* Fixed CKAN resource format matching for KML, CSV, and Esri REST.

### 1.0.31

* Added support for optionally generating shorter URLs when sharing by using the Google URL shortening service.

### 1.0.30

* `WebMapServiceCatalogItem` and `ArcGisMapServerCatalogItem` now augment directly-specified metadata with metadata queried from the server.
* "Data Details" and "Service Details" on the catalog item info panel are now collapsed by default.  This improves the performance of the panel and hides some overly technical details.
* `ArcGisMapServerCatalogItem.layers` can now specify layer names in addition to layer IDs.  Layer names are matched in a case-insensitive manner and only if a direct ID match is not found.
* `itemProperties` are now applied through the normal JSON loading mechanism, so properties that are represented differently in code and in JSON will now work as well.
* Added support for `csv-geo-*` (e.g. csv-geo-au) to `CkanCatalogGroup`.
* The format name used in CKAN can now be specified to `CkanCatalogGroup` using the `wmsResourceFormat`, `kmlResourceFormat`, `csvResourceFormat`, and `esriMapServerResourceFormat` properties.  These properties are all regular expressions.  When the format of a CKAN resource returned from `package_search` matches one of these regular expressions, it is treated as that type within TerriaJS.
* `CkanCatalogGroup` now fills the `dataUrl` property of created items by pointing to the dataset's page on CKAN.
* The catalog item information panel now displays `info` sections in a consistent order.  The order can be overridden by setting `CatalogItemInfoViewModel.infoSectionOrder`.
* An empty `description` or `info` section is no longer shown on the catalog item information panel.  This can be used to remove sections that would otherwise be populated from dataset metadata.

### 1.0.29

* Add support for loading init files via the proxy when necessary.
* Switched to using the updated URL for STK World Terrain, `//assets.agi.com/stk-terrain/v1/tilesets/world/tiles`.

### 1.0.28

* Fixed a bug that prevented links to non-image (e.g. ArcGIS Map Server) legends from appearing on the Now Viewing panel.

### 1.0.27

* Use terriajs-cesium 1.10.7, fixing a module load problem in really old browers like IE8.

### 1.0.25

* Fixed incorrect date formatting in the timeline and animation controls on Internet Explorer 9.
* Add support for CSV files with longitude and latitude columns but no numeric value column.  Such datasets are visualized as points with a default color and do not have a legend.
* The Feature Information popup is now automatically closed when the user changes the `AbsIttCatalogItem` filter.

### 1.0.24

* Deprecated:
  * Renamed `AusGlobeViewer` to `TerriaViewer`.  `AusGlobeViewer` will continue to work until 2.0 but using it will print a deprecation warning to the browser console.
  * `BrandBarViewModel.create` now takes a single `options` parameter.  The container element, which used to be specified as the first parameter, should now be specified as the `container` property of the `options` parameter.  The old function signature will continue to work until 2.0 but using it will print a deprecation warning to the browser console.
* `WebMapServiceCatalogItem` now determines its rectangle from the GetCapabilities metadata even when configured to use multiple WMS layers.
* Added the ability to specify the terrain URL or the `TerrainProvider` to use in the 3D view when constructing `TerriaViewer`.
* `AbsIttCatalogItem` styles can now be set using the `tableStyle` property, much like `CsvCatalogItem`.
* Improved `AbsIttCatalogItem`'s tolerance of errors from the server.
* `NavigationViewModel` can now be constructed with a list of `controls` to include, instead of the standard `ZoomInNavigationControl`, `ResetViewNavigationControl`, and `ZoomOutNavigationControl`.
* Fixed a bug that caused the brand bar to slide away with the explorer panel on Internet Explorer 9.

### 1.0.23

* Fixed a bug that prevented features from being pickable from ABS datasets on the 2D map.
* Fixed a bug that caused the Explorer Panel tabs to be missing or misaligned in Firefox.

### 1.0.22

* Changed to use JPEG instead of PNG format for the Natural Earth II basemap.  This makes the tile download substantially smaller.

### 1.0.21

* Added an `itemProperties` property to `AbsIttCatalogGroup`.
* Added a `nowViewingMessage` property to `CatalogItem`.  This message is shown by the `NowViewingAttentionGrabberViewModel` when the item is enabled.  Each unique message is shown only once.

### 1.0.20

* Added the ability to specify SVG icons on Explorer Panel tabs.
* Added an icon to the Search tab.
* Added support for accessing Australian Bureau of Statistics data via the ABS-ITT API, using `AbsIttCatalogGroup` and `AbsIttCatalogItem`.
* The Now Viewing panel now contains controls for selecting which column to show in CSV datasets.

### 1.0.19

* Added `NowViewingAttentionGrabberViewModel`.  It calls attention the Now Viewing tab the first time a catalog item is enabled.
* Added `isHidden` property to catalog items and groups.  Hidden items and groups do not show up in the catalog or in search results.

### 1.0.18

* Added `featureInfoFields` property to `CsvCatalogItem.tableStyle`.  It allows setting which fields to show in the Feature Info popup, and the name to use for each.
* Added `OpenStreetMapCatalogItem` for connecting to tile servers using the OpenStreetMap tiling scheme.
* Added `CkanCatalogGroup.allowEntireWmsServers` property.  When set and the group discovers a WMS resource without a layer parameter, it adds a catalog item for the entire server instead of ignoring the resource.
* Added `WebMapTileServiceCatalogGroup` and `WebMapTileServiceCatalogItem` for accessing WMTS servers.
* Handle the case of an `ArcGisMapServerCatalogItem` with an advertised extent that is outside the valid range.
* We now pass ArcGIS MapServer metadata, when it's available, through to Cesium's `ArcGisMapServerImageryProvider` so that it doesn't need to re-request the metadata.
* Changed the style of the Menu Bar to have visually-separate menu items.
* Added support for SVG menu item icons to `MenuBarViewModel`.
* Improved popup message box sizing.

### 1.0.17

* Upgraded to TerriajS Cesium 1.10.2.
* Added `ImageryLayerCatalogItem.isRequiredForRendering`.  This is set to false by default and to true for base maps.  Slow datasets with `isRequiredForRendering=false` are less likely to prevent other datasets from appearing in the 3D view.
* The "Dataset Testing" functionality (on the hidden Tools menu accessible by adding `#tools=1` to the URL) now gives up tile requests and considers them failed after two seconds.  It also outputs some JSON that can be used as the `blacklist` property to blacklist all of the datasets that timed out.
* Added a feature to count the total number of datasets from the hidden Tools menu.
* Fixed a bug that caused the 2D / 3D buttons the Maps menu to get out of sync with the actual state of the map after switching automatically to 2D due to a performance problem.

### 1.0.16

* Deprecated:
  * `ArcGisMapServerCatalogGroup` has been deprecated.  Please use `ArcGisCatalogGroup` instead.
* Replaced Cesium animation controller with TerriaJS animation controller.
* Replaced Cesium Viewer widget with the CesiumWidget when running Cesium.
* Added the ability to turn a complete ArcGIS Server, or individual folders within it, into a catalog group using `ArcGisCatalogGroup`.

### 1.0.15

* Fix imagery attribution on the 2D map.

### 1.0.14

* Fixed share URL generation when the application is not running at the root directory of its web server.
* Fixed a bug that caused Internet Explorer 8 users to see a blank page instead of a message saying their browser is incompatible.

### 1.0.13

* Breaking changes:
  * Added a required `@brand-bar-height` property.
* `ExplorerPanelViewModel` can now be created with `isOpen` initially set to false.
* TerriaJS now raises an error and hides the dataset when asked to show an `ImageryLayerCatalogItem` in Leaflet and that catalog item does not use the Web Mercator (EPSG:3857) projection.  Previously, the dataset would silently fail to display.
* Improved error handling in `CzmlCatalogItem`, `GeoJsonCatalogItem`, and `KmlCatalogItem`.
* Made the `clipToRectangle` property available on all `ImageryProvider`-based catalog items, not just `WebMapServiceCatalogItem`.
* Added `CatalogMember.isPromoted` property.  Promoted catalog groups and items are displayed above non-promoted groups and items.
* Add support for ArcGIS MapServer "Raster Layers" in addition to "Feature Layers".

### 1.0.12

* Allow Esri ArcGIS MapServers to be added via the "Add Data" panel.
* Adds `baseMapName` and `viewerMode` fields to init files and share links. `baseMapName` is any base map name in the map settings panel and `viewerMode` can be set to `'2d'` or `'3d'`.
* Added `tableStyle.legendTicks` property to `CsvCatalogItem`.  When specified, the generated legend will have the specified number of equally-spaced lines with labels in its legend.

### 1.0.11

* Fixed a bug that prevented HTML feature information from showing up with a white background in Internet Explorer 9 and 10.
* Fixed a bug that prevented WMS GetCapabilities properties, such as CRS, from being properly inherited from the root layer.
* Tweaked credit / attribution styling.

### 1.0.10

* Added support for a developer attribution on the map.
* Fixed a bug that could cause results from previous async catalog searches to appear in the search results.

### 1.0.9

* Show Cesium `ImageryProvider` tile credits / attribution in Leaflet when using `CesiumTileLayer`.

### 1.0.8

* `WebMapServiceCatalogGroup` now populates the catalog using the hierarchy of layers returned by the WMS server in GetCapabilities.  To keep the previous behavior, set the `flatten` property to true.
* Potentially breaking changes:
  * The `getFeatureInfoAsGeoJson` and `getFeatureInfoAsXml` properties have been removed.  Use `getFeatureInfoFormats` instead.
* Added support for text/html responses from WMS GetFeatureInfo.
* Make the `FeatureInfoPanelViewModel` use a white background when displaying a complete HTML document.
* `KnockoutMarkdownBinding` no longer tries to interpret complete HTML documents (i.e. those that contain an <html> tag) as Markdown.
* The feature info popup for points loaded from CSV files now shows numeric columns with a missing value as blank instead of as 1e-34.
* `ArcGisMapServerCatalogItem` now offers metadata, used to populate the Data Details and Service Details sections of the catalog item info panel.
* `ArcGisMapServerCatalogGroup` now populates a "Service Description" and a "Data Description" info section for each catalog item from the MapServer's metadata.
* The `metadataUrl` is now populated (and shown) from the regular MapServer URL.
* Added 'keepOnTop' flag support for imageryLayers in init file to allow a layer to serve as a mask.
* Added 'keepOnTop' support to region mapping to allow arbitrary masks based on supported regions.
* Checkboxes in the Data Catalogue and Search tabs now have a larger clickable area.

### 1.0.7

* `CatalogItemNameSearchProviderViewModel` now asynchronously loads groups so items in unloaded groups can be found, too.
* Do not automatically fly to the first location when pressing Enter in the Search input box.
* Changed `ArcGisMapServerCatalogItem` to interpret a `maxScale` of 0 from an ArcGIS MapServer as "not specified".
* Added an `itemProperties` property to `ArcGisMapServerCatalogGroup`, allowing properties of auto-discovered layers to be specified explicitly.
* Added `validDropElements`, `validDropClasses`, `invalidDropElements`, and `invalidDropClasses` properties to `DragDropViewModel` for finer control over where dropping is allowed.
* Arbitrary parameters can now be specified in `config.json` by adding them to the `parameters` property.


### 1.0.6

* Added support for region mapping based on region names instead of region numbers (example in `public/test/countries.csv`).
* Added support for time-dynamic region mapping (example in `public/test/droughts.csv`).
* Added the ability to specify CSV styling in the init file (example in `public/init/test.json`).
* Improved the appearance of the legends generated with region mapping.
* Added the ability to region-map countries (example in `public/test/countries.csv`).
* Elminated distracting "jumping" of the selection indicator when picking point features while zoomed in very close to the surface.
* Fixed a bug that caused features to be picked from all layers in an Esri MapServer, instead of just the visible ones.
* Added support for the WMS MinScaleDenominator property and the Esri MapServer maxScale property, preventing layers from disappearing when zoomed in to close to the surface.
* Polygons loaded from KML files are now placed on the terrain surface.
* The 3D viewer now shows Bing Maps imagery unmodified, matching the 2D viewer.  Previously, it applied a gamma correction.
* All catalog items now have an `info` property that allows arbitrary sections to be shown for the item in the info popup.
* `CkanCatalogGroup` now has a `groupBy` property to control whether catalog items are grouped by CKAN group ("group"), CKAN organization ("organization"), or not grouped at all ("none").
* `CkanCatalogGroup` now has a `useResourceName` property to control whether the name of the catalog item is derived from the resource (true), or the dataset itself (false).
* The catalog item info page now renders a much more complete set of Markdown and HTML elements.
