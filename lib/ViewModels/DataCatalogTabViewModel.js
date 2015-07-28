'use strict';

/*global require,ga*/
var defaultValue = require('terriajs-cesium/Source/Core/defaultValue');

var CatalogItemControl = require('./CatalogItemControl');
var CatalogItemInfoViewModel = require('./CatalogItemInfoViewModel');
var defined = require('terriajs-cesium/Source/Core/defined');
var ExplorerTabViewModel = require('./ExplorerTabViewModel');
var inherit = require('../Core/inherit');
var loadView = require('../Core/loadView');
var PopupMessageViewModel = require('./PopupMessageViewModel');

var svgCheckboxChecked = require('../SvgPaths/svgCheckboxChecked');
var svgCheckboxUnchecked = require('../SvgPaths/svgCheckboxUnchecked');
var svgArrowDown = require('../SvgPaths/svgArrowDown');
var svgArrowRight = require('../SvgPaths/svgArrowRight');
var svgInfo = require('../SvgPaths/svgInfo');


var DataCatalogTabViewModel = function(options) {
    ExplorerTabViewModel.call(this);

    this.name = defaultValue(options.name, 'Data Catalogue');
    this.catalog = options.catalog;

    this.svgCheckboxChecked = defaultValue(options.svgCheckboxChecked, svgCheckboxChecked);
    this.svgCheckboxUnchecked = defaultValue(options.svgCheckboxUnchecked, svgCheckboxUnchecked);
    this.svgArrowDown = defaultValue(options.svgArrowDown, svgArrowDown);
    this.svgArrowRight = defaultValue(options.svgArrowRight, svgArrowRight);
    this.svgInfo = defaultValue(options.svgInfo, svgInfo);
};

inherit(ExplorerTabViewModel, DataCatalogTabViewModel);

DataCatalogTabViewModel.prototype.show = function(container) {
    loadView(require('fs').readFileSync(__dirname + '/../Views/DataCatalogTab.html', 'utf8'), container, this);
};

DataCatalogTabViewModel.prototype.showInfo = function(item) {
    ga('send', 'event', 'dataSource', 'info', item.name);
    CatalogItemInfoViewModel.open('ui', item);
};

DataCatalogTabViewModel.prototype.clickEnabled = function(item) {
    ga('send', 'event', 'dataSource', 'clickItem', item.name);

    if (!item.initialMessageViewed && !item.isEnabled && defined(item.initialMessage)) {
        handleInitialMessage(this, item);
    }

    item.toggleEnabled();
};

DataCatalogTabViewModel.prototype.clickOpen = function(item) {
    ga('send', 'event', 'dataSource', 'clickOpen', item.name);

    if (!item.initialMessageViewed && !item.isOpen && defined(item.initialMessage)) {
        handleInitialMessage(item);
    }

    item.toggleOpen();
};

DataCatalogTabViewModel.prototype.getRightSideItemControls = function(item) {
    return CatalogItemControl.rightSideItemControls(item);
};

DataCatalogTabViewModel.prototype.getLeftSideItemControls = function(item) {
    return CatalogItemControl.leftSideItemControls(item);
};


function handleInitialMessage(item) {
    if (item.terria.getLocalProperty(item.initialMessage.key)) {
        return;
    }

    PopupMessageViewModel.open('ui', {
        title: item.initialMessage.title,
        message: '<div>'+ item.initialMessage.content +'</div>'
    });
    item.initialMessageViewed = true;

    item.terria.setLocalProperty(item.initialMessage.key, true);
}


module.exports = DataCatalogTabViewModel;
