import "./rolldown-runtime-DBfy44LZ.js";
import { i as register, n as connect } from "./vendor-other-BMn-xt1e.js";
import { r as api } from "./api-kFdESQTE.js";
import { t as useToastStore } from "./toastStore-Cs9o1vxC.js";
//#region src/services/audioService.ts
var isEncoderRegistered = false;
var useAudioService = () => {
	const handleError = (type, message, originalError) => {
		console.error(`Audio Service Error (${type}):`, message, originalError);
	};
	const stopAllTracks = (currentStream) => {
		if (currentStream) {
			currentStream.getTracks().forEach((track) => {
				track.stop();
			});
			currentStream = null;
		}
	};
	const registerWavEncoder = async () => {
		if (isEncoderRegistered) return;
		try {
			await register(await connect());
			isEncoderRegistered = true;
		} catch (err) {
			if (err instanceof Error && err.message.includes("already an encoder stored")) isEncoderRegistered = true;
			else handleError("encoder", "Failed to register WAV encoder", err);
		}
	};
	const convertBlobToFileAndSubmit = async (blob) => {
		const name = `recording-${Date.now()}.wav`;
		const file = new File([blob], name, { type: blob.type || "audio/wav" });
		const body = new FormData();
		body.append("image", file);
		body.append("subfolder", "audio");
		body.append("type", "temp");
		const resp = await api.fetchApi("/upload/image", {
			method: "POST",
			body
		});
		if (resp.status !== 200) {
			const err = `Error uploading temp file: ${resp.status} - ${resp.statusText}`;
			useToastStore().addAlert(err);
			throw new Error(err);
		}
		return `audio/${(await resp.json()).name} [temp]`;
	};
	return {
		convertBlobToFileAndSubmit,
		registerWavEncoder,
		stopAllTracks
	};
};
//#endregion
export { useAudioService as t };

//# sourceMappingURL=audioService-BlQcnk71.js.map