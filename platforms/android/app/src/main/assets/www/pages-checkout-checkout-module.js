(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"],{

/***/ "144Y":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Cqfx":
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./checkout.page.html */ "dKDm");
/* harmony import */ var _checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss */ "144Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "c14U");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");








let CheckoutPage = class CheckoutPage {
    constructor(cartService, storage) {
        this.cartService = cartService;
        this.storage = storage;
        this.paymentGateway = [];
        this.subTotal = 0;
        this.cartTotal = 0;
        this.products = [];
        this.IndianStates = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].states;
        this.finalTax = 0;
        this.math = Math;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPersonalUp = false;
            this.isBillingUp = false;
            this.isShippingUp = false;
            this.isPaymentUp = false;
            this.sameShipping = true;
            this.cartService.getAllPaymentGateways()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((pg) => pg.filter(p => p.enabled === true))).subscribe(pg => {
                this.paymentGateway = pg;
                console.log(this.paymentGateway);
            });
            this.cartService.cartData.subscribe(data => this.products = data.productData);
            this.cartService.cartTotal.subscribe(total => this.cartTotal = total);
            this.storage.get('user').then(userData => this.userDetails = userData);
            this.cartService.getTaxes()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((taxes) => taxes.map(t => t.rate)))
                .subscribe(data => {
                let taxRate;
                // @ts-ignore
                taxRate = parseInt(data, 10);
                this.taxesRate = taxRate;
                this.subTotal = this.cartTotal;
                let taxCalculation = (this.taxesRate * this.subTotal) / 100;
                if (taxCalculation < 1) {
                    taxCalculation = 1;
                    this.finalTax = taxCalculation;
                }
                else {
                    this.finalTax = Math.floor(Math.abs((this.taxesRate * this.subTotal) / 100));
                }
                this.cartTotal = this.subTotal + this.finalTax;
            }, err => console.error(err));
        });
    }
    toggleUp(section) {
        switch (section) {
            case 'billing':
                this.isBillingUp = !this.isBillingUp;
                break;
            case 'shipping':
                this.isShippingUp = !this.isShippingUp;
                break;
            case 'payment':
                this.isPaymentUp = !this.isPaymentUp;
                break;
            default:
                this.isPersonalUp = !this.isPersonalUp;
                break;
        }
    }
    toggleShipping() {
        this.sameShipping = !this.sameShipping;
    }
    checkout(checkoutForm) {
        const data = checkoutForm.value;
        const lineItems = [];
        this.products.forEach(p => {
            lineItems.push({
                product_id: p.id,
                quantity: parseInt(String(p.in_cart), 10)
            });
        });
        let formData = null;
        if (this.sameShipping) {
            formData = {
                set_paid: true,
                payment_method: this.paymentGateway[0].id,
                payment_method_title: this.paymentGateway[0].method_title,
                // customer_id: this.userDetails[0].id,
                customer_id: 0,
                billing: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'EC',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                },
                shipping: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'EC',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name
                },
                line_items: lineItems
            };
        }
        else {
            formData = {
                set_paid: true,
                payment_method: this.paymentGateway[0].id,
                payment_method_title: this.paymentGateway[0].method_title,
                customer_id: 0,
                billing: {
                    address_1: data.b_address_line_1,
                    address_2: data.b_address_line_2,
                    city: data.b_city,
                    state: data.b_state,
                    country: 'EC',
                    postcode: data.b_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    phone: data.phone,
                },
                shipping: {
                    address_1: data.s_address_line_1,
                    address_2: data.s_address_line_2,
                    city: data.s_city,
                    state: data.s_state,
                    country: 'EC',
                    postcode: data.s_postcode,
                    first_name: data.first_name,
                    last_name: data.last_name
                },
                line_items: lineItems
            };
        }
        // @ts-ignore
        this.cartService.createOrder(formData).then();
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }
];
CheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-checkout',
        template: _raw_loader_checkout_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_checkout_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CheckoutPage);



/***/ }),

/***/ "Pnj6":
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "Tjht":
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "Pnj6");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "Cqfx");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "dKDm":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button routerLink=\"/tabs/tab3\">\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form #checkoutForm=\"ngForm\">\n    <ion-grid>\n      <!-- Personal Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('personal')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#personalDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Detalles Del Cliente</h2>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"!isPersonalUp\"\n                          class=\"justify-self-start\"\n                          data-target=\"#personalDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('personal')\" *ngIf=\"isPersonalUp\" class=\"justify-self-start\"\n                          data-target=\"#personalDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n            <div class=\"collapse\" id=\"personalDetails\">\n              <ion-item>\n                <ion-label position=\"floating\">Nombre</ion-label>\n                <ion-input #fname=\"ngModel\" name=\"first_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Apellido</ion-label>\n                <ion-input #lname=\"ngModel\" name=\"last_name\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input #email=\"ngModel\" name=\"email\" ngModel required type=\"email\"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                <ion-label position=\"floating\">Celular</ion-label>\n                <ion-input #phone=\"ngModel\" name=\"phone\" ngModel required type=\"text\"></ion-input>\n              </ion-item>\n            </div>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Billing Details-->\n      <ion-row>\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('billing')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#billingDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Direccion de Facturacion </h2>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"!isBillingUp\" class=\"justify-self-start\"\n                          data-target=\"#billingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('billing')\" *ngIf=\"isBillingUp\" class=\"justify-self-start\"\n                          data-target=\"#billingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n\n\n            <ion-item class=\"collapse\" id=\"billingDetails\">\n              <ion-label position=\"stacked\">calle Principal</ion-label>\n              <ion-input #b_address_line_1=\"ngModel\" name=\"b_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n\n              <ion-label position=\"stacked\">Calle segundaria</ion-label>\n              <ion-input #b_address_line_2=\"ngModel\" name=\"b_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n\n              <ion-label position=\"stacked\">Ciudad</ion-label>\n              <ion-input #b_city=\"ngModel\" name=\"b_city\" ngModel required\n                         type=\"text\"></ion-input>\n\n              <ion-label position=\"stacked\">Provincia</ion-label>\n              <ion-input #b_state=\"ngModel\" name=\"b_state\" ngModel required\n                         type=\"text\"></ion-input>\n\n\n              <ion-label position=\"stacked\">Codigo Postal</ion-label>\n              <ion-input #b_postcode=\"ngModel\" name=\"b_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Checkbox-->\n      <ion-row>\n        <ion-col>\n          <ion-item style=\"border: 1px solid lightgray;\">\n            <ion-checkbox (ionChange)=\"toggleShipping()\" [checked]=\"sameShipping\" color=\"primary\"\n                          slot=\"start\"></ion-checkbox>\n            <ion-label>Envio Igual Que La Direccion de Facuracion</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Shipping Details-->\n      <ion-row *ngIf=\"!sameShipping\">\n        <ion-col>\n          <ion-list lines=\"full\">\n            <ion-list-header color=\"\" lines=\"full\" slot=\"start\">\n              <ion-label (click)=\"toggleUp('shipping')\"\n                         class=\"d-flex justify-content-between align-items-center\"\n                         data-target=\"#shippingDetails\" data-toggle=\"collapse\">\n                <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Direccion de Envio </h2>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"!isShippingUp\"\n                          class=\"justify-self-start\"\n                          data-target=\"#shippingDetails\" data-toggle=\"collapse\"\n                          name=\"chevron-down-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n                <ion-icon (click)=\"toggleUp('shipping')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                          data-target=\"#shippingDetails\"\n                          data-toggle=\"collapse\" name=\"chevron-up-outline\"\n                          size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              </ion-label>\n            </ion-list-header>\n\n\n            <ion-item class=\"collapse\" id=\"shippingDetails\">\n              <ion-label position=\"stacked\">calle Principal</ion-label>\n              <ion-input #s_address_line_1=\"ngModel\" name=\"s_address_line_1\" ngModel required\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">calle Secundaria</ion-label>\n              <ion-input #s_address_line_2=\"ngModel\" name=\"s_address_line_2\" ngModel\n                         type=\"text\"></ion-input>\n              <ion-label position=\"stacked\">Ciudad</ion-label>\n              <ion-input #s_city=\"ngModel\" name=\"s_city\" ngModel required\n                         type=\"text\"></ion-input>\n\n              <ion-label position=\"stacked\">Provincia</ion-label>\n              <ion-input #b_state=\"ngModel\" name=\"b_state\" ngModel required\n                          type=\"text\"></ion-input>\n\n              <ion-label position=\"stacked\">Codigo Postal</ion-label>\n              <ion-input #s_postcode=\"ngModel\" name=\"s_postcode\" ngModel required\n                         type=\"text\"></ion-input>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n  <ion-grid>\n    <!-- Payment Details-->\n    <ion-row>\n      <ion-col>\n        <ion-list *ngIf=\"paymentGateway.length > 0\" lines=\"full\">\n          <ion-list-header color=\"primary\" lines=\"full\" slot=\"start\">\n            <ion-label (click)=\"toggleUp('payment')\"\n                       class=\"d-flex justify-content-between align-items-center\"\n                       data-target=\"#paymentDetails\" data-toggle=\"collapse\">\n              <h2 class=\"ion-color-tertiary\" style=\"color: #e5e5e5;\">Opciones De Pago </h2>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"!isShippingUp\" class=\"justify-self-start\"\n                        data-target=\"#shippingDetails\" data-toggle=\"collapse\"\n                        name=\"chevron-down-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n              <ion-icon (click)=\"toggleUp('payment')\" *ngIf=\"isShippingUp\" class=\"justify-self-start\"\n                        data-target=\"#shippingDetails\"\n                        data-toggle=\"collapse\" name=\"chevron-up-outline\"\n                        size=\"medium\" slot=\"icon-only\" style=\"color: #e5e5e5;\"></ion-icon>\n            </ion-label>\n          </ion-list-header>\n        </ion-list>\n        <ion-item class=\"collapse\" id=\"paymentDetails\">\n          <ion-checkbox checked\n                        color=\"primary\"\n                        readonly\n                        slot=\"start\"></ion-checkbox>\n          <ion-label>\n            {{ paymentGateway[0]?.title | uppercase}}\n            <p>{{ paymentGateway[0]?.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf=\"paymentGateway <= 0\" class=\"d-flex justify-content-center\">\n        <ion-spinner color=\"primary\" name=\"dots\" size=\"large\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n\n\n    <!-- ORDER SUMMARY -->\n    <ion-row>\n      <ion-col>\n        <ion-card class=\"ion-no-padding ion-no-margin\">\n          <ion-card-header color=\"medium\">\n            <ion-card-title>Resumen Del Pedido</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list lines=\"none\">\n              <ion-item>\n                <ion-label slot=\"start\" routerLink=\"/tabs/tab3\">\n                  SubTotal ({{(cartService.cartData | async).count }})\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-spinner name=\"bubbles\" *ngIf=\"!subTotal\"></ion-spinner>\n                  <ion-text *ngIf=\"subTotal\">{{ subTotal }}</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Envio\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>Gratis</ion-text>\n                </ion-label>\n              </ion-item>\n\n              <ion-item>\n                <ion-label slot=\"start\">\n                  Total\n                </ion-label>\n                <ion-label slot=\"end\">\n                  <ion-text>{{ cartTotal}}</ion-text>\n                </ion-label>\n              </ion-item>\n\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <!--SUBMIT BUTTON-->\n  <ion-row>\n    <ion-col>\n      <ion-button (click)=\"checkout(checkoutForm)\"\n                  [disabled]=\"checkoutForm.invalid || checkoutForm.pending\"\n                  color=\"warning\"\n                  expand=\"full\"\n                  fill=\"solid\"\n                  size=\"large\"\n                  type=\"submit\"\n      >Realizar Pedido\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-checkout-checkout-module.js.map