import "./rolldown-runtime-DBfy44LZ.js";
import { t as script } from "./vendor-primevue-Dnp2bJ8y.js";
import { D as computed, G as mergeModels, I as createVNode, O as createBaseVNode, R as defineComponent, Rt as unref, et as openBlock, j as createElementBlock, ut as useModel } from "./vendor-vue-core-Ba0aGEmU.js";
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetChart.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { class: "flex flex-col gap-1" };
var _hoisted_2 = { class: "max-h-192 rounded-sm border p-4" };
//#endregion
//#region src/renderer/extensions/vueNodes/widgets/components/WidgetChart.vue
var WidgetChart_default = /* @__PURE__ */ defineComponent({
	__name: "WidgetChart",
	props: /* @__PURE__ */ mergeModels({ widget: {} }, {
		"modelValue": { required: true },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const value = useModel(__props, "modelValue");
		const props = __props;
		const chartType = computed(() => props.widget.options?.type ?? "line");
		const chartData = computed(() => value.value || {
			labels: [],
			datasets: []
		});
		const chartOptions = computed(() => ({
			responsive: true,
			maintainAspectRatio: false,
			plugins: { legend: { labels: {
				color: "#FFF",
				usePointStyle: true,
				pointStyle: "circle"
			} } },
			scales: {
				x: {
					ticks: { color: "#9FA2BD" },
					grid: {
						display: true,
						color: "#9FA2BD",
						drawTicks: false,
						drawOnChartArea: true,
						drawBorder: false
					},
					border: {
						display: true,
						color: "#9FA2BD"
					}
				},
				y: {
					ticks: { color: "#9FA2BD" },
					grid: {
						display: false,
						drawTicks: false,
						drawOnChartArea: false,
						drawBorder: false
					},
					border: {
						display: true,
						color: "#9FA2BD"
					}
				}
			}
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(unref(script), {
				type: chartType.value,
				data: chartData.value,
				options: chartOptions.value,
				"aria-label": `${_ctx.widget.name || _ctx.$t("g.chart")} - ${chartType.value} ${_ctx.$t("g.chartLowercase")}`
			}, null, 8, [
				"type",
				"data",
				"options",
				"aria-label"
			])])]);
		};
	}
});
//#endregion
export { WidgetChart_default as default };

//# sourceMappingURL=WidgetChart-BtBLhGhg.js.map