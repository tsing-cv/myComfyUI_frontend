const AddNoise = {
  display_name: "添加噪波",
  inputs: {
    latent_image: {
      name: "Latent"
    },
    model: {
      name: "模型"
    },
    noise: {
      name: "噪波"
    },
    sigmas: {
      name: "Sigmas"
    }
  }
};
const AlignYourStepsScheduler = {
  display_name: "AlignYourSteps调度器",
  inputs: {
    denoise: {
      name: "降噪"
    },
    model_type: {
      name: "模型类型"
    },
    steps: {
      name: "步数"
    }
  }
};
const AudioAdjustVolume = {
  display_name: "音频音量调节",
  inputs: {
    audio: {
      name: "音频"
    }
  }
};
const AudioConcat = {
  display_name: "音频连接",
  inputs: {
    audio1: {
      name: "音频1"
    },
    audio2: {
      name: "音频2"
    }
  }
};
const AudioMerge = {
  display_name: "音频合并",
  inputs: {
    audio1: {
      name: "音频1"
    },
    audio2: {
      name: "音频2"
    }
  }
};
const BasicGuider = {
  display_name: "基本引导器",
  inputs: {
    conditioning: {
      name: "条件"
    },
    model: {
      name: "模型"
    }
  }
};
const BasicScheduler = {
  display_name: "基本调度器",
  inputs: {
    denoise: {
      name: "降噪"
    },
    model: {
      name: "模型"
    },
    scheduler: {
      name: "调度器"
    },
    steps: {
      name: "步数"
    }
  }
};
const BetaSamplingScheduler = {
  display_name: "Beta采样调度器",
  inputs: {
    alpha: {
      name: "阿尔法"
    },
    beta: {
      name: "贝塔"
    },
    model: {
      name: "模型"
    },
    steps: {
      name: "步数"
    }
  }
};
const CaseConverter = {
  display_name: "大小写转换",
};
const CFGGuider = {
  display_name: "CFG引导器",
  inputs: {
    cfg: {
      name: "CFG"
    },
    model: {
      name: "模型"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    }
  }
};
const CFGZeroStar = {
  display_name: "CFGZeroStar",
  inputs: {
    model: {
      name: "model"
    }
  },
  outputs: {
    "0": {
      name: "patched_model"
    }
  }
};
const CLIPAttentionMultiply = {
  display_name: "CLIP注意力相乘",
  inputs: {
    clip: {
      name: "clip"
    },
    k: {
      name: "k"
    },
    out: {
      name: "输出"
    },
    q: {
      name: "q"
    },
    v: {
      name: "v"
    }
  }
};
const CLIPLoader = {
  description: "[配方]\n\nStable Diffusion：clip-l\nStable Cascade：clip-g\nSD3：t5 / clip-g / clip-l\nStable Audio：t5\nMochi：t5\ncosmos：old t5 xxl",
  display_name: "加载CLIP",
  inputs: {
    clip_name: {
      name: "CLIP名称"
    },
    device: {
      name: "设备"
    },
    type: {
      name: "类型"
    }
  }
};
const CLIPMergeAdd = {
  display_name: "CLIP相加",
  inputs: {
    clip1: {
      name: "clip1"
    },
    clip2: {
      name: "clip2"
    }
  }
};
const CLIPMergeSimple = {
  display_name: "CLIP融合简易",
  inputs: {
    clip1: {
      name: "clip1"
    },
    clip2: {
      name: "clip2"
    },
    ratio: {
      name: "比例"
    }
  }
};
const CLIPMergeSubtract = {
  display_name: "CLIP相减",
  inputs: {
    clip1: {
      name: "clip1"
    },
    clip2: {
      name: "clip2"
    },
    multiplier: {
      name: "乘数"
    }
  }
};
const CLIPSave = {
  display_name: "CLIP保存",
  inputs: {
    clip: {
      name: "clip"
    },
    filename_prefix: {
      name: "文件名前缀"
    }
  }
};
const CLIPSetLastLayer = {
  display_name: "设置CLIP最后一层",
  inputs: {
    clip: {
      name: "clip"
    },
    stop_at_clip_layer: {
      name: "停止在CLIP层"
    }
  }
};
const CLIPTextEncode = {
  description: "使用 CLIP 模型将文本编码成嵌入组（embedding），用于引导扩散模型生成图像。",
  display_name: "CLIP文本编码",
  inputs: {
    clip: {
      name: "clip",
      tooltip: "用于编码文本的 CLIP 模型。"
    },
    text: {
      name: "文本",
      tooltip: "要编码的文本。"
    }
  },
  outputs: {
    "0": {
      tooltip: "包含嵌入文本的条件，用于引导扩散模型。"
    }
  }
};
const CLIPTextEncodeControlnet = {
  display_name: "CLIP文本编码ControlNet",
  inputs: {
    clip: {
      name: "clip"
    },
    conditioning: {
      name: "条件"
    },
    text: {
      name: "文本"
    }
  }
};
const CLIPTextEncodeFlux = {
  display_name: "CLIP文本编码Flux",
  inputs: {
    clip: {
      name: "clip"
    },
    clip_l: {
      name: "clip_l"
    },
    guidance: {
      name: "引导"
    },
    t5xxl: {
      name: "t5xxl"
    }
  }
};
const CLIPTextEncodeHiDream = {
  display_name: "CLIPTextEncodeHiDream",
  inputs: {
    clip: {
      name: "clip"
    },
    clip_g: {
      name: "clip_g"
    },
    clip_l: {
      name: "clip_l"
    },
    llama: {
      name: "llama"
    },
    t5xxl: {
      name: "t5xxl"
    }
  }
};
const CLIPTextEncodeHunyuanDiT = {
  display_name: "CLIP文本编码混元DiT",
  inputs: {
    bert: {
      name: "bert"
    },
    clip: {
      name: "clip"
    },
    mt5xl: {
      name: "mt5xl"
    }
  }
};
const CLIPTextEncodeLumina2 = {
  description: "使用CLIP模型将系统提示和用户提示编码成可以用来引导扩散模型生成特定图像的嵌入。",
  display_name: "Lumina2的CLIP文本编码",
  inputs: {
    clip: {
      name: "clip",
      tooltip: "用于编码文本的CLIP模型。"
    },
    system_prompt: {
      name: "system_prompt",
      tooltip: "Lumina2提供两种类型的系统提示：优越：你是一个设计来根据文本提示或用户提示生成优越图像的助手，这些图像具有基于文本提示的优越度的图像-文本对齐。对齐：你是一个设计来根据文本提示生成高质量图像的助手，这些图像具有基于文本提示的最高度的图像-文本对齐。"
    },
    user_prompt: {
      name: "user_prompt",
      tooltip: "需要编码的文本。"
    }
  },
  outputs: {
    "0": {
      tooltip: "包含用于引导扩散模型的嵌入文本的条件。"
    }
  }
};
const CLIPTextEncodePixArtAlpha = {
  description: "编码文本并设置PixArt Alpha的分辨率条件。不适用于PixArt Sigma。",
  display_name: "CLIPTextEncodePixArtAlpha",
  inputs: {
    clip: {
      name: "剪辑"
    },
    height: {
      name: "高度"
    },
    text: {
      name: "文本"
    },
    width: {
      name: "宽度"
    }
  }
};
const CLIPTextEncodeSD3 = {
  display_name: "CLIP文本编码SD3",
  inputs: {
    clip: {
      name: "clip"
    },
    clip_g: {
      name: "clip_g"
    },
    clip_l: {
      name: "clip_l"
    },
    empty_padding: {
      name: "空白填充"
    },
    t5xxl: {
      name: "t5xxl"
    }
  }
};
const CLIPTextEncodeSDXL = {
  display_name: "CLIP文本编码SDXL",
  inputs: {
    clip: {
      name: "clip"
    },
    crop_h: {
      name: "裁剪高"
    },
    crop_w: {
      name: "裁剪宽"
    },
    height: {
      name: "高度"
    },
    target_height: {
      name: "目标高度"
    },
    target_width: {
      name: "目标宽度"
    },
    text_g: {
      name: "文本_g"
    },
    text_l: {
      name: "文本_l"
    },
    width: {
      name: "宽度"
    }
  }
};
const CLIPTextEncodeSDXLRefiner = {
  display_name: "CLIP文本编码SDXL精炼器",
  inputs: {
    ascore: {
      name: "美学分数"
    },
    clip: {
      name: "clip"
    },
    height: {
      name: "高度"
    },
    text: {
      name: "文本"
    },
    width: {
      name: "宽度"
    }
  }
};
const CLIPVisionEncode = {
  display_name: "CLIP视觉编码",
  inputs: {
    clip_vision: {
      name: "clip视觉"
    },
    crop: {
      name: "裁剪"
    },
    image: {
      name: "图像"
    }
  }
};
const CLIPVisionLoader = {
  display_name: "加载CLIP视觉",
  inputs: {
    clip_name: {
      name: "clip名称"
    }
  }
};
const Canny = {
  display_name: "Canny边缘检测",
  inputs: {
    high_threshold: {
      name: "高阈值"
    },
    image: {
      name: "图像"
    },
    low_threshold: {
      name: "低阈值"
    }
  }
};
const CheckpointLoader = {
  display_name: "Ckeckpoint加载器（已弃用）",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称"
    },
    config_name: {
      name: "配置名称"
    }
  }
};
const CheckpointLoaderSimple = {
  description: "加载扩散模型 Checkpoint，用于去除 Latent 噪波。",
  display_name: "Checkpoint加载器（简易）",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称",
      tooltip: "要加载的Checkpoint模型的名称。"
    }
  },
  outputs: {
    "0": {
      tooltip: "用于去除 Latent 噪波的模型。"
    },
    "1": {
      tooltip: "用于编码文本提示的 CLIP 模型。"
    },
    "2": {
      tooltip: "用于将图像编码和解码到 Latent 的 VAE 模型。"
    }
  }
};
const CheckpointSave = {
  display_name: "保存Checkpoint",
  inputs: {
    clip: {
      name: "clip"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    model: {
      name: "模型"
    },
    vae: {
      name: "vae"
    }
  }
};
const CombineHooks2 = {
  display_name: "组合约束 [2]",
  inputs: {
    hooks_A: {
      name: "约束_A"
    },
    hooks_B: {
      name: "约束_B"
    }
  }
};
const CombineHooks4 = {
  display_name: "组合约束 [4]",
  inputs: {
    hooks_A: {
      name: "约束_A"
    },
    hooks_B: {
      name: "约束_B"
    },
    hooks_C: {
      name: "约束_C"
    },
    hooks_D: {
      name: "约束_D"
    }
  }
};
const CombineHooks8 = {
  display_name: "组合约束 [8]",
  inputs: {
    hooks_A: {
      name: "约束_A"
    },
    hooks_B: {
      name: "约束_B"
    },
    hooks_C: {
      name: "约束_C"
    },
    hooks_D: {
      name: "约束_D"
    },
    hooks_E: {
      name: "约束_E"
    },
    hooks_F: {
      name: "约束_F"
    },
    hooks_G: {
      name: "约束_G"
    },
    hooks_H: {
      name: "约束_H"
    }
  }
};
const ConditioningAverage = {
  display_name: "条件平均",
  inputs: {
    conditioning_from: {
      name: "条件从"
    },
    conditioning_to: {
      name: "条件到"
    },
    conditioning_to_strength: {
      name: "条件到强度"
    }
  }
};
const ConditioningCombine = {
  display_name: "条件合并",
  inputs: {
    conditioning_1: {
      name: "条件_1"
    },
    conditioning_2: {
      name: "条件_2"
    }
  }
};
const ConditioningConcat = {
  display_name: "条件连接",
  inputs: {
    conditioning_from: {
      name: "条件从"
    },
    conditioning_to: {
      name: "条件到"
    }
  }
};
const ConditioningSetArea = {
  display_name: "条件采样区域",
  inputs: {
    conditioning: {
      name: "条件"
    },
    height: {
      name: "高度"
    },
    strength: {
      name: "强度"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const ConditioningSetAreaPercentage = {
  display_name: "条件采样区域（系数）",
  inputs: {
    conditioning: {
      name: "条件化"
    },
    height: {
      name: "高度"
    },
    strength: {
      name: "强度"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const ConditioningSetAreaPercentageVideo = {
  display_name: "调节设置区域百分比视频",
  inputs: {
    conditioning: {
      name: "调节"
    },
    height: {
      name: "高度"
    },
    strength: {
      name: "强度"
    },
    temporal: {
      name: "时间"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    },
    z: {
      name: "z"
    }
  }
};
const ConditioningSetAreaStrength = {
  display_name: "条件采样区域强度",
  inputs: {
    conditioning: {
      name: "条件化"
    },
    strength: {
      name: "强度"
    }
  }
};
const ConditioningSetDefaultCombine = {
  display_name: "条件设置默认合并",
  inputs: {
    cond: {
      name: "条件"
    },
    cond_DEFAULT: {
      name: "默认条件"
    },
    hooks: {
      name: "约束"
    }
  }
};
const ConditioningSetMask = {
  display_name: "条件遮罩",
  inputs: {
    conditioning: {
      name: "条件化"
    },
    mask: {
      name: "遮罩"
    },
    set_cond_area: {
      name: "设置条件区域"
    },
    strength: {
      name: "强度"
    }
  }
};
const ConditioningSetProperties = {
  display_name: "条件设置属性",
  inputs: {
    cond_NEW: {
      name: "新条件"
    },
    hooks: {
      name: "约束"
    },
    mask: {
      name: "遮罩"
    },
    set_cond_area: {
      name: "设置条件区域"
    },
    strength: {
      name: "强度"
    },
    timesteps: {
      name: "间隔"
    }
  }
};
const ConditioningSetPropertiesAndCombine = {
  display_name: "条件设置属性合并",
  inputs: {
    cond: {
      name: "条件"
    },
    cond_NEW: {
      name: "新条件"
    },
    hooks: {
      name: "约束"
    },
    mask: {
      name: "遮罩"
    },
    set_cond_area: {
      name: "设置条件区域"
    },
    strength: {
      name: "强度"
    },
    timesteps: {
      name: "间隔"
    }
  }
};
const ConditioningSetTimestepRange = {
  display_name: "设置条件时间",
  inputs: {
    conditioning: {
      name: "条件"
    },
    end: {
      name: "结束"
    },
    start: {
      name: "开始"
    }
  }
};
const ConditioningStableAudio = {
  display_name: "StableAudio条件",
  inputs: {
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    },
    seconds_start: {
      name: "开始秒数"
    },
    seconds_total: {
      name: "总秒数"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const ConditioningTimestepsRange = {
  display_name: "条件间隔范围",
  inputs: {
    end_percent: {
      name: "结束百分比"
    },
    start_percent: {
      name: "开始百分比"
    }
  },
  outputs: {
    "1": {
      name: "范围前"
    },
    "2": {
      name: "范围后"
    }
  }
};
const ConditioningZeroOut = {
  display_name: "条件零化",
  inputs: {
    conditioning: {
      name: "条件"
    }
  }
};
const ControlNetApply = {
  display_name: "应用ControlNet（旧版）",
  inputs: {
    conditioning: {
      name: "条件"
    },
    control_net: {
      name: "ControlNet"
    },
    image: {
      name: "图像"
    },
    strength: {
      name: "强度"
    }
  }
};
const ControlNetApplyAdvanced = {
  display_name: "应用ControlNet（旧版高级）",
  inputs: {
    control_net: {
      name: "ControlNet"
    },
    end_percent: {
      name: "结束百分比"
    },
    image: {
      name: "图像"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    },
    start_percent: {
      name: "开始百分比"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const ControlNetApplySD3 = {
  display_name: "应用ControlNet",
  inputs: {
    control_net: {
      name: "ControlNet"
    },
    end_percent: {
      name: "结束百分比"
    },
    image: {
      name: "图像"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    },
    start_percent: {
      name: "开始百分比"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const ControlNetInpaintingAliMamaApply = {
  display_name: "应用ControlNet（阿里妈妈局部重绘）",
  inputs: {
    control_net: {
      name: "ControlNet"
    },
    end_percent: {
      name: "结束百分比"
    },
    image: {
      name: "图像"
    },
    mask: {
      name: "遮罩"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    },
    start_percent: {
      name: "开始百分比"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const ControlNetLoader = {
  display_name: "加载ControlNet模型",
  inputs: {
    control_net_name: {
      name: "ControlNet名称"
    }
  }
};
const CosmosImageToVideoLatent = {
  display_name: "Cosmos图像到视频潜在",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    end_image: {
      name: "结束图像"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    start_image: {
      name: "开始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  }
};
const CreateHookKeyframe = {
  display_name: "创建约束关键帧",
  inputs: {
    prev_hook_kf: {
      name: "前一个约束关键帧"
    },
    start_percent: {
      name: "开始百分比"
    },
    strength_mult: {
      name: "强度倍数"
    }
  },
  outputs: {
    "0": {
      name: "约束关键帧"
    }
  }
};
const CreateHookKeyframesFromFloats = {
  display_name: "从浮点数创建约束关键帧",
  inputs: {
    end_percent: {
      name: "结束百分比"
    },
    floats_strength: {
      name: "浮点强度"
    },
    prev_hook_kf: {
      name: "前一个约束关键帧"
    },
    print_keyframes: {
      name: "打印关键帧"
    },
    start_percent: {
      name: "开始百分比"
    }
  },
  outputs: {
    "0": {
      name: "约束关键帧"
    }
  }
};
const CreateHookKeyframesInterpolated = {
  display_name: "创建约束关键帧插值",
  inputs: {
    end_percent: {
      name: "结束百分比"
    },
    interpolation: {
      name: "插值"
    },
    keyframes_count: {
      name: "关键帧数量"
    },
    prev_hook_kf: {
      name: "前一个约束关键帧"
    },
    print_keyframes: {
      name: "打印关键帧"
    },
    start_percent: {
      name: "开始百分比"
    },
    strength_end: {
      name: "结束强度"
    },
    strength_start: {
      name: "开始强度"
    }
  },
  outputs: {
    "0": {
      name: "约束关键帧"
    }
  }
};
const CreateHookLora = {
  display_name: "创建约束LoRA",
  inputs: {
    lora_name: {
      name: "LoRA名称"
    },
    prev_hooks: {
      name: "前一个约束"
    },
    strength_clip: {
      name: "CLIP强度"
    },
    strength_model: {
      name: "模型强度"
    }
  }
};
const CreateHookLoraModelOnly = {
  display_name: "创建约束LoRA（仅模型）",
  inputs: {
    lora_name: {
      name: "LoRA名称"
    },
    prev_hooks: {
      name: "前一个约束"
    },
    strength_model: {
      name: "模型强度"
    }
  }
};
const CreateHookModelAsLora = {
  display_name: "创建约束模型为LoRA",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称"
    },
    prev_hooks: {
      name: "前一个约束"
    },
    strength_clip: {
      name: "CLIP强度"
    },
    strength_model: {
      name: "模型强度"
    }
  }
};
const CreateHookModelAsLoraModelOnly = {
  display_name: "创建约束模型为LoRA（仅模型）",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称"
    },
    prev_hooks: {
      name: "前一个约束"
    },
    strength_model: {
      name: "模型强度"
    }
  }
};
const CreateVideo = {
  description: "从图像创建视频。",
  display_name: "创建视频",
  inputs: {
    audio: {
      name: "音频",
      tooltip: "要添加到视频中的音频。"
    },
    fps: {
      name: "帧率"
    },
    images: {
      name: "图像",
      tooltip: "用于创建视频的图像。"
    }
  }
};
const CropMask = {
  display_name: "裁剪遮罩",
  inputs: {
    height: {
      name: "高度"
    },
    mask: {
      name: "遮罩"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const DiffControlNetLoader = {
  display_name: "加载ControlNet模型（diff）",
  inputs: {
    control_net_name: {
      name: "ControlNet名称"
    },
    model: {
      name: "模型"
    }
  }
};
const DifferentialDiffusion = {
  display_name: "差异扩散DifferentialDiffusion",
  inputs: {
    model: {
      name: "模型"
    }
  }
};
const DiffusersLoader = {
  display_name: "Diffusers加载器",
  inputs: {
    model_path: {
      name: "模型路径"
    }
  }
};
const DisableNoise = {
  display_name: "禁用噪波"
};
const DualCFGGuider = {
  display_name: "双CFG引导器",
  inputs: {
    cfg_cond2_negative: {
      name: "cfg_条件2_负面"
    },
    cfg_conds: {
      name: "cfg_条件1"
    },
    cond1: {
      name: "条件1"
    },
    cond2: {
      name: "条件2"
    },
    model: {
      name: "模型"
    },
    negative: {
      name: "负面条件"
    }
  }
};
const DualCLIPLoader = {
  description: "[配方]\n\nSDXL：clip-l，clip-g\nSD3：clip-l，clip-g / clip-l，t5 / clip-g，t5\nFlux：clip-l，t5",
  display_name: "双CLIP加载器",
  inputs: {
    clip_name1: {
      name: "CLIP名称1"
    },
    clip_name2: {
      name: "CLIP名称2"
    },
    device: {
      name: "设备"
    },
    type: {
      name: "类型"
    }
  }
};
const EmptyCosmosLatentVideo = {
  display_name: "空的Cosmos潜在视频",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    width: {
      name: "宽度"
    }
  }
};
const EmptyHunyuanLatentVideo = {
  display_name: "空Latent视频（混元）",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    width: {
      name: "宽度"
    }
  }
};
const EmptyImage = {
  display_name: "空图像",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    color: {
      name: "颜色"
    },
    height: {
      name: "高度"
    },
    width: {
      name: "宽度"
    }
  }
};
const EmptyLTXVLatentVideo = {
  display_name: "空Latent视频（LTXV）",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    width: {
      name: "宽度"
    }
  }
};
const EmptyLatentAudio = {
  display_name: "空Latent音频",
  inputs: {
    batch_size: {
      name: "批量大小",
      tooltip: "批次中的Latent数量。"
    },
    seconds: {
      name: "秒"
    }
  }
};
const EmptyLatentHunyuan3Dv2 = {
  display_name: "EmptyLatentHunyuan3Dv2",
  inputs: {
    batch_size: {
      name: "批量大小",
      tooltip: "批量中的潜在图像数量。"
    },
    resolution: {
      name: "分辨率"
    }
  }
};
const EmptyLatentImage = {
  description: "创建一批新的空Latent图像，以通过采样进行降噪。",
  display_name: "空Latent图像",
  inputs: {
    batch_size: {
      name: "批量大小",
      tooltip: "批次中的Latent数量。"
    },
    height: {
      name: "高度",
      tooltip: "Latent图像的高度（像素）。"
    },
    width: {
      name: "宽度",
      tooltip: "Latent图像的宽度（像素）。"
    }
  },
  outputs: {
    "0": {
      tooltip: "空Latent图像批次。"
    }
  }
};
const EmptyMochiLatentVideo = {
  display_name: "空Latent视频（Mochi）",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    width: {
      name: "宽度"
    }
  }
};
const EmptySD3LatentImage = {
  display_name: "空Latent图像（SD3）",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    width: {
      name: "宽度"
    }
  }
};
const ExponentialScheduler = {
  display_name: "Exponential调度器",
  inputs: {
    sigma_max: {
      name: "最大Sigma"
    },
    sigma_min: {
      name: "最新Sigma"
    },
    steps: {
      name: "步数"
    }
  }
};
const ExtendIntermediateSigmas = {
  display_name: "ExtendIntermediateSigmas",
  inputs: {
    end_at_sigma: {
      name: "结束 sigma"
    },
    sigmas: {
      name: "sigmas"
    },
    spacing: {
      name: "间距"
    },
    start_at_sigma: {
      name: "起始 sigma"
    },
    steps: {
      name: "步数"
    }
  }
};
const FeatherMask = {
  display_name: "羽化遮罩",
  inputs: {
    bottom: {
      name: "底"
    },
    left: {
      name: "左"
    },
    mask: {
      name: "遮罩"
    },
    right: {
      name: "右"
    },
    top: {
      name: "顶"
    }
  }
};
const FlipSigmas = {
  display_name: "翻转Sigma",
  inputs: {
    sigmas: {
      name: "sigmas"
    }
  }
};
const FluxDisableGuidance = {
  description: "此节点完全禁用Flux和类似Flux模型上的指导嵌入",
  display_name: "Flux禁用指导",
  inputs: {
    conditioning: {
      name: "conditioning"
    }
  }
};
const FluxGuidance = {
  display_name: "Flux引导",
  inputs: {
    conditioning: {
      name: "条件"
    },
    guidance: {
      name: "引导"
    }
  }
};
const FluxProExpandNode = {
  description: "根据提示词对图像进行外扩。",
  display_name: "Flux.1 扩展图像",
  inputs: {
    bottom: {
      name: "下方扩展",
      tooltip: "在图像底部扩展的像素数"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    guidance: {
      name: "引导强度",
      tooltip: "图像生成过程中的引导强度"
    },
    image: {
      name: "图像"
    },
    left: {
      name: "左侧扩展",
      tooltip: "在图像左侧扩展的像素数"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于生成图像的提示词"
    },
    prompt_upsampling: {
      name: "提示词上采样",
      tooltip: "是否对提示词进行上采样。启用后会自动修改提示词以获得更具创意的生成效果，但结果具有不确定性（相同种子不会产生完全相同的结果）。"
    },
    right: {
      name: "右侧扩展",
      tooltip: "在图像右侧扩展的像素数"
    },
    seed: {
      name: "种子",
      tooltip: "用于生成噪声的随机种子。"
    },
    steps: {
      name: "步数",
      tooltip: "图像生成过程的步数"
    },
    top: {
      name: "上方扩展",
      tooltip: "在图像顶部扩展的像素数"
    }
  }
};
const FluxProFillNode = {
  description: "根据 mask 和提示词对图像进行修复填充。",
  display_name: "Flux.1 填充图像",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    guidance: {
      name: "引导强度",
      tooltip: "图像生成过程中的引导强度"
    },
    image: {
      name: "图像"
    },
    mask: {
      name: "mask"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于图像生成的提示词"
    },
    prompt_upsampling: {
      name: "提示词上采样",
      tooltip: "是否对提示词进行上采样。启用后会自动修改提示词以获得更具创意的生成效果，但结果具有不确定性（相同种子不会产生完全相同的结果）。"
    },
    seed: {
      name: "种子",
      tooltip: "用于生成噪声的随机种子。"
    },
    steps: {
      name: "步数",
      tooltip: "图像生成过程的步数"
    }
  }
};
const FluxProUltraImageNode = {
  description: "通过 API 使用 Flux Pro 1.1 Ultra 根据提示词和分辨率生成图像。",
  display_name: "Flux 1.1 [pro] Ultra Image",
  inputs: {
    aspect_ratio: {
      name: "宽高比",
      tooltip: "图像的宽高比；必须在 1:4 到 4:1 之间。"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    image_prompt: {
      name: "图像提示词"
    },
    image_prompt_strength: {
      name: "图像提示词强度",
      tooltip: "在提示词和图像提示词之间进行混合。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于图像生成的提示词"
    },
    prompt_upsampling: {
      name: "提示词上采样",
      tooltip: "是否对提示词进行上采样。启用时，会自动修改提示词以获得更具创意的生成效果，但结果是非确定性的（相同种子不会产生完全相同的结果）。"
    },
    raw: {
      name: "原始",
      tooltip: "为 True 时，生成更少处理、更自然的图像。"
    },
    seed: {
      name: "种子",
      tooltip: "用于生成噪声的随机种子。"
    }
  }
};
const FreSca = {
  description: "对引导应用频率相关的缩放",
  display_name: "FreSca",
  inputs: {
    freq_cutoff: {
      name: "freq_cutoff",
      tooltip: "围绕中心被视为低频的频率索引数量"
    },
    model: {
      name: "model"
    },
    scale_high: {
      name: "scale_high",
      tooltip: "高频分量的缩放因子"
    },
    scale_low: {
      name: "scale_low",
      tooltip: "低频分量的缩放因子"
    }
  }
};
const FreeU = {
  display_name: "FreeU",
  inputs: {
    b1: {
      name: "b1"
    },
    b2: {
      name: "b2"
    },
    model: {
      name: "模型"
    },
    s1: {
      name: "s1"
    },
    s2: {
      name: "s2"
    }
  }
};
const FreeU_V2 = {
  display_name: "FreeU_V2",
  inputs: {
    b1: {
      name: "b1"
    },
    b2: {
      name: "b2"
    },
    model: {
      name: "模型"
    },
    s1: {
      name: "s1"
    },
    s2: {
      name: "s2"
    }
  }
};
const GITSScheduler = {
  display_name: "GITS调度器",
  inputs: {
    coeff: {
      name: "系数"
    },
    denoise: {
      name: "降噪"
    },
    steps: {
      name: "步数"
    }
  }
};
const GLIGENLoader = {
  display_name: "GLIGEN加载器",
  inputs: {
    gligen_name: {
      name: "gligen名称"
    }
  }
};
const GLIGENTextBoxApply = {
  display_name: "GLIGEN文本框应用",
  inputs: {
    clip: {
      name: "CLIPCLIP"
    },
    conditioning_to: {
      name: "条件到"
    },
    gligen_textbox_model: {
      name: "GLIGEN文本框模型"
    },
    height: {
      name: "高度"
    },
    text: {
      name: "文本"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const GetVideoComponents = {
  description: "提取视频中的所有组件：帧、音频和帧率。",
  display_name: "获取视频组件",
  inputs: {
    video: {
      name: "视频",
      tooltip: "要提取组件的视频。"
    }
  },
  outputs: {
    "0": {
      name: "图像"
    },
    "1": {
      name: "音频"
    },
    "2": {
      name: "帧率"
    }
  }
};
const GrowMask = {
  display_name: "扩展遮罩",
  inputs: {
    expand: {
      name: "扩展"
    },
    mask: {
      name: "遮罩"
    },
    tapered_corners: {
      name: "倒角"
    }
  }
};
const Hunyuan3Dv2Conditioning = {
  display_name: "Hunyuan3Dv2Conditioning",
  inputs: {
    clip_vision_output: {
      name: "clip视觉输出"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "反向"
    }
  }
};
const Hunyuan3Dv2ConditioningMultiView = {
  display_name: "Hunyuan3Dv2ConditioningMultiView",
  inputs: {
    back: {
      name: "后"
    },
    front: {
      name: "前"
    },
    left: {
      name: "左"
    },
    right: {
      name: "右"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "反向"
    }
  }
};
const HunyuanImageToVideo = {
  display_name: "Hunyuan图像到视频",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    guidance_type: {
      name: "指导类型"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    positive: {
      name: "正向"
    },
    start_image: {
      name: "起始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "潜在空间"
    }
  }
};
const HyperTile = {
  display_name: "超分块HyperTile",
  inputs: {
    max_depth: {
      name: "最大深度"
    },
    model: {
      name: "模型"
    },
    scale_depth: {
      name: "规模深度"
    },
    swap_size: {
      name: "分割尺寸"
    },
    tile_size: {
      name: "分块尺寸"
    }
  }
};
const HypernetworkLoader = {
  display_name: "超网络加载器",
  inputs: {
    hypernetwork_name: {
      name: "HyperNetwork名称"
    },
    model: {
      name: "模型"
    },
    strength: {
      name: "强度"
    }
  }
};
const IdeogramV1 = {
  description: "使用 Ideogram V1 模型同步生成图像。\n\n图片链接仅在有限时间内有效；如果您想保留图片，请务必下载。",
  display_name: "Ideogram V1",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "图像生成的宽高比。"
    },
    control_after_generate: {
      name: "control after generate"
    },
    magic_prompt_option: {
      name: "magic_prompt_option",
      tooltip: "确定生成时是否使用 MagicPrompt"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "描述需要从图像中排除的内容"
    },
    num_images: {
      name: "num_images"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于图像生成的提示词"
    },
    seed: {
      name: "seed"
    },
    turbo: {
      name: "turbo",
      tooltip: "是否启用 turbo 模式（生成更快，但可能质量较低）"
    }
  }
};
const IdeogramV2 = {
  description: "使用 Ideogram V2 模型同步生成图像。\n\n图像链接仅在有限时间内有效；如果您想保留图像，请务必下载。",
  display_name: "Ideogram V2",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "图像生成的宽高比。如果分辨率未设置为 AUTO，则此项无效。"
    },
    control_after_generate: {
      name: "control after generate"
    },
    magic_prompt_option: {
      name: "magic_prompt_option",
      tooltip: "确定生成时是否使用 MagicPrompt"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "描述图像中需要排除的内容"
    },
    num_images: {
      name: "num_images"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于图像生成的提示词"
    },
    resolution: {
      name: "resolution",
      tooltip: "图像生成的分辨率。如果未设置为 AUTO，则会覆盖 aspect_ratio 设置。"
    },
    seed: {
      name: "seed"
    },
    style_type: {
      name: "style_type",
      tooltip: "生成的风格类型（仅限 V2）"
    },
    turbo: {
      name: "turbo",
      tooltip: "是否启用 turbo 模式（生成更快，质量可能略低）"
    }
  }
};
const IdeogramV3 = {
  description: "使用 Ideogram V3 模型同步生成图像。\n\n支持从文本提示生成常规图像，也支持使用 mask 进行图像编辑。\n图片链接仅在有限时间内有效；如需保留图片，请务必下载。",
  display_name: "Ideogram V3",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "图像生成的宽高比。如果分辨率未设置为自动，则忽略此项。"
    },
    control_after_generate: {
      name: "control after generate"
    },
    image: {
      name: "image",
      tooltip: "用于图像编辑的可选参考图片。"
    },
    magic_prompt_option: {
      name: "magic_prompt_option",
      tooltip: "决定生成时是否使用 MagicPrompt"
    },
    mask: {
      name: "mask",
      tooltip: "用于修复的可选 mask（白色区域将被替换）"
    },
    num_images: {
      name: "num_images"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于图像生成或编辑的提示词"
    },
    rendering_speed: {
      name: "rendering_speed",
      tooltip: "控制生成速度与质量之间的权衡"
    },
    resolution: {
      name: "resolution",
      tooltip: "图像生成的分辨率。如果未设置为自动，则覆盖 aspect_ratio 设置。"
    },
    seed: {
      name: "seed"
    }
  }
};
const ImageBatch = {
  display_name: "图像合并成批",
  description: "将多个图像组合成图像批次。",
};
const GetImageSize = {
  display_name: "获取图像尺寸",
  description: "返回图像宽度和高度并透传原图。",
  inputs: {
    image: {
      name: "图像"
    }
  },
  outputs: {
    "0": {
      name: "宽度"
    },
    "1": {
      name: "高度"
    },
    "2": {
      name: "批次大小"
    }
  }
};
const ImageBlend = {
  display_name: "混合图像",
  inputs: {
    blend_factor: {
      name: "系数"
    },
    blend_mode: {
      name: "混合模式"
    },
    image1: {
      name: "图像1"
    },
    image2: {
      name: "图像2"
    }
  }
};
const ImageBlur = {
  display_name: "模糊图像",
  inputs: {
    blur_radius: {
      name: "模糊半径"
    },
    image: {
      name: "图像"
    },
    sigma: {
      name: "西格玛"
    }
  }
};
const ImageColorToMask = {
  display_name: "图像颜色到遮罩",
  inputs: {
    color: {
      name: "颜色"
    },
    image: {
      name: "图像"
    }
  }
};
const ImageCompositeMasked = {
  display_name: "合成图像（遮罩）",
  inputs: {
    destination: {
      name: "目标图像"
    },
    mask: {
      name: "遮罩"
    },
    resize_source: {
      name: "缩放来源图像"
    },
    source: {
      name: "来源图像"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const ImageCrop = {
  display_name: "裁剪图像",
  inputs: {
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const ImageFlip = {
  display_name: "图像翻转",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const ImageRotate = {
  display_name: "图像旋转",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const ImageStitch = {
  display_name: "图像拼接",
  description: "\n在指定方向上将图像2拼接至图像1。\n如果未提供图像2，则返回图像1不变。\n可选地在图像间添加间距。\n",
  inputs: {
    image1: {
      name: "图像1"
    },
    image2: {
      name: "图像2"
    }
  }
};
const ResizeAndPadImage = {
  display_name: "调整大小并填充图像",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const ImageFromBatch = {
  display_name: "从批次获取图像",
  inputs: {
    batch_index: {
      name: "批次索引"
    },
    image: {
      name: "图像"
    },
    length: {
      name: "长度"
    }
  }
};
const ImageInvert = {
  display_name: "反转图像",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const ImageOnlyCheckpointLoader = {
  display_name: "Checkpoint加载器（仅图像）",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称"
    }
  }
};
const ImageOnlyCheckpointSave = {
  display_name: "保存Checkpoint（仅图像）",
  inputs: {
    clip_vision: {
      name: "clip视觉"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    model: {
      name: "模型"
    },
    vae: {
      name: "vae"
    }
  }
};
const ImagePadForOutpaint = {
  display_name: "外补画板",
  inputs: {
    bottom: {
      name: "下"
    },
    feathering: {
      name: "羽化"
    },
    image: {
      name: "图像"
    },
    left: {
      name: "左"
    },
    right: {
      name: "右"
    },
    top: {
      name: "上"
    }
  }
};
const ImageQuantize = {
  display_name: "量化图像",
  inputs: {
    colors: {
      name: "颜色"
    },
    dither: {
      name: "抖动"
    },
    image: {
      name: "图像"
    }
  }
};
const ImageRGBToYUV = {
  display_name: "ImageRGBToYUV",
  inputs: {
    image: {
      name: "图像"
    }
  },
  outputs: {
    "0": {
      name: "Y"
    },
    "1": {
      name: "U"
    },
    "2": {
      name: "V"
    }
  }
};
const ImageScale = {
  display_name: "缩放图像",
  inputs: {
    crop: {
      name: "裁剪"
    },
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    upscale_method: {
      name: "缩放算法"
    },
    width: {
      name: "宽度"
    }
  }
};
const ImageScaleBy = {
  display_name: "缩放图像（比例）",
  inputs: {
    image: {
      name: "图像"
    },
    scale_by: {
      name: "缩放系数"
    },
    upscale_method: {
      name: "缩放算法"
    }
  }
};
const ImageScaleToTotalPixels = {
  display_name: "缩放图像（像素）",
  inputs: {
    image: {
      name: "图像"
    },
    megapixels: {
      name: "像素数量"
    },
    upscale_method: {
      name: "缩放算法"
    }
  }
};
const ImageSharpen = {
  display_name: "锐化图像",
  inputs: {
    alpha: {
      name: "alpha"
    },
    image: {
      name: "图像"
    },
    sharpen_radius: {
      name: "锐化半径"
    },
    sigma: {
      name: "Sigma"
    }
  }
};
const ImageToMask = {
  display_name: "图像转换为遮罩",
  inputs: {
    channel: {
      name: "通道"
    },
    image: {
      name: "图像"
    }
  }
};
const ImageUpscaleWithModel = {
  display_name: "使用模型放大图像",
  inputs: {
    image: {
      name: "图像"
    },
    upscale_model: {
      name: "放大模型"
    }
  }
};
const ImageYUVToRGB = {
  display_name: "ImageYUVToRGB",
  inputs: {
    U: {
      name: "U"
    },
    V: {
      name: "V"
    },
    Y: {
      name: "Y"
    }
  }
};
const InpaintModelConditioning = {
  display_name: "内补模型条件",
  inputs: {
    mask: {
      name: "遮罩"
    },
    negative: {
      name: "负面条件"
    },
    noise_mask: {
      name: "噪波遮罩",
      tooltip: "向Latent图像添加遮罩，采样仅在遮罩内进行。根据模型的不同，可能会改善结果或完全破坏效果。"
    },
    pixels: {
      name: "像素"
    },
    positive: {
      name: "正面条件"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const InstructPixToPixConditioning = {
  display_name: "InstructPixToPix条件",
  inputs: {
    negative: {
      name: "负面条件"
    },
    pixels: {
      name: "像素"
    },
    positive: {
      name: "正面条件"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const InvertMask = {
  display_name: "反转遮罩",
  inputs: {
    mask: {
      name: "遮罩"
    }
  }
};
const JoinImageWithAlpha = {
  display_name: "合并图像Alpha",
  inputs: {
    alpha: {
      name: "阿尔法"
    },
    image: {
      name: "图像"
    }
  }
};
const KSampler = {
  description: "使用提供的模型、正面条件和负面条件条件降噪Latent图像。",
  display_name: "K采样器",
  inputs: {
    cfg: {
      name: "cfg",
      tooltip: "用于平衡随机性和提示词服从性。提高该值会使结果更加符合提示词，但过高会导致图像质量下降。"
    },
    control_after_generate: {
      name: "生成后的控制"
    },
    denoise: {
      name: "降噪",
      tooltip: "降噪的强度，降低该值会保留原图的大部分内容从而实现图生图。"
    },
    latent_image: {
      name: "Latent图像",
      tooltip: "要降噪的 Latent 图像。"
    },
    model: {
      name: "模型",
      tooltip: "用于降噪输入 Latent 图像的模型。"
    },
    negative: {
      name: "负面条件",
      tooltip: "描述不包含在图像中的内容的条件。"
    },
    positive: {
      name: "正面条件",
      tooltip: "描述包含在图像中的内容的条件。"
    },
    sampler_name: {
      name: "采样器名称",
      tooltip: "采样算法，会影响结果质量、生成速度、风格样式。"
    },
    scheduler: {
      name: "调度器",
      tooltip: "控制逐渐移除噪波的方法。"
    },
    seed: {
      name: "种子",
      tooltip: "生成噪波的随机种。"
    },
    steps: {
      name: "步数",
      tooltip: "降噪的步数。"
    }
  },
  outputs: {
    "0": {
      tooltip: "降噪后的 Latent。"
    }
  }
};
const KSamplerAdvanced = {
  display_name: "K采样器（高级）",
  inputs: {
    add_noise: {
      name: "添加噪波"
    },
    cfg: {
      name: "cfg"
    },
    control_after_generate: {
      name: "生成后的控制"
    },
    end_at_step: {
      name: "结束步数"
    },
    latent_image: {
      name: "Latent图像"
    },
    model: {
      name: "模型"
    },
    negative: {
      name: "负面条件"
    },
    noise_seed: {
      name: "随机种"
    },
    positive: {
      name: "正面条件"
    },
    return_with_leftover_noise: {
      name: "返回剩余噪波"
    },
    sampler_name: {
      name: "采样器名称"
    },
    scheduler: {
      name: "调度器"
    },
    start_at_step: {
      name: "开始步数"
    },
    steps: {
      name: "步数"
    }
  }
};
const KSamplerSelect = {
  display_name: "K采样器选择",
  inputs: {
    sampler_name: {
      name: "采样器名称"
    }
  }
};
const KarrasScheduler = {
  display_name: "Karras调度器",
  inputs: {
    rho: {
      name: "rho"
    },
    sigma_max: {
      name: "sigma_max"
    },
    sigma_min: {
      name: "sigma_min"
    },
    steps: {
      name: "步数"
    }
  }
};
const KlingCameraControlI2VNode = {
  description: "将静态图像转化为具有专业摄像机运动的电影级视频，模拟真实世界的电影摄影。可控制虚拟摄像机的缩放、旋转、平移、俯仰和第一人称视角，同时保持对原始图像的聚焦。",
  display_name: "Kling 图像转视频（摄像机控制）",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    camera_control: {
      name: "camera_control",
      tooltip: "可通过 Kling Camera Controls 节点创建。控制视频生成过程中的摄像机运动和动作。"
    },
    cfg_scale: {
      name: "cfg_scale"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    },
    start_frame: {
      name: "start_frame",
      tooltip: "参考图像 - URL 或 Base64 编码字符串，不能超过 10MB，分辨率不低于 300*300 像素，宽高比在 1:2.5 ~ 2.5:1 之间。Base64 不应包含 data:image 前缀。"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingCameraControlT2VNode = {
  description: "将文本转化为具有专业摄像机运动的电影级视频，模拟真实世界的电影摄影。可控制虚拟摄像机的动作，包括缩放、旋转、平移、俯仰和第一人称视角，同时保持对原始文本的聚焦。",
  display_name: "Kling 文本转视频（摄像机控制）",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    camera_control: {
      name: "camera_control",
      tooltip: "可通过 Kling Camera Controls 节点创建。控制视频生成过程中的摄像机运动和移动。"
    },
    cfg_scale: {
      name: "cfg_scale"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingCameraControls = {
  description: "允许指定 Kling 相机控制和运动控制效果的配置选项。",
  display_name: "Kling 相机控制",
  inputs: {
    camera_control_type: {
      name: "camera_control_type"
    },
    horizontal_movement: {
      name: "horizontal_movement",
      tooltip: "控制相机在水平轴（x 轴）上的移动。负值表示向左，正值表示向右。"
    },
    pan: {
      name: "pan",
      tooltip: "控制相机在垂直平面（x 轴）上的旋转。负值表示向下旋转，正值表示向上旋转。"
    },
    roll: {
      name: "roll",
      tooltip: "控制相机的滚转量（z 轴）。负值表示逆时针，正值表示顺时针。"
    },
    tilt: {
      name: "tilt",
      tooltip: "控制相机在水平平面（y 轴）上的旋转。负值表示向左旋转，正值表示向右旋转。"
    },
    vertical_movement: {
      name: "vertical_movement",
      tooltip: "控制相机在垂直轴（y 轴）上的移动。负值表示向下，正值表示向上。"
    },
    zoom: {
      name: "zoom",
      tooltip: "控制相机焦距的变化。负值表示视野变窄，正值表示视野变宽。"
    }
  },
  outputs: {
    "0": {
      name: "camera_control"
    }
  }
};
const KlingDualCharacterVideoEffectNode = {
  description: "根据 effect_scene 在生成视频时实现不同的特效。第一张图片将被放置在合成画面的左侧，第二张图片在右侧。",
  display_name: "Kling 双角色视频特效",
  inputs: {
    duration: {
      name: "duration"
    },
    effect_scene: {
      name: "effect_scene"
    },
    image_left: {
      name: "image_left",
      tooltip: "左侧图片"
    },
    image_right: {
      name: "image_right",
      tooltip: "右侧图片"
    },
    mode: {
      name: "mode"
    },
    model_name: {
      name: "model_name"
    }
  },
  outputs: {
    "1": {
      name: "duration"
    }
  }
};
const KlingImage2VideoNode = {
  description: "Kling 图像转视频节点",
  display_name: "Kling 图像转视频",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    cfg_scale: {
      name: "cfg_scale"
    },
    duration: {
      name: "duration"
    },
    mode: {
      name: "mode"
    },
    model_name: {
      name: "model_name"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    },
    start_frame: {
      name: "start_frame",
      tooltip: "参考图像 - URL 或 Base64 编码字符串，不能超过 10MB，分辨率不少于 300*300 像素，宽高比在 1:2.5 ~ 2.5:1 之间。Base64 不应包含 data:image 前缀。"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingImageGenerationNode = {
  description: "Kling 图像生成节点。通过文本提示生成图像，可选参考图像。",
  display_name: "Kling 图像生成",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    human_fidelity: {
      name: "human_fidelity",
      tooltip: "主体参考相似度"
    },
    image: {
      name: "image"
    },
    image_fidelity: {
      name: "image_fidelity",
      tooltip: "用户上传图像的参考强度"
    },
    image_type: {
      name: "image_type"
    },
    model_name: {
      name: "model_name"
    },
    n: {
      name: "n",
      tooltip: "生成图像数量"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    }
  }
};
const KlingLipSyncAudioToVideoNode = {
  description: "Kling 音频驱动视频口型同步节点。将视频文件中的嘴部动作与音频文件的音频内容进行同步。",
  display_name: "Kling 音频驱动视频口型同步",
  inputs: {
    audio: {
      name: "音频"
    },
    video: {
      name: "视频"
    },
    voice_language: {
      name: "语音语言"
    }
  },
  outputs: {
    "1": {
      name: "视频ID"
    },
    "2": {
      name: "时长"
    }
  }
};
const KlingLipSyncTextToVideoNode = {
  description: "Kling 文字驱动口型同步节点。将视频文件中的嘴部动作与文本提示同步。",
  display_name: "Kling 文字驱动口型同步视频",
  inputs: {
    text: {
      name: "文本",
      tooltip: "用于口型同步视频生成的文本内容。当模式为 text2video 时必填。最大长度为 120 个字符。"
    },
    video: {
      name: "视频"
    },
    voice: {
      name: "语音"
    },
    voice_speed: {
      name: "语速",
      tooltip: "语音速率。有效范围：0.8~2.0，精确到小数点后一位。"
    }
  },
  outputs: {
    "1": {
      name: "视频ID"
    },
    "2": {
      name: "时长"
    }
  }
};
const KlingSingleImageVideoEffectNode = {
  description: "根据 effect_scene 在生成视频时实现不同的特效。",
  display_name: "Kling 视频特效",
  inputs: {
    duration: {
      name: "duration"
    },
    effect_scene: {
      name: "effect_scene"
    },
    image: {
      name: "image",
      tooltip: "参考图片。URL 或 Base64 编码字符串（不含 data:image 前缀）。文件大小不得超过 10MB，分辨率不低于 300*300 像素，宽高比在 1:2.5 ~ 2.5:1 之间。"
    },
    model_name: {
      name: "model_name"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingStartEndFrameNode = {
  description: "生成一个在起始图像和结束图像之间过渡的视频序列。该节点会创建所有中间帧，实现从第一帧到最后一帧的平滑变换。",
  display_name: "Kling 起止帧生成视频",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    cfg_scale: {
      name: "cfg_scale"
    },
    end_frame: {
      name: "end_frame",
      tooltip: "参考图像 - 结束帧控制。URL 或 Base64 编码字符串，不能超过 10MB，分辨率不低于 300*300 像素。Base64 不应包含 data:image 前缀。"
    },
    mode: {
      name: "mode",
      tooltip: "用于视频生成的配置，格式为：mode / duration / model_name。"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    },
    start_frame: {
      name: "start_frame",
      tooltip: "参考图像 - URL 或 Base64 编码字符串，不能超过 10MB，分辨率不低于 300*300 像素，宽高比在 1:2.5 ~ 2.5:1 之间。Base64 不应包含 data:image 前缀。"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingTextToVideoNode = {
  description: "Kling 文本转视频节点",
  display_name: "Kling 文本转视频",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio"
    },
    cfg_scale: {
      name: "cfg_scale"
    },
    mode: {
      name: "mode",
      tooltip: "用于视频生成的配置，格式为：mode / duration / model_name。"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "反向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "正向文本提示"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingVideoExtendNode = {
  description: "Kling 视频扩展节点。扩展由其他 Kling 节点生成的视频。video_id 由其他 Kling 节点生成。",
  display_name: "Kling 视频扩展",
  inputs: {
    cfg_scale: {
      name: "cfg_scale"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "用于在扩展视频中避免出现的元素的负向文本提示"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于引导视频扩展的正向文本提示"
    },
    video_id: {
      name: "video_id",
      tooltip: "要扩展的视频 ID。支持由文本转视频、图像转视频以及之前的视频扩展操作生成的视频。扩展后总时长不能超过 3 分钟。"
    }
  },
  outputs: {
    "1": {
      name: "video_id"
    },
    "2": {
      name: "duration"
    }
  }
};
const KlingVirtualTryOnNode = {
  description: "Kling 虚拟试穿节点。输入一张人物图片和一张服装图片，将服装试穿到人物身上。",
  display_name: "Kling 虚拟试穿",
  inputs: {
    cloth_image: {
      name: "cloth_image"
    },
    human_image: {
      name: "human_image"
    },
    model_name: {
      name: "model_name"
    }
  }
};
const LTXVAddGuide = {
  display_name: "LTXV添加指导",
  inputs: {
    frame_idx: {
      name: "帧索引",
      tooltip: "开始调节的帧索引。对于单帧图像或1-8帧的视频，任何帧索引值都可以接受。对于9+帧的视频，帧索引必须能被8整除，否则它将被向下取整到最接近的8的倍数。负值从视频的末尾开始计算。"
    },
    image: {
      name: "图像",
      tooltip: "用于调节潜在视频的图像或视频。必须是8*n + 1帧。如果视频不是8*n + 1帧，它将被裁剪到最接近的8*n + 1帧。"
    },
    latent: {
      name: "潜在空间"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "潜在空间"
    }
  }
};
const LTXVConditioning = {
  display_name: "LTXV条件",
  inputs: {
    frame_rate: {
      name: "帧率"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const LTXVCropGuides = {
  display_name: "LTXV裁剪指导",
  inputs: {
    latent: {
      name: "潜在空间"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "潜在空间"
    }
  }
};
const LTXVImgToVideo = {
  display_name: "LTXV图像到视频",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const LTXVPreprocess = {
  display_name: "LTXV预处理",
  inputs: {
    image: {
      name: "图像"
    },
    img_compression: {
      name: "图像压缩",
      tooltip: "应用于图像的压缩量。"
    }
  },
  outputs: {
    "0": {
      name: "输出图像"
    }
  }
};
const LTXVScheduler = {
  display_name: "LTXV调度器",
  inputs: {
    base_shift: {
      name: "基础移位"
    },
    latent: {
      name: "Latent"
    },
    max_shift: {
      name: "最大移位"
    },
    steps: {
      name: "步数"
    },
    stretch: {
      name: "拉伸",
      tooltip: "将 sigma 拉伸到范围 [终值, 1]。"
    },
    terminal: {
      name: "终值",
      tooltip: "拉伸后 sigma 的终值。"
    }
  }
};
const LaplaceScheduler = {
  display_name: "Laplace调度器",
  inputs: {
    beta: {
      name: "beta"
    },
    mu: {
      name: "mu"
    },
    sigma_max: {
      name: "sigma_max"
    },
    sigma_min: {
      name: "sigma_min"
    },
    steps: {
      name: "步数"
    }
  }
};
const LatentAdd = {
  display_name: "Latent相加",
  inputs: {
    samples1: {
      name: "Latent1"
    },
    samples2: {
      name: "Latent2"
    }
  }
};
const LatentApplyOperation = {
  display_name: "Latent应用操作",
  inputs: {
    operation: {
      name: "操作"
    },
    samples: {
      name: "Latent"
    }
  }
};
const LatentApplyOperationCFG = {
  display_name: "Latent应用操作CFG",
  inputs: {
    model: {
      name: "模型"
    },
    operation: {
      name: "操作"
    }
  }
};
const LatentBatch = {
  display_name: "组合Latent批次",
  inputs: {
    samples1: {
      name: "Latent1"
    },
    samples2: {
      name: "Latent2"
    }
  }
};
const LatentBatchSeedBehavior = {
  display_name: "Latent批处理随机种行为",
  inputs: {
    samples: {
      name: "Latent"
    },
    seed_behavior: {
      name: "随机种行为"
    }
  }
};
const LatentBlend = {
  display_name: "混合Latent",
  inputs: {
    blend_factor: {
      name: "系数"
    },
    samples1: {
      name: "Latent1"
    },
    samples2: {
      name: "Latent2"
    }
  }
};
const LatentComposite = {
  display_name: "合成Latent",
  inputs: {
    feather: {
      name: "羽化"
    },
    samples_from: {
      name: "Latent从"
    },
    samples_to: {
      name: "Latent到"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const LatentCompositeMasked = {
  display_name: "合成Latent遮罩",
  inputs: {
    destination: {
      name: "目标Latent"
    },
    mask: {
      name: "遮罩"
    },
    resize_source: {
      name: "调整来源大小"
    },
    source: {
      name: "来源Latent"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const LatentCrop = {
  display_name: "裁剪Latent",
  inputs: {
    height: {
      name: "高度"
    },
    samples: {
      name: "Latent"
    },
    width: {
      name: "宽度"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const LatentFlip = {
  display_name: "翻转Latent",
  inputs: {
    flip_method: {
      name: "翻转方法"
    },
    samples: {
      name: "Latent"
    }
  }
};
const LatentFromBatch = {
  display_name: "从批次获取Latent",
  inputs: {
    batch_index: {
      name: "批次索引"
    },
    length: {
      name: "长度"
    },
    samples: {
      name: "Latent"
    }
  }
};
const LatentInterpolate = {
  display_name: "Latent插值",
  inputs: {
    ratio: {
      name: "比率"
    },
    samples1: {
      name: "Latent1"
    },
    samples2: {
      name: "Latent2"
    }
  }
};
const LatentMultiply = {
  display_name: "Latent相乘",
  inputs: {
    multiplier: {
      name: "乘数"
    },
    samples: {
      name: "Latent"
    }
  }
};
const LatentOperationSharpen = {
  display_name: "Latent操作锐化",
  inputs: {
    alpha: {
      name: "阿尔法"
    },
    sharpen_radius: {
      name: "锐化半径"
    },
    sigma: {
      name: "西格玛"
    }
  }
};
const LatentOperationTonemapReinhard = {
  display_name: "Latent操作色调映射Reinhard",
  inputs: {
    multiplier: {
      name: "乘数"
    }
  }
};
const LatentRotate = {
  display_name: "旋转Latent",
  inputs: {
    rotation: {
      name: "旋转"
    },
    samples: {
      name: "Latent"
    }
  }
};
const LatentSubtract = {
  display_name: "Latent相减",
  inputs: {
    samples1: {
      name: "Latent1"
    },
    samples2: {
      name: "Latent2"
    }
  }
};
const LatentUpscale = {
  display_name: "缩放Latent",
  inputs: {
    crop: {
      name: "裁剪"
    },
    height: {
      name: "高度"
    },
    samples: {
      name: "Latent"
    },
    upscale_method: {
      name: "缩放算法"
    },
    width: {
      name: "宽度"
    }
  }
};
const LatentUpscaleBy = {
  display_name: "缩放Latent（比例）",
  inputs: {
    samples: {
      name: "Latent"
    },
    scale_by: {
      name: "缩放比例"
    },
    upscale_method: {
      name: "缩放算法"
    }
  }
};
const Load3D = {
  display_name: "加载3D",
  inputs: {
    clear: {},
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    model_file: {
      name: "模型文件"
    },
    "upload 3d model": {},
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "image"
    },
    "1": {
      name: "mask"
    },
    "2": {
      name: "mesh_path"
    },
    "3": {
      name: "normal"
    },
    "4": {
      name: "lineart"
    },
    "5": {
      name: "camera_info"
    }
  }
};
const Load3DAnimation = {
  display_name: "加载3D动画",
  inputs: {
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    model_file: {
      name: "模型文件"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "图像"
    },
    "1": {
      name: "遮罩"
    },
    "2": {
      name: "mesh_path"
    },
    "3": {
      name: "法线"
    },
    "4": {
      name: "相机信息"
    }
  }
};
const LoadAudio = {
  display_name: "加载音频",
  inputs: {
    audio: {
      name: "音频"
    },
    audioUI: {
      name: "音频UI"
    },
    upload: {
      name: "选择文件上传"
    }
  }
};
const LoadImage = {
  display_name: "加载图像",
  inputs: {
    image: {
      name: "图像"
    },
    upload: {
      name: "选择文件上传"
    }
  }
};
const LoadImageMask = {
  display_name: "加载图像（作为遮罩）",
  inputs: {
    channel: {
      name: "通道"
    },
    image: {
      name: "图像"
    },
    upload: {
      name: "选择文件上传"
    }
  }
};
const LoadImageOutput = {
  description: "从输出文件夹加载图像。当点击刷新按钮时，节点将更新图像列表并自动选择第一张图像，便于轻松迭代。",
  display_name: "加载图像（来自输出）",
  inputs: {
    image: {
      name: "图像"
    },
    refresh: {},
    upload: {
      name: "选择文件上传"
    }
  }
};
const LoadLatent = {
  display_name: "加载Latent",
  inputs: {
    latent: {
      name: "Latent"
    }
  }
};
const LoadVideo = {
  display_name: "加载视频",
  inputs: {
    file: {
      name: "文件"
    },
    upload: {
      name: "选择要上传的文件"
    }
  }
};
const LoraLoader = {
  description: "LoRA用于修改扩散和CLIP模型，改变Latent图像的降噪方式，例如应用风格。多个LoRA节点可以链接在一起。",
  display_name: "加载LoRA",
  inputs: {
    clip: {
      name: "CLIPCLIP",
      tooltip: "LoRA 将应用于的 CLIP 模型。"
    },
    lora_name: {
      name: "LoRA名称",
      tooltip: "LoRA 的名称。"
    },
    model: {
      name: "模型",
      tooltip: "LoRA 将应用于的扩散模型。"
    },
    strength_clip: {
      name: "CLIP强度",
      tooltip: "修改 CLIP 模型的强度。此值可以为负。"
    },
    strength_model: {
      name: "模型强度",
      tooltip: "修改扩散模型的强度。此值可以为负。"
    }
  },
  outputs: {
    "0": {
      tooltip: "修改后的扩散模型。"
    },
    "1": {
      tooltip: "修改后的CLIP模型。"
    }
  }
};
const LoraLoaderModelOnly = {
  description: "LoRA用于修改扩散和CLIP模型，改变Latent图像的降噪方式，例如应用风格。多个LoRA节点可以链接在一起。",
  display_name: "LoRA加载器（仅模型）",
  inputs: {
    lora_name: {
      name: "LoRA名称"
    },
    model: {
      name: "模型"
    },
    strength_model: {
      name: "模型强度"
    }
  },
  outputs: {
    "0": {
      tooltip: "修改后的扩散模型。"
    }
  }
};
const LoraSave = {
  display_name: "保存LoRA",
  inputs: {
    bias_diff: {
      name: "偏差差异"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    lora_type: {
      name: "lora类型"
    },
    model_diff: {
      name: "模型差异",
      tooltip: "要转换为 LoRA 的模型差异输出。"
    },
    rank: {
      name: "排名"
    },
    text_encoder_diff: {
      name: "文本编码器差异",
      tooltip: "要转换为 LoRA 的CLIP差异输出。"
    }
  }
};
const LotusConditioning = {
  display_name: "LotusConditioning",
  outputs: {
    "0": {
      name: "条件"
    }
  }
};
const LumaConceptsNode = {
  description: "包含一个或多个相机概念，可用于 Luma 文本转视频和 Luma 图像转视频节点。",
  display_name: "Luma 概念",
  inputs: {
    concept1: {
      name: "concept1"
    },
    concept2: {
      name: "concept2"
    },
    concept3: {
      name: "concept3"
    },
    concept4: {
      name: "concept4"
    },
    luma_concepts: {
      name: "luma_concepts",
      tooltip: "可选的相机概念，将添加到此处选择的概念中。"
    }
  },
  outputs: {
    "0": {
      name: "luma_concepts"
    }
  }
};
const LumaImageModifyNode = {
  description: "根据提示词和宽高比同步修改图像。",
  display_name: "Luma 图像到图像",
  inputs: {
    control_after_generate: {
      name: "control after generate"
    },
    image: {
      name: "image"
    },
    image_weight: {
      name: "image_weight",
      tooltip: "图像权重；越接近 1.0，图像被修改的程度越小。"
    },
    model: {
      name: "model"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于图像生成的提示词"
    },
    seed: {
      name: "seed",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    }
  }
};
const LumaImageNode = {
  description: "根据提示词和宽高比同步生成图像。",
  display_name: "Luma 文生图",
  inputs: {
    aspect_ratio: {
      name: "宽高比"
    },
    character_image: {
      name: "角色参考图",
      tooltip: "角色参考图像；可为多张批量输入，最多可考虑 4 张图像。"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    image_luma_ref: {
      name: "Luma 参考图",
      tooltip: "Luma 参考节点连接，可用输入图像影响生成；最多可考虑 4 张图像。"
    },
    model: {
      name: "模型"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于图像生成的提示词"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    },
    style_image: {
      name: "风格参考图",
      tooltip: "风格参考图像；仅使用 1 张图像。"
    },
    style_image_weight: {
      name: "风格图权重",
      tooltip: "风格图像的权重。如果未提供风格图像则忽略。"
    }
  }
};
const LumaImageToVideoNode = {
  description: "根据提示词、输入图像和输出尺寸同步生成视频。",
  display_name: "Luma 图像转视频",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "时长"
    },
    first_image: {
      name: "首帧图像",
      tooltip: "生成视频的第一帧。"
    },
    last_image: {
      name: "末帧图像",
      tooltip: "生成视频的最后一帧。"
    },
    loop: {
      name: "循环"
    },
    luma_concepts: {
      name: "luma_concepts",
      tooltip: "可选的 Camera Concepts，通过 Luma Concepts 节点控制相机运动。"
    },
    model: {
      name: "模型"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于视频生成的提示词"
    },
    resolution: {
      name: "分辨率"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    }
  }
};
const LumaReferenceNode = {
  description: "用于 Luma 生成图像节点，包含一张图片和权重。",
  display_name: "Luma 参考",
  inputs: {
    image: {
      name: "图片",
      tooltip: "用作参考的图片。"
    },
    luma_ref: {
      name: "luma_ref"
    },
    weight: {
      name: "权重",
      tooltip: "图片参考的权重。"
    }
  },
  outputs: {
    "0": {
      name: "luma_ref"
    }
  }
};
const LumaVideoNode = {
  description: "根据提示词和输出尺寸同步生成视频。",
  display_name: "Luma 文本转视频",
  inputs: {
    aspect_ratio: {
      name: "宽高比"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "时长"
    },
    loop: {
      name: "循环"
    },
    luma_concepts: {
      name: "luma_concepts",
      tooltip: "可选的相机概念，通过 Luma Concepts 节点控制相机运动。"
    },
    model: {
      name: "模型"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于视频生成的提示词"
    },
    resolution: {
      name: "分辨率"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    }
  }
};
const Mahiro = {
  description: "修改引导以更多地侧重于正面条件提示的'方向'，而不是负面条件提示之间的差异。",
  display_name: "真寻太可爱了，她应该有个更好的引导功能！！(。・ω・。)",
  inputs: {
    model: {
      name: "模型"
    }
  },
  outputs: {
    "0": {
      name: "修补后的模型"
    }
  }
};
const MaskComposite = {
  display_name: "合成遮罩",
  inputs: {
    destination: {
      name: "目标"
    },
    operation: {
      name: "操作"
    },
    source: {
      name: "源"
    },
    x: {
      name: "x"
    },
    y: {
      name: "y"
    }
  }
};
const ImageAddNoise = {
  description: "将噪声添加到图像，用于模拟胶片颗粒或增强纹理。",
  display_name: "图像加噪 (ImageAddNoise)",
  inputs: {
    image: {
      name: "图像"
    },
    seed: {
      name: "种子",
      tooltip: "用于生成随机噪声的随机种子。"
    },
    strength: {
      name: "强度",
      tooltip: "噪声强度，从0到1。"
    }
  },
  outputs: {
    "0": {
      name: "图像"
    }
  }
};
const BatchMasksNode = {
  description: "批处理多个遮罩，将它们组合成一个遮罩批次。",
  display_name: "遮罩合并成批",
};
const MaskPreview = {
  description: "将输入遮罩保存到您的 ComfyUI 输出目录。",
  display_name: "遮罩预览",
  inputs: {
    mask: {
      name: "遮罩"
    }
  }
};
const MaskToImage = {
  display_name: "遮罩转换为图像",
  inputs: {
    mask: {
      name: "遮罩"
    }
  }
};
const MinimaxImageToVideoNode = {
  description: "使用 MiniMax 的 API 根据图像和提示生成视频",
  display_name: "MiniMax 图像转视频",
  inputs: {
    control_after_generate: {
      name: "control after generate"
    },
    image: {
      name: "image",
      tooltip: "用于视频生成首帧的图像"
    },
    model: {
      name: "model",
      tooltip: "用于视频生成的模型"
    },
    prompt_text: {
      name: "prompt_text",
      tooltip: "用于引导视频生成的文本提示"
    },
    seed: {
      name: "seed",
      tooltip: "用于生成噪声的随机种子。"
    }
  }
};
const MinimaxTextToVideoNode = {
  description: "使用 MiniMax 的 API 根据提示生成视频",
  display_name: "MiniMax 文本转视频",
  inputs: {
    control_after_generate: {
      name: "control after generate"
    },
    model: {
      name: "model",
      tooltip: "用于视频生成的模型"
    },
    prompt_text: {
      name: "prompt_text",
      tooltip: "用于引导视频生成的文本提示"
    },
    seed: {
      name: "seed",
      tooltip: "用于生成噪声的随机种子。"
    }
  }
};
const ModelComputeDtype = {
  display_name: "模型计算Dtype",
  inputs: {
    dtype: {
      name: "dtype"
    },
    model: {
      name: "模型"
    }
  }
};
const ModelMergeAdd = {
  display_name: "模型相加",
  inputs: {
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    }
  }
};
const ModelMergeAuraflow = {
  display_name: "模型融合（Auraflow ）",
  inputs: {
    cond_seq_linear_: {
      name: "条件序列线性."
    },
    double_layers_0_: {
      name: "双层.0."
    },
    double_layers_1_: {
      name: "双层.1."
    },
    double_layers_2_: {
      name: "双层.2."
    },
    double_layers_3_: {
      name: "双层.3."
    },
    final_linear_: {
      name: "最终线性."
    },
    init_x_linear_: {
      name: "初始x线性."
    },
    modF_: {
      name: "modF."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    positional_encoding: {
      name: "位置编码"
    },
    register_tokens: {
      name: "注册令牌"
    },
    single_layers_0_: {
      name: "单层.0."
    },
    single_layers_10_: {
      name: "单层.10."
    },
    single_layers_11_: {
      name: "单层.11."
    },
    single_layers_12_: {
      name: "单层.12."
    },
    single_layers_13_: {
      name: "单层.13."
    },
    single_layers_14_: {
      name: "单层.14."
    },
    single_layers_15_: {
      name: "单层.15."
    },
    single_layers_16_: {
      name: "单层.16."
    },
    single_layers_17_: {
      name: "单层.17."
    },
    single_layers_18_: {
      name: "单层.18."
    },
    single_layers_19_: {
      name: "单层.19."
    },
    single_layers_1_: {
      name: "单层.1."
    },
    single_layers_20_: {
      name: "单层.20."
    },
    single_layers_21_: {
      name: "单层.21."
    },
    single_layers_22_: {
      name: "单层.22."
    },
    single_layers_23_: {
      name: "单层.23."
    },
    single_layers_24_: {
      name: "单层.24."
    },
    single_layers_25_: {
      name: "单层.25."
    },
    single_layers_26_: {
      name: "单层.26."
    },
    single_layers_27_: {
      name: "单层.27."
    },
    single_layers_28_: {
      name: "单层.28."
    },
    single_layers_29_: {
      name: "单层.29."
    },
    single_layers_2_: {
      name: "单层.2."
    },
    single_layers_30_: {
      name: "单层.30."
    },
    single_layers_31_: {
      name: "单层.31."
    },
    single_layers_3_: {
      name: "单层.3."
    },
    single_layers_4_: {
      name: "单层.4."
    },
    single_layers_5_: {
      name: "单层.5."
    },
    single_layers_6_: {
      name: "单层.6."
    },
    single_layers_7_: {
      name: "单层.7."
    },
    single_layers_8_: {
      name: "单层.8."
    },
    single_layers_9_: {
      name: "单层.9."
    },
    t_embedder_: {
      name: "t嵌入器."
    }
  }
};
const ModelMergeBlocks = {
  display_name: "模型融合（分块）",
  inputs: {
    input: {
      name: "输入"
    },
    middle: {
      name: "中间"
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    out: {
      name: "输出"
    }
  }
};
const ModelMergeCosmos14B = {
  display_name: "ModelMergeCosmos14B",
  inputs: {
    affline_norm_: {
      name: "仿射规范化."
    },
    blocks_block0_: {
      name: "blocks.block0."
    },
    blocks_block10_: {
      name: "blocks.block10."
    },
    blocks_block11_: {
      name: "blocks.block11."
    },
    blocks_block12_: {
      name: "blocks.block12."
    },
    blocks_block13_: {
      name: "blocks.block13."
    },
    blocks_block14_: {
      name: "blocks.block14."
    },
    blocks_block15_: {
      name: "blocks.block15."
    },
    blocks_block16_: {
      name: "blocks.block16."
    },
    blocks_block17_: {
      name: "blocks.block17."
    },
    blocks_block18_: {
      name: "blocks.block18."
    },
    blocks_block19_: {
      name: "blocks.block19."
    },
    blocks_block1_: {
      name: "blocks.block1."
    },
    blocks_block20_: {
      name: "blocks.block20."
    },
    blocks_block21_: {
      name: "blocks.block21."
    },
    blocks_block22_: {
      name: "blocks.block22."
    },
    blocks_block23_: {
      name: "blocks.block23."
    },
    blocks_block24_: {
      name: "blocks.block24."
    },
    blocks_block25_: {
      name: "blocks.block25."
    },
    blocks_block26_: {
      name: "blocks.block26."
    },
    blocks_block27_: {
      name: "blocks.block27."
    },
    blocks_block28_: {
      name: "blocks.block28."
    },
    blocks_block29_: {
      name: "blocks.block29."
    },
    blocks_block2_: {
      name: "blocks.block2."
    },
    blocks_block30_: {
      name: "blocks.block30."
    },
    blocks_block31_: {
      name: "blocks.block31."
    },
    blocks_block32_: {
      name: "blocks.block32."
    },
    blocks_block33_: {
      name: "blocks.block33."
    },
    blocks_block34_: {
      name: "blocks.block34."
    },
    blocks_block35_: {
      name: "blocks.block35."
    },
    blocks_block3_: {
      name: "blocks.block3."
    },
    blocks_block4_: {
      name: "blocks.block4."
    },
    blocks_block5_: {
      name: "blocks.block5."
    },
    blocks_block6_: {
      name: "blocks.block6."
    },
    blocks_block7_: {
      name: "blocks.block7."
    },
    blocks_block8_: {
      name: "blocks.block8."
    },
    blocks_block9_: {
      name: "blocks.block9."
    },
    extra_pos_embedder_: {
      name: "额外位置嵌入器."
    },
    final_layer_: {
      name: "最终层."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    pos_embedder_: {
      name: "位置嵌入器."
    },
    t_embedder_: {
      name: "t嵌入器."
    },
    x_embedder_: {
      name: "x嵌入器."
    }
  }
};
const ModelMergeCosmos7B = {
  display_name: "ModelMergeCosmos7B",
  inputs: {
    affline_norm_: {
      name: "仿射规范化."
    },
    blocks_block0_: {
      name: "blocks.block0."
    },
    blocks_block10_: {
      name: "blocks.block10."
    },
    blocks_block11_: {
      name: "blocks.block11."
    },
    blocks_block12_: {
      name: "blocks.block12."
    },
    blocks_block13_: {
      name: "blocks.block13."
    },
    blocks_block14_: {
      name: "blocks.block14."
    },
    blocks_block15_: {
      name: "blocks.block15."
    },
    blocks_block16_: {
      name: "blocks.block16."
    },
    blocks_block17_: {
      name: "blocks.block17."
    },
    blocks_block18_: {
      name: "blocks.block18."
    },
    blocks_block19_: {
      name: "blocks.block19."
    },
    blocks_block1_: {
      name: "blocks.block1."
    },
    blocks_block20_: {
      name: "blocks.block20."
    },
    blocks_block21_: {
      name: "blocks.block21."
    },
    blocks_block22_: {
      name: "blocks.block22."
    },
    blocks_block23_: {
      name: "blocks.block23."
    },
    blocks_block24_: {
      name: "blocks.block24."
    },
    blocks_block25_: {
      name: "blocks.block25."
    },
    blocks_block26_: {
      name: "blocks.block26."
    },
    blocks_block27_: {
      name: "blocks.block27."
    },
    blocks_block2_: {
      name: "blocks.block2."
    },
    blocks_block3_: {
      name: "blocks.block3."
    },
    blocks_block4_: {
      name: "blocks.block4."
    },
    blocks_block5_: {
      name: "blocks.block5."
    },
    blocks_block6_: {
      name: "blocks.block6."
    },
    blocks_block7_: {
      name: "blocks.block7."
    },
    blocks_block8_: {
      name: "blocks.block8."
    },
    blocks_block9_: {
      name: "blocks.block9."
    },
    extra_pos_embedder_: {
      name: "额外位置嵌入器."
    },
    final_layer_: {
      name: "最终层."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    pos_embedder_: {
      name: "位置嵌入器."
    },
    t_embedder_: {
      name: "t嵌入器."
    },
    x_embedder_: {
      name: "x嵌入器."
    }
  }
};
const ModelMergeFlux1 = {
  display_name: "模型融合（Flux1）",
  inputs: {
    double_blocks_0_: {
      name: "双块.0."
    },
    double_blocks_10_: {
      name: "双块.10."
    },
    double_blocks_11_: {
      name: "双块.11."
    },
    double_blocks_12_: {
      name: "双块.12."
    },
    double_blocks_13_: {
      name: "双块.13."
    },
    double_blocks_14_: {
      name: "双块.14."
    },
    double_blocks_15_: {
      name: "双块.15."
    },
    double_blocks_16_: {
      name: "双块.16."
    },
    double_blocks_17_: {
      name: "双块.17."
    },
    double_blocks_18_: {
      name: "双块.18."
    },
    double_blocks_1_: {
      name: "双块.1."
    },
    double_blocks_2_: {
      name: "双块.2."
    },
    double_blocks_3_: {
      name: "双块.3."
    },
    double_blocks_4_: {
      name: "双块.4."
    },
    double_blocks_5_: {
      name: "双块.5."
    },
    double_blocks_6_: {
      name: "双块.6."
    },
    double_blocks_7_: {
      name: "双块.7."
    },
    double_blocks_8_: {
      name: "双块.8."
    },
    double_blocks_9_: {
      name: "双块.9."
    },
    final_layer_: {
      name: "最终层."
    },
    guidance_in: {
      name: "输入引导"
    },
    img_in_: {
      name: "输入图像."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    single_blocks_0_: {
      name: "单块.0."
    },
    single_blocks_10_: {
      name: "单块.10."
    },
    single_blocks_11_: {
      name: "单块.11."
    },
    single_blocks_12_: {
      name: "单块.12."
    },
    single_blocks_13_: {
      name: "单块.13."
    },
    single_blocks_14_: {
      name: "单块.14."
    },
    single_blocks_15_: {
      name: "单块.15."
    },
    single_blocks_16_: {
      name: "单块.16."
    },
    single_blocks_17_: {
      name: "单块.17."
    },
    single_blocks_18_: {
      name: "单块.18."
    },
    single_blocks_19_: {
      name: "单块.19."
    },
    single_blocks_1_: {
      name: "单块.1."
    },
    single_blocks_20_: {
      name: "单块.20."
    },
    single_blocks_21_: {
      name: "单块.21."
    },
    single_blocks_22_: {
      name: "单块.22."
    },
    single_blocks_23_: {
      name: "单块.23."
    },
    single_blocks_24_: {
      name: "单块.24."
    },
    single_blocks_25_: {
      name: "单块.25."
    },
    single_blocks_26_: {
      name: "单块.26."
    },
    single_blocks_27_: {
      name: "单块.27."
    },
    single_blocks_28_: {
      name: "单块.28."
    },
    single_blocks_29_: {
      name: "单块.29."
    },
    single_blocks_2_: {
      name: "单块.2."
    },
    single_blocks_30_: {
      name: "单块.30."
    },
    single_blocks_31_: {
      name: "单块.31."
    },
    single_blocks_32_: {
      name: "单块.32."
    },
    single_blocks_33_: {
      name: "单块.33."
    },
    single_blocks_34_: {
      name: "单块.34."
    },
    single_blocks_35_: {
      name: "单块.35."
    },
    single_blocks_36_: {
      name: "单块.36."
    },
    single_blocks_37_: {
      name: "单块.37."
    },
    single_blocks_3_: {
      name: "单块.3."
    },
    single_blocks_4_: {
      name: "单块.4."
    },
    single_blocks_5_: {
      name: "单块.5."
    },
    single_blocks_6_: {
      name: "单块.6."
    },
    single_blocks_7_: {
      name: "单块.7."
    },
    single_blocks_8_: {
      name: "单块.8."
    },
    single_blocks_9_: {
      name: "单块.9."
    },
    time_in_: {
      name: "输入时间."
    },
    txt_in_: {
      name: "输入文本."
    },
    vector_in_: {
      name: "输入向量."
    }
  }
};
const ModelMergeLTXV = {
  display_name: "模型融合（LTXV）",
  inputs: {
    adaln_single_: {
      name: "adaln_single."
    },
    caption_projection_: {
      name: "caption_projection."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    patchify_proj_: {
      name: "patchify_proj."
    },
    proj_out_: {
      name: "proj_out."
    },
    scale_shift_table: {
      name: "scale_shift_table"
    },
    transformer_blocks_0_: {
      name: "transformer_blocks.0."
    },
    transformer_blocks_10_: {
      name: "transformer_blocks.10."
    },
    transformer_blocks_11_: {
      name: "transformer_blocks.11."
    },
    transformer_blocks_12_: {
      name: "transformer_blocks.12."
    },
    transformer_blocks_13_: {
      name: "transformer_blocks.13."
    },
    transformer_blocks_14_: {
      name: "transformer_blocks.14."
    },
    transformer_blocks_15_: {
      name: "transformer_blocks.15."
    },
    transformer_blocks_16_: {
      name: "transformer_blocks.16."
    },
    transformer_blocks_17_: {
      name: "transformer_blocks.17."
    },
    transformer_blocks_18_: {
      name: "transformer_blocks.18."
    },
    transformer_blocks_19_: {
      name: "transformer_blocks.19."
    },
    transformer_blocks_1_: {
      name: "transformer_blocks.1."
    },
    transformer_blocks_20_: {
      name: "transformer_blocks.20."
    },
    transformer_blocks_21_: {
      name: "transformer_blocks.21."
    },
    transformer_blocks_22_: {
      name: "transformer_blocks.22."
    },
    transformer_blocks_23_: {
      name: "transformer_blocks.23."
    },
    transformer_blocks_24_: {
      name: "transformer_blocks.24."
    },
    transformer_blocks_25_: {
      name: "transformer_blocks.25."
    },
    transformer_blocks_26_: {
      name: "transformer_blocks.26."
    },
    transformer_blocks_27_: {
      name: "transformer_blocks.27."
    },
    transformer_blocks_2_: {
      name: "transformer_blocks.2."
    },
    transformer_blocks_3_: {
      name: "transformer_blocks.3."
    },
    transformer_blocks_4_: {
      name: "transformer_blocks.4."
    },
    transformer_blocks_5_: {
      name: "transformer_blocks.5."
    },
    transformer_blocks_6_: {
      name: "transformer_blocks.6."
    },
    transformer_blocks_7_: {
      name: "transformer_blocks.7."
    },
    transformer_blocks_8_: {
      name: "transformer_blocks.8."
    },
    transformer_blocks_9_: {
      name: "transformer_blocks.9."
    }
  }
};
const ModelMergeMochiPreview = {
  display_name: "模型融合（Mochi预览）",
  inputs: {
    blocks_0_: {
      name: "blocks.0."
    },
    blocks_10_: {
      name: "blocks.10."
    },
    blocks_11_: {
      name: "blocks.11."
    },
    blocks_12_: {
      name: "blocks.12."
    },
    blocks_13_: {
      name: "blocks.13."
    },
    blocks_14_: {
      name: "blocks.14."
    },
    blocks_15_: {
      name: "blocks.15."
    },
    blocks_16_: {
      name: "blocks.16."
    },
    blocks_17_: {
      name: "blocks.17."
    },
    blocks_18_: {
      name: "blocks.18."
    },
    blocks_19_: {
      name: "blocks.19."
    },
    blocks_1_: {
      name: "blocks.1."
    },
    blocks_20_: {
      name: "blocks.20."
    },
    blocks_21_: {
      name: "blocks.21."
    },
    blocks_22_: {
      name: "blocks.22."
    },
    blocks_23_: {
      name: "blocks.23."
    },
    blocks_24_: {
      name: "blocks.24."
    },
    blocks_25_: {
      name: "blocks.25."
    },
    blocks_26_: {
      name: "blocks.26."
    },
    blocks_27_: {
      name: "blocks.27."
    },
    blocks_28_: {
      name: "blocks.28."
    },
    blocks_29_: {
      name: "blocks.29."
    },
    blocks_2_: {
      name: "blocks.2."
    },
    blocks_30_: {
      name: "blocks.30."
    },
    blocks_31_: {
      name: "blocks.31."
    },
    blocks_32_: {
      name: "blocks.32."
    },
    blocks_33_: {
      name: "blocks.33."
    },
    blocks_34_: {
      name: "blocks.34."
    },
    blocks_35_: {
      name: "blocks.35."
    },
    blocks_36_: {
      name: "blocks.36."
    },
    blocks_37_: {
      name: "blocks.37."
    },
    blocks_38_: {
      name: "blocks.38."
    },
    blocks_39_: {
      name: "blocks.39."
    },
    blocks_3_: {
      name: "blocks.3."
    },
    blocks_40_: {
      name: "blocks.40."
    },
    blocks_41_: {
      name: "blocks.41."
    },
    blocks_42_: {
      name: "blocks.42."
    },
    blocks_43_: {
      name: "blocks.43."
    },
    blocks_44_: {
      name: "blocks.44."
    },
    blocks_45_: {
      name: "blocks.45."
    },
    blocks_46_: {
      name: "blocks.46."
    },
    blocks_47_: {
      name: "blocks.47."
    },
    blocks_4_: {
      name: "blocks.4."
    },
    blocks_5_: {
      name: "blocks.5."
    },
    blocks_6_: {
      name: "blocks.6."
    },
    blocks_7_: {
      name: "blocks.7."
    },
    blocks_8_: {
      name: "blocks.8."
    },
    blocks_9_: {
      name: "blocks.9."
    },
    final_layer_: {
      name: "final_layer."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    pos_frequencies_: {
      name: "pos_frequencies."
    },
    t5_y_embedder_: {
      name: "t5_y_embedder."
    },
    t5_yproj_: {
      name: "t5_yproj."
    },
    t_embedder_: {
      name: "t_embedder."
    }
  }
};
const ModelMergeSD1 = {
  display_name: "模型融合（SD1）",
  inputs: {
    input_blocks_0_: {
      name: "输入块.0."
    },
    input_blocks_10_: {
      name: "输入块.10."
    },
    input_blocks_11_: {
      name: "输入块.11."
    },
    input_blocks_1_: {
      name: "输入块.1."
    },
    input_blocks_2_: {
      name: "输入块.2."
    },
    input_blocks_3_: {
      name: "输入块.3."
    },
    input_blocks_4_: {
      name: "输入块.4."
    },
    input_blocks_5_: {
      name: "输入块.5."
    },
    input_blocks_6_: {
      name: "输入块.6."
    },
    input_blocks_7_: {
      name: "输入块.7."
    },
    input_blocks_8_: {
      name: "输入块.8."
    },
    input_blocks_9_: {
      name: "输入块.9."
    },
    label_emb_: {
      name: "标签嵌入."
    },
    middle_block_0_: {
      name: "中间块.0."
    },
    middle_block_1_: {
      name: "中间块.1."
    },
    middle_block_2_: {
      name: "中间块.2."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    out_: {
      name: "出."
    },
    output_blocks_0_: {
      name: "输出块.0."
    },
    output_blocks_10_: {
      name: "输出块.10."
    },
    output_blocks_11_: {
      name: "输出块.11."
    },
    output_blocks_1_: {
      name: "输出块.1."
    },
    output_blocks_2_: {
      name: "输出块.2."
    },
    output_blocks_3_: {
      name: "输出块.3."
    },
    output_blocks_4_: {
      name: "输出块.4."
    },
    output_blocks_5_: {
      name: "输出块.5."
    },
    output_blocks_6_: {
      name: "输出块.6."
    },
    output_blocks_7_: {
      name: "输出块.7."
    },
    output_blocks_8_: {
      name: "输出块.8."
    },
    output_blocks_9_: {
      name: "输出块.9."
    },
    time_embed_: {
      name: "时间嵌入."
    }
  }
};
const ModelMergeSD2 = {
  display_name: "模型融合（SD2）",
  inputs: {
    input_blocks_0_: {
      name: "输入块.0."
    },
    input_blocks_10_: {
      name: "输入块.10."
    },
    input_blocks_11_: {
      name: "输入块.11."
    },
    input_blocks_1_: {
      name: "输入块.1."
    },
    input_blocks_2_: {
      name: "输入块.2."
    },
    input_blocks_3_: {
      name: "输入块.3."
    },
    input_blocks_4_: {
      name: "输入块.4."
    },
    input_blocks_5_: {
      name: "输入块.5."
    },
    input_blocks_6_: {
      name: "输入块.6."
    },
    input_blocks_7_: {
      name: "输入块.7."
    },
    input_blocks_8_: {
      name: "输入块.8."
    },
    input_blocks_9_: {
      name: "输入块.9."
    },
    label_emb_: {
      name: "标签嵌入."
    },
    middle_block_0_: {
      name: "中间块.0."
    },
    middle_block_1_: {
      name: "中间块.1."
    },
    middle_block_2_: {
      name: "中间块.2."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    out_: {
      name: "出."
    },
    output_blocks_0_: {
      name: "输出块.0."
    },
    output_blocks_10_: {
      name: "输出块.10."
    },
    output_blocks_11_: {
      name: "输出块.11."
    },
    output_blocks_1_: {
      name: "输出块.1."
    },
    output_blocks_2_: {
      name: "输出块.2."
    },
    output_blocks_3_: {
      name: "输出块.3."
    },
    output_blocks_4_: {
      name: "输出块.4."
    },
    output_blocks_5_: {
      name: "输出块.5."
    },
    output_blocks_6_: {
      name: "输出块.6."
    },
    output_blocks_7_: {
      name: "输出块.7."
    },
    output_blocks_8_: {
      name: "输出块.8."
    },
    output_blocks_9_: {
      name: "输出块.9."
    },
    time_embed_: {
      name: "时间嵌入."
    }
  }
};
const ModelMergeSD35_Large = {
  display_name: "模型融合（SD35_大）",
  inputs: {
    context_embedder_: {
      name: "上下文嵌入器."
    },
    final_layer_: {
      name: "最终层."
    },
    joint_blocks_0_: {
      name: "联合块.0."
    },
    joint_blocks_10_: {
      name: "联合块.10."
    },
    joint_blocks_11_: {
      name: "联合块.11."
    },
    joint_blocks_12_: {
      name: "联合块.12."
    },
    joint_blocks_13_: {
      name: "联合块.13."
    },
    joint_blocks_14_: {
      name: "联合块.14."
    },
    joint_blocks_15_: {
      name: "联合块.15."
    },
    joint_blocks_16_: {
      name: "联合块.16."
    },
    joint_blocks_17_: {
      name: "联合块.17."
    },
    joint_blocks_18_: {
      name: "联合块.18."
    },
    joint_blocks_19_: {
      name: "联合块.19."
    },
    joint_blocks_1_: {
      name: "联合块.1."
    },
    joint_blocks_20_: {
      name: "联合块.20."
    },
    joint_blocks_21_: {
      name: "联合块.21."
    },
    joint_blocks_22_: {
      name: "联合块.22."
    },
    joint_blocks_23_: {
      name: "联合块.23."
    },
    joint_blocks_24_: {
      name: "联合块.24."
    },
    joint_blocks_25_: {
      name: "联合块.25."
    },
    joint_blocks_26_: {
      name: "联合块.26."
    },
    joint_blocks_27_: {
      name: "联合块.27."
    },
    joint_blocks_28_: {
      name: "联合块.28."
    },
    joint_blocks_29_: {
      name: "联合块.29."
    },
    joint_blocks_2_: {
      name: "联合块.2."
    },
    joint_blocks_30_: {
      name: "联合块.30."
    },
    joint_blocks_31_: {
      name: "联合块.31."
    },
    joint_blocks_32_: {
      name: "联合块.32."
    },
    joint_blocks_33_: {
      name: "联合块.33."
    },
    joint_blocks_34_: {
      name: "联合块.34."
    },
    joint_blocks_35_: {
      name: "联合块.35."
    },
    joint_blocks_36_: {
      name: "联合块.36."
    },
    joint_blocks_37_: {
      name: "联合块.37."
    },
    joint_blocks_3_: {
      name: "联合块.3."
    },
    joint_blocks_4_: {
      name: "联合块.4."
    },
    joint_blocks_5_: {
      name: "联合块.5."
    },
    joint_blocks_6_: {
      name: "联合块.6."
    },
    joint_blocks_7_: {
      name: "联合块.7."
    },
    joint_blocks_8_: {
      name: "联合块.8."
    },
    joint_blocks_9_: {
      name: "联合块.9."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    pos_embed_: {
      name: "位置嵌入."
    },
    t_embedder_: {
      name: "t嵌入器."
    },
    x_embedder_: {
      name: "x嵌入器."
    },
    y_embedder_: {
      name: "y嵌入器."
    }
  }
};
const ModelMergeSD3_2B = {
  display_name: "模型融合（SD3_2B）",
  inputs: {
    context_embedder_: {
      name: "上下文嵌入器."
    },
    final_layer_: {
      name: "最终层."
    },
    joint_blocks_0_: {
      name: "联合块.0."
    },
    joint_blocks_10_: {
      name: "联合块.10."
    },
    joint_blocks_11_: {
      name: "联合块.11."
    },
    joint_blocks_12_: {
      name: "联合块.12."
    },
    joint_blocks_13_: {
      name: "联合块.13."
    },
    joint_blocks_14_: {
      name: "联合块.14."
    },
    joint_blocks_15_: {
      name: "联合块.15."
    },
    joint_blocks_16_: {
      name: "联合块.16."
    },
    joint_blocks_17_: {
      name: "联合块.17."
    },
    joint_blocks_18_: {
      name: "联合块.18."
    },
    joint_blocks_19_: {
      name: "联合块.19."
    },
    joint_blocks_1_: {
      name: "联合块.1."
    },
    joint_blocks_20_: {
      name: "联合块.20."
    },
    joint_blocks_21_: {
      name: "联合块.21."
    },
    joint_blocks_22_: {
      name: "联合块.22."
    },
    joint_blocks_23_: {
      name: "联合块.23."
    },
    joint_blocks_2_: {
      name: "联合块.2."
    },
    joint_blocks_3_: {
      name: "联合块.3."
    },
    joint_blocks_4_: {
      name: "联合块.4."
    },
    joint_blocks_5_: {
      name: "联合块.5."
    },
    joint_blocks_6_: {
      name: "联合块.6."
    },
    joint_blocks_7_: {
      name: "联合块.7."
    },
    joint_blocks_8_: {
      name: "联合块.8."
    },
    joint_blocks_9_: {
      name: "联合块.9."
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    pos_embed_: {
      name: "位置嵌入."
    },
    t_embedder_: {
      name: "t嵌入器."
    },
    x_embedder_: {
      name: "x嵌入器."
    },
    y_embedder_: {
      name: "y嵌入器."
    }
  }
};
const ModelMergeSDXL = {
  display_name: "模型融合（SDXL）",
  inputs: {
    input_blocks_0: {
      name: "输入块.0"
    },
    input_blocks_1: {
      name: "输入块.1"
    },
    input_blocks_2: {
      name: "输入块.2"
    },
    input_blocks_3: {
      name: "输入块.3"
    },
    input_blocks_4: {
      name: "输入块.4"
    },
    input_blocks_5: {
      name: "输入块.5"
    },
    input_blocks_6: {
      name: "输入块.6"
    },
    input_blocks_7: {
      name: "输入块.7"
    },
    input_blocks_8: {
      name: "输入块.8"
    },
    label_emb_: {
      name: "标签嵌入."
    },
    middle_block_0: {
      name: "中间块.0"
    },
    middle_block_1: {
      name: "中间块.1"
    },
    middle_block_2: {
      name: "中间块.2"
    },
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    out_: {
      name: "输出."
    },
    output_blocks_0: {
      name: "输出块.0"
    },
    output_blocks_1: {
      name: "输出块.1"
    },
    output_blocks_2: {
      name: "输出块.2"
    },
    output_blocks_3: {
      name: "输出块.3"
    },
    output_blocks_4: {
      name: "输出块.4"
    },
    output_blocks_5: {
      name: "输出块.5"
    },
    output_blocks_6: {
      name: "输出块.6"
    },
    output_blocks_7: {
      name: "输出块.7"
    },
    output_blocks_8: {
      name: "输出块.8"
    },
    time_embed_: {
      name: "时间嵌入."
    }
  }
};
const ModelMergeSimple = {
  display_name: "模型融合（简易）",
  inputs: {
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    ratio: {
      name: "比例"
    }
  }
};
const ModelMergeSubtract = {
  display_name: "模型相减",
  inputs: {
    model1: {
      name: "模型1"
    },
    model2: {
      name: "模型2"
    },
    multiplier: {
      name: "乘数"
    }
  }
};
const ModelMergeWAN2_1 = {
  description: "1.3B模型有30个模块，14B模型有40个模块。图像转视频模型有额外的img_emb。",
  display_name: "ModelMergeWAN2_1",
  inputs: {
    blocks_0_: {
      name: "blocks.0."
    },
    blocks_10_: {
      name: "blocks.10."
    },
    blocks_11_: {
      name: "blocks.11."
    },
    blocks_12_: {
      name: "blocks.12."
    },
    blocks_13_: {
      name: "blocks.13."
    },
    blocks_14_: {
      name: "blocks.14."
    },
    blocks_15_: {
      name: "blocks.15."
    },
    blocks_16_: {
      name: "blocks.16."
    },
    blocks_17_: {
      name: "blocks.17."
    },
    blocks_18_: {
      name: "blocks.18."
    },
    blocks_19_: {
      name: "blocks.19."
    },
    blocks_1_: {
      name: "blocks.1."
    },
    blocks_20_: {
      name: "blocks.20."
    },
    blocks_21_: {
      name: "blocks.21."
    },
    blocks_22_: {
      name: "blocks.22."
    },
    blocks_23_: {
      name: "blocks.23."
    },
    blocks_24_: {
      name: "blocks.24."
    },
    blocks_25_: {
      name: "blocks.25."
    },
    blocks_26_: {
      name: "blocks.26."
    },
    blocks_27_: {
      name: "blocks.27."
    },
    blocks_28_: {
      name: "blocks.28."
    },
    blocks_29_: {
      name: "blocks.29."
    },
    blocks_2_: {
      name: "blocks.2."
    },
    blocks_30_: {
      name: "blocks.30."
    },
    blocks_31_: {
      name: "blocks.31."
    },
    blocks_32_: {
      name: "blocks.32."
    },
    blocks_33_: {
      name: "blocks.33."
    },
    blocks_34_: {
      name: "blocks.34."
    },
    blocks_35_: {
      name: "blocks.35."
    },
    blocks_36_: {
      name: "blocks.36."
    },
    blocks_37_: {
      name: "blocks.37."
    },
    blocks_38_: {
      name: "blocks.38."
    },
    blocks_39_: {
      name: "blocks.39."
    },
    blocks_3_: {
      name: "blocks.3."
    },
    blocks_4_: {
      name: "blocks.4."
    },
    blocks_5_: {
      name: "blocks.5."
    },
    blocks_6_: {
      name: "blocks.6."
    },
    blocks_7_: {
      name: "blocks.7."
    },
    blocks_8_: {
      name: "blocks.8."
    },
    blocks_9_: {
      name: "blocks.9."
    },
    head_: {
      name: "head."
    },
    img_emb_: {
      name: "img_emb."
    },
    model1: {
      name: "model1"
    },
    model2: {
      name: "model2"
    },
    patch_embedding_: {
      name: "patch_embedding."
    },
    text_embedding_: {
      name: "text_embedding."
    },
    time_embedding_: {
      name: "time_embedding."
    },
    time_projection_: {
      name: "time_projection."
    }
  }
};
const ModelSamplingAuraFlow = {
  display_name: "采样算法（AuraFlow）",
  inputs: {
    model: {
      name: "模型"
    },
    shift: {
      name: "移位"
    }
  }
};
const ModelSamplingContinuousEDM = {
  display_name: "采样算法（连续EDM）",
  inputs: {
    model: {
      name: "模型"
    },
    sampling: {
      name: "采样"
    },
    sigma_max: {
      name: "最大西格玛"
    },
    sigma_min: {
      name: "最小西格玛"
    }
  }
};
const ModelSamplingContinuousV = {
  display_name: "采样算法（连续V）",
  inputs: {
    model: {
      name: "模型"
    },
    sampling: {
      name: "采样"
    },
    sigma_max: {
      name: "最大西格玛"
    },
    sigma_min: {
      name: "最小西格玛"
    }
  }
};
const ModelSamplingDiscrete = {
  display_name: "采样算法（离散）",
  inputs: {
    model: {
      name: "模型"
    },
    sampling: {
      name: "采样"
    },
    zsnr: {
      name: "zsnr"
    }
  }
};
const ModelSamplingFlux = {
  display_name: "采样算法（Flux）",
  inputs: {
    base_shift: {
      name: "基础移位"
    },
    height: {
      name: "高度"
    },
    max_shift: {
      name: "最大移位"
    },
    model: {
      name: "模型"
    },
    width: {
      name: "宽度"
    }
  }
};
const ModelSamplingLTXV = {
  display_name: "采样算法（LTXV）",
  inputs: {
    base_shift: {
      name: "基础移位"
    },
    latent: {
      name: "Latent"
    },
    max_shift: {
      name: "最大移位"
    },
    model: {
      name: "模型"
    }
  }
};
const ModelSamplingSD3 = {
  display_name: "采样算法（SD3）",
  inputs: {
    model: {
      name: "模型"
    },
    shift: {
      name: "移位"
    }
  }
};
const ModelSamplingStableCascade = {
  display_name: "采样算法（Stable Cascade）",
  inputs: {
    model: {
      name: "模型"
    },
    shift: {
      name: "移位"
    }
  }
};
const ModelSave = {
  display_name: "保存模型",
  inputs: {
    filename_prefix: {
      name: "文件名前缀"
    },
    model: {
      name: "模型"
    }
  }
};
const Morphology = {
  display_name: "图像形态学",
  inputs: {
    image: {
      name: "图像"
    },
    kernel_size: {
      name: "核心大小"
    },
    operation: {
      name: "操作"
    }
  }
};
const OpenAIDalle2 = {
  description: "通过 OpenAI 的 DALL·E 2 接口同步生成图像。",
  display_name: "OpenAI DALL·E 2",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "参考图像",
      tooltip: "用于图像编辑的可选参考图像。"
    },
    mask: {
      name: "掩码",
      tooltip: "用于修复的可选掩码（白色区域将被替换）"
    },
    n: {
      name: "数量",
      tooltip: "生成的图像数量"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于 DALL·E 的文本提示"
    },
    seed: {
      name: "种子",
      tooltip: "后端尚未实现"
    },
    size: {
      name: "尺寸",
      tooltip: "图像尺寸"
    }
  }
};
const OpenAIDalle3 = {
  description: "通过 OpenAI 的 DALL·E 3 接口同步生成图像。",
  display_name: "OpenAI DALL·E 3",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    prompt: {
      name: "提示词",
      tooltip: "DALL·E 的文本提示"
    },
    quality: {
      name: "质量",
      tooltip: "图像质量"
    },
    seed: {
      name: "种子",
      tooltip: "后端尚未实现"
    },
    size: {
      name: "尺寸",
      tooltip: "图像尺寸"
    },
    style: {
      name: "风格",
      tooltip: "“生动”会让模型倾向于生成超现实和戏剧性的图像。“自然”会让模型生成更自然、较少超现实感的图像。"
    }
  }
};
const OpenAIGPTImage1 = {
  description: "通过 OpenAI 的 GPT Image 1 端点同步生成图像。",
  display_name: "OpenAI GPT Image 1",
  inputs: {
    background: {
      name: "背景",
      tooltip: "返回带有或不带背景的图像"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "参考图像",
      tooltip: "用于图像编辑的可选参考图像。"
    },
    mask: {
      name: "mask",
      tooltip: "用于修复的可选 mask（白色区域将被替换）"
    },
    n: {
      name: "数量",
      tooltip: "生成多少张图像"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于 GPT Image 1 的文本提示"
    },
    quality: {
      name: "质量",
      tooltip: "图像质量，影响成本和生成时间。"
    },
    seed: {
      name: "种子",
      tooltip: "后端尚未实现"
    },
    size: {
      name: "尺寸",
      tooltip: "图像尺寸"
    }
  }
};
const OptimalStepsScheduler = {
  display_name: "OptimalStepsScheduler",
  inputs: {
    denoise: {
      name: "去噪"
    },
    model_type: {
      name: "model_type"
    },
    steps: {
      name: "步数"
    }
  }
};
const PairConditioningCombine = {
  display_name: "条件对合并",
  inputs: {
    negative_A: {
      name: "负面条件_A"
    },
    negative_B: {
      name: "负面条件_B"
    },
    positive_A: {
      name: "正面条件_A"
    },
    positive_B: {
      name: "正面条件_B"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const PairConditioningSetDefaultCombine = {
  display_name: "条件对设置默认合并",
  inputs: {
    hooks: {
      name: "约束"
    },
    negative: {
      name: "负面条件"
    },
    negative_DEFAULT: {
      name: "默认负面条件"
    },
    positive: {
      name: "正面条件"
    },
    positive_DEFAULT: {
      name: "默认正面条件"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const PairConditioningSetProperties = {
  display_name: "条件对设置属性",
  inputs: {
    hooks: {
      name: "约束"
    },
    mask: {
      name: "遮罩"
    },
    negative_NEW: {
      name: "新负面条件"
    },
    positive_NEW: {
      name: "新正面条件"
    },
    set_cond_area: {
      name: "设置条件区域"
    },
    strength: {
      name: "强度"
    },
    timesteps: {
      name: "间隔"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const PairConditioningSetPropertiesAndCombine = {
  display_name: "条件对设置属性合并",
  inputs: {
    hooks: {
      name: "约束"
    },
    mask: {
      name: "遮罩"
    },
    negative: {
      name: "负面条件"
    },
    negative_NEW: {
      name: "新负面条件"
    },
    positive: {
      name: "正面条件"
    },
    positive_NEW: {
      name: "新正面条件"
    },
    set_cond_area: {
      name: "设置条件区域"
    },
    strength: {
      name: "强度"
    },
    timesteps: {
      name: "间隔"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    }
  }
};
const PatchModelAddDownscale = {
  display_name: "收缩模型UNET（Kohya Deep Shrink）",
  inputs: {
    block_number: {
      name: "层编号"
    },
    downscale_after_skip: {
      name: "跳过后收缩"
    },
    downscale_factor: {
      name: "收缩系数"
    },
    downscale_method: {
      name: "收缩算法"
    },
    end_percent: {
      name: "结束百分比"
    },
    model: {
      name: "模型"
    },
    start_percent: {
      name: "开始百分比"
    },
    upscale_method: {
      name: "放大方法"
    }
  }
};
const PerpNeg = {
  display_name: "Perp-Neg（已弃用，使用PerpNegGuider）",
  inputs: {
    empty_conditioning: {
      name: "空条件"
    },
    model: {
      name: "模型"
    },
    neg_scale: {
      name: "负面缩放"
    }
  }
};
const PerpNegGuider = {
  display_name: "PerpNeg引导器",
  inputs: {
    cfg: {
      name: "cfg"
    },
    empty_conditioning: {
      name: "空条件"
    },
    model: {
      name: "模型"
    },
    neg_scale: {
      name: "负面缩放"
    },
    negative: {
      name: "负面条件"
    },
    positive: {
      name: "正面条件"
    }
  }
};
const PerturbedAttentionGuidance = {
  display_name: "PAG注意力引导",
  inputs: {
    model: {
      name: "模型"
    },
    scale: {
      name: "规模"
    }
  }
};
const PhotoMakerEncode = {
  display_name: "PhotoMaker编码",
  inputs: {
    clip: {
      name: "clip"
    },
    image: {
      name: "图像"
    },
    photomaker: {
      name: "photomaker"
    },
    text: {
      name: "文本"
    }
  }
};
const PhotoMakerLoader = {
  display_name: "PhotoMaker加载器",
  inputs: {
    photomaker_model_name: {
      name: "photomaker模型名称"
    }
  }
};
const PikaImageToVideoNode2_2 = {
  description: "将图像和提示词发送到 Pika API v2.2 以生成视频。",
  display_name: "Pika 图像转视频",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "时长"
    },
    image: {
      name: "图像",
      tooltip: "要转换为视频的图像"
    },
    negative_prompt: {
      name: "反向提示词"
    },
    prompt_text: {
      name: "提示词"
    },
    resolution: {
      name: "分辨率"
    },
    seed: {
      name: "种子"
    }
  }
};
const PikaScenesV2_2 = {
  description: "将你的图像组合在一起，生成包含所有物体的高质量视频。上传多张图片作为素材，生成融合所有内容的视频。",
  display_name: "Pika 场景（视频图像合成）",
  inputs: {
    aspect_ratio: {
      name: "宽高比",
      tooltip: "宽高比（宽 / 高）"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "时长"
    },
    image_ingredient_1: {
      name: "图片素材 1",
      tooltip: "用于生成视频的图片素材。"
    },
    image_ingredient_2: {
      name: "图片素材 2",
      tooltip: "用于生成视频的图片素材。"
    },
    image_ingredient_3: {
      name: "图片素材 3",
      tooltip: "用于生成视频的图片素材。"
    },
    image_ingredient_4: {
      name: "图片素材 4",
      tooltip: "用于生成视频的图片素材。"
    },
    image_ingredient_5: {
      name: "图片素材 5",
      tooltip: "用于生成视频的图片素材。"
    },
    ingredients_mode: {
      name: "素材模式"
    },
    negative_prompt: {
      name: "反向提示词"
    },
    prompt_text: {
      name: "提示词"
    },
    resolution: {
      name: "分辨率"
    },
    seed: {
      name: "随机种子"
    }
  }
};
const PikaStartEndFrameNode2_2 = {
  description: "通过合成首帧和尾帧生成视频。上传两张图片以定义起点和终点，让 AI 在它们之间创建平滑过渡。",
  display_name: "Pika 首尾帧合成视频",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "duration"
    },
    image_end: {
      name: "image_end",
      tooltip: "要合成的最后一张图片。"
    },
    image_start: {
      name: "image_start",
      tooltip: "要合成的第一张图片。"
    },
    negative_prompt: {
      name: "negative_prompt"
    },
    prompt_text: {
      name: "prompt_text"
    },
    resolution: {
      name: "resolution"
    },
    seed: {
      name: "seed"
    }
  }
};
const PikaTextToVideoNode2_2 = {
  description: "将文本提示发送到 Pika API v2.2 以生成视频。",
  display_name: "Pika 文本转视频",
  inputs: {
    aspect_ratio: {
      name: "宽高比",
      tooltip: "宽高比（宽 / 高）"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    duration: {
      name: "时长"
    },
    negative_prompt: {
      name: "反向提示"
    },
    prompt_text: {
      name: "提示文本"
    },
    resolution: {
      name: "分辨率"
    },
    seed: {
      name: "种子"
    }
  }
};
const Pikadditions = {
  description: "将任意对象或图像添加到你的视频中。上传一个视频并指定你想要添加的内容，实现无缝集成的效果。",
  display_name: "Pikadditions（视频对象插入）",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "图像",
      tooltip: "要添加到视频中的图像。"
    },
    negative_prompt: {
      name: "反向提示词"
    },
    prompt_text: {
      name: "提示词"
    },
    seed: {
      name: "种子"
    },
    video: {
      name: "视频",
      tooltip: "要添加图像的视频。"
    }
  }
};
const Pikaffects = {
  description: "生成带有特定Pikaffect的视频。支持的Pikaffect有：Cake-ify、Crumble、Crush、Decapitate、Deflate、Dissolve、Explode、Eye-pop、Inflate、Levitate、Melt、Peel、Poke、Squish、Ta-da、Tear",
  display_name: "Pikaffects（视频特效）",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "image",
      tooltip: "要应用Pikaffect的参考图像。"
    },
    negative_prompt: {
      name: "negative_prompt"
    },
    pikaffect: {
      name: "pikaffect"
    },
    prompt_text: {
      name: "prompt_text"
    },
    seed: {
      name: "seed"
    }
  }
};
const Pikaswaps = {
  description: "用新图像或对象替换视频中的任意对象或区域。可通过 mask 或坐标定义需要替换的区域。",
  display_name: "Pika Swaps（视频对象替换）",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "图像",
      tooltip: "用于替换视频中被 mask 的对象的图像。"
    },
    mask: {
      name: "mask",
      tooltip: "使用 mask 定义视频中需要替换的区域"
    },
    negative_prompt: {
      name: "反向提示词"
    },
    prompt_text: {
      name: "提示词"
    },
    seed: {
      name: "种子"
    },
    video: {
      name: "视频",
      tooltip: "要在其中替换对象的视频。"
    }
  }
};
const PixverseImageToVideoNode = {
  description: "根据提示词和输出尺寸同步生成视频。",
  display_name: "PixVerse 图像转视频",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    duration_seconds: {
      name: "时长（秒）"
    },
    image: {
      name: "图像"
    },
    motion_mode: {
      name: "运动模式"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "可选的文本描述，用于指定图像中不希望出现的元素。"
    },
    pixverse_template: {
      name: "PixVerse 模板",
      tooltip: "可选模板，由 PixVerse Template 节点创建，用于影响生成风格。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于视频生成的提示词"
    },
    quality: {
      name: "质量"
    },
    seed: {
      name: "种子",
      tooltip: "用于视频生成的种子。"
    }
  }
};
const PixverseTemplateNode = {
  display_name: "PixVerse 模板",
  inputs: {
    template: {
      name: "模板"
    }
  },
  outputs: {
    "0": {
      name: "pixverse_template"
    }
  }
};
const PixverseTextToVideoNode = {
  description: "根据提示词和输出尺寸同步生成视频。",
  display_name: "PixVerse 文本转视频",
  inputs: {
    aspect_ratio: {
      name: "宽高比"
    },
    control_after_generate: {
      name: "生成后控制"
    },
    duration_seconds: {
      name: "时长（秒）"
    },
    motion_mode: {
      name: "运动模式"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "用于描述图像中不希望出现元素的可选文本。"
    },
    pixverse_template: {
      name: "PixVerse 模板",
      tooltip: "可选模板，用于影响生成风格，由 PixVerse Template 节点创建。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于视频生成的提示词"
    },
    quality: {
      name: "质量"
    },
    seed: {
      name: "种子",
      tooltip: "用于视频生成的种子。"
    }
  }
};
const PixverseTransitionVideoNode = {
  description: "根据提示词和输出尺寸同步生成视频。",
  display_name: "PixVerse 转场视频",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    duration_seconds: {
      name: "时长（秒）"
    },
    first_frame: {
      name: "首帧"
    },
    last_frame: {
      name: "末帧"
    },
    motion_mode: {
      name: "运动模式"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "用于描述图像中不希望出现元素的可选文本。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于视频生成的提示词"
    },
    quality: {
      name: "质量"
    },
    seed: {
      name: "种子",
      tooltip: "用于视频生成的种子。"
    }
  }
};
const PolyexponentialScheduler = {
  display_name: "Polyexponential调度器",
  inputs: {
    rho: {
      name: "rho"
    },
    sigma_max: {
      name: "sigma最大值"
    },
    sigma_min: {
      name: "sigma最小值"
    },
    steps: {
      name: "步数"
    }
  }
};
const PorterDuffImageComposite = {
  display_name: "Porter-Duff图像合成",
  inputs: {
    destination: {
      name: "目标图像"
    },
    destination_alpha: {
      name: "目标图像alpha"
    },
    mode: {
      name: "模式"
    },
    source: {
      name: "来源图像"
    },
    source_alpha: {
      name: "来源图像alpha"
    }
  }
};
const Preview3D = {
  display_name: "预览3D",
  inputs: {
    camera_info: {
      name: "相机信息"
    },
    image: {
      name: "图像"
    },
    model_file: {
      name: "模型文件"
    }
  }
};
const Preview3DAnimation = {
  display_name: "预览3D - 动画",
  inputs: {
    camera_info: {
      name: "相机信息"
    },
    model_file: {
      name: "模型文件"
    }
  }
};
const PreviewAny = {
  display_name: "预览任意",
  inputs: {
    preview: {},
    source: {
      name: "源"
    }
  }
};
const PreviewAudio = {
  display_name: "预览音频",
  inputs: {
    audio: {
      name: "音频"
    },
    audioUI: {
      name: "音频UI"
    }
  }
};
const SplitAudioChannels = {
  display_name: "拆分音频通道",
  description: "将立体声音频拆分为左声道和右声道。",
  inputs: {
    audio: {
      name: "音频"
    }
  },
  outputs: {
    left: {
      name: "左"
    },
    right: {
      name: "右"
    }
  }
};
const JoinAudioChannels = {
  display_name: "合并音频通道",
  description: "将左声道和右声道单声道音频合并为立体声。",
  inputs: {
    audio_left: {
      name: "左声道"
    },
    audio_right: {
      name: "右声道"
    }
  },
  outputs: {
    "0": {
      name: "音频"
    }
  }
};
const PreviewImage = {
  description: "将输入图像保存到您的ComfyUI临时目录。",
  display_name: "预览图像",
  inputs: {
    images: {
      name: "图像"
    }
  }
};
const PrimitiveBoolean = {
  display_name: "布尔值",
  inputs: {
    value: {
      name: "值"
    }
  }
};
const PrimitiveFloat = {
  display_name: "浮点数",
  inputs: {
    value: {
      name: "值"
    }
  }
};
const PrimitiveInt = {
  display_name: "整数",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    value: {
      name: "数值"
    }
  }
};
const PrimitiveString = {
  display_name: "字符串",
  inputs: {
    value: {
      name: "值"
    }
  }
};
const PrimitiveStringMultiline = {
  display_name: "字符串（多行）",
  inputs: {
    value: {
      name: "值"
    }
  }
};
const FB_Qwen3TTSConfig = {
  description: "使用 Qwen3-TTS 的配置功能。",
  display_name: "Qwen3-TTS配置（停顿控制）",
};
const FB_Qwen3TTSCustomVoice = {
  description: "使用 Qwen3-TTS 的自定义声音功能。",
  display_name: "Qwen3-TTS自定义声音",
  config: {
    name: "配置"
  },
  outputs: {
    audio: {
      name: "音频"
    }   
  }
};
const FB_Qwen3TTSDialogueInference = {
  description: "使用 Qwen3-TTS 的对话推理功能将文本转换为音频。",
  display_name: "Qwen3-TTS对话推理",
  inputs: {
    role_bank: {
      name: "角色银行"
    }
  },
  outputs: {
    audio: {
      name: "音频"
    }
  }
};
const FB_Qwen3TTSLoadSpeaker = {
  description: "使用 Qwen3-TTS 的加载说话人功能将文本转换为音频。",
  display_name: "Qwen3-TTS加载说话人",
  outputs: {
    voice_clone_prompt: {
      name: "语音克隆提示词"
    },
    audio: {
      name: "音频"
    },
    ref_text: {
      name: "参考文本"
    }
  }
};
const FB_Qwen3TTSRoleBank = {
  description: "使用 Qwen3-TTS 的角色银行功能将文本转换为音频。",
  display_name: "Qwen3-TTS角色银行",
  inputs: {
    prompt_1: {
      name: "提示词 1"
    },
    prompt_2: {
      name: "提示词 2"
    },    
    prompt_3: {
      name: "提示词 3"
    },
    prompt_4: {
      name: "提示词 4"
    },
    prompt_5: {
      name: "提示词 5"
    },
    prompt_6: {
      name: "提示词 6"
    },
    prompt_7: {
      name: "提示词 7"
    },
    prompt_8: {
      name: "提示词 8"
    }
  },
  outputs: {
    role_bank: {
      name: "角色银行"
    }
  }
};
const FB_Qwen3TTSSaveVoice = {
  description: "使用 Qwen3-TTS 的保存音频功能将音频保存到文件。",
  display_name: "Qwen3-TTS保存音频",
  inputs: {
    voice_clone_prompt: {
      name: "语音克隆提示词"
    },
    audio: {
      name: "音频"
    }
  }
};
const FB_Qwen3TTSTrain = {
  description: "使用 Qwen3-TTS 的训练功能将文本转换为音频。",
  display_name: "Qwen3-TTS训练",
};
const FB_Qwen3TTSVoiceClone = {
  description: "使用 Qwen3-TTS 的语音克隆功能将文本转换为音频。",
  display_name: "Qwen3-TTS语音克隆",
  inputs: {
    ref_audio: {
      name: "参考音频"
    },
    voice_clone_prompt: {
      name: "语音克隆提示词"
    },
    config: {
      name: "配置"
    }
  },
  outputs: {
    audio: {
      name: "音频"
    }
  }
};
const FB_Qwen3TTSVoiceClonePrompt = {
  description: "使用 Qwen3-TTS 的语音克隆功能将文本转换为音频。",
  display_name: "Qwen3-TTS语音克隆提示词",
  inputs: {
    ref_audio: {
      name: "参考音频"
    }
  },
  outputs: {
    voice_clone_prompt: {
      name: "语音克隆提示词"
    }
  }
};
const FB_Qwen3TTSVoiceDesign = {
  description: "使用 Qwen3-TTS 的语音设计功能将文本转换为音频。",
  display_name: "Qwen3-TTS语音设计",
  inputs: {
    config: {
      name: "配置"
    }
  },
  outputs: {
    audio: {
      name: "音频"
    }
  }
};
const QuadrupleCLIPLoader = {
  description: "[配方]\n\nhidream: long clip-l, long clip-g, t5xxl, llama_8b_3.1_instruct",
  display_name: "QuadrupleCLIPLoader",
  inputs: {
    clip_name1: {
      name: "clip_name1"
    },
    clip_name2: {
      name: "clip_name2"
    },
    clip_name3: {
      name: "clip_name3"
    },
    clip_name4: {
      name: "clip_name4"
    }
  }
};
const RandomNoise = {
  display_name: "随机噪波",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    noise_seed: {
      name: "噪波随机种"
    }
  }
};
const RebatchImages = {
  display_name: "重设图像批次",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    images: {
      name: "图像"
    }
  }
};
const RebatchLatents = {
  display_name: "重设Latent批次",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    latents: {
      name: "Latent因素"
    }
  }
};
const RecordAudio = {
  display_name: "录制音频",
};
const RecraftColorRGB = {
  description: "通过选择特定的 RGB 值来创建 Recraft 颜色。",
  display_name: "Recraft 颜色 RGB",
  inputs: {
    b: {
      name: "b",
      tooltip: "颜色的蓝色值。"
    },
    g: {
      name: "g",
      tooltip: "颜色的绿色值。"
    },
    r: {
      name: "r",
      tooltip: "颜色的红色值。"
    },
    recraft_color: {
      name: "recraft_color"
    }
  },
  outputs: {
    "0": {
      name: "recraft_color"
    }
  }
};
const RecraftControls = {
  description: "创建 Recraft 控件以自定义 Recraft 生成。",
  display_name: "Recraft 控件",
  inputs: {
    background_color: {
      name: "background_color"
    },
    colors: {
      name: "colors"
    }
  },
  outputs: {
    "0": {
      name: "recraft_controls"
    }
  }
};
const RecraftCreativeUpscaleNode = {
  description: "同步放大图像。\n使用“创意放大”工具增强给定的光栅图像，提升分辨率，重点优化细节和人脸。",
  display_name: "Recraft 创意放大图像",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const RecraftCrispUpscaleNode = {
  description: "同步放大图像。\n使用“清晰放大”工具增强给定的光栅图像，提高图像分辨率，使图像更加锐利和干净。",
  display_name: "Recraft 清晰放大图像",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const RecraftImageInpaintingNode = {
  description: "根据提示词和 mask 修改图像。",
  display_name: "Recraft 图像修复",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "image"
    },
    mask: {
      name: "mask"
    },
    n: {
      name: "数量",
      tooltip: "要生成的图像数量。"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "对图像中不希望出现元素的可选文本描述。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于图像生成的提示词。"
    },
    recraft_style: {
      name: "recraft_style"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    }
  }
};
const RecraftImageToImageNode = {
  description: "根据提示词和强度修改图像。",
  display_name: "Recraft 图像到图像",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "image"
    },
    n: {
      name: "数量",
      tooltip: "要生成的图像数量。"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "可选的文本描述，用于指定图像中不希望出现的元素。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于生成图像的提示词。"
    },
    recraft_controls: {
      name: "recraft_controls",
      tooltip: "通过 Recraft Controls 节点对生成过程进行可选的附加控制。"
    },
    recraft_style: {
      name: "recraft_style"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    },
    strength: {
      name: "强度",
      tooltip: "定义与原始图像的差异，范围为[0, 1]，0表示几乎相同，1表示极大不同。"
    }
  }
};
const RecraftRemoveBackgroundNode = {
  description: "从图像中移除背景，返回处理后的图像和 mask。",
  display_name: "Recraft 移除背景",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const RecraftReplaceBackgroundNode = {
  description: "根据提供的提示词替换图像背景。",
  display_name: "Recraft 更换背景",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    image: {
      name: "图像"
    },
    n: {
      name: "数量",
      tooltip: "要生成的图像数量。"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "对图像中不希望出现元素的可选文本描述。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于图像生成的提示词。"
    },
    recraft_style: {
      name: "recraft 风格"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    }
  }
};
const RecraftStyleV3DigitalIllustration = {
  description: "选择 realistic_image 风格和可选的子风格。",
  display_name: "Recraft 风格 - 数字插画",
  inputs: {
    substyle: {
      name: "子风格"
    }
  },
  outputs: {
    "0": {
      name: "recraft_style"
    }
  }
};
const RecraftStyleV3InfiniteStyleLibrary = {
  description: "根据 Recraft 的无限风格库中已有的 UUID 选择风格。",
  display_name: "Recraft 风格 - 无限风格库",
  inputs: {
    style_id: {
      name: "style_id",
      tooltip: "来自无限风格库的风格 UUID。"
    }
  },
  outputs: {
    "0": {
      name: "recraft_style"
    }
  }
};
const RecraftStyleV3LogoRaster = {
  description: "选择 realistic_image 风格和可选的子风格。",
  display_name: "Recraft 风格 - 标志光栅图",
  inputs: {
    substyle: {
      name: "子风格"
    }
  },
  outputs: {
    "0": {
      name: "recraft_style"
    }
  }
};
const RecraftStyleV3RealisticImage = {
  description: "选择 realistic_image 风格和可选的子风格。",
  display_name: "Recraft 风格 - 真实图像",
  inputs: {
    substyle: {
      name: "子风格"
    }
  },
  outputs: {
    "0": {
      name: "recraft_style"
    }
  }
};
const RecraftTextToImageNode = {
  description: "根据提示词和分辨率同步生成图像。",
  display_name: "Recraft 文本转图像",
  inputs: {
    control_after_generate: {
      name: "control after generate"
    },
    n: {
      name: "n",
      tooltip: "要生成的图像数量。"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "对图像中不希望出现元素的可选文本描述。"
    },
    prompt: {
      name: "prompt",
      tooltip: "用于图像生成的提示词。"
    },
    recraft_controls: {
      name: "recraft_controls",
      tooltip: "通过 Recraft Controls 节点对生成过程的可选附加控制。"
    },
    recraft_style: {
      name: "recraft_style"
    },
    seed: {
      name: "seed",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    },
    size: {
      name: "size",
      tooltip: "生成图像的尺寸。"
    }
  }
};
const RecraftTextToVectorNode = {
  description: "根据提示词和分辨率同步生成 SVG。",
  display_name: "Recraft 文本转矢量",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    n: {
      name: "数量",
      tooltip: "要生成的图像数量。"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "对图像中不希望出现元素的可选文本描述。"
    },
    prompt: {
      name: "提示词",
      tooltip: "用于生成图像的提示词。"
    },
    recraft_controls: {
      name: "Recraft 控制",
      tooltip: "通过 Recraft Controls 节点对生成过程的可选附加控制。"
    },
    seed: {
      name: "种子",
      tooltip: "用于决定节点是否重新运行的种子；无论种子如何，实际结果都是非确定性的。"
    },
    size: {
      name: "尺寸",
      tooltip: "生成图像的尺寸。"
    },
    substyle: {
      name: "子风格"
    }
  }
};
const RecraftVectorizeImageNode = {
  description: "从输入图像同步生成 SVG。",
  display_name: "Recraft 矢量化图像",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const RegexMatch = {
  display_name: "正则表达式匹配",
};
const RegexReplace = {
  display_name: "正则表达式替换",
};
const RegexExtract = {
  display_name: "正则表达式提取",
};
const RenormCFG = {
  display_name: "RenormCFG",
  inputs: {
    cfg_trunc: {
      name: "cfg_trunc"
    },
    model: {
      name: "模型"
    },
    renorm_cfg: {
      name: "renorm_cfg"
    }
  }
};
const RepeatImageBatch = {
  display_name: "复制图像批次",
  inputs: {
    amount: {
      name: "数量"
    },
    image: {
      name: "图像"
    }
  }
};
const RepeatLatentBatch = {
  display_name: "复制Latent批次",
  inputs: {
    amount: {
      name: "数量"
    },
    samples: {
      name: "Latent"
    }
  }
};
const RescaleCFG = {
  display_name: "缩放CFG",
  inputs: {
    model: {
      name: "模型"
    },
    multiplier: {
      name: "乘数"
    }
  }
};
const SDTurboScheduler = {
  display_name: "SDTurbo调度器",
  inputs: {
    denoise: {
      name: "降噪"
    },
    model: {
      name: "模型"
    },
    steps: {
      name: "步数"
    }
  }
};
const SD_4XUpscale_Conditioning = {
  display_name: "SD_4X放大条件",
  inputs: {
    images: {
      name: "图片"
    },
    negative: {
      name: "负面条件"
    },
    noise_augmentation: {
      name: "噪波增强"
    },
    positive: {
      name: "正面条件"
    },
    scale_ratio: {
      name: "缩放比例"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const Seedance2ApiKey = {
  display_name: "🔑 Seedance2 API密钥",
  inputs: {
    api_key: {
      name: "API密钥"
    }
  },
  outputs: {
    "0": {
      name: "API密钥"
    }
  }
};
const Seedance2TextToVideo = {
  display_name: "🌱 Seedance2 文本到视频",
  inputs: {
    prompt: {
      name: "提示"
    },
    aspect_ratio: {
      name: "宽高比"
    },
    quality: {
      name: "质量"
    },
    duration: {
      name: "时长"
    },
    api_key: {
      name: "API密钥"
    }
  },
  outputs: {
    "0": {
      name: "视频URL"
    },
    "1": {
      name: "首帧图像"
    },
    "2": {
      name: "请求ID"
    }
  }
};
const Seedance2ImageToVideo = {
  display_name: "🌱 Seedance2 图像到视频",
  inputs: {
    prompt: {
      name: "提示"
    },
    aspect_ratio: {
      name: "宽高比"
    },
    quality: {
      name: "质量"
    },
    duration: {
      name: "时长"
    },
    api_key: {
      name: "API密钥"
    },
    image_1: {
      name: "图像1"
    },
    image_2: {
      name: "图像2"
    },
    image_3: {
      name: "图像3"
    },
    image_4: {
      name: "图像4"
    },
    image_5: {
      name: "图像5"
    },
    image_6: {
      name: "图像6"
    },
    image_7: {
      name: "图像7"
    },
    image_8: {
      name: "图像8"
    },
    image_9: {
      name: "图像9"
    }
  },
  outputs: {
    "0": {
      name: "视频URL"
    },
    "1": {
      name: "首帧图像"
    },
    "2": {
      name: "请求ID"
    }
  }
};
const Seedance2Extend = {
  display_name: "🌱 Seedance2 扩展视频",
  inputs: {
    request_id: {
      name: "请求ID"
    },
    quality: {
      name: "质量"
    },
    duration: {
      name: "时长"
    },
    api_key: {
      name: "API密钥"
    },
    prompt: {
      name: "提示"
    }
  },
  outputs: {
    "0": {
      name: "视频URL"
    },
    "1": {
      name: "首帧图像"
    },
    "2": {
      name: "新请求ID"
    }
  }
};
const Seedance2Omni = {
  display_name: "🌱 Seedance2全能视频",
  inputs: {
    prompt: {
      name: "提示词"
    },
    aspect_ratio: {
      name: "宽高比"
    },
    duration: {
      name: "时长"
    },
    api_key: {
      name: "API密钥"
    },
    image_1: {
      name: "图像1"
    },
    image_2: {
      name: "图像2"
    },
    image_3: {
      name: "图像3"
    },
    image_4: {
      name: "图像4"
    },
    image_5: {
      name: "图像5"
    },
    image_6: {
      name: "图像6"
    },
    image_7: {
      name: "图像7"
    },
    image_8: {
      name: "图像8"
    },
    image_9: {
      name: "图像9"
    },
    video_url_1: {
      name: "视频URL1"
    },
    video_url_2: {
      name: "视频URL2"
    },
    video_url_3: {
      name: "视频URL3"
    },
    audio_url_1: {
      name: "音频URL1"
    },
    audio_url_2: {
      name: "音频URL2"
    },
    audio_url_3: {
      name: "音频URL3"
    }
  },  
  outputs: {
    video_url: {
      name: "视频URL"
    },
    first_frame: {
      name: "首帧图像"
    },
    new_request_id: {
      name: "新请求ID"
    }
  }
};
const Seedance2VideoSaver = {
  display_name: "Seedance2 保存视频",
  inputs: {
    video_url: {
      name: "视频URL"
    },
    save_subfolder: {
      name: "保存子文件夹"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    frame_load_cap: {
      name: "帧加载上限"
    },
    skip_first_frames: {
      name: "跳过首帧"
    },
    select_every_nth: {
      name: "每N帧选择"
    }
  }
};
const SV3D_Conditioning = {
  display_name: "SV3D条件",
  inputs: {
    clip_vision: {
      name: "clip视觉"
    },
    elevation: {
      name: "俯仰角"
    },
    height: {
      name: "高度"
    },
    init_image: {
      name: "初始图像"
    },
    vae: {
      name: "vae"
    },
    video_frames: {
      name: "帧数"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const SVD_img2vid_Conditioning = {
  display_name: "SVD_img2vid条件",
  inputs: {
    augmentation_level: {
      name: "增强"
    },
    clip_vision: {
      name: "clip视觉"
    },
    fps: {
      name: "帧率"
    },
    height: {
      name: "高度"
    },
    init_image: {
      name: "初始图像"
    },
    motion_bucket_id: {
      name: "动态bucketID"
    },
    vae: {
      name: "vae"
    },
    video_frames: {
      name: "帧数"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const SamplerCustom = {
  display_name: "自定义采样器",
  inputs: {
    add_noise: {
      name: "添加噪波"
    },
    cfg: {
      name: "cfg"
    },
    control_after_generate: {
      name: "生成后的控制"
    },
    latent_image: {
      name: "Latent"
    },
    model: {
      name: "模型"
    },
    negative: {
      name: "负面条件"
    },
    noise_seed: {
      name: "噪波种子"
    },
    positive: {
      name: "正面条件"
    },
    sampler: {
      name: "采样器"
    },
    sigmas: {
      name: "Sigmas"
    }
  },
  outputs: {
    "0": {
      name: "Latent"
    },
    "1": {
      name: "降噪Latent"
    }
  }
};
const SamplerCustomAdvanced = {
  display_name: "自定义采样器（高级）",
  inputs: {
    guider: {
      name: "引导器"
    },
    latent_image: {
      name: "Latent图像"
    },
    noise: {
      name: "噪波"
    },
    sampler: {
      name: "采样器"
    },
    sigmas: {
      name: "西格玛"
    }
  },
  outputs: {
    "0": {
      name: "Latent"
    },
    "1": {
      name: "降噪Latent"
    }
  }
};
const SamplerDPMAdaptative = {
  display_name: "DPMAdaptative采样器",
  inputs: {
    accept_safety: {
      name: "accept_safety"
    },
    atol: {
      name: "atol"
    },
    dcoeff: {
      name: "dcoeff"
    },
    eta: {
      name: "eta"
    },
    h_init: {
      name: "h_init"
    },
    icoeff: {
      name: "icoeff"
    },
    order: {
      name: "order"
    },
    pcoeff: {
      name: "pcoeff"
    },
    rtol: {
      name: "rtol"
    },
    s_noise: {
      name: "s_noise"
    }
  }
};
const SamplerDPMPP_2M_SDE = {
  display_name: "DPMPP_2M_SDE采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    noise_device: {
      name: "噪波设备"
    },
    s_noise: {
      name: "s_noise"
    },
    solver_type: {
      name: "求解器类型"
    }
  }
};
const SamplerDPMPP_2S_Ancestral = {
  display_name: "DPMPP_2S_Ancestral采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    s_noise: {
      name: "s_noise"
    }
  }
};
const SamplerDPMPP_3M_SDE = {
  display_name: "DPMPP_3M_SDE采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    noise_device: {
      name: "噪波设备"
    },
    s_noise: {
      name: "s_noise"
    }
  }
};
const SamplerDPMPP_SDE = {
  display_name: "DPMPP_SDE采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    noise_device: {
      name: "噪波设备"
    },
    r: {
      name: "r"
    },
    s_noise: {
      name: "s_noise"
    }
  }
};
const SamplerEulerAncestral = {
  display_name: "EulerAncestral采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    s_noise: {
      name: "s噪波"
    }
  }
};
const SamplerEulerAncestralCFGPP = {
  display_name: "EulerAncestralCFG++采样器",
  inputs: {
    eta: {
      name: "eta"
    },
    s_noise: {
      name: "s噪波"
    }
  }
};
const SamplerEulerCFGpp = {
  display_name: "EuleCFG++采样器",
  inputs: {
    version: {
      name: "版本"
    }
  }
};
const SamplerLCMUpscale = {
  display_name: "LCM缩放采样器",
  inputs: {
    scale_ratio: {
      name: "缩放比例"
    },
    scale_steps: {
      name: "缩放步数"
    },
    upscale_method: {
      name: "缩放方法"
    }
  }
};
const SamplerLMS = {
  display_name: "LMS采样器",
  inputs: {
    order: {
      name: "顺序"
    }
  }
};
const SaveAnimatedPNG = {
  display_name: "保存动画（APNG）",
  inputs: {
    compress_level: {
      name: "压缩级别"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    fps: {
      name: "帧率"
    },
    images: {
      name: "图片"
    }
  }
};
const SaveAnimatedWEBP = {
  display_name: "保存动画（WEBP）",
  inputs: {
    filename_prefix: {
      name: "文件名前缀"
    },
    fps: {
      name: "帧率"
    },
    images: {
      name: "图片"
    },
    lossless: {
      name: "无损"
    },
    method: {
      name: "方法"
    },
    quality: {
      name: "质量"
    }
  }
};
const SaveAudio = {
  display_name: "保存音频",
  inputs: {
    audio: {
      name: "音频"
    },
    audioUI: {
      name: "音频UI"
    },
    filename_prefix: {
      name: "文件名前缀"
    }
  }
};
const SaveAudioMP3 = {
  display_name: "保存音频(MP3)",
  inputs: {
    audio: {
      name: "音频"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    quality: {
      name: "音质"
    }
  }
};
const SaveAudioOpus = {
  display_name: "保存音频(Opus)",
  inputs: {
    audio: {
      name: "音频"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    quality: {
      name: "音质"
    }
  }
};
const SaveGLB = {
  display_name: "SaveGLB",
  inputs: {
    filename_prefix: {
      name: "文件名前缀"
    },
    image: {
      name: "图像"
    },
    mesh: {
      name: "网格"
    }
  }
};
const SaveImage = {
  description: "将输入图像保存到您的ComfyUI输出目录。",
  display_name: "保存图像",
  inputs: {
    filename_prefix: {
      name: "文件名前缀",
      tooltip: "保存文件的文件名的前缀。可使用格式信息如 %date:yyyy-MM-dd% 或 %空Latent.width%，以包含来自工作流内的信息。"
    },
    images: {
      name: "图片",
      tooltip: "要保存的图像。"
    }
  }
};
const SaveImageWebsocket = {
  display_name: "保存图像（网络接口）",
  inputs: {
    images: {
      name: "图片"
    }
  }
};
const SaveLatent = {
  display_name: "保存Latent",
  inputs: {
    filename_prefix: {
      name: "文件名前缀"
    },
    samples: {
      name: "Latent"
    }
  }
};
const SaveVideo = {
  description: "将输入图像保存到您的 ComfyUI 输出目录。",
  display_name: "保存视频",
  inputs: {
    codec: {
      name: "编码器",
      tooltip: "用于视频的编码器。"
    },
    filename_prefix: {
      name: "文件名前缀",
      tooltip: "要保存文件的前缀。可以包含格式化信息，如 %date:yyyy-MM-dd% 或 %Empty Latent Image.width%，以包含来自节点的值。"
    },
    format: {
      name: "格式",
      tooltip: "保存视频的格式。"
    },
    video: {
      name: "视频",
      tooltip: "要保存的视频。"
    }
  }
};
const SaveWEBM = {
  display_name: "保存WEBM",
  inputs: {
    codec: {
      name: "编解码器"
    },
    crf: {
      name: "crf",
      tooltip: "更高的crf意味着更低的质量和更小的文件大小，更低的crf意味着更高的质量和更大的文件大小。"
    },
    filename_prefix: {
      name: "文件名前缀"
    },
    fps: {
      name: "帧率"
    },
    images: {
      name: "图像"
    }
  }
};
const SelfAttentionGuidance = {
  display_name: "SAG自注意力引导",
  inputs: {
    blur_sigma: {
      name: "模糊Sigma"
    },
    model: {
      name: "模型"
    },
    scale: {
      name: "缩放"
    }
  }
};
const SetClipHooks = {
  display_name: "设置CLIP约束",
  inputs: {
    apply_to_conds: {
      name: "应用于条件"
    },
    clip: {
      name: "clip"
    },
    hooks: {
      name: "约束"
    },
    schedule_clip: {
      name: "安排clip"
    }
  }
};
const SetFirstSigma = {
  display_name: "设置第一个Sigma",
  inputs: {
    sigma: {
      name: "sigma"
    },
    sigmas: {
      name: "sigmas"
    }
  }
};
const SetHookKeyframes = {
  display_name: "设置约束关键帧",
  inputs: {
    hook_kf: {
      name: "约束关键帧"
    },
    hooks: {
      name: "约束"
    }
  }
};
const SetLatentNoiseMask = {
  display_name: "设置Latent噪波遮罩",
  inputs: {
    mask: {
      name: "遮罩"
    },
    samples: {
      name: "Latent"
    }
  }
};
const SetUnionControlNetType = {
  display_name: "设置UnionControlNet类型",
  inputs: {
    control_net: {
      name: "ControlNet"
    },
    type: {
      name: "类型"
    }
  }
};
const SkipLayerGuidanceDiT = {
  description: "通用的跳过层引导节点，可用于每个DiT模型。",
  display_name: "跳过层引导（DiT）",
  inputs: {
    double_layers: {
      name: "双层"
    },
    end_percent: {
      name: "结束百分比"
    },
    model: {
      name: "模型"
    },
    rescaling_scale: {
      name: "重新缩放比例"
    },
    scale: {
      name: "缩放"
    },
    single_layers: {
      name: "单层"
    },
    start_percent: {
      name: "开始百分比"
    }
  }
};
const SkipLayerGuidanceSD3 = {
  description: "通用版本的跳过层引导节点，可用于每个DiT模型。",
  display_name: "跳过层引导（SD3）",
  inputs: {
    end_percent: {
      name: "结束百分比"
    },
    layers: {
      name: "层"
    },
    model: {
      name: "模型"
    },
    scale: {
      name: "缩放"
    },
    start_percent: {
      name: "开始百分比"
    }
  }
};
const SolidMask = {
  display_name: "纯块遮罩",
  inputs: {
    height: {
      name: "高度"
    },
    value: {
      name: "明度"
    },
    width: {
      name: "宽度"
    }
  }
};
const SplitImageWithAlpha = {
  display_name: "分离图像Alpha",
  inputs: {
    image: {
      name: "图片"
    }
  }
};
const SplitSigmas = {
  display_name: "分离Sigma",
  inputs: {
    sigmas: {
      name: "Sigmas"
    },
    step: {
      name: "步数"
    }
  },
  outputs: {
    "0": {
      name: "高方差"
    },
    "1": {
      name: "低方差"
    }
  }
};
const SplitSigmasDenoise = {
  display_name: "分离Sigma降噪",
  inputs: {
    denoise: {
      name: "降噪"
    },
    sigmas: {
      name: "Sigmas"
    }
  },
  outputs: {
    "0": {
      name: "高方差"
    },
    "1": {
      name: "低方差"
    }
  }
};
const StabilityStableImageSD_3_5Node = {
  description: "根据提示词和分辨率同步生成图像。",
  display_name: "Stability AI Stable Diffusion 3.5 图像",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "生成图像的宽高比。"
    },
    cfg_scale: {
      name: "cfg_scale",
      tooltip: "扩散过程对提示词文本的遵循程度（数值越高，生成的图像越接近你的提示词）"
    },
    control_after_generate: {
      name: "control after generate"
    },
    image: {
      name: "image"
    },
    image_denoise: {
      name: "image_denoise",
      tooltip: "输入图像的去噪程度；0.0 表示与输入图像完全相同，1.0 表示完全不使用输入图像。"
    },
    model: {
      name: "model"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "你不希望在输出图像中出现的关键词。此为高级功能。"
    },
    prompt: {
      name: "prompt",
      tooltip: "你希望在输出图像中看到的内容。强有力且描述清晰的提示词，能够明确定义元素、颜色和主题，将带来更好的结果。"
    },
    seed: {
      name: "seed",
      tooltip: "用于生成噪声的随机种子。"
    },
    style_preset: {
      name: "style_preset",
      tooltip: "可选，生成图像的期望风格。"
    }
  }
};
const StabilityStableImageUltraNode = {
  description: "根据提示词和分辨率同步生成图像。",
  display_name: "Stability AI Stable Image Ultra",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "生成图像的宽高比。"
    },
    control_after_generate: {
      name: "control after generate"
    },
    image: {
      name: "image"
    },
    image_denoise: {
      name: "image_denoise",
      tooltip: "输入图像的去噪强度；0.0 表示与输入图像完全相同，1.0 表示完全不参考输入图像。"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "描述你不希望在输出图像中出现内容的文本。这是一个高级功能。"
    },
    prompt: {
      name: "prompt",
      tooltip: "你希望在输出图像中看到的内容。一个强有力且描述清晰的提示词，能够明确界定元素、颜色和主题，将带来更好的结果。要控制某个词的权重，请使用格式 `(word:weight)`，其中 `word` 是你想要控制权重的词，`weight` 是介于 0 到 1 之间的数值。例如：`The sky was a crisp (blue:0.3) and (green:0.8)` 表示天空是蓝色和绿色，但绿色多于蓝色。"
    },
    seed: {
      name: "seed",
      tooltip: "用于生成噪声的随机种子。"
    },
    style_preset: {
      name: "style_preset",
      tooltip: "可选的生成图像风格。"
    }
  }
};
const StabilityUpscaleConservativeNode = {
  description: "以最小改动将图像放大至 4K 分辨率。",
  display_name: "Stability AI 保守放大",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    creativity: {
      name: "创造性",
      tooltip: "控制生成与初始图像不强相关的额外细节的可能性。"
    },
    image: {
      name: "image"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "你不希望在输出图像中出现的关键词。此为高级功能。"
    },
    prompt: {
      name: "提示词",
      tooltip: "你希望在输出图像中看到什么。强有力且描述清晰的提示词，能更好地定义元素、颜色和主题，从而获得更佳效果。"
    },
    seed: {
      name: "种子",
      tooltip: "用于生成噪声的随机种子。"
    }
  }
};
const StabilityUpscaleCreativeNode = {
  description: "以最小改动将图像放大至4K分辨率。",
  display_name: "Stability AI 创意放大",
  inputs: {
    control_after_generate: {
      name: "生成后控制"
    },
    creativity: {
      name: "创造性",
      tooltip: "控制生成不受初始图像强烈约束的额外细节的可能性。"
    },
    image: {
      name: "图像"
    },
    negative_prompt: {
      name: "反向提示词",
      tooltip: "你不希望在输出图像中出现的关键词。此为高级功能。"
    },
    prompt: {
      name: "提示词",
      tooltip: "你希望在输出图像中看到什么。强有力且描述清晰的提示词，明确元素、颜色和主题，将获得更好的结果。"
    },
    seed: {
      name: "随机种子",
      tooltip: "用于生成噪声的随机种子。"
    },
    style_preset: {
      name: "风格预设",
      tooltip: "可选，生成图像的期望风格。"
    }
  }
};
const StabilityUpscaleFastNode = {
  description: "通过 Stability API 快速将图像放大至原始尺寸的 4 倍；适用于低质量或压缩图像的放大。",
  display_name: "Stability AI 极速放大",
  inputs: {
    image: {
      name: "图像"
    }
  }
};
const StableCascade_EmptyLatentImage = {
  display_name: "空Latent图像（Stable Cascade）",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    compression: {
      name: "压缩"
    },
    height: {
      name: "高度"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "阶段C"
    },
    "1": {
      name: "阶段B"
    }
  }
};
const StableCascade_StageB_Conditioning = {
  display_name: "Stable Cascade_B阶段_条件",
  inputs: {
    conditioning: {
      name: "条件"
    },
    stage_c: {
      name: "阶段c"
    }
  }
};
const StableCascade_StageC_VAEEncode = {
  display_name: "Stable Cascade_C阶段_VAE编码",
  inputs: {
    compression: {
      name: "压缩"
    },
    image: {
      name: "图像"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "阶段C"
    },
    "1": {
      name: "阶段B"
    }
  }
};
const StableCascade_SuperResolutionControlnet = {
  display_name: "Stable Cascade_超分辨率ControlNet",
  inputs: {
    image: {
      name: "图像"
    },
    vae: {
      name: "vae"
    }
  },
  outputs: {
    "0": {
      name: "ControlNet"
    },
    "1": {
      name: "阶段C"
    },
    "2": {
      name: "阶段B"
    }
  }
};
const StableZero123_Conditioning = {
  display_name: "StableZero123条件",
  inputs: {
    azimuth: {
      name: "方位角"
    },
    batch_size: {
      name: "批量大小"
    },
    clip_vision: {
      name: "clip视觉"
    },
    elevation: {
      name: "俯仰角"
    },
    height: {
      name: "高度"
    },
    init_image: {
      name: "初始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const StableZero123_Conditioning_Batched = {
  display_name: "StableZero123条件_批处理",
  inputs: {
    azimuth: {
      name: "方位角"
    },
    azimuth_batch_increment: {
      name: "方位角增量"
    },
    batch_size: {
      name: "批量大小"
    },
    clip_vision: {
      name: "clip视觉"
    },
    elevation: {
      name: "俯仰角"
    },
    elevation_batch_increment: {
      name: "俯仰角增量"
    },
    height: {
      name: "高度"
    },
    init_image: {
      name: "初始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面条件"
    },
    "1": {
      name: "负面条件"
    },
    "2": {
      name: "Latent"
    }
  }
};
const StyleModelApply = {
  display_name: "应用风格模型",
  inputs: {
    clip_vision_output: {
      name: "clip视觉输出"
    },
    conditioning: {
      name: "条件"
    },
    strength: {
      name: "强度"
    },
    strength_type: {
      name: "强度类型"
    },
    style_model: {
      name: "风格模型"
    }
  }
};
const StyleModelLoader = {
  display_name: "加载风格模型",
  inputs: {
    style_model_name: {
      name: "风格模型名称"
    }
  }
};
const T5TokenizerOptions = {
  display_name: "T5TokenizerOptions",
  inputs: {
    clip: {
      name: "clip"
    },
    min_length: {
      name: "最小长度"
    },
    min_padding: {
      name: "最小填充"
    }
  }
};
const TextEncodeHunyuanVideo_ImageToVideo = {
  display_name: "文本编码Hunyuan视频_图像到视频",
  inputs: {
    clip: {
      name: "clip"
    },
    clip_vision_output: {
      name: "clip视觉输出"
    },
    image_interleave: {
      name: "图像交错",
      tooltip: "图像与文本提示的影响程度。数字越高，文本提示的影响越大。"
    },
    prompt: {
      name: "提示"
    }
  }
};
const ThresholdMask = {
  display_name: "遮罩阈值",
  inputs: {
    mask: {
      name: "遮罩"
    },
    value: {
      name: "值"
    }
  }
};
const TomePatchModel = {
  display_name: "Tome合并模型Token",
  inputs: {
    model: {
      name: "模型"
    },
    ratio: {
      name: "比率"
    }
  }
};
const TorchCompileModel = {
  display_name: "Torch编译模型",
  inputs: {
    backend: {
      name: "后端"
    },
    model: {
      name: "模型"
    }
  }
};
const TrimAudioDuration = {
  display_name: "截取音频时长",
  inputs: {
    audio: {
      name: "音频"
    },
    start_index: {
      name: "开始索引"
    },
    duration: {
      name: "持续时间"
    }
  }
};
const TrimVideoLatent = {
  display_name: "截取视频隐空间",
  inputs: {
    samples: {
      name: "samples"
    },
    trim_amount: {
      name: "trim_amount"
    }
  }
};
const TripleCLIPLoader = {
  description: "[配方]\n\nSD3：clip-l，clip-g，t5",
  display_name: "三重CLIP加载器",
  inputs: {
    clip_name1: {
      name: "CLIP名称1"
    },
    clip_name2: {
      name: "CLIP名称2"
    },
    clip_name3: {
      name: "CLIP名称3"
    }
  }
};
const UNETLoader = {
  display_name: "UNet加载器",
  inputs: {
    unet_name: {
      name: "UNet名称"
    },
    weight_dtype: {
      name: "数据类型"
    }
  }
};
const UNetCrossAttentionMultiply = {
  display_name: "UNet交叉注意力乘数",
  inputs: {
    k: {
      name: "k"
    },
    model: {
      name: "模型"
    },
    out: {
      name: "输出"
    },
    q: {
      name: "q"
    },
    v: {
      name: "v"
    }
  }
};
const UNetSelfAttentionMultiply = {
  display_name: "UNet自注意力乘数",
  inputs: {
    k: {
      name: "k"
    },
    model: {
      name: "模型"
    },
    out: {
      name: "输出"
    },
    q: {
      name: "q"
    },
    v: {
      name: "v"
    }
  }
};
const UNetTemporalAttentionMultiply = {
  display_name: "UNet时间注意力乘数",
  inputs: {
    cross_structural: {
      name: "交叉结构"
    },
    cross_temporal: {
      name: "交叉时间"
    },
    model: {
      name: "模型"
    },
    self_structural: {
      name: "自我结构"
    },
    self_temporal: {
      name: "自我时间"
    }
  }
};
const UpscaleModelLoader = {
  display_name: "加载放大模型",
  inputs: {
    model_name: {
      name: "模型名称"
    }
  }
};
const VAEDecode = {
  description: "将 Latent 图像解码为像素空间的图像。",
  display_name: "VAE解码",
  inputs: {
    samples: {
      name: "Latent",
      tooltip: "要解码的 Latent 图像。"
    },
    vae: {
      name: "vae",
      tooltip: "用于解码 Latent 图像的 VAE 模型。"
    }
  },
  outputs: {
    "0": {
      tooltip: "解码后的图像。"
    }
  }
};
const VAEDecodeAudio = {
  display_name: "VAE解码（音频）",
  inputs: {
    samples: {
      name: "Latent"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEDecodeHunyuan3D = {
  display_name: "VAEDecodeHunyuan3D",
  inputs: {
    num_chunks: {
      name: "块数"
    },
    octree_resolution: {
      name: "八叉树分辨率"
    },
    samples: {
      name: "样本"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEDecodeTiled = {
  display_name: "VAE解码（分块）",
  inputs: {
    overlap: {
      name: "重叠"
    },
    samples: {
      name: "Latent"
    },
    temporal_overlap: {
      name: "时间重叠",
      tooltip: "仅用于视频VAE：重叠的帧数。"
    },
    temporal_size: {
      name: "时间尺寸",
      tooltip: "仅用于视频VAE：一次解码的帧数。"
    },
    tile_size: {
      name: "分块尺寸"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEEncode = {
  display_name: "VAE编码",
  inputs: {
    pixels: {
      name: "像素"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEEncodeAudio = {
  display_name: "VAE编码（音频）",
  inputs: {
    audio: {
      name: "音频"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEEncodeForInpaint = {
  display_name: "VAE编码（局部重绘）",
  inputs: {
    grow_mask_by: {
      name: "扩展遮罩"
    },
    mask: {
      name: "遮罩"
    },
    pixels: {
      name: "像素"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAEEncodeTiled = {
  display_name: "VAE编码分块）",
  inputs: {
    overlap: {
      name: "重叠"
    },
    pixels: {
      name: "像素"
    },
    temporal_overlap: {
      name: "时间重叠",
      tooltip: "仅用于视频VAE：重叠的帧数。"
    },
    temporal_size: {
      name: "时间尺寸",
      tooltip: "仅用于视频VAE：一次编码的帧数。"
    },
    tile_size: {
      name: "分块尺寸"
    },
    vae: {
      name: "vae"
    }
  }
};
const VAELoader = {
  display_name: "加载VAE",
  inputs: {
    vae_name: {
      name: "vae名称"
    }
  }
};
const VAESave = {
  display_name: "保存VAE",
  inputs: {
    filename_prefix: {
      name: "文件名前缀"
    },
    vae: {
      name: "vae"
    }
  }
};
const VPScheduler = {
  display_name: "VPS调度器",
  inputs: {
    beta_d: {
      name: "beta_d"
    },
    beta_min: {
      name: "beta_min"
    },
    eps_s: {
      name: "eps_s"
    },
    steps: {
      name: "步数"
    }
  }
};
const VeoVideoGenerationNode = {
  description: "使用 Google 的 Veo API 根据文本提示生成视频",
  display_name: "Google Veo2 视频生成",
  inputs: {
    aspect_ratio: {
      name: "aspect_ratio",
      tooltip: "输出视频的宽高比"
    },
    control_after_generate: {
      name: "control after generate"
    },
    duration_seconds: {
      name: "duration_seconds",
      tooltip: "输出视频的时长（秒）"
    },
    enhance_prompt: {
      name: "enhance_prompt",
      tooltip: "是否使用 AI 辅助增强提示词"
    },
    image: {
      name: "image",
      tooltip: "可选的参考图像，用于引导视频生成"
    },
    negative_prompt: {
      name: "negative_prompt",
      tooltip: "用于指导视频中应避免内容的负面文本提示"
    },
    person_generation: {
      name: "person_generation",
      tooltip: "是否允许在视频中生成人物"
    },
    prompt: {
      name: "prompt",
      tooltip: "视频的文本描述"
    },
    seed: {
      name: "seed",
      tooltip: "视频生成的种子（0 表示随机）"
    }
  }
};
const VideoLinearCFGGuidance = {
  display_name: "视频线性CFG引导",
  inputs: {
    min_cfg: {
      name: "最小配置"
    },
    model: {
      name: "模型"
    }
  }
};
const VideoTriangleCFGGuidance = {
  display_name: "视频三角形CFG引导",
  inputs: {
    min_cfg: {
      name: "最小配置"
    },
    model: {
      name: "模型"
    }
  }
};
const VoxelToMesh = {
  display_name: "VoxelToMesh",
  inputs: {
    algorithm: {
      name: "算法"
    },
    threshold: {
      name: "阈值"
    },
    voxel: {
      name: "voxel"
    }
  }
};
const VoxelToMeshBasic = {
  display_name: "VoxelToMeshBasic",
  inputs: {
    threshold: {
      name: "阈值"
    },
    voxel: {
      name: "体素"
    }
  }
};
const WanFirstLastFrameToVideo = {
  display_name: "WanFirstLastFrameToVideo",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    clip_vision_end_image: {
      name: "clip 视觉结束图像"
    },
    clip_vision_start_image: {
      name: "clip 视觉起始图像"
    },
    end_image: {
      name: "结束图像"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    },
    start_image: {
      name: "起始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "latent"
    }
  }
};
const WanFunControlToVideo = {
  display_name: "WanFunControlToVideo",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    clip_vision_output: {
      name: "clip_vision_output"
    },
    control_video: {
      name: "控制视频"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    },
    start_image: {
      name: "起始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "latent"
    }
  }
};
const WanFunInpaintToVideo = {
  display_name: "WanFunInpaintToVideo",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    clip_vision_output: {
      name: "clip_vision_output"
    },
    end_image: {
      name: "结束图像"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    },
    start_image: {
      name: "起始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "latent"
    }
  }
};
const WanImageToVideo = {
  display_name: "Wan图像到视频",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    clip_vision_output: {
      name: "clip视觉输出"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负面"
    },
    positive: {
      name: "正面"
    },
    start_image: {
      name: "开始图像"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正面"
    },
    "1": {
      name: "负面"
    },
    "2": {
      name: "潜在"
    }
  }
};
const WanVaceToVideo = {
  display_name: "WanVaceToVideo",
  inputs: {
    batch_size: {
      name: "批量大小"
    },
    control_masks: {
      name: "控制mask"
    },
    control_video: {
      name: "控制视频"
    },
    height: {
      name: "高度"
    },
    length: {
      name: "长度"
    },
    negative: {
      name: "负向"
    },
    positive: {
      name: "正向"
    },
    reference_image: {
      name: "参考图像"
    },
    strength: {
      name: "强度"
    },
    vae: {
      name: "vae"
    },
    width: {
      name: "宽度"
    }
  },
  outputs: {
    "0": {
      name: "正向"
    },
    "1": {
      name: "负向"
    },
    "2": {
      name: "latent"
    },
    "3": {
      name: "裁剪latent"
    }
  }
};
const WebcamCapture = {
  display_name: "网络摄像头捕获",
  inputs: {
    capture_on_queue: {
      name: "执行时捕获"
    },
    height: {
      name: "高度"
    },
    image: {
      name: "图像"
    },
    "waiting for camera___": {},
    width: {
      name: "宽度"
    }
  }
};
const unCLIPCheckpointLoader = {
  display_name: "unCLIPCheckpoint加载器",
  inputs: {
    ckpt_name: {
      name: "Checkpoint名称"
    }
  }
};
const unCLIPConditioning = {
  display_name: "unCLIP条件",
  inputs: {
    clip_vision_output: {
      name: "CLIP视觉输出"
    },
    conditioning: {
      name: "条件"
    },
    noise_augmentation: {
      name: "噪波增强"
    },
    strength: {
      name: "强度"
    }
  }
};
const StringCompare = {
  display_name: "字符串比较",
};
const StringConcatenate = {
  display_name: "字符串连接",
};
const StringContains = {
  display_name: "字符串包含",
};
const StringLength = {
  display_name: "字符串长度",
};
const StringReplace = {
  display_name: "替换子串",
};
const StringSubstring = {
  display_name: "子串截取",
};
const StringTrim = {
  display_name: "字符串修剪",
};
const CustomCombo = {
  display_name: "自定义组合",
};
const ResolutionSelector = {
  display_name: "分辨率选择器",
};
const FluxKVCache = {
  description: "为 Flux 系列模型的参考图像启用 KV Cache 优化。",
  display_name: "Flux KV缓存",
  inputs: {
    model: {
      name: "模型"
    }
  },
  outputs: {
    "0": {
      tooltip: "启用 KV Cache 后的修补模型。"
    }
  }
};
const LTXVNormalizingSampler = {
  display_name: "LTXV 归一化采样器",
  inputs: {
    noise: {
      name: "噪波"
    },
    guider: {
      name: "引导器"
    },
    sampler: {
      name: "采样器"
    },
    sigmas: {
      name: "Sigmas"
    },
    latent_image: {
      name: "Latent图像"
    },
    video_normalization_factors: {
      name: "视频归一化系数"
    },
    audio_normalization_factors: {
      name: "音频归一化系数"
    }
  },
  outputs: {
    "0": {
      name: "降噪输出"
    }
  }
};
const ColorToRGBInt = {
  display_name: "颜色转RGB整数",
};
const Painter = {
  display_name: "指定颜色生成遮罩",
};
const LoadImageFromURL = {
  display_name: "加载图像（从URL）",
  inputs: {
    url: {
      name: "图片URL"
    }
  },
  outputs: {
    "0": {
      name: "图像"
    },
    "1": {
      name: "URL"
    }
  }
};
const MoltbotPromptPlanner = {
  display_name: "OpenClaw 提示规划",
  inputs: {
    profile: {
      name: "配置档"
    },
    requirements: {
      name: "需求"
    },
    style_directives: {
      name: "风格指令"
    },
    seed: {
      name: "种子"
    }
  },
  outputs: {
    "0": {
      name: "正面提示"
    },
    "1": {
      name: "负面提示"
    },
    "2": {
      name: "参数 JSON"
    }
  }
};
const KontextPresetNode = {
  description: "使用 Kontext 预设分析输入图像，并生成可直接用于创作的中文创意指令。",
  display_name: "✨Kontext 预设助手",
  inputs: {
    image: {
      name: "输入图像",
      tooltip: "要分析的图像。"
    },
    kontext_preset: {
      name: "Kontext 预设",
      tooltip: "选择要应用的 Kontext 预设模板。"
    },
    user_prompt: {
      name: "补充要求",
      tooltip: "补充额外要求，将与预设一起发送给模型。"
    },
    vlm_service: {
      name: "视觉模型服务",
      tooltip: "选择用于图像分析的 VLM 服务与模型。"
    },
    ollama_auto_unload: {
      name: "Ollama 自动卸载",
      tooltip: "生成完成后自动卸载 Ollama 模型。"
    }
  },
  outputs: {
    "0": {
      name: "创意指令",
      tooltip: "根据图像与预设生成的创意转换指令。"
    }
  }
};
const PromptTranslate = {
  description: "将输入文本翻译为目标语言，适合提示词翻译与中英文互转。",
  display_name: "✨提示词翻译",
  inputs: {
    source_text: {
      name: "待翻译文本",
      tooltip: "输入需要翻译的文本内容。"
    },
    target_language: {
      name: "目标语言",
      tooltip: "选择要翻译到的目标语言。"
    },
    translate_service: {
      name: "翻译服务",
      tooltip: "选择翻译服务与模型。"
    },
    ollama_auto_unload: {
      name: "Ollama 自动卸载",
      tooltip: "生成完成后自动卸载 Ollama 模型。"
    }
  },
  outputs: {
    "0": {
      name: "翻译结果",
      tooltip: "翻译后的文本结果。"
    }
  }
};
const PromptExpand = {
  description: "基于规则模板或临时规则增强原始提示词，输出更完整、更易用于生成的提示文本。",
  display_name: "✨提示词增强",
  inputs: {
    rule: {
      name: "规则模板",
      tooltip: "选择用于增强提示词的规则模板。"
    },
    custom_rule: {
      name: "启用临时规则",
      tooltip: "启用后将使用下方临时规则内容，而不是预设模板。"
    },
    custom_rule_content: {
      name: "临时规则内容",
      tooltip: "输入临时规则内容，仅在启用临时规则时生效。"
    },
    user_prompt: {
      name: "用户提示词",
      tooltip: "输入要增强或优化的原始提示词。"
    },
    llm_service: {
      name: "大语言模型服务",
      tooltip: "选择用于增强提示词的 LLM 服务与模型。"
    },
    ollama_auto_unload: {
      name: "Ollama 自动卸载",
      tooltip: "生成完成后自动卸载 Ollama 模型。"
    },
    source_text: {
      name: "原文输入",
      tooltip: "可选的输入文本，会与上方内容一起参与增强。"
    }
  },
  outputs: {
    "0": {
      name: "增强结果",
      tooltip: "增强后的提示词文本。"
    }
  }
};
const VideoCaptionNode = {
  description: "分析视频或图像序列内容，生成可用于视频理解、反推或创作的提示词输出。",
  display_name: "✨视频反推",
  inputs: {
    rule: {
      name: "规则模板",
      tooltip: "选择用于视频分析的提示词规则模板。"
    },
    custom_rule: {
      name: "启用临时规则",
      tooltip: "启用后将使用下方临时规则内容，而不是预设模板。"
    },
    custom_rule_content: {
      name: "临时规则内容",
      tooltip: "输入临时规则内容，仅在启用临时规则时生效。"
    },
    user_prompt: {
      name: "补充要求",
      tooltip: "输入额外要求，将与规则一起发送给模型。"
    },
    vlm_service: {
      name: "多模态模型服务",
      tooltip: "选择用于视频理解的 VLM 服务与模型。"
    },
    sampling_mode: {
      name: "抽帧模式",
      tooltip: "选择自动抽帧或手动指定帧索引。"
    },
    frame_count: {
      name: "抽帧数量",
      tooltip: "自动模式下采样的帧数量。"
    },
    manual_indices: {
      name: "手动帧索引",
      tooltip: "手动模式下输入帧索引或区间。"
    },
    ollama_auto_unload: {
      name: "Ollama 自动卸载",
      tooltip: "生成完成后自动卸载 Ollama 模型。"
    },
    video: {
      name: "视频输入",
      tooltip: "输入要分析的视频。"
    },
    image_sequence: {
      name: "图像序列",
      tooltip: "可选的图像序列输入，用于替代视频分析。"
    }
  },
  outputs: {
    "0": {
      name: "提示词输出",
      tooltip: "根据视频内容生成的提示词结果。"
    },
    "1": {
      name: "预览帧",
      tooltip: "分析过程中采样得到的预览帧。"
    }
  }
};
const MoltbotBatchVariants = {
  display_name: "OpenClaw 批量变体",
  inputs: {
    positive: {
      name: "正面提示"
    },
    negative: {
      name: "负面提示"
    },
    count: {
      name: "数量"
    },
    seed_base: {
      name: "基础种子"
    },
    seed_policy: {
      name: "种子策略"
    },
    variant_policy: {
      name: "变体策略"
    },
    params_json: {
      name: "参数 JSON"
    },
    sweep_start: {
      name: "扫动起始"
    },
    sweep_end: {
      name: "扫动结束"
    }
  },
  outputs: {
    "0": {
      name: "正面提示列表"
    },
    "1": {
      name: "负面提示列表"
    },
    "2": {
      name: "参数 JSON 列表"
    }
  }
};
const MoltbotImageToPrompt = {
  display_name: "OpenClaw 图像到提示",
  inputs: {
    image: {
      name: "图像"
    },
    goal: {
      name: "目标"
    },
    detail_level: {
      name: "细节等级"
    },
    max_image_side: {
      name: "最大边长"
    }
  },
  outputs: {
    "0": {
      name: "图像说明"
    },
    "1": {
      name: "标签"
    },
    "2": {
      name: "提示建议"
    }
  }
};
const MoltbotPromptRefiner = {
  display_name: "OpenClaw 提示优化",
  inputs: {
    image: {
      name: "图像"
    },
    orig_positive: {
      name: "原始正面提示"
    },
    orig_negative: {
      name: "原始负面提示"
    },
    issue: {
      name: "问题类型"
    },
    params_json: {
      name: "参数 JSON"
    },
    goal: {
      name: "目标"
    },
    max_image_side: {
      name: "最大边长"
    }
  },
  outputs: {
    "0": {
      name: "优化后正面提示"
    },
    "1": {
      name: "优化后负面提示"
    },
    "2": {
      name: "参数修补 JSON"
    },
    "3": {
      name: "优化说明"
    }
  }
};
const nodeDefs = {
  AddNoise,
  ImageAddNoise,
  BatchMasksNode,
  AlignYourStepsScheduler,
  AudioAdjustVolume,
  AudioConcat,
  AudioMerge,
  BasicGuider,
  BasicScheduler,
  BetaSamplingScheduler,
  CFGGuider,
  CFGZeroStar,
  CLIPAttentionMultiply,
  CLIPLoader,
  CLIPMergeAdd,
  CLIPMergeSimple,
  CLIPMergeSubtract,
  CLIPSave,
  CLIPSetLastLayer,
  CLIPTextEncode,
  CLIPTextEncodeControlnet,
  CLIPTextEncodeFlux,
  CLIPTextEncodeHiDream,
  CLIPTextEncodeHunyuanDiT,
  CLIPTextEncodeLumina2,
  CLIPTextEncodePixArtAlpha,
  CLIPTextEncodeSD3,
  CLIPTextEncodeSDXL,
  CLIPTextEncodeSDXLRefiner,
  CLIPVisionEncode,
  CLIPVisionLoader,
  Canny,
  CheckpointLoader,
  CheckpointLoaderSimple,
  CheckpointSave,
  CombineHooks2,
  CombineHooks4,
  CombineHooks8,
  ConditioningAverage,
  ConditioningCombine,
  ConditioningConcat,
  ConditioningSetArea,
  ConditioningSetAreaPercentage,
  ConditioningSetAreaPercentageVideo,
  ConditioningSetAreaStrength,
  ConditioningSetDefaultCombine,
  ConditioningSetMask,
  ConditioningSetProperties,
  ConditioningSetPropertiesAndCombine,
  ConditioningSetTimestepRange,
  ConditioningStableAudio,
  ConditioningTimestepsRange,
  ConditioningZeroOut,
  ControlNetApply,
  ControlNetApplyAdvanced,
  ControlNetApplySD3,
  ControlNetInpaintingAliMamaApply,
  ControlNetLoader,
  CosmosImageToVideoLatent,
  CreateHookKeyframe,
  CreateHookKeyframesFromFloats,
  CreateHookKeyframesInterpolated,
  CreateHookLora,
  CreateHookLoraModelOnly,
  CreateHookModelAsLora,
  CreateHookModelAsLoraModelOnly,
  CreateVideo,
  CropMask,
  DiffControlNetLoader,
  DifferentialDiffusion,
  DiffusersLoader,
  DisableNoise,
  DualCFGGuider,
  DualCLIPLoader,
  EmptyCosmosLatentVideo,
  EmptyHunyuanLatentVideo,
  EmptyImage,
  EmptyLTXVLatentVideo,
  EmptyLatentAudio,
  EmptyLatentHunyuan3Dv2,
  EmptyLatentImage,
  EmptyMochiLatentVideo,
  EmptySD3LatentImage,
  ExponentialScheduler,
  ExtendIntermediateSigmas,
  FeatherMask,
  FlipSigmas,
  FluxDisableGuidance,
  FluxGuidance,
  FluxProExpandNode,
  FluxProFillNode,
  FluxProUltraImageNode,
  FreSca,
  FreeU,
  FreeU_V2,
  GITSScheduler,
  GLIGENLoader,
  GLIGENTextBoxApply,
  GetVideoComponents,
  GetImageSize,
  GrowMask,
  Hunyuan3Dv2Conditioning,
  Hunyuan3Dv2ConditioningMultiView,
  HunyuanImageToVideo,
  HyperTile,
  HypernetworkLoader,
  IdeogramV1,
  IdeogramV2,
  IdeogramV3,
  ImageBatch,
  ImageBlend,
  ImageBlur,
  ImageColorToMask,
  ImageCompositeMasked,
  ImageCrop,
  ImageFlip,
  ImageRotate,
  ImageStitch,
  ResizeAndPadImage,
  CustomCombo,
  ResolutionSelector,
  FluxKVCache,
  LTXVNormalizingSampler,
  ColorToRGBInt,
  Painter,
  LoadImageFromURL,
  ImageFromBatch,
  ImageInvert,
  ImageOnlyCheckpointLoader,
  ImageOnlyCheckpointSave,
  ImagePadForOutpaint,
  ImageQuantize,
  ImageRGBToYUV,
  ImageScale,
  ImageScaleBy,
  ImageScaleToTotalPixels,
  ImageSharpen,
  ImageToMask,
  ImageUpscaleWithModel,
  ImageYUVToRGB,
  InpaintModelConditioning,
  InstructPixToPixConditioning,
  InvertMask,
  JoinImageWithAlpha,
  KSampler,
  KSamplerAdvanced,
  KSamplerSelect,
  KarrasScheduler,
  KlingCameraControlI2VNode,
  KlingCameraControlT2VNode,
  KlingCameraControls,
  KlingDualCharacterVideoEffectNode,
  KlingImage2VideoNode,
  KlingImageGenerationNode,
  KlingLipSyncAudioToVideoNode,
  KlingLipSyncTextToVideoNode,
  KlingSingleImageVideoEffectNode,
  KlingStartEndFrameNode,
  KlingTextToVideoNode,
  KlingVideoExtendNode,
  KlingVirtualTryOnNode,
  LTXVAddGuide,
  LTXVConditioning,
  LTXVCropGuides,
  LTXVImgToVideo,
  LTXVPreprocess,
  LTXVScheduler,
  LaplaceScheduler,
  LatentAdd,
  LatentApplyOperation,
  LatentApplyOperationCFG,
  LatentBatch,
  LatentBatchSeedBehavior,
  LatentBlend,
  LatentComposite,
  LatentCompositeMasked,
  LatentCrop,
  LatentFlip,
  LatentFromBatch,
  LatentInterpolate,
  LatentMultiply,
  LatentOperationSharpen,
  LatentOperationTonemapReinhard,
  LatentRotate,
  LatentSubtract,
  LatentUpscale,
  LatentUpscaleBy,
  Load3D,
  Load3DAnimation,
  LoadAudio,
  LoadImage,
  LoadImageMask,
  LoadImageOutput,
  LoadLatent,
  LoadVideo,
  LoraLoader,
  LoraLoaderModelOnly,
  LoraSave,
  LotusConditioning,
  LumaConceptsNode,
  LumaImageModifyNode,
  LumaImageNode,
  LumaImageToVideoNode,
  LumaReferenceNode,
  LumaVideoNode,
  Mahiro,
  MaskComposite,
  MaskPreview,
  MaskToImage,
  MinimaxImageToVideoNode,
  MinimaxTextToVideoNode,
  ModelComputeDtype,
  ModelMergeAdd,
  ModelMergeAuraflow,
  ModelMergeBlocks,
  ModelMergeCosmos14B,
  ModelMergeCosmos7B,
  ModelMergeFlux1,
  ModelMergeLTXV,
  ModelMergeMochiPreview,
  ModelMergeSD1,
  ModelMergeSD2,
  ModelMergeSD35_Large,
  ModelMergeSD3_2B,
  ModelMergeSDXL,
  ModelMergeSimple,
  ModelMergeSubtract,
  ModelMergeWAN2_1,
  ModelSamplingAuraFlow,
  ModelSamplingContinuousEDM,
  ModelSamplingContinuousV,
  ModelSamplingDiscrete,
  ModelSamplingFlux,
  ModelSamplingLTXV,
  ModelSamplingSD3,
  ModelSamplingStableCascade,
  ModelSave,
  Morphology,
  OpenAIDalle2,
  OpenAIDalle3,
  OpenAIGPTImage1,
  OptimalStepsScheduler,
  PairConditioningCombine,
  PairConditioningSetDefaultCombine,
  PairConditioningSetProperties,
  PairConditioningSetPropertiesAndCombine,
  PatchModelAddDownscale,
  PerpNeg,
  PerpNegGuider,
  PerturbedAttentionGuidance,
  PhotoMakerEncode,
  PhotoMakerLoader,
  PikaImageToVideoNode2_2,
  PikaScenesV2_2,
  PikaStartEndFrameNode2_2,
  PikaTextToVideoNode2_2,
  Pikadditions,
  Pikaffects,
  Pikaswaps,
  PixverseImageToVideoNode,
  PixverseTemplateNode,
  PixverseTextToVideoNode,
  PixverseTransitionVideoNode,
  PolyexponentialScheduler,
  PorterDuffImageComposite,
  Preview3D,
  Preview3DAnimation,
  PreviewAny,
  PreviewAudio,
  PreviewImage,
  PrimitiveBoolean,
  PrimitiveFloat,
  PrimitiveInt,
  PrimitiveString,
  PrimitiveStringMultiline,
  FB_Qwen3TTSConfig,
  FB_Qwen3TTSCustomVoice,
  FB_Qwen3TTSDialogueInference,
  FB_Qwen3TTSLoadSpeaker,
  FB_Qwen3TTSRoleBank,
  FB_Qwen3TTSSaveVoice,
  FB_Qwen3TTSTrain,
  FB_Qwen3TTSVoiceClone,
  FB_Qwen3TTSVoiceClonePrompt,
  FB_Qwen3TTSVoiceDesign,
  QuadrupleCLIPLoader,
  RandomNoise,
  RebatchImages,
  RebatchLatents,
  RecordAudio,
  RecraftColorRGB,
  RecraftControls,
  RecraftCreativeUpscaleNode,
  RecraftCrispUpscaleNode,
  RecraftImageInpaintingNode,
  RecraftImageToImageNode,
  RecraftRemoveBackgroundNode,
  RecraftReplaceBackgroundNode,
  RecraftStyleV3DigitalIllustration,
  RecraftStyleV3InfiniteStyleLibrary,
  RecraftStyleV3LogoRaster,
  RecraftStyleV3RealisticImage,
  RecraftTextToImageNode,
  RecraftTextToVectorNode,
  RecraftVectorizeImageNode,
  RenormCFG,
  RepeatImageBatch,
  RepeatLatentBatch,
  RescaleCFG,
  SDTurboScheduler,
  SD_4XUpscale_Conditioning,
  Seedance2ApiKey,
  Seedance2Extend,
  Seedance2ImageToVideo,
  Seedance2TextToVideo,
  Seedance2Omni,
  Seedance2VideoSaver,
  MoltbotPromptPlanner,
  MoltbotBatchVariants,
  MoltbotImageToPrompt,
  MoltbotPromptRefiner,
  KontextPresetNode,
  PromptTranslate,
  PromptExpand,
  VideoCaptionNode,
  SV3D_Conditioning,
  SVD_img2vid_Conditioning,
  SamplerCustom,
  SamplerCustomAdvanced,
  SamplerDPMAdaptative,
  SamplerDPMPP_2M_SDE,
  SamplerDPMPP_2S_Ancestral,
  SamplerDPMPP_3M_SDE,
  SamplerDPMPP_SDE,
  SamplerEulerAncestral,
  SamplerEulerAncestralCFGPP,
  SamplerEulerCFGpp,
  SamplerLCMUpscale,
  SamplerLMS,
  SaveAnimatedPNG,
  SaveAnimatedWEBP,
  SaveAudio,
  SplitAudioChannels,
  JoinAudioChannels,
  SaveAudioMP3,
  SaveAudioOpus,
  SaveGLB,
  SaveImage,
  SaveImageWebsocket,
  SaveLatent,
  SaveVideo,
  SaveWEBM,
  SelfAttentionGuidance,
  SetClipHooks,
  SetFirstSigma,
  SetHookKeyframes,
  SetLatentNoiseMask,
  SetUnionControlNetType,
  SkipLayerGuidanceDiT,
  SkipLayerGuidanceSD3,
  SolidMask,
  SplitImageWithAlpha,
  SplitSigmas,
  SplitSigmasDenoise,
  StabilityStableImageSD_3_5Node,
  StabilityStableImageUltraNode,
  StabilityUpscaleConservativeNode,
  StabilityUpscaleCreativeNode,
  StabilityUpscaleFastNode,
  StableCascade_EmptyLatentImage,
  StableCascade_StageB_Conditioning,
  StableCascade_StageC_VAEEncode,
  StableCascade_SuperResolutionControlnet,
  StableZero123_Conditioning,
  StableZero123_Conditioning_Batched,
  StringConcatenate,
  StringSubstring,
  StringLength,
  CaseConverter,
  StringTrim,
  StringReplace,
  StringContains,
  StringCompare,
  RegexMatch,
  RegexExtract,
  RegexReplace,
  StyleModelApply,
  StyleModelLoader,
  T5TokenizerOptions,
  TextEncodeHunyuanVideo_ImageToVideo,
  ThresholdMask,
  TomePatchModel,
  TorchCompileModel,
  TrimAudioDuration,
  TrimVideoLatent,
  TripleCLIPLoader,
  UNETLoader,
  UNetCrossAttentionMultiply,
  UNetSelfAttentionMultiply,
  UNetTemporalAttentionMultiply,
  UpscaleModelLoader,
  VAEDecode,
  VAEDecodeAudio,
  VAEDecodeHunyuan3D,
  VAEDecodeTiled,
  VAEEncode,
  VAEEncodeAudio,
  VAEEncodeForInpaint,
  VAEEncodeTiled,
  VAELoader,
  VAESave,
  VPScheduler,
  VeoVideoGenerationNode,
  VideoLinearCFGGuidance,
  VideoTriangleCFGGuidance,
  VoxelToMesh,
  VoxelToMeshBasic,
  WanFirstLastFrameToVideo,
  WanFunControlToVideo,
  WanFunInpaintToVideo,
  WanImageToVideo,
  WanVaceToVideo,
  WebcamCapture,
  unCLIPCheckpointLoader,
  unCLIPConditioning
};
export {
  AddNoise,
  AlignYourStepsScheduler,
  AudioAdjustVolume,
  AudioConcat,
  AudioMerge,
  BasicGuider,
  BasicScheduler,
  BetaSamplingScheduler,
  BatchMasksNode,
  CFGGuider,
  CFGZeroStar,
  CLIPAttentionMultiply,
  CLIPLoader,
  CLIPMergeAdd,
  CLIPMergeSimple,
  CLIPMergeSubtract,
  CLIPSave,
  CLIPSetLastLayer,
  CLIPTextEncode,
  CLIPTextEncodeControlnet,
  CLIPTextEncodeFlux,
  CLIPTextEncodeHiDream,
  CLIPTextEncodeHunyuanDiT,
  CLIPTextEncodeLumina2,
  CLIPTextEncodePixArtAlpha,
  CLIPTextEncodeSD3,
  CLIPTextEncodeSDXL,
  CLIPTextEncodeSDXLRefiner,
  CLIPVisionEncode,
  CLIPVisionLoader,
  Canny,
  CheckpointLoader,
  CheckpointLoaderSimple,
  CheckpointSave,
  CombineHooks2,
  CombineHooks4,
  CombineHooks8,
  ConditioningAverage,
  ConditioningCombine,
  ConditioningConcat,
  ConditioningSetArea,
  ConditioningSetAreaPercentage,
  ConditioningSetAreaPercentageVideo,
  ConditioningSetAreaStrength,
  ConditioningSetDefaultCombine,
  ConditioningSetMask,
  ConditioningSetProperties,
  ConditioningSetPropertiesAndCombine,
  ConditioningSetTimestepRange,
  ConditioningStableAudio,
  ConditioningTimestepsRange,
  ConditioningZeroOut,
  ControlNetApply,
  ControlNetApplyAdvanced,
  ControlNetApplySD3,
  ControlNetInpaintingAliMamaApply,
  ControlNetLoader,
  CosmosImageToVideoLatent,
  CreateHookKeyframe,
  CreateHookKeyframesFromFloats,
  CreateHookKeyframesInterpolated,
  CreateHookLora,
  CreateHookLoraModelOnly,
  CreateHookModelAsLora,
  CreateHookModelAsLoraModelOnly,
  CreateVideo,
  CropMask,
  DiffControlNetLoader,
  DifferentialDiffusion,
  DiffusersLoader,
  DisableNoise,
  DualCFGGuider,
  DualCLIPLoader,
  EmptyCosmosLatentVideo,
  EmptyHunyuanLatentVideo,
  EmptyImage,
  EmptyLTXVLatentVideo,
  EmptyLatentAudio,
  EmptyLatentHunyuan3Dv2,
  EmptyLatentImage,
  EmptyMochiLatentVideo,
  EmptySD3LatentImage,
  ExponentialScheduler,
  ExtendIntermediateSigmas,
  FeatherMask,
  FlipSigmas,
  FluxDisableGuidance,
  FluxGuidance,
  FluxProExpandNode,
  FluxProFillNode,
  FluxProUltraImageNode,
  FreSca,
  FreeU,
  FreeU_V2,
  GITSScheduler,
  GLIGENLoader,
  GLIGENTextBoxApply,
  GetVideoComponents,
  GetImageSize,
  GrowMask,
  Hunyuan3Dv2Conditioning,
  Hunyuan3Dv2ConditioningMultiView,
  HunyuanImageToVideo,
  HyperTile,
  HypernetworkLoader,
  IdeogramV1,
  IdeogramV2,
  IdeogramV3,
  ImageAddNoise,
  ImageBatch,
  ImageBlend,
  ImageBlur,
  ImageColorToMask,
  ImageCompositeMasked,
  ImageCrop,
  ImageFlip,
  ImageRotate,
  ImageStitch,
  ResizeAndPadImage,
  CustomCombo,
  ResolutionSelector,
  FluxKVCache,
  LTXVNormalizingSampler,
  ColorToRGBInt,
  Painter,
  LoadImageFromURL,
  ImageFromBatch,
  ImageInvert,
  ImageOnlyCheckpointLoader,
  ImageOnlyCheckpointSave,
  ImagePadForOutpaint,
  ImageQuantize,
  ImageRGBToYUV,
  ImageScale,
  ImageScaleBy,
  ImageScaleToTotalPixels,
  ImageSharpen,
  ImageToMask,
  ImageUpscaleWithModel,
  ImageYUVToRGB,
  InpaintModelConditioning,
  InstructPixToPixConditioning,
  InvertMask,
  JoinImageWithAlpha,
  KSampler,
  KSamplerAdvanced,
  KSamplerSelect,
  KarrasScheduler,
  KlingCameraControlI2VNode,
  KlingCameraControlT2VNode,
  KlingCameraControls,
  KlingDualCharacterVideoEffectNode,
  KlingImage2VideoNode,
  KlingImageGenerationNode,
  KlingLipSyncAudioToVideoNode,
  KlingLipSyncTextToVideoNode,
  KlingSingleImageVideoEffectNode,
  KlingStartEndFrameNode,
  KlingTextToVideoNode,
  KlingVideoExtendNode,
  KlingVirtualTryOnNode,
  LTXVAddGuide,
  LTXVConditioning,
  LTXVCropGuides,
  LTXVImgToVideo,
  LTXVPreprocess,
  LTXVScheduler,
  LaplaceScheduler,
  LatentAdd,
  LatentApplyOperation,
  LatentApplyOperationCFG,
  LatentBatch,
  LatentBatchSeedBehavior,
  LatentBlend,
  LatentComposite,
  LatentCompositeMasked,
  LatentCrop,
  LatentFlip,
  LatentFromBatch,
  LatentInterpolate,
  LatentMultiply,
  LatentOperationSharpen,
  LatentOperationTonemapReinhard,
  LatentRotate,
  LatentSubtract,
  LatentUpscale,
  LatentUpscaleBy,
  Load3D,
  Load3DAnimation,
  LoadAudio,
  LoadImage,
  LoadImageMask,
  LoadImageOutput,
  LoadLatent,
  LoadVideo,
  LoraLoader,
  LoraLoaderModelOnly,
  LoraSave,
  LotusConditioning,
  LumaConceptsNode,
  LumaImageModifyNode,
  LumaImageNode,
  LumaImageToVideoNode,
  LumaReferenceNode,
  LumaVideoNode,
  Mahiro,
  MaskComposite,
  MaskPreview,
  MaskToImage,
  MinimaxImageToVideoNode,
  MinimaxTextToVideoNode,
  ModelComputeDtype,
  ModelMergeAdd,
  ModelMergeAuraflow,
  ModelMergeBlocks,
  ModelMergeCosmos14B,
  ModelMergeCosmos7B,
  ModelMergeFlux1,
  ModelMergeLTXV,
  ModelMergeMochiPreview,
  ModelMergeSD1,
  ModelMergeSD2,
  ModelMergeSD35_Large,
  ModelMergeSD3_2B,
  ModelMergeSDXL,
  ModelMergeSimple,
  ModelMergeSubtract,
  ModelMergeWAN2_1,
  ModelSamplingAuraFlow,
  ModelSamplingContinuousEDM,
  ModelSamplingContinuousV,
  ModelSamplingDiscrete,
  ModelSamplingFlux,
  ModelSamplingLTXV,
  ModelSamplingSD3,
  ModelSamplingStableCascade,
  ModelSave,
  Morphology,
  OpenAIDalle2,
  OpenAIDalle3,
  OpenAIGPTImage1,
  OptimalStepsScheduler,
  PairConditioningCombine,
  PairConditioningSetDefaultCombine,
  PairConditioningSetProperties,
  PairConditioningSetPropertiesAndCombine,
  PatchModelAddDownscale,
  PerpNeg,
  PerpNegGuider,
  PerturbedAttentionGuidance,
  PhotoMakerEncode,
  PhotoMakerLoader,
  PikaImageToVideoNode2_2,
  PikaScenesV2_2,
  PikaStartEndFrameNode2_2,
  PikaTextToVideoNode2_2,
  Pikadditions,
  Pikaffects,
  Pikaswaps,
  PixverseImageToVideoNode,
  PixverseTemplateNode,
  PixverseTextToVideoNode,
  PixverseTransitionVideoNode,
  PolyexponentialScheduler,
  PorterDuffImageComposite,
  Preview3D,
  Preview3DAnimation,
  PreviewAny,
  PreviewAudio,
  PreviewImage,
  PrimitiveBoolean,
  PrimitiveFloat,
  PrimitiveInt,
  PrimitiveString,
  PrimitiveStringMultiline,
  FB_Qwen3TTSConfig,
  FB_Qwen3TTSCustomVoice,
  FB_Qwen3TTSDialogueInference,
  FB_Qwen3TTSLoadSpeaker,
  FB_Qwen3TTSRoleBank,
  FB_Qwen3TTSSaveVoice,
  FB_Qwen3TTSTrain,
  FB_Qwen3TTSVoiceClone,
  FB_Qwen3TTSVoiceClonePrompt,
  FB_Qwen3TTSVoiceDesign,
  QuadrupleCLIPLoader,
  RandomNoise,
  RebatchImages,
  RebatchLatents,
  RecordAudio,
  RecraftColorRGB,
  RecraftControls,
  RecraftCreativeUpscaleNode,
  RecraftCrispUpscaleNode,
  RecraftImageInpaintingNode,
  RecraftImageToImageNode,
  RecraftRemoveBackgroundNode,
  RecraftReplaceBackgroundNode,
  RecraftStyleV3DigitalIllustration,
  RecraftStyleV3InfiniteStyleLibrary,
  RecraftStyleV3LogoRaster,
  RecraftStyleV3RealisticImage,
  RecraftTextToImageNode,
  RecraftTextToVectorNode,
  RecraftVectorizeImageNode,
  RenormCFG,
  RepeatImageBatch,
  RepeatLatentBatch,
  RescaleCFG,
  SDTurboScheduler,
  SD_4XUpscale_Conditioning,
  Seedance2ApiKey,
  Seedance2Extend,
  Seedance2ImageToVideo,
  Seedance2TextToVideo,
  Seedance2Omni,
  Seedance2VideoSaver,
  MoltbotPromptPlanner,
  MoltbotBatchVariants,
  MoltbotImageToPrompt,
  MoltbotPromptRefiner,
  KontextPresetNode,
  PromptTranslate,
  PromptExpand,
  VideoCaptionNode,
  SV3D_Conditioning,
  SVD_img2vid_Conditioning,
  SamplerCustom,
  SamplerCustomAdvanced,
  SamplerDPMAdaptative,
  SamplerDPMPP_2M_SDE,
  SamplerDPMPP_2S_Ancestral,
  SamplerDPMPP_3M_SDE,
  SamplerDPMPP_SDE,
  SamplerEulerAncestral,
  SamplerEulerAncestralCFGPP,
  SamplerEulerCFGpp,
  SamplerLCMUpscale,
  SamplerLMS,
  SaveAnimatedPNG,
  SaveAnimatedWEBP,
  SaveAudio,
  SplitAudioChannels,
  JoinAudioChannels,
  SaveAudioMP3,
  SaveAudioOpus,
  SaveGLB,
  SaveImage,
  SaveImageWebsocket,
  SaveLatent,
  SaveVideo,
  SaveWEBM,
  SelfAttentionGuidance,
  SetClipHooks,
  SetFirstSigma,
  SetHookKeyframes,
  SetLatentNoiseMask,
  SetUnionControlNetType,
  SkipLayerGuidanceDiT,
  SkipLayerGuidanceSD3,
  SolidMask,
  SplitImageWithAlpha,
  SplitSigmas,
  SplitSigmasDenoise,
  StabilityStableImageSD_3_5Node,
  StabilityStableImageUltraNode,
  StabilityUpscaleConservativeNode,
  StabilityUpscaleCreativeNode,
  StabilityUpscaleFastNode,
  StableCascade_EmptyLatentImage,
  StableCascade_StageB_Conditioning,
  StableCascade_StageC_VAEEncode,
  StableCascade_SuperResolutionControlnet,
  StableZero123_Conditioning,
  StableZero123_Conditioning_Batched,
  StringConcatenate,
  StringSubstring,
  StringLength,
  CaseConverter,
  StringTrim,
  StringReplace,
  StringContains,
  StringCompare,
  RegexMatch,
  RegexExtract,
  RegexReplace,
  StyleModelApply,
  StyleModelLoader,
  T5TokenizerOptions,
  TextEncodeHunyuanVideo_ImageToVideo,
  ThresholdMask,
  TomePatchModel,
  TorchCompileModel,
  TrimAudioDuration,
  TrimVideoLatent,
  TripleCLIPLoader,
  UNETLoader,
  UNetCrossAttentionMultiply,
  UNetSelfAttentionMultiply,
  UNetTemporalAttentionMultiply,
  UpscaleModelLoader,
  VAEDecode,
  VAEDecodeAudio,
  VAEDecodeHunyuan3D,
  VAEDecodeTiled,
  VAEEncode,
  VAEEncodeAudio,
  VAEEncodeForInpaint,
  VAEEncodeTiled,
  VAELoader,
  VAESave,
  VPScheduler,
  VeoVideoGenerationNode,
  VideoLinearCFGGuidance,
  VideoTriangleCFGGuidance,
  VoxelToMesh,
  VoxelToMeshBasic,
  WanFirstLastFrameToVideo,
  WanFunControlToVideo,
  WanFunInpaintToVideo,
  WanImageToVideo,
  WanVaceToVideo,
  WebcamCapture,
  nodeDefs as default,
  unCLIPCheckpointLoader,
  unCLIPConditioning
};
