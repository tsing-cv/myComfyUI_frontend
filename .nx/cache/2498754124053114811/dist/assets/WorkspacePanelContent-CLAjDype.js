import "./rolldown-runtime-DBfy44LZ.js";
import { T as script, dt as useToast } from "./vendor-primevue-Dnp2bJ8y.js";
import "./vendor-firebase-x5F51RZV.js";
import { A as createCommentVNode, Bt as normalizeClass, D as computed, F as createTextVNode, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, S as Fragment, Ut as toDisplayString, Z as onMounted, _t as withCtx, at as resolveDirective, et as openBlock, j as createElementBlock, k as createBlock, kt as ref, l as storeToRefs, nt as renderList, vt as withDirectives } from "./vendor-vue-core-Ba0aGEmU.js";
import "./vendor-other-BMn-xt1e.js";
import "./useFeatureFlags-BHjH2vt1.js";
import "./api-kFdESQTE.js";
import "./toastStore-Cs9o1vxC.js";
import "./vendor-markdown-Cwvpr7zF.js";
import "./colorUtil-D_gLWYA0.js";
import { n as useI18n } from "./vendor-i18n-CQIJzQYM.js";
import "./i18n-CEjiKAGw.js";
import { d as TabsTrigger_default, f as TabsList_default, m as TabsRoot_default, p as TabsContent_default } from "./vendor-reka-ui-D-_wwtHz.js";
import { t as cn } from "./src-ZLYFRbHY.js";
import { t as Button_default } from "./Button-BDFSC50t.js";
import { Li as useTeamWorkspaceStore, Mi as useCurrentUser, Qi as TIER_TO_KEY, ia as SearchInput_default, ki as useBillingContext, t as useDialogService } from "./dialogService-ClaKHdWI.js";
import "./formatUtil-CKufMkDg.js";
import "./dialogStore-BfuGFDEW.js";
import "./userStore-DKB2Qhsc.js";
import "./useErrorHandling-BWjixeIq.js";
import "./downloadUtil-B-Ajm1fy.js";
import "./useCopyToClipboard-BfoO2Yv1.js";
import "./vendor-tiptap-Dk5jn8en.js";
import "./WaveAudioPlayer-CHCY451S.js";
import "./Popover-CIFEPFvK.js";
import "./electronDownloadStore-CuawkY8S.js";
import "./markdownRendererUtil-uFQ2wi0y.js";
import "./useExternalLink-CjbQfKLB.js";
import { t as UserAvatar_default } from "./UserAvatar-DcGdl_le.js";
import "./tierBenefits-Nqmf1lYA.js";
import { t as WorkspaceProfilePic_default } from "./WorkspaceProfilePic-cG9UiDIS.js";
import { t as useWorkspaceUI } from "./useWorkspaceUI-CewSwHdE.js";
import { t as SubscriptionPanelContentWorkspace_default } from "./SubscriptionPanelContentWorkspace-CxIDe2ZR.js";
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { class: "grow overflow-auto pt-6" };
var _hoisted_2$1 = { class: "border-inter flex size-full flex-col gap-2 rounded-2xl border border-interface-stroke p-6" };
var _hoisted_3$1 = { class: "flex w-full items-center gap-9" };
var _hoisted_4$1 = { class: "flex min-w-0 flex-1 items-baseline gap-2" };
var _hoisted_5$1 = { class: "text-base font-semibold text-base-foreground" };
var _hoisted_6$1 = {
	key: 0,
	class: "flex items-start gap-2"
};
var _hoisted_7 = { class: "flex min-h-0 flex-1 flex-col" };
var _hoisted_8 = {
	key: 0,
	class: "flex items-center gap-2"
};
var _hoisted_9 = { key: 0 };
var _hoisted_10 = { class: "min-h-0 flex-1 overflow-y-auto" };
var _hoisted_11 = { class: "flex items-center gap-3" };
var _hoisted_12 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_13 = { class: "flex items-center gap-2" };
var _hoisted_14 = { class: "text-sm text-base-foreground" };
var _hoisted_15 = { class: "text-muted-foreground" };
var _hoisted_16 = {
	key: 0,
	class: "rounded-full bg-base-foreground px-1 py-0.5 text-2xs font-bold text-base-background uppercase"
};
var _hoisted_17 = { class: "text-sm text-muted-foreground" };
var _hoisted_18 = { class: "flex items-center gap-3" };
var _hoisted_19 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_20 = { class: "flex items-center gap-2" };
var _hoisted_21 = { class: "text-sm text-base-foreground" };
var _hoisted_22 = {
	key: 0,
	class: "text-muted-foreground"
};
var _hoisted_23 = {
	key: 0,
	class: "rounded-full bg-base-foreground px-1 py-0.5 text-2xs font-bold text-base-background uppercase"
};
var _hoisted_24 = { class: "text-sm text-muted-foreground" };
var _hoisted_25 = {
	key: 0,
	class: "text-right text-sm text-muted-foreground"
};
var _hoisted_26 = {
	key: 1,
	class: "flex items-center justify-end"
};
var _hoisted_27 = {
	key: 1,
	class: "mt-4 flex items-center justify-center gap-2 rounded-xl border border-border-default bg-secondary-background px-4 py-3"
};
var _hoisted_28 = { class: "text-foreground m-0 text-sm" };
var _hoisted_29 = { class: "flex items-center gap-3" };
var _hoisted_30 = { class: "flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary-background" };
var _hoisted_31 = { class: "text-sm font-bold text-base-foreground" };
var _hoisted_32 = { class: "flex min-w-0 flex-1 flex-col gap-1" };
var _hoisted_33 = { class: "text-sm text-base-foreground" };
var _hoisted_34 = { class: "text-sm text-muted-foreground" };
var _hoisted_35 = { class: "text-sm text-muted-foreground" };
var _hoisted_36 = { class: "text-sm text-muted-foreground" };
var _hoisted_37 = { class: "flex items-center justify-end gap-2" };
var _hoisted_38 = {
	key: 0,
	class: "flex w-full items-center justify-center py-8 text-sm text-muted-foreground"
};
var _hoisted_39 = {
	key: 0,
	class: "flex items-center"
};
var _hoisted_40 = { class: "text-sm text-muted-foreground" };
//#endregion
//#region src/platform/workspace/components/dialogs/settings/MembersPanelContent.vue
var MembersPanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "MembersPanelContent",
	setup(__props) {
		const { d, t } = useI18n();
		const toast = useToast();
		const { userPhotoUrl, userEmail, userDisplayName } = useCurrentUser();
		const { showRemoveMemberDialog, showRevokeInviteDialog, showCreateWorkspaceDialog } = useDialogService();
		const workspaceStore = useTeamWorkspaceStore();
		const { members, pendingInvites, isInPersonalWorkspace: isPersonalWorkspace } = storeToRefs(workspaceStore);
		const { copyInviteLink } = workspaceStore;
		const { permissions, uiConfig } = useWorkspaceUI();
		const { isActiveSubscription, subscription, showSubscriptionDialog, getMaxSeats } = useBillingContext();
		const maxSeats = computed(() => {
			if (isPersonalWorkspace.value) return 1;
			const tier = subscription.value?.tier;
			if (!tier) return 1;
			const tierKey = TIER_TO_KEY[tier];
			if (!tierKey) return 1;
			return getMaxSeats(tierKey);
		});
		const isSingleSeatPlan = computed(() => {
			if (isPersonalWorkspace.value) return false;
			if (!isActiveSubscription.value) return true;
			return maxSeats.value <= 1;
		});
		const searchQuery = ref("");
		const activeView = ref("active");
		const sortField = ref("inviteDate");
		const sortDirection = ref("desc");
		const memberMenu = ref(null);
		const selectedMember = ref(null);
		function getInviteDisplayName(email) {
			return email.split("@")[0];
		}
		function getInviteInitial(email) {
			return email.charAt(0).toUpperCase();
		}
		const memberMenuItems = computed(() => [{
			label: t("workspacePanel.members.actions.removeMember"),
			icon: "pi pi-user-minus",
			command: () => {
				if (selectedMember.value) handleRemoveMember(selectedMember.value);
			}
		}]);
		function showMemberMenu(event, member) {
			selectedMember.value = member;
			memberMenu.value?.toggle(event);
		}
		function isCurrentUser(member) {
			return member.email.toLowerCase() === userEmail.value?.toLowerCase();
		}
		const filteredMembers = computed(() => {
			let result = [...members.value];
			if (searchQuery.value) {
				const query = searchQuery.value.toLowerCase();
				result = result.filter((member) => member.name.toLowerCase().includes(query) || member.email.toLowerCase().includes(query));
			}
			result.sort((a, b) => {
				if (a.role === "owner" && b.role !== "owner") return -1;
				if (a.role !== "owner" && b.role === "owner") return 1;
				const aIsCurrentUser = isCurrentUser(a);
				const bIsCurrentUser = isCurrentUser(b);
				if (aIsCurrentUser && !bIsCurrentUser) return -1;
				if (!aIsCurrentUser && bIsCurrentUser) return 1;
				const aValue = a.joinDate.getTime();
				const bValue = b.joinDate.getTime();
				return sortDirection.value === "asc" ? aValue - bValue : bValue - aValue;
			});
			return result;
		});
		function getRoleBadgeLabel(role) {
			return role === "owner" ? t("workspaceSwitcher.roleOwner") : t("workspaceSwitcher.roleMember");
		}
		const filteredPendingInvites = computed(() => {
			let result = [...pendingInvites.value];
			if (searchQuery.value) {
				const query = searchQuery.value.toLowerCase();
				result = result.filter((invite) => invite.email.toLowerCase().includes(query));
			}
			const field = sortField.value === "joinDate" ? "inviteDate" : sortField.value;
			result.sort((a, b) => {
				const aDate = a[field];
				const bDate = b[field];
				if (!aDate || !bDate) return 0;
				const aValue = aDate.getTime();
				const bValue = bDate.getTime();
				return sortDirection.value === "asc" ? aValue - bValue : bValue - aValue;
			});
			return result;
		});
		function toggleSort(field) {
			if (sortField.value === field) sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
			else {
				sortField.value = field;
				sortDirection.value = "desc";
			}
		}
		function formatDate(date) {
			return d(date, { dateStyle: "medium" });
		}
		async function handleCopyInviteLink(invite) {
			try {
				await copyInviteLink(invite.id);
				toast.add({
					severity: "success",
					summary: t("g.copied"),
					life: 2e3
				});
			} catch {
				toast.add({
					severity: "error",
					summary: t("g.error")
				});
			}
		}
		function handleRevokeInvite(invite) {
			showRevokeInviteDialog(invite.id);
		}
		function handleCreateWorkspace() {
			showCreateWorkspaceDialog();
		}
		function handleRemoveMember(member) {
			showRemoveMemberDialog(member.id);
		}
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("div", _hoisted_3$1, [createBaseVNode("div", _hoisted_4$1, [createBaseVNode("span", _hoisted_5$1, [activeView.value === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.membersCount", {
				count: isSingleSeatPlan.value || unref(isPersonalWorkspace) ? 1 : unref(members).length,
				maxSeats: maxSeats.value
			})), 1)], 64)) : unref(permissions).canViewPendingInvites ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.pendingInvitesCount", unref(pendingInvites).length)), 1)], 64)) : createCommentVNode("", true)])]), unref(uiConfig).showSearch && !isSingleSeatPlan.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [createVNode(SearchInput_default, {
				modelValue: searchQuery.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
				placeholder: _ctx.$t("g.search"),
				size: "lg",
				class: "w-64"
			}, null, 8, ["modelValue", "placeholder"])])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_7, [unref(uiConfig).showMembersList ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(unref(cn)("grid w-full items-center py-2", isSingleSeatPlan.value ? "grid-cols-1 py-0" : activeView.value === "pending" ? unref(uiConfig).pendingGridCols : unref(uiConfig).headerGridCols))
			}, [!isSingleSeatPlan.value ? (openBlock(), createElementBlock("div", _hoisted_8, [createVNode(Button_default, {
				variant: activeView.value === "active" ? "secondary" : "muted-textonly",
				size: "md",
				onClick: _cache[1] || (_cache[1] = ($event) => activeView.value = "active")
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.active")), 1)]),
				_: 1
			}, 8, ["variant"]), unref(uiConfig).showPendingTab ? (openBlock(), createBlock(Button_default, {
				key: 0,
				variant: activeView.value === "pending" ? "secondary" : "muted-textonly",
				size: "md",
				onClick: _cache[2] || (_cache[2] = ($event) => activeView.value = "pending")
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.tabs.pendingCount", unref(pendingInvites).length)), 1)]),
				_: 1
			}, 8, ["variant"])) : createCommentVNode("", true)])) : createCommentVNode("", true), activeView.value === "pending" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "sm",
					class: "justify-start",
					onClick: _cache[3] || (_cache[3] = ($event) => toggleSort("inviteDate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.inviteDate")) + " ", 1), _cache[7] || (_cache[7] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
					_: 1
				}),
				createVNode(Button_default, {
					variant: "muted-textonly",
					size: "sm",
					class: "justify-start",
					onClick: _cache[4] || (_cache[4] = ($event) => toggleSort("expiryDate"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.expiryDate")) + " ", 1), _cache[8] || (_cache[8] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
					_: 1
				}),
				_cache[9] || (_cache[9] = createBaseVNode("div", null, null, -1))
			], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [!isSingleSeatPlan.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(Button_default, {
				variant: "muted-textonly",
				size: "sm",
				class: "justify-end",
				onClick: _cache[5] || (_cache[5] = ($event) => toggleSort("joinDate"))
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.columns.joinDate")) + " ", 1), _cache[10] || (_cache[10] = createBaseVNode("i", { class: "icon-[lucide--chevrons-up-down] size-4" }, null, -1))]),
				_: 1
			}), unref(permissions).canRemoveMembers ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 64))], 2)) : createCommentVNode("", true), createBaseVNode("div", _hoisted_10, [
				activeView.value === "active" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(isPersonalWorkspace) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", unref(uiConfig).membersGridCols))
				}, [createBaseVNode("div", _hoisted_11, [createVNode(UserAvatar_default, {
					class: "size-8",
					"photo-url": unref(userPhotoUrl),
					"pt:icon:class": { "text-xl!": !unref(userPhotoUrl) }
				}, null, 8, ["photo-url", "pt:icon:class"]), createBaseVNode("div", _hoisted_12, [createBaseVNode("div", _hoisted_13, [createBaseVNode("span", _hoisted_14, [createTextVNode(toDisplayString(unref(userDisplayName)) + " ", 1), createBaseVNode("span", _hoisted_15, " (" + toDisplayString(_ctx.$t("g.you")) + ") ", 1)]), unref(uiConfig).showRoleBadge ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(_ctx.$t("workspaceSwitcher.roleOwner")), 1)) : createCommentVNode("", true)]), createBaseVNode("span", _hoisted_17, toDisplayString(unref(userEmail)), 1)])])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredMembers.value, (member, index) => {
					return openBlock(), createElementBlock("div", {
						key: member.id,
						class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", isSingleSeatPlan.value ? "grid-cols-1" : unref(uiConfig).membersGridCols, index % 2 === 1 && "bg-secondary-background/50"))
					}, [
						createBaseVNode("div", _hoisted_18, [createVNode(UserAvatar_default, {
							class: "size-8",
							"photo-url": isCurrentUser(member) ? unref(userPhotoUrl) : void 0,
							"pt:icon:class": { "text-xl!": !isCurrentUser(member) || !unref(userPhotoUrl) }
						}, null, 8, ["photo-url", "pt:icon:class"]), createBaseVNode("div", _hoisted_19, [createBaseVNode("div", _hoisted_20, [createBaseVNode("span", _hoisted_21, [createTextVNode(toDisplayString(member.name) + " ", 1), isCurrentUser(member) ? (openBlock(), createElementBlock("span", _hoisted_22, " (" + toDisplayString(_ctx.$t("g.you")) + ") ", 1)) : createCommentVNode("", true)]), unref(uiConfig).showRoleBadge ? (openBlock(), createElementBlock("span", _hoisted_23, toDisplayString(getRoleBadgeLabel(member.role)), 1)) : createCommentVNode("", true)]), createBaseVNode("span", _hoisted_24, toDisplayString(member.email), 1)])]),
						unref(uiConfig).showDateColumn && !isSingleSeatPlan.value ? (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(formatDate(member.joinDate)), 1)) : createCommentVNode("", true),
						unref(permissions).canRemoveMembers && !isSingleSeatPlan.value ? (openBlock(), createElementBlock("div", _hoisted_26, [!isCurrentUser(member) ? withDirectives((openBlock(), createBlock(Button_default, {
							key: 0,
							variant: "muted-textonly",
							size: "icon",
							"aria-label": _ctx.$t("g.moreOptions"),
							onClick: ($event) => showMemberMenu($event, member)
						}, {
							default: withCtx(() => _cache[11] || (_cache[11] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])),
							_: 2
						}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, {
							value: _ctx.$t("g.moreOptions"),
							showDelay: 300
						}]]) : createCommentVNode("", true)])) : createCommentVNode("", true)
					], 2);
				}), 128)), createVNode(unref(script), {
					ref_key: "memberMenu",
					ref: memberMenu,
					model: memberMenuItems.value,
					popup: true
				}, null, 8, ["model"])], 64))], 64)) : createCommentVNode("", true),
				isSingleSeatPlan.value ? (openBlock(), createElementBlock("div", _hoisted_27, [createBaseVNode("p", _hoisted_28, toDisplayString(unref(isActiveSubscription) ? _ctx.$t("workspacePanel.members.upsellBannerUpgrade") : _ctx.$t("workspacePanel.members.upsellBannerSubscribe")), 1), createVNode(Button_default, {
					variant: "muted-textonly",
					class: "cursor-pointer text-sm underline",
					onClick: _cache[6] || (_cache[6] = ($event) => unref(showSubscriptionDialog)())
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.members.viewPlans")), 1)]),
					_: 1
				})])) : createCommentVNode("", true),
				activeView.value === "pending" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredPendingInvites.value, (invite, index) => {
					return openBlock(), createElementBlock("div", {
						key: invite.id,
						class: normalizeClass(unref(cn)("grid w-full items-center rounded-lg p-2", unref(uiConfig).pendingGridCols, index % 2 === 1 && "bg-secondary-background/50"))
					}, [
						createBaseVNode("div", _hoisted_29, [createBaseVNode("div", _hoisted_30, [createBaseVNode("span", _hoisted_31, toDisplayString(getInviteInitial(invite.email)), 1)]), createBaseVNode("div", _hoisted_32, [createBaseVNode("span", _hoisted_33, toDisplayString(getInviteDisplayName(invite.email)), 1), createBaseVNode("span", _hoisted_34, toDisplayString(invite.email), 1)])]),
						createBaseVNode("span", _hoisted_35, toDisplayString(formatDate(invite.inviteDate)), 1),
						createBaseVNode("span", _hoisted_36, toDisplayString(formatDate(invite.expiryDate)), 1),
						createBaseVNode("div", _hoisted_37, [withDirectives((openBlock(), createBlock(Button_default, {
							variant: "secondary",
							size: "md",
							"aria-label": _ctx.$t("workspacePanel.members.actions.copyLink"),
							onClick: ($event) => handleCopyInviteLink(invite)
						}, {
							default: withCtx(() => _cache[12] || (_cache[12] = [createBaseVNode("i", { class: "icon-[lucide--link] size-4" }, null, -1)])),
							_: 2
						}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, {
							value: _ctx.$t("workspacePanel.members.actions.copyLink"),
							showDelay: 300
						}]]), withDirectives((openBlock(), createBlock(Button_default, {
							variant: "secondary",
							size: "md",
							"aria-label": _ctx.$t("workspacePanel.members.actions.revokeInvite"),
							onClick: ($event) => handleRevokeInvite(invite)
						}, {
							default: withCtx(() => _cache[13] || (_cache[13] = [createBaseVNode("i", { class: "icon-[lucide--mail-x] size-4" }, null, -1)])),
							_: 2
						}, 1032, ["aria-label", "onClick"])), [[_directive_tooltip, {
							value: _ctx.$t("workspacePanel.members.actions.revokeInvite"),
							showDelay: 300
						}]])])
					], 2);
				}), 128)), filteredPendingInvites.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_38, toDisplayString(_ctx.$t("workspacePanel.members.noInvites")), 1)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)
			])])]), unref(isPersonalWorkspace) ? (openBlock(), createElementBlock("div", _hoisted_39, [createBaseVNode("p", _hoisted_40, toDisplayString(_ctx.$t("workspacePanel.members.personalWorkspaceMessage")), 1), createBaseVNode("button", {
				class: "cursor-pointer border-none bg-transparent underline",
				onClick: handleCreateWorkspace
			}, toDisplayString(_ctx.$t("workspacePanel.members.createNewWorkspace")), 1)])) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex size-full flex-col" };
var _hoisted_2 = { class: "mb-8 flex items-center gap-4" };
var _hoisted_3 = { class: "text-3xl text-base-foreground" };
var _hoisted_4 = { class: "flex w-full items-center justify-between" };
var _hoisted_5 = { class: "flex items-center gap-1" };
var _hoisted_6 = ["disabled", "onClick"];
var tabTriggerBase = "flex items-center justify-center shrink-0 px-2.5 py-2 text-sm rounded-lg cursor-pointer transition-all duration-200 outline-hidden border-none";
var tabTriggerActive = "bg-interface-menu-component-surface-hovered text-text-primary font-bold";
var tabTriggerInactive = "bg-transparent text-text-secondary hover:bg-button-hover-surface focus:bg-button-hover-surface";
//#endregion
//#region src/platform/workspace/components/dialogs/settings/WorkspacePanelContent.vue
var WorkspacePanelContent_default = /* @__PURE__ */ defineComponent({
	__name: "WorkspacePanelContent",
	props: { defaultTab: { default: "plan" } },
	setup(__props) {
		const { t } = useI18n();
		const { showLeaveWorkspaceDialog, showDeleteWorkspaceDialog, showInviteMemberDialog, showInviteMemberUpsellDialog, showEditWorkspaceDialog } = useDialogService();
		const { isActiveSubscription, subscription, getMaxSeats } = useBillingContext();
		const isSingleSeatPlan = computed(() => {
			if (!isActiveSubscription.value) return true;
			const tier = subscription.value?.tier;
			if (!tier) return true;
			const tierKey = TIER_TO_KEY[tier];
			if (!tierKey) return true;
			return getMaxSeats(tierKey) <= 1;
		});
		const workspaceStore = useTeamWorkspaceStore();
		const { workspaceName, members, isInviteLimitReached, isWorkspaceSubscribed } = storeToRefs(workspaceStore);
		const { fetchMembers, fetchPendingInvites } = workspaceStore;
		const { workspaceRole, permissions, uiConfig } = useWorkspaceUI();
		const activeTab = ref(__props.defaultTab);
		const menu = ref(null);
		function handleLeaveWorkspace() {
			showLeaveWorkspaceDialog();
		}
		function handleDeleteWorkspace() {
			showDeleteWorkspaceDialog();
		}
		function handleEditWorkspace() {
			showEditWorkspaceDialog();
		}
		const isDeleteDisabled = computed(() => uiConfig.value.workspaceMenuAction === "delete" && isWorkspaceSubscribed.value);
		const deleteTooltip = computed(() => {
			if (!isDeleteDisabled.value) return null;
			const tooltipKey = uiConfig.value.workspaceMenuDisabledTooltip;
			return tooltipKey ? t(tooltipKey) : null;
		});
		const inviteTooltip = computed(() => {
			if (isSingleSeatPlan.value) return null;
			if (!isInviteLimitReached.value) return null;
			return t("workspacePanel.inviteLimitReached");
		});
		function handleInviteMember() {
			if (isSingleSeatPlan.value) {
				showInviteMemberUpsellDialog();
				return;
			}
			if (isInviteLimitReached.value) return;
			showInviteMemberDialog();
		}
		const menuItems = computed(() => {
			const items = [];
			if (uiConfig.value.showEditWorkspaceMenuItem) items.push({
				label: t("workspacePanel.menu.editWorkspace"),
				icon: "pi pi-pencil",
				command: handleEditWorkspace
			});
			const action = uiConfig.value.workspaceMenuAction;
			if (action === "delete") items.push({
				label: t("workspacePanel.menu.deleteWorkspace"),
				icon: "pi pi-trash",
				class: isDeleteDisabled.value ? "text-danger/50 cursor-not-allowed" : "text-danger",
				disabled: isDeleteDisabled.value,
				command: isDeleteDisabled.value ? void 0 : handleDeleteWorkspace
			});
			else if (action === "leave") items.push({
				label: t("workspacePanel.menu.leaveWorkspace"),
				icon: "pi pi-sign-out",
				command: handleLeaveWorkspace
			});
			return items;
		});
		onMounted(() => {
			fetchMembers();
			fetchPendingInvites();
		});
		return (_ctx, _cache) => {
			const _directive_tooltip = resolveDirective("tooltip");
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("header", _hoisted_2, [createVNode(WorkspaceProfilePic_default, {
				class: "size-12 text-3xl!",
				"workspace-name": unref(workspaceName)
			}, null, 8, ["workspace-name"]), createBaseVNode("h1", _hoisted_3, toDisplayString(unref(workspaceName)), 1)]), createVNode(unref(TabsRoot_default), {
				modelValue: activeTab.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => activeTab.value = $event)
			}, {
				default: withCtx(() => [
					createBaseVNode("div", _hoisted_4, [createVNode(unref(TabsList_default), { class: "flex items-center gap-2 pb-1" }, {
						default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
							value: "plan",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "plan" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.tabs.planCredits")), 1)]),
							_: 1
						}, 8, ["class"]), createVNode(unref(TabsTrigger_default), {
							value: "members",
							class: normalizeClass(unref(cn)(tabTriggerBase, activeTab.value === "members" ? tabTriggerActive : tabTriggerInactive))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("workspacePanel.tabs.membersCount", { count: unref(members).length })), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					}), createBaseVNode("div", _hoisted_5, [unref(permissions).canInviteMembers ? withDirectives((openBlock(), createBlock(Button_default, {
						key: 0,
						variant: "secondary",
						size: "lg",
						disabled: !isSingleSeatPlan.value && unref(isInviteLimitReached),
						class: normalizeClass(!isSingleSeatPlan.value && unref(isInviteLimitReached) && "cursor-not-allowed opacity-50"),
						"aria-label": _ctx.$t("workspacePanel.inviteMember"),
						onClick: handleInviteMember
					}, {
						default: withCtx(() => _cache[2] || (_cache[2] = [createBaseVNode("i", { class: "pi pi-plus text-sm" }, null, -1)])),
						_: 1
					}, 8, [
						"disabled",
						"class",
						"aria-label"
					])), [[_directive_tooltip, inviteTooltip.value ? {
						value: inviteTooltip.value,
						showDelay: 0
					} : {
						value: _ctx.$t("workspacePanel.inviteMember"),
						showDelay: 300
					}]]) : createCommentVNode("", true), unref(permissions).canAccessWorkspaceMenu ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [withDirectives((openBlock(), createBlock(Button_default, {
						variant: "muted-textonly",
						size: "icon",
						"aria-label": _ctx.$t("g.moreOptions"),
						onClick: _cache[0] || (_cache[0] = ($event) => menu.value?.toggle($event))
					}, {
						default: withCtx(() => _cache[3] || (_cache[3] = [createBaseVNode("i", { class: "pi pi-ellipsis-h" }, null, -1)])),
						_: 1
					}, 8, ["aria-label"])), [[_directive_tooltip, {
						value: _ctx.$t("g.moreOptions"),
						showDelay: 300
					}]]), createVNode(unref(script), {
						ref_key: "menu",
						ref: menu,
						model: menuItems.value,
						popup: true
					}, {
						item: withCtx(({ item }) => [withDirectives((openBlock(), createElementBlock("button", {
							type: "button",
							disabled: !!item.disabled,
							class: normalizeClass(unref(cn)("flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-3 py-2", item.class, item.disabled && "pointer-events-auto cursor-not-allowed")),
							onClick: ($event) => item.command?.({
								originalEvent: $event,
								item
							})
						}, [createBaseVNode("i", { class: normalizeClass(item.icon) }, null, 2), createBaseVNode("span", null, toDisplayString(item.label), 1)], 10, _hoisted_6)), [[_directive_tooltip, item.disabled && deleteTooltip.value ? {
							value: deleteTooltip.value,
							showDelay: 0
						} : null]])]),
						_: 1
					}, 8, ["model"])], 64)) : createCommentVNode("", true)])]),
					createVNode(unref(TabsContent_default), {
						value: "plan",
						class: "mt-4"
					}, {
						default: withCtx(() => [createVNode(SubscriptionPanelContentWorkspace_default)]),
						_: 1
					}),
					createVNode(unref(TabsContent_default), {
						value: "members",
						class: "mt-4"
					}, {
						default: withCtx(() => [(openBlock(), createBlock(MembersPanelContent_default, { key: unref(workspaceRole) }))]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["modelValue"])]);
		};
	}
});
//#endregion
export { WorkspacePanelContent_default as default };

//# sourceMappingURL=WorkspacePanelContent-CLAjDype.js.map