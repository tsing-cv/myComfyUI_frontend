"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTourEventProperties = exports.ProductTourEventName = exports.DEFAULT_PRODUCT_TOUR_APPEARANCE = void 0;
var constants_1 = require("./constants");
exports.DEFAULT_PRODUCT_TOUR_APPEARANCE = {
    backgroundColor: '#ffffff',
    textColor: '#1d1f27',
    buttonColor: '#1d1f27',
    borderRadius: 8,
    buttonBorderRadius: 6,
    borderColor: '#e5e7eb',
    fontFamily: 'system-ui',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    showOverlay: true,
    whiteLabel: false,
    dismissOnClickOutside: true,
    zIndex: constants_1.Z_INDEX_TOURS,
};
var ProductTourEventName;
(function (ProductTourEventName) {
    ProductTourEventName["SHOWN"] = "product tour shown";
    ProductTourEventName["DISMISSED"] = "product tour dismissed";
    ProductTourEventName["COMPLETED"] = "product tour completed";
    ProductTourEventName["STEP_SHOWN"] = "product tour step shown";
    ProductTourEventName["STEP_COMPLETED"] = "product tour step completed";
    ProductTourEventName["BUTTON_CLICKED"] = "product tour button clicked";
    ProductTourEventName["STEP_SELECTOR_FAILED"] = "product tour step selector failed";
    ProductTourEventName["BANNER_CONTAINER_SELECTOR_FAILED"] = "product tour banner container selector failed";
    ProductTourEventName["BANNER_ACTION_CLICKED"] = "product tour banner action clicked";
})(ProductTourEventName || (exports.ProductTourEventName = ProductTourEventName = {}));
var ProductTourEventProperties;
(function (ProductTourEventProperties) {
    ProductTourEventProperties["TOUR_ID"] = "$product_tour_id";
    ProductTourEventProperties["TOUR_NAME"] = "$product_tour_name";
    ProductTourEventProperties["TOUR_ITERATION"] = "$product_tour_iteration";
    ProductTourEventProperties["TOUR_RENDER_REASON"] = "$product_tour_render_reason";
    ProductTourEventProperties["TOUR_STEP_ID"] = "$product_tour_step_id";
    ProductTourEventProperties["TOUR_STEP_ORDER"] = "$product_tour_step_order";
    ProductTourEventProperties["TOUR_STEP_TYPE"] = "$product_tour_step_type";
    ProductTourEventProperties["TOUR_DISMISS_REASON"] = "$product_tour_dismiss_reason";
    ProductTourEventProperties["TOUR_BUTTON_TEXT"] = "$product_tour_button_text";
    ProductTourEventProperties["TOUR_BUTTON_ACTION"] = "$product_tour_button_action";
    ProductTourEventProperties["TOUR_BUTTON_LINK"] = "$product_tour_button_link";
    ProductTourEventProperties["TOUR_BUTTON_TOUR_ID"] = "$product_tour_button_tour_id";
    ProductTourEventProperties["TOUR_STEPS_COUNT"] = "$product_tour_steps_count";
    ProductTourEventProperties["TOUR_STEP_SELECTOR"] = "$product_tour_step_selector";
    ProductTourEventProperties["TOUR_STEP_SELECTOR_FOUND"] = "$product_tour_step_selector_found";
    ProductTourEventProperties["TOUR_STEP_ELEMENT_TAG"] = "$product_tour_step_element_tag";
    ProductTourEventProperties["TOUR_STEP_ELEMENT_ID"] = "$product_tour_step_element_id";
    ProductTourEventProperties["TOUR_STEP_ELEMENT_CLASSES"] = "$product_tour_step_element_classes";
    ProductTourEventProperties["TOUR_STEP_ELEMENT_TEXT"] = "$product_tour_step_element_text";
    ProductTourEventProperties["TOUR_ERROR"] = "$product_tour_error";
    ProductTourEventProperties["TOUR_MATCHES_COUNT"] = "$product_tour_matches_count";
    ProductTourEventProperties["TOUR_FAILURE_PHASE"] = "$product_tour_failure_phase";
    ProductTourEventProperties["TOUR_WAITED_FOR_ELEMENT"] = "$product_tour_waited_for_element";
    ProductTourEventProperties["TOUR_WAIT_DURATION_MS"] = "$product_tour_wait_duration_ms";
    ProductTourEventProperties["TOUR_BANNER_SELECTOR"] = "$product_tour_banner_selector";
    ProductTourEventProperties["TOUR_LINKED_SURVEY_ID"] = "$product_tour_linked_survey_id";
    ProductTourEventProperties["USE_MANUAL_SELECTOR"] = "$use_manual_selector";
    ProductTourEventProperties["INFERENCE_DATA_PRESENT"] = "$inference_data_present";
    ProductTourEventProperties["TOUR_LAST_SEEN_DATE"] = "$product_tour_last_seen_date";
    ProductTourEventProperties["TOUR_TYPE"] = "$product_tour_type";
})(ProductTourEventProperties || (exports.ProductTourEventProperties = ProductTourEventProperties = {}));
//# sourceMappingURL=posthog-product-tours-types.js.map