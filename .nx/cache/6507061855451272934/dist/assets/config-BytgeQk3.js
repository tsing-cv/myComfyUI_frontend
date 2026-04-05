import "./rolldown-runtime-DBfy44LZ.js";
import { t as isCloud } from "./types-BqIM6TDt.js";
//#region src/platform/support/config.ts
/**
* Zendesk ticket form field IDs.
*/
var ZENDESK_FIELDS = {
	DISTRIBUTION: "tf_42243568391700",
	ANONYMOUS_EMAIL: "tf_anonymous_requester_email",
	EMAIL: "tf_40029135130388",
	USER_ID: "tf_42515251051412"
};
/**
* Gets the distribution identifier for Zendesk tracking.
* Helps distinguish feedback from different build types.
*/
function getDistribution() {
	if (isCloud) return "ccloud";
	return "oss";
}
var SUPPORT_BASE_URL = "https://support.comfy.org/hc/en-us/requests/new";
var ZENDESK_FEEDBACK_FORM_ID = "43066738713236";
/**
* Builds the feedback form URL with the appropriate distribution tag.
*/
function buildFeedbackUrl() {
	return `${SUPPORT_BASE_URL}?${new URLSearchParams({
		ticket_form_id: ZENDESK_FEEDBACK_FORM_ID,
		[ZENDESK_FIELDS.DISTRIBUTION]: getDistribution()
	}).toString()}`;
}
/**
* Builds the support URL with optional user information for pre-filling.
* Users without login information will still get a valid support URL without pre-fill.
*
* @param params - User information to pre-fill in the support form
* @returns Complete Zendesk support URL with query parameters
*/
function buildSupportUrl(params) {
	const searchParams = new URLSearchParams({ [ZENDESK_FIELDS.DISTRIBUTION]: getDistribution() });
	if (params?.userEmail) {
		searchParams.append(ZENDESK_FIELDS.ANONYMOUS_EMAIL, params.userEmail);
		searchParams.append(ZENDESK_FIELDS.EMAIL, params.userEmail);
	}
	if (params?.userId) searchParams.append(ZENDESK_FIELDS.USER_ID, params.userId);
	return `${SUPPORT_BASE_URL}?${searchParams.toString()}`;
}
//#endregion
export { buildSupportUrl as n, buildFeedbackUrl as t };

//# sourceMappingURL=config-BytgeQk3.js.map