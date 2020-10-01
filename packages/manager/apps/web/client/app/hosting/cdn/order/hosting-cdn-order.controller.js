import filter from 'lodash/filter';
import includes from 'lodash/includes';
import get from "lodash/get";

export default class {
  /* @ngInject */
  constructor($scope, $filter, $timeout, $translate) {
    this.$scope = $scope;
    this.$filter = $filter;
    this.$timeout = $timeout;
    this.$translate = $translate;
    this.cdnCase = null;
  }

  $onInit() {
    // Auto-select duration
    this.prices = filter(this.catalogAddon.pricings, ({ capacities }) =>
      includes(capacities, 'renew'),
    );
    [this.price] = this.prices;
    this.interval = this.price.interval;
    this.isEditable = true;

    if (this.catalogAddon.pricings.length === 1) {
      // Go directly to the next step
      this.currentIndex = 1;
      this.isEditable = false;
    }

    if (this.isIncludedCDN) {
      this.cdnCase = 'included';
    } else if (this.isPayableCDN) {
      this.cdnCase = 'payable';
    } else if (!this.hasCDN) {
      this.cdnCase = 'without';
    }
  }

  resetCart() {
    if (this.cart) {
      this.cart = undefined;
      this.cartId = undefined;
    }
  }

  async prepareCheckout() {
    if (!this.cart && !this.checkoutLoading) {
      this.checkoutLoading = true;
      const { cart, cartId } = await this.prepareOrderCart();

      this.$timeout(() => {
        this.cart = cart;
        this.cartId = cartId;
        this.checkoutLoading = false;
      });
    }
  }

  checkout() {
    this.checkoutLoading = true;

    this.checkoutOrderCart(!!this.defaultPaymentMethod, this.cartId);
  }

  getDuration(interval) {
    return this.$filter('wucDuration')(interval.toString(), 'longDate');
  }

  getButtonSubmitText() {
    if (this.isOptionFree) {
      return this.$translate.instant('hosting_cdn_order_submit_activate');
    } else if (this.isIncludedCDN) {
      return this.$translate.instant('hosting_cdn_order_customer_cdn_included_step2_btn_ok');
    } else {
      return this.$translate.instant('hosting_cdn_order_submit_pay');
    }
  }
}
