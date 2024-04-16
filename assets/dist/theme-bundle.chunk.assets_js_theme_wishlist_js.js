"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_wishlist_js"],{

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wishlistPaginatorHelper": function() { return /* binding */ wishlistPaginatorHelper; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }

  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');

    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};
/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */


var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WishList; }
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);

  function WishList(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }
  /**
   * Creates a confirm box before deleting all wish lists
   */


  var _proto = WishList.prototype;

  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;

    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);

      if (confirmed) {
        return true;
      }

      event.preventDefault();
    });
  };

  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;

    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();

      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }

      event.preventDefault();
    });
  };

  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');

    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }

    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }

    this.wishlistDeleteConfirm();
  };

  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV93aXNobGlzdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQ0MsV0FBRDtBQUFBLG9DQUFpQkMsZUFBakI7QUFBaUJBLElBQUFBLGVBQWpCO0FBQUE7O0FBQUEsU0FBcUNDLENBQUMsQ0FBQ0MsSUFBRixDQUFPRixlQUFQLEVBQXdCLFVBQUNHLENBQUQsRUFBSUMsS0FBSixFQUFjO0FBQzdHLFFBQU1DLGNBQWMsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLENBQWUsa0JBQWYsQ0FBdkI7O0FBRUEsUUFBSUYsS0FBSyxDQUFDRyxNQUFOLElBQWdCLENBQUNGLGNBQWMsQ0FBQ0csSUFBZixDQUFvQixNQUFwQixFQUE0QkMsUUFBNUIsQ0FBcUMsT0FBckMsQ0FBckIsRUFBb0U7QUFDaEUsVUFBTUMsVUFBVSxHQUFHTCxjQUFjLENBQUNHLElBQWYsQ0FBb0IsTUFBcEIsQ0FBbkI7QUFDQUgsTUFBQUEsY0FBYyxDQUFDRyxJQUFmLENBQW9CLE1BQXBCLEVBQStCVCxXQUEvQixhQUFrRFcsVUFBbEQ7QUFDSDtBQUNKLEdBUDBFLENBQXJDO0FBQUEsQ0FBdEM7QUFTQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUN6QyxNQUFNQyxlQUFlLEdBQUdYLENBQUMsQ0FBQyxrQkFBRCxDQUF6QjtBQUVBLE1BQUksQ0FBQ1csZUFBZSxDQUFDTCxNQUFyQixFQUE2QjtBQUU3QixNQUFNTSxTQUFTLEdBQUdaLENBQUMsQ0FBQyx3QkFBRCxFQUEyQlcsZUFBM0IsQ0FBbkI7QUFDQSxNQUFNRSxTQUFTLEdBQUdiLENBQUMsQ0FBQyw0QkFBRCxFQUErQlcsZUFBL0IsQ0FBbkI7QUFDQSxNQUFNRyxXQUFXLEdBQUdkLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDTyxJQUF6QyxDQUE4QyxNQUE5QyxDQUFwQjtBQUNBLE1BQU1RLG9CQUFvQixHQUFHRCxXQUFXLENBQUNFLEtBQVosQ0FBa0IsT0FBbEIsRUFBMkJDLEtBQTNCLEVBQTdCO0FBRUFwQixFQUFBQSw2QkFBNkIsQ0FBQ2tCLG9CQUFELEVBQXVCRixTQUF2QixFQUFrQ0QsU0FBbEMsQ0FBN0I7QUFDSCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJTOzs7QUFDakIsb0JBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFDakIsb0NBQU1BLE9BQU47QUFFQSxVQUFLQyxPQUFMLEdBQWU7QUFDWEMsTUFBQUEsUUFBUSxFQUFFO0FBREMsS0FBZjtBQUlBO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozs7O1NBQ0lDLHdCQUFBLGlDQUF3QjtBQUFBOztBQUNwQnpCLElBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVTBCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLHdCQUF0QixFQUFnRCxVQUFBQyxLQUFLLEVBQUk7QUFDckQsVUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZSxNQUFJLENBQUNSLE9BQUwsQ0FBYVMsY0FBNUIsQ0FBbEI7O0FBRUEsVUFBSUgsU0FBSixFQUFlO0FBQ1gsZUFBTyxJQUFQO0FBQ0g7O0FBRURELE1BQUFBLEtBQUssQ0FBQ0ssY0FBTjtBQUNILEtBUkQ7QUFTSDs7U0FFREMsZ0NBQUEsdUNBQThCQyxnQkFBOUIsRUFBZ0Q7QUFBQTs7QUFDNUMsU0FBS0Msb0JBQUwsR0FBNEJqQix1REFBRyxDQUFDO0FBQzVCa0IsTUFBQUEsTUFBTSxFQUFFLHFDQURvQjtBQUU1QkMsTUFBQUEsR0FBRyxFQUFFakIsK0VBQXlCQTtBQUZGLEtBQUQsQ0FBL0I7QUFLQSxTQUFLZSxvQkFBTCxDQUEwQkcsR0FBMUIsQ0FBOEIsQ0FDMUI7QUFDSUMsTUFBQUEsUUFBUSxFQUFFLDJDQURkO0FBRUlDLE1BQUFBLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLQyxHQUFMLEVBQWE7QUFDbkIsWUFBTUMsTUFBTSxHQUFHRCxHQUFHLENBQUNwQyxNQUFKLEdBQWEsQ0FBNUI7QUFFQW1DLFFBQUFBLEVBQUUsQ0FBQ0UsTUFBRCxDQUFGO0FBQ0gsT0FOTDtBQU9JQyxNQUFBQSxZQUFZLEVBQUUsS0FBS3RCLE9BQUwsQ0FBYXVCO0FBUC9CLEtBRDBCLENBQTlCO0FBWUFYLElBQUFBLGdCQUFnQixDQUFDUixFQUFqQixDQUFvQixRQUFwQixFQUE4QixVQUFBQyxLQUFLLEVBQUk7QUFDbkMsWUFBSSxDQUFDUSxvQkFBTCxDQUEwQlcsWUFBMUI7O0FBRUEsVUFBSSxNQUFJLENBQUNYLG9CQUFMLENBQTBCWSxNQUExQixDQUFpQyxPQUFqQyxDQUFKLEVBQStDO0FBQzNDO0FBQ0g7O0FBRURwQixNQUFBQSxLQUFLLENBQUNLLGNBQU47QUFDSCxLQVJEO0FBU0g7O1NBRURnQixVQUFBLG1CQUFVO0FBQ04sUUFBTUMsZ0JBQWdCLEdBQUdqRCxDQUFDLENBQUMsZ0JBQUQsQ0FBMUI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NNLE1BQXBDLEVBQTRDO0FBQ3hDSSxNQUFBQSx1RkFBdUI7QUFDMUI7O0FBRUQsUUFBSXVDLGdCQUFnQixDQUFDM0MsTUFBckIsRUFBNkI7QUFDekIsV0FBSzJCLDZCQUFMLENBQW1DZ0IsZ0JBQW5DO0FBQ0g7O0FBRUQsU0FBS3hCLHFCQUFMO0FBQ0g7OztFQW5FaUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvd2lzaGxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MgPSAod2lzaGxpc3RVcmwsIC4uLnBhZ2luYXRpb25JdGVtcykgPT4gJC5lYWNoKHBhZ2luYXRpb25JdGVtcywgKF8sICRpdGVtKSA9PiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkxpbmsgPSAkaXRlbS5jaGlsZHJlbignLnBhZ2luYXRpb24tbGluaycpO1xuXG4gICAgaWYgKCRpdGVtLmxlbmd0aCAmJiAhcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpLmluY2x1ZGVzKCdwYWdlPScpKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJyk7XG4gICAgICAgIHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnLCBgJHt3aXNobGlzdFVybH1wYWdlPSR7cGFnZU51bWJlcn1gKTtcbiAgICB9XG59KTtcblxuLyoqXG4gKiBoZWxwcyB0byB3aXRoZHJhdyBkaWZmZXJlbmNlcyBpbiBzdHJ1Y3R1cmVzIGFyb3VuZCB0aGUgc3RlbmNpbCByZXNvdXJjZSBwYWdpbmF0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCB3aXNobGlzdFBhZ2luYXRvckhlbHBlciA9ICgpID0+IHtcbiAgICBjb25zdCAkcGFnaW5hdGlvbkxpc3QgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG5cbiAgICBpZiAoISRwYWdpbmF0aW9uTGlzdC5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0ICRuZXh0SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0ICRwcmV2SXRlbSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzJywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCBjdXJyZW50SHJlZiA9ICQoJ1tkYXRhLXBhZ2luYXRpb24tY3VycmVudC1wYWdlLWxpbmtdJykuYXR0cignaHJlZicpO1xuICAgIGNvbnN0IHBhcnRpYWxQYWdpbmF0aW9uVXJsID0gY3VycmVudEhyZWYuc3BsaXQoJ3BhZ2U9Jykuc2hpZnQoKTtcblxuICAgIGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzKHBhcnRpYWxQYWdpbmF0aW9uVXJsLCAkcHJldkl0ZW0sICRuZXh0SXRlbSk7XG59O1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgfSBmcm9tICcuL2NvbW1vbi91dGlscy9wYWdpbmF0aW9uLXV0aWxzJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlcldpc2hsaXN0TmFtZUVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBpZiAoJCgnW2RhdGEtcGFnaW5hdGlvbi13aXNobGlzdF0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwicGFnaW5hdGlvbkl0ZW1zIiwiJCIsImVhY2giLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwibGVuZ3RoIiwiYXR0ciIsImluY2x1ZGVzIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJXaXNoTGlzdCIsImNvbnRleHQiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJvbiIsImV2ZW50IiwiY29uZmlybWVkIiwid2luZG93IiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicHJldmVudERlZmF1bHQiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImVudGVyV2lzaGxpc3ROYW1lRXJyb3IiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJvblJlYWR5IiwiJGFkZFdpc2hMaXN0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=
