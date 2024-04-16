(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_global_co-3f5afe"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=max_price]' : '#facet-range-form [name=price_max]',
  priceRangeMinPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=min_price]' : '#facet-range-form [name=price_min]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    if (document.location.hash !== '') return;
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby0zZjVhZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQzFCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUM1QixTQUFBRCxZQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFFZEcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtNQUMxQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUN0Q0osTUFBTSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0lBQUMsT0FBQVIsS0FBQTtFQUNQO0VBQUNTLGNBQUEsQ0FBQVosV0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVksTUFBQSxHQUFBYixXQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxvQkFBb0IsR0FBcEIsU0FBQUEscUJBQUEsRUFBdUI7SUFDbkIsSUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQWdDLENBQUM7SUFFM0QsSUFBSVosTUFBTSxDQUFDSyxZQUFZLENBQUNRLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtNQUM3Q0YsZUFBZSxDQUFDRyxLQUFLLENBQUMsQ0FBQztNQUN2QmQsTUFBTSxDQUFDSyxZQUFZLENBQUNVLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDbEQ7RUFDSixDQUFDO0VBQUFQLE1BQUEsQ0FFRFEsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQ2pD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QSIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvaWdub3JlZHxDOlxcVXNlcnNcXHJnYW5hdHJhXFxEb3dubG9hZHNcXENvcm5lcnN0b25lLTYuMTMuMFxcbm9kZV9tb2R1bGVzXFxvYmplY3QtaW5zcGVjdHwuL3V0aWwuaW5zcGVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkID09PSAnc29ydCcpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NvcnRCeVN0YXR1cycsICdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcnJhbmdlRm9jdXNPblNvcnRCeSgpIHtcbiAgICAgICAgY29uc3QgJHNvcnRCeVNlbGVjdG9yID0gJCgnW2RhdGEtc29ydC1ieT1cInByb2R1Y3RcIl0gI3NvcnQnKTtcblxuICAgICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0QnlTdGF0dXMnKSkge1xuICAgICAgICAgICAgJHNvcnRCeVNlbGVjdG9yLmZvY3VzKCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NvcnRCeVN0YXR1cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICBjbGVhckZhY2V0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmsnLFxuICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgcHJpY2VSYW5nZUVycm9yU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlJyxcbiAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgIHByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yOiAkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA/ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyA6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1wcmljZV9tYXhdJyxcbiAgICBwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWluXScsXG4gICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgIG1vZGFsT3BlbjogZmFsc2UsXG59O1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHJhbmdlIHZpZXcgd2hlbiBzaG9wLWJ5LXByaWNlIGVuYWJsZWRcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAgICAgICAgIGlmICh1cmxQYXJhbXMuaGFzKCdzZWFyY2hfcXVlcnknKSkge1xuICAgICAgICAgICAgICAgICQoJy5yZXNldC1maWx0ZXJzJykuc2hvdygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWluXCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9taW4nKSk7XG4gICAgICAgICAgICAkKCdpbnB1dFtuYW1lPVwicHJpY2VfbWF4XCJdJykuYXR0cigndmFsdWUnLCB1cmxQYXJhbXMuZ2V0KCdwcmljZV9tYXgnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmICh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzLCB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbkVycm9yTWVzc2FnZXMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMuaW5jbHVkZXMoaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldHMuaW5jbHVkZXMoaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub24oJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9mZignc3RhdGVjaGFuZ2UnLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uUmFuZ2VTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIXRoaXMucHJpY2VSYW5nZVZhbGlkYXRvci5hcmVBbGwobm9kLmNvbnN0YW50cy5WQUxJRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGxldCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKS5zcGxpdCgnJicpO1xuICAgICAgICBxdWVyeVBhcmFtcyA9IHVybFV0aWxzLnBhcnNlUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVtrZXldID0gcXVlcnlQYXJhbXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVybCBvYmplY3QgYHF1ZXJ5YCBpcyBub3QgYSB0cmFkaXRpb25hbCBKYXZhU2NyaXB0IE9iamVjdCBvbiBhbGwgc3lzdGVtcywgY2xvbmUgaXQgaW5zdGVhZFxuICAgICAgICBjb25zdCB1cmxRdWVyeVBhcmFtcyA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKHVybFF1ZXJ5UGFyYW1zLCB1cmwucXVlcnkpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmxRdWVyeVBhcmFtcykgfSkpO1xuICAgIH1cblxuICAgIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH1cblxuICAgIG9uQWNjb3JkaW9uVG9nZ2xlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICBjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG4gICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBvcFN0YXRlKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uaGFzaCAhPT0gJycpIHJldHVybjtcblxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG5cbiAgICBwYXJzZVF1ZXJ5UGFyYW1zOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gcXVlcnlEYXRhW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wWzBdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1t0ZW1wWzBdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dLnB1c2godGVtcFsxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gW3BhcmFtc1t0ZW1wWzBdXSwgdGVtcFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoISRsaW5rLmlzKCd2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICRsaW5rLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGxpbmsuYXR0cignaHJlZicsIGAke3VybHMuY29tcGFyZX0vJHtjb3VudGVyLmpvaW4oJy8nKX1gKTtcbiAgICAgICAgJGxpbmsuZmluZCgnc3Bhbi5jb3VudFBpbGwnKS5odG1sKGNvdW50ZXIubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkbGluay5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgbm9Db21wYXJlTWVzc2FnZSwgdXJscyB9KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobm9Db21wYXJlTWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInVybFV0aWxzIiwiVXJsIiwiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJkZWZhdWx0IiwiaG9va3MiLCJhcGkiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwibGVuZ3RoIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwiYXR0ciIsImdldCIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiX3RoaXMzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiX3RoaXM0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJfdGhpczUiLCJ2YWxpZGF0b3IiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvbiIsIm9uUG9wU3RhdGUiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFzaCIsInRyaWdnZXIiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJxdWVyeURhdGEiLCJvdXQiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJpIiwidGVtcCIsInNob3dBbGVydE1vZGFsIiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInVwZGF0ZUNvdW50ZXJOYXYiLCJ1cmxzIiwiYWRkQ2xhc3MiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJfcmVmIiwibm9Db21wYXJlTWVzc2FnZSIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJ2YWx1ZSIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9