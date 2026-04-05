import "./rolldown-runtime-DBfy44LZ.js";
import { n as marked, r as purify, t as _Renderer } from "./vendor-markdown-Cwvpr7zF.js";
//#region src/utils/markdownRendererUtil.ts
var ALLOWED_TAGS = ["video", "source"];
var ALLOWED_ATTRS = [
	"controls",
	"autoplay",
	"loop",
	"muted",
	"preload",
	"poster"
];
var MEDIA_SRC_REGEX = /(<(?:img|source|video)[^>]*\ssrc=['"])(?!(?:\/|https?:\/\/))([^'"\s>]+)(['"])/gi;
function createMarkdownRenderer(baseUrl) {
	const normalizedBase = baseUrl ? baseUrl.replace(/\/+$/, "") : "";
	const renderer = new _Renderer();
	renderer.image = ({ href, title, text }) => {
		let src = href;
		if (normalizedBase && !/^(?:\/|https?:\/\/)/.test(href)) src = `${normalizedBase}/${href}`;
		const titleAttr = title ? ` title="${title}"` : "";
		return `<img src="${src}" alt="${text}"${titleAttr} />`;
	};
	renderer.link = ({ href, title, tokens, text }) => {
		const linkText = tokens ? renderer.parser.parseInline(tokens) : text;
		return `<a href="${href}" ${title ? ` title="${title}"` : ""} target="_blank" rel="noopener noreferrer">${linkText}</a>`;
	};
	return renderer;
}
function renderMarkdownToHtml(markdown, baseUrl) {
	if (!markdown) return "";
	let html = marked.parse(markdown, {
		renderer: createMarkdownRenderer(baseUrl),
		gfm: true
	});
	if (baseUrl) html = html.replace(MEDIA_SRC_REGEX, `$1${baseUrl}$2$3`);
	return purify.sanitize(html, {
		ADD_TAGS: ALLOWED_TAGS,
		ADD_ATTR: [
			...ALLOWED_ATTRS,
			"target",
			"rel"
		]
	});
}
//#endregion
export { renderMarkdownToHtml as t };

//# sourceMappingURL=markdownRendererUtil-uFQ2wi0y.js.map