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
    //this.cdnProperties = cdnProperties;
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

  getOrderDescriptionMSG() {
    console.log('ZM:: hasCDN', this.hasCDN);
    console.log('ZM:: isV1CDN', this.isV1CDN);
    console.log('ZM:: isV2CDN', this.isV2CDN);

    // CDN Included
    if (this.isIncludedCDN) {
      return this.$translate.instant('hosting_cdn_order_customer_with_cdn_v1_included_description');
    }

    // CDN Payable
    if (this.isPayableCDN) {
      return this.$translate.instant('hosting_cdn_order_customer_with_cdn_v1_payable_description');
    }

    // NO CDN
    if (!this.hasCDN) {
      return this.$translate.instant('hosting_cdn_order_customer_without_cdn_description');
    }

  }
}
