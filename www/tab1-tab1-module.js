(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "566y":
/*!*******************************************************************!*\
  !*** ./src/app/Components/filter-menu/filter-menu.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-filter-menu (checkbox)=\"categoryFilter($event)\" [categories]=\"categories\"></app-filter-menu>\n<ion-router-outlet id=\"filter\"></ion-router-outlet>\n\n<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"\">\n        <ion-buttons slot=\"start\">\n            <!--<ion-button>\n                <ion-icon name=\"menu\" slot=\"icon-only\"></ion-icon>\n            </ion-button>-->\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <!--<ion-title class=\"titulo\" color=\"primary\" style=\"font-size: 13px;\">\n          My Jungle\n        </ion-title>-->\n        <ion-buttons slot=\"end\">\n            <ion-button routerLink=\"/search\">\n                <ion-icon name=\"search-outline\" color=\"dark\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n            <ion-button class=\"cart\" routerLink=\"/tabs/tab3\">\n                <ion-icon name=\"cart-outline\" size=\"large\" color=\"primary\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-badge color=\"light\" slot=\"end\">{{ count || 0 }}</ion-badge>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"primary\">\n        <ion-segment (ionChange)=\"segmentChange($event)\" value=\"all\">\n            <ion-segment-button value=\"all\">\n                <ion-label>Todos</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"featured\"><ion-label>Destacados</ion-label></ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" style=\"position: relative;\">\n    <ion-toolbar style=\"position: fixed; top: 130px;\">\n        <ion-buttons slot=\"primary\">\n            <ion-button color=\"dark\" expand=\"block\" fill=\"clear\" (click)=\"openModal()\">\n                <ion-icon name=\"funnel-outline\" slot=\"end\"></ion-icon>\n                Ordenar\n            </ion-button>\n            <ion-button color=\"dark\" expand=\"block\" fill=\"clear\" (click)=\"openFilter()\">\n                <ion-icon name=\"filter-outline\" slot=\"end\"></ion-icon>\n                Filtro\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n    <ion-grid style=\"margin: 50px 0 0 0;\">\n      <ion-row>\n        <ion-col *ngFor=\"let prod of displayedList\"(click)=\"loadingSpinner()\"\n        detail\n        routerLink=\"/tabs/tab1/prod-detail/{{ prod.id }}\" size=\"6\">\n\n        <ion-thumbnail class=\"center\" style=\"width:100px; height:auto;\">\n          <ion-img [src]=\"prod.images[0].src\" alt=\"{{ prod.name }}\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-label class=\"ion-text-center\">\n          <h3 class=\"product center\">{{ prod.name }}</h3>\n          <ion-text>\n              <p class=\"center\">\n                  {{  prod.price | currency:\"USD\" }}\n              </p>\n          </ion-text>\n      </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "BHY7":
/*!*****************************************************************!*\
  !*** ./src/app/Components/sort-modal/sort-modal.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb3J0LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "FCim":
/*!******************************************************!*\
  !*** ./src/app/services/product-resolver.service.ts ***!
  \******************************************************/
/*! exports provided: ProductResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolverService", function() { return ProductResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ "Gdn9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ProductResolverService = class ProductResolverService {
    constructor(productService, loadingController) {
        this.productService = productService;
        this.loadingController = loadingController;
    }
    resolve(route, state) {
        const id = route.params.id;
        return this.productService.getSingleProduct(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.loadingController.getTop()) {
                this.loadingController.dismiss().then();
            }
        })));
    }
};
ProductResolverService.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ProductResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProductResolverService);



/***/ }),

/***/ "JSK7":
/*!***************************************************************!*\
  !*** ./src/app/Components/sort-modal/sort-modal.component.ts ***!
  \***************************************************************/
/*! exports provided: SortModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortModalComponent", function() { return SortModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sort-modal.component.html */ "jKlo");
/* harmony import */ var _sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sort-modal.component.scss */ "BHY7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let SortModalComponent = class SortModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        this.radioValue = localStorage.getItem('radio') || 'title-desc';
    }
    closeModal() {
        this.modalController.dismiss(null, 'cancel').then();
    }
    radioChanged(ev) {
        this.modalController.dismiss(ev.target.value, 'sort').then();
    }
};
SortModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
SortModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sort-modal',
        template: _raw_loader_sort_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sort_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SortModalComponent);



/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product.service */ "Gdn9");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/sort-modal/sort-modal.component */ "JSK7");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let Tab1Page = class Tab1Page {
    constructor(productService, loadingController, menuController, toastController, modalController, cartService) {
        this.productService = productService;
        this.loadingController = loadingController;
        this.menuController = menuController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.cartService = cartService;
        this.sliderImages = [
            '/assets/slide1',
            '/assets/slide2',
            '/assets/slide3',
        ];
        this.sliderOptions = {
            autoplay: {
                delay: 2000
            },
            loop: true
        };
        this.listArrayOfProducts = [];
        this.displayedList = [];
        this.currentPage = 1;
        this.filterCount = 0;
        this.filteredCategoryList = [];
        this.categories = [];
        this.loadMoreData(null).then();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.img = 'https://myjungle.ec/wp-content/uploads/2020/12/IMG-20201207-WA0000.jpg';
            }, 10);
            const loader = yield this.loadingController.create({
                message: 'Obteniendo Productos..',
                spinner: "bubbles",
                animated: true
            });
            yield loader.present().then();
            this.productService.getAllProducts().subscribe((products) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                this.listArrayOfProducts = products;
                this.displayedList = [...this.listArrayOfProducts];
            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield loader.dismiss().then();
                console.log(err);
            }));
            this.categories = yield this.productService.getAllCategories().toPromise();
            this.cartService.cartData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => data.count)).subscribe(count => this.count = count);
        });
    }
    loadMoreData(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No More Products',
                animated: true,
                duration: 2000,
                buttons: [
                    {
                        text: 'Done',
                        role: 'cancel',
                        icon: 'close'
                    }
                ]
            });
            if (ev == null) {
                this.currentPage = 1;
                return;
            }
            else {
                this.currentPage++;
                this.productService.getAllProducts(this.currentPage).subscribe((prods) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.listArrayOfProducts = this.listArrayOfProducts.concat(prods);
                    this.displayedList = [...this.listArrayOfProducts];
                    if (ev !== null) {
                        ev.target.complete();
                    }
                    if (prods.length < 10) {
                        yield toast.present().then();
                        ev.target.disabled = true;
                    }
                }), (err) => {
                    console.log(err);
                });
            }
        });
    }
    loadingSpinner() {
        this.loadingController.create({
            message: "Cargando Detalles..",
            animated: true,
            spinner: "crescent",
            backdropDismiss: false,
            showBackdrop: true
        }).then(el => el.present());
    }
    openModal() {
        this.modalController.create({
            component: _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_6__["SortModalComponent"],
            animated: true,
            cssClass: 'sortModal'
        }).then(el => {
            el.present().then();
            return el.onDidDismiss().then(resultData => {
                this.sort({ role: resultData.role, data: resultData.data });
            });
        });
    }
    sort(resultData) {
        const { role, data } = Object.assign({}, resultData);
        if (role === 'cancel') {
            return;
        }
        else if (role === 'sort') {
            // Check the type of sorting asked by the customer
            if (data === 'title-asc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();
                    if (x < y) {
                        return -1;
                    }
                    if (x > y) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (data === 'title-desc') {
                this.displayedList.sort((a, b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();
                    if (x > y) {
                        return -1;
                    }
                    if (x < y) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (data === 'price-asc') {
                this.displayedList.sort((a, b) => {
                    // @ts-ignore
                    return a.price - b.price; // Low To High
                });
            }
            else if (data === 'price-desc') {
                this.displayedList.sort((a, b) => {
                    // @ts-ignore
                    return b.price - a.price; // High To Low
                });
            }
        }
    }
    openFilter() {
        this.menuController.enable(true, 'filter').then();
        this.menuController.open('filter').then();
    }
    categoryFilter(ev) {
        // If the user clicked the filter for the first time and nothing is selected
        if (ev.selected && this.filterCount === 0) {
            this.filteredCategoryList.push(ev.name);
            this.filterCount++;
            this.displayedList = this.displayedList.filter(p => p.categories.some(cat => cat.name === ev.name));
        }
        // If the category selected is not present in the list of items
        else if (ev.selected && this.filterCount >= 1) {
            const newArray = [...this.listArrayOfProducts];
            this.filterCount++;
            if (!this.filteredCategoryList.includes(ev.name)) {
                this.filteredCategoryList.push(ev.name);
                const product = newArray.filter(p => p.categories.some(cat => cat.name === ev.name));
                let i;
                product.forEach(p => {
                    i = this.displayedList.findIndex(prod => prod.id === p.id);
                    // If product is present in the array
                    if (i !== -1) {
                        return;
                    }
                    else {
                        this.displayedList = this.displayedList.concat(p);
                    }
                });
            }
            else {
                return;
            }
        } // END OF ELSE IF
        else if (!ev.selected && this.filterCount >= 1) {
            const newArray = [...this.listArrayOfProducts];
            this.filterCount--;
            // Remove the category from the filter list array
            this.filteredCategoryList = this.filteredCategoryList.filter(el => el !== ev.name);
            if (this.filteredCategoryList.length > 0) {
                this.displayedList = [];
                this.filteredCategoryList.forEach(el => {
                    this.displayedList = this.displayedList.concat(newArray.filter(p => p.categories.some(cat => cat.name === el)));
                });
            }
            // Check if the filter count has reached 0, that means no filter is present now
            if (this.filterCount === 0) {
                this.displayedList = [...this.listArrayOfProducts];
            }
        }
    }
    segmentChange(ev) {
        const value = ev.target.value;
        if (value === 'featured') {
            this.loadMoreData(null).then();
            this.displayedList = this.listArrayOfProducts.filter(p => p.featured === true);
        }
        else {
            this.displayedList = [...this.listArrayOfProducts];
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/product-resolver.service */ "FCim");





const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    },
    {
        path: 'prod-detail/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | prod-detail-prod-detail-module */ "prod-detail-prod-detail-module").then(__webpack_require__.bind(null, /*! ./prod-detail/prod-detail.module */ "Do85")).then(m => m.ProdDetailPageModule),
        resolve: { product: _services_product_resolver_service__WEBPACK_IMPORTED_MODULE_4__["ProductResolverService"] }
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "eB1W":
/*!*****************************************************************!*\
  !*** ./src/app/Components/filter-menu/filter-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: FilterMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMenuComponent", function() { return FilterMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filter-menu.component.html */ "lv3d");
/* harmony import */ var _filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-menu.component.scss */ "566y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");







let FilterMenuComponent = class FilterMenuComponent {
    constructor(menuController, router, storage) {
        this.menuController = menuController;
        this.router = router;
        this.storage = storage;
        this.checkbox = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.categories = [];
    }
    ngOnInit() {
        this.collapsed = true;
    }
    onClick() {
        this.collapsed = !this.collapsed;
    }
    checkboxSelected(ev) {
        this.menuController.close('filter').then();
        this.checkbox.emit({
            name: ev.target.name,
            selected: ev.target.checked
        });
    }
    closeMenu() {
        this.menuController.close('filter').then();
    }
};
FilterMenuComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
FilterMenuComponent.propDecorators = {
    checkbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['checkbox',] }],
    categories: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['categories',] }],
    ionCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['checkbox', { static: false },] }]
};
FilterMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filter-menu',
        template: _raw_loader_filter_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filter_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FilterMenuComponent);



/***/ }),

/***/ "jKlo":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sort-modal/sort-modal.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Sorting</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)=\"radioChanged($event)\">\n      <ion-item>\n        <ion-label>Name Ascending</ion-label>\n        <ion-radio value=\"title-asc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Name Descending</ion-label>\n        <ion-radio value=\"title-desc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>price low to High</ion-label>\n        <ion-radio value=\"price-asc\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>price High to low</ion-label>\n        <ion-radio value=\"price-desc\"></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "lv3d":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/filter-menu/filter-menu.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"filter\" menuId=\"filter\" side=\"end\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Filtros</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"closeMenu()\">\n          <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>\n        <ion-label class=\"d-flex ion-justify-content-between\">\n          <h2>Categorias</h2>\n        </ion-label>\n        <ion-buttons>\n          <ion-button data-toggle=\"collapse\" data-target=\"#filterMenu\" (click)=\"onClick()\">\n            <ion-icon name=\"add-outline\" slot=\"end\" *ngIf=\"collapsed\"></ion-icon>\n            <ion-icon name=\"remove-outline\" slot=\"end\" *ngIf=\"!collapsed\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <hr>\n      </ion-list-header>\n\n      <ion-item *ngFor=\"let c of categories\" class=\"collapse\" id=\"filterMenu\">\n        <ion-checkbox color=\"secondary\"\n                      name=\"{{c.name}}\"\n                      slot=\"start\"\n                      (ionChange)=\"checkboxSelected($event)\"\n                      #checkbox>\n        </ion-checkbox>\n        <ion-text>{{ c.name }}</ion-text>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n");

/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n\nion-badge {\n  margin-right: 20px;\n  position: absolute;\n  right: 0;\n  top: 10px;\n}\n\nion-icon[name=cart-outline] {\n  color: rgba(231, 143, 78, 0.74);\n}\n\nion-buttons[slot=end] > ion-button.cart {\n  margin-right: 20px;\n}\n\nion-buttons[slot=primary] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\nion-buttons[slot=primary] ion-button {\n  flex: 1;\n}\n\n.item-entry {\n  padding: 10px 0;\n}\n\n.item-name {\n  font-size: 20px;\n  font-weight: 700;\n  font-style: normal;\n  font-family: Arial, sans-serif;\n  color: var(--ion-color-dark-tint);\n}\n\n.price {\n  color: var(--ion-color-tertiary-tint);\n  font-weight: 500;\n  font-size: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUVGOztBQUNBO0VBQ0UsK0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDhCQUFBO0FBRUY7O0FBREU7RUFDRSxPQUFBO0FBR0o7O0FBQ0E7RUFDRSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUFFRjs7QUFBQTtFQUNFLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlvbi1iYWRnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEwcHg7XHJcblxyXG59XHJcbmlvbi1pY29uW25hbWU9XCJjYXJ0LW91dGxpbmVcIl17XHJcbiAgY29sb3I6IHJnYmEoMjMxLDE0Myw3OCwgMC43NCk7XHJcbn1cclxuaW9uLWJ1dHRvbnNbc2xvdD1cImVuZFwiXSA+IGlvbi1idXR0b24uY2FydHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG59XHJcbmlvbi1idXR0b25zW3Nsb3Q9XCJwcmltYXJ5XCJde1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG59XHJcbi5pdGVtLWVudHJ5IHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG59XHJcbi5pdGVtLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xyXG59XHJcbi5wcmljZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTYwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");
/* harmony import */ var _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/sort-modal/sort-modal.component */ "JSK7");
/* harmony import */ var _Components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/filter-menu/filter-menu.component */ "eB1W");










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"],
            _Components_sort_modal_sort_modal_component__WEBPACK_IMPORTED_MODULE_8__["SortModalComponent"], _Components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_9__["FilterMenuComponent"]
        ]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map