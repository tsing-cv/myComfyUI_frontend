const Comfy_Canvas_BackgroundImage = {
  name: "صورة خلفية اللوحة",
  tooltip: 'رابط صورة لخلفية اللوحة. يمكنك النقر بزر الفأرة الأيمن على صورة في لوحة النتائج واختيار "تعيين كخلفية" لاستخدامها، أو رفع صورتك الخاصة باستخدام زر الرفع.'
};
const Comfy_Canvas_NavigationMode = {
  name: "وضع تنقل اللوحة",
  options: {
    "Drag Navigation": "سحب للتنقل",
    "Standard (New)": "قياسي (جديد)"
  }
};
const Comfy_Canvas_SelectionToolbox = {
  name: "عرض صندوق أدوات التحديد"
};
const Comfy_ConfirmClear = {
  name: "طلب التأكيد عند مسح سير العمل"
};
const Comfy_DOMClippingEnabled = {
  name: "تمكين قص عناصر DOM (قد يقلل التمكين من الأداء)"
};
const Comfy_DevMode = {
  name: "تمكين خيارات وضع المطور (حفظ API، إلخ)"
};
const Comfy_DisableFloatRounding = {
  name: "تعطيل تقريب عناصر التحكم العائمة الافتراضية",
  tooltip: "(يتطلب إعادة تحميل الصفحة) لا يمكن تعطيل التقريب عندما يتم تعيينه من العقدة في الخلفية."
};
const Comfy_DisableSliders = {
  name: "تعطيل منزلقات أدوات العقد"
};
const Comfy_EditAttention_Delta = {
  name: "دقة تحكم +Ctrl فوق/تحت"
};
const Comfy_EnableTooltips = {
  name: "تمكين التلميحات"
};
const Comfy_EnableWorkflowViewRestore = {
  name: "حفظ واستعادة موقع اللوحة ومستوى التكبير في سير العمل"
};
const Comfy_FloatRoundingPrecision = {
  name: "عدد أرقام التقريب العشرية لأدوات التحكم العائمة [0 = تلقائي]",
  tooltip: "(يتطلب إعادة تحميل الصفحة)"
};
const Comfy_Graph_CanvasInfo = {
  name: "عرض معلومات اللوحة في الزاوية السفلى اليسرى (الإطارات في الثانية، إلخ)"
};
const Comfy_Graph_CanvasMenu = {
  name: "عرض قائمة لوحة الرسم البياني"
};
const Comfy_Graph_CtrlShiftZoom = {
  name: "تمكين اختصار التكبير السريع (Ctrl + Shift + سحب)"
};
const Comfy_Graph_LinkMarkers = {
  name: "علامات منتصف الروابط",
  options: {
    Arrow: "سهم",
    Circle: "دائرة",
    None: "لا شيء"
  }
};
const Comfy_Graph_ZoomSpeed = {
  name: "سرعة تكبير اللوحة"
};
const Comfy_GroupSelectedNodes_Padding = {
  name: "تباعد حول العقد المحددة في المجموعة"
};
const Comfy_Group_DoubleClickTitleToEdit = {
  name: "انقر مزدوج على عنوان المجموعة للتحرير"
};
const Comfy_LinkRelease_Action = {
  name: "الإجراء عند تحرير الرابط (بدون مفتاح تعديل)",
  options: {
    "context menu": "قائمة السياق",
    "no action": "لا إجراء",
    "search box": "صندوق البحث"
  }
};
const Comfy_LinkRelease_ActionShift = {
  name: "الإجراء عند تحرير الرابط (Shift)",
  options: {
    "context menu": "قائمة السياق",
    "no action": "لا إجراء",
    "search box": "صندوق البحث"
  }
};
const Comfy_LinkRenderMode = {
  name: "وضع عرض الروابط",
  options: {
    Hidden: "مخفي",
    Linear: "خطي",
    Spline: "منحنى",
    Straight: "مستقيم"
  }
};
const Comfy_Load3D_3DViewerEnable = {
  name: "تمكين عارض ثلاثي الأبعاد (تجريبي)",
  tooltip: "تمكين عارض ثلاثي الأبعاد (تجريبي) للعقد المحددة. تتيح هذه الميزة عرض النماذج ثلاثية الأبعاد والتفاعل معها مباشرة داخل العارض ثلاثي الأبعاد بحجمه الكامل."
};
const Comfy_Load3D_BackgroundColor = {
  name: "لون الخلفية الابتدائي",
  tooltip: "يحدد لون الخلفية الافتراضي للمشهد ثلاثي الأبعاد. يمكن تعديل هذا اللون لكل عنصر ثلاثي الأبعاد بعد الإنشاء."
};
const Comfy_Load3D_CameraType = {
  name: "نوع الكاميرا الابتدائي",
  options: {
    orthographic: "متعامد",
    perspective: "منظور"
  },
  tooltip: "يحدد ما إذا كانت الكاميرا منظور أو متعامدة بشكل افتراضي عند إنشاء عنصر ثلاثي الأبعاد جديد. يمكن تعديل هذا الإعداد لكل عنصر بعد الإنشاء."
};
const Comfy_Load3D_LightAdjustmentIncrement = {
  name: "زيادة تعديل الضوء",
  tooltip: "يتحكم في حجم الخطوة عند تعديل شدة الإضاءة في المشاهد ثلاثية الأبعاد. قيمة أصغر تسمح بتحكم أدق، وأكبر قيمة تعطي تغييرات أكثر وضوحًا."
};
const Comfy_Load3D_LightIntensity = {
  name: "شدة الإضاءة الابتدائية",
  tooltip: "يحدد مستوى سطوع الإضاءة الافتراضي في المشهد ثلاثي الأبعاد. يمكن تعديله لكل عنصر بعد الإنشاء."
};
const Comfy_Load3D_LightIntensityMaximum = {
  name: "أقصى شدة إضاءة",
  tooltip: "يحدد الحد الأقصى المسموح به لشدة الإضاءة في المشاهد ثلاثية الأبعاد."
};
const Comfy_Load3D_LightIntensityMinimum = {
  name: "أدنى شدة إضاءة",
  tooltip: "يحدد الحد الأدنى المسموح به لشدة الإضاءة في المشاهد ثلاثية الأبعاد."
};
const Comfy_Load3D_ShowGrid = {
  name: "رؤية الشبكة الابتدائية",
  tooltip: "يتحكم في ظهور الشبكة بشكل افتراضي عند إنشاء عنصر ثلاثي الأبعاد جديد."
};
const Comfy_Locale = {
  name: "اللغة"
};
const Comfy_MaskEditor_BrushAdjustmentSpeed = {
  name: "مضاعف سرعة تعديل الفرشاة",
  tooltip: "يتحكم في سرعة تغير حجم الفرشاة وصلابتها أثناء التعديل. القيم الأعلى تعني تغييرات أسرع."
};
const Comfy_MaskEditor_UseDominantAxis = {
  name: "تقييد تعديل الفرشاة إلى المحور السائد",
  tooltip: "عند التمكين، تؤثر التعديلات على الحجم أو الصلابة فقط بناءً على الاتجاه الذي تتحرك فيه أكثر."
};
const Comfy_MaskEditor_UseNewEditor = {
  name: "استخدام محرر القناع الجديد",
  tooltip: "التحويل إلى واجهة محرر القناع الجديدة"
};
const Comfy_ModelLibrary_AutoLoadAll = {
  name: "تحميل جميع مجلدات النماذج تلقائيًا",
  tooltip: "إذا كانت صحيحة، سيتم تحميل جميع المجلدات عند فتح مكتبة النماذج (قد يسبب تأخيرًا أثناء التحميل). إذا كانت خاطئة، يتم تحميل مجلدات النماذج على مستوى الجذر فقط عند النقر عليها."
};
const Comfy_ModelLibrary_NameFormat = {
  name: "اسم العرض في شجرة مكتبة النماذج",
  options: {
    filename: "اسم الملف",
    title: "العنوان"
  },
  tooltip: 'اختر "اسم الملف" لعرض اسم الملف المبسط بدون المجلد أو الامتداد ".safetensors" في قائمة النماذج. اختر "العنوان" لعرض عنوان بيانات النموذج القابل للتكوين.'
};
const Comfy_NodeBadge_NodeIdBadgeMode = {
  name: "وضع شارة معرف العقدة",
  options: {
    None: "لا شيء",
    "Show all": "عرض الكل"
  }
};
const Comfy_NodeBadge_NodeLifeCycleBadgeMode = {
  name: "وضع شارة دورة حياة العقدة",
  options: {
    None: "لا شيء",
    "Show all": "عرض الكل"
  }
};
const Comfy_NodeBadge_NodeSourceBadgeMode = {
  name: "وضع شارة مصدر العقدة",
  options: {
    "Hide built-in": "إخفاء المدمج",
    None: "لا شيء",
    "Show all": "عرض الكل"
  }
};
const Comfy_NodeBadge_ShowApiPricing = {
  name: "عرض شارة تسعير عقدة API"
};
const Comfy_NodeSearchBoxImpl = {
  name: "تنفيذ مربع بحث العقدة",
  options: {
    "default": "افتراضي",
    "litegraph (legacy)": "لايت جراف (قديم)"
  }
};
const Comfy_NodeSearchBoxImpl_NodePreview = {
  name: "معاينة العقدة",
  tooltip: "ينطبق فقط على التنفيذ الافتراضي"
};
const Comfy_NodeSearchBoxImpl_ShowCategory = {
  name: "عرض فئة العقدة في نتائج البحث",
  tooltip: "ينطبق فقط على التنفيذ الافتراضي"
};
const Comfy_NodeSearchBoxImpl_ShowIdName = {
  name: "عرض اسم معرف العقدة في نتائج البحث",
  tooltip: "ينطبق فقط على التنفيذ الافتراضي"
};
const Comfy_NodeSearchBoxImpl_ShowNodeFrequency = {
  name: "عرض تكرار العقدة في نتائج البحث",
  tooltip: "ينطبق فقط على التنفيذ الافتراضي"
};
const Comfy_NodeSuggestions_number = {
  name: "عدد اقتراحات العقد",
  tooltip: "خاص بمربع بحث / قائمة السياق في لايت جراف فقط"
};
const Comfy_Node_AllowImageSizeDraw = {
  name: "عرض العرض × الارتفاع تحت معاينة الصورة"
};
const Comfy_Node_AutoSnapLinkToSlot = {
  name: "التثبيت التلقائي للرابط إلى فتحة العقدة",
  tooltip: "عند سحب رابط فوق عقدة، يتم تثبيت الرابط تلقائيًا على فتحة إدخال صالحة في العقدة"
};
const Comfy_Node_BypassAllLinksOnDelete = {
  name: "الحفاظ على جميع الروابط عند حذف العقد",
  tooltip: "عند حذف عقدة، حاول إعادة توصيل جميع روابط الإدخال والإخراج (تجاوز العقدة المحذوفة)"
};
const Comfy_Node_DoubleClickTitleToEdit = {
  name: "النقر المزدوج على عنوان العقدة للتحرير"
};
const Comfy_Node_MiddleClickRerouteNode = {
  name: "النقر الأوسط ينشئ عقدة إعادة توجيه جديدة"
};
const Comfy_Node_Opacity = {
  name: "شفافية العقدة"
};
const Comfy_Node_ShowDeprecated = {
  name: "عرض العقدة المهجورة في البحث",
  tooltip: "العقد المهجورة مخفية افتراضيًا في واجهة المستخدم، لكنها تظل فعالة في سير العمل الحالي الذي يستخدمها."
};
const Comfy_Node_ShowExperimental = {
  name: "عرض العقدة التجريبية في البحث",
  tooltip: "يتم تمييز العقد التجريبية في واجهة المستخدم وقد تخضع لتغييرات كبيرة أو إزالتها في الإصدارات المستقبلية. استخدمها بحذر في سير العمل الإنتاجي."
};
const Comfy_Node_SnapHighlightsNode = {
  name: "تثبيت يبرز العقدة",
  tooltip: "عند سحب رابط فوق عقدة تحتوي على فتحة إدخال صالحة، يتم تمييز العقدة"
};
const Comfy_Notification_ShowVersionUpdates = {
  name: "عرض تحديثات الإصدار",
  tooltip: "عرض التحديثات للنماذج الجديدة والميزات الرئيسية."
};
const Comfy_Pointer_ClickBufferTime = {
  name: "تأخير انحراف نقرة المؤشر",
  tooltip: "بعد الضغط على زر المؤشر، هذا هو الوقت الأقصى (بالملي ثانية) الذي يمكن تجاهل حركة المؤشر خلاله.\n\nيساعد على منع دفع الكائنات عن طريق الخطأ إذا تم تحريك المؤشر أثناء النقر."
};
const Comfy_Pointer_ClickDrift = {
  name: "انحراف نقرة المؤشر (أقصى مسافة)",
  tooltip: "إذا تحرك المؤشر أكثر من هذه المسافة أثناء الضغط على زر، يعتبر سحبًا بدلاً من نقرة.\n\nيساعد على منع دفع الكائنات عن طريق الخطأ إذا تم تحريك المؤشر أثناء النقر."
};
const Comfy_Pointer_DoubleClickTime = {
  name: "فترة النقر المزدوج (قصوى)",
  tooltip: "الوقت الأقصى بالملي ثانية بين النقرتين في النقر المزدوج. زيادة هذه القيمة قد تساعد إذا لم يتم تسجيل النقرات المزدوجة أحيانًا."
};
const Comfy_PreviewFormat = {
  name: "تنسيق صورة المعاينة",
  tooltip: "عند عرض معاينة في ويدجت الصورة، يتم تحويلها إلى صورة خفيفة الوزن، مثل webp، jpeg، webp;50، إلخ."
};
const Comfy_PromptFilename = {
  name: "طلب اسم الملف عند حفظ سير العمل"
};
const Comfy_QueueButton_BatchCountLimit = {
  name: "حد عدد الدُفعات",
  tooltip: "العدد الأقصى للمهام التي تضاف إلى القائمة بنقرة زر واحدة"
};
const Comfy_Queue_MaxHistoryItems = {
  name: "حجم تاريخ قائمة الانتظار",
  tooltip: "العدد الأقصى للمهام المعروضة في تاريخ قائمة الانتظار."
};
const Comfy_Sidebar_Location = {
  name: "موقع الشريط الجانبي",
  options: {
    left: "يسار",
    right: "يمين"
  }
};
const Comfy_Sidebar_Size = {
  name: "حجم الشريط الجانبي",
  options: {
    normal: "عادي",
    small: "صغير"
  }
};
const Comfy_Sidebar_UnifiedWidth = {
  name: "عرض موحد للشريط الجانبي"
};
const Comfy_SnapToGrid_GridSize = {
  name: "حجم الالتصاق بالشبكة",
  tooltip: "عند سحب وتغيير حجم العقد مع الضغط على shift، يتم محاذاتها إلى الشبكة، هذا يتحكم في حجم تلك الشبكة."
};
const Comfy_TextareaWidget_FontSize = {
  name: "حجم خط ويدجت منطقة النص"
};
const Comfy_TextareaWidget_Spellcheck = {
  name: "التحقق من الإملاء في ويدجت منطقة النص"
};
const Comfy_TreeExplorer_ItemPadding = {
  name: "حشو عناصر مستعرض الشجرة"
};
const Comfy_UseNewMenu = {
  name: "استخدام القائمة الجديدة",
  options: {
    Disabled: "معطل",
    Top: "أعلى"
  },
  tooltip: "موقع شريط القائمة. على الأجهزة المحمولة، تُعرض القائمة دائمًا في الأعلى."
};
const Comfy_Validation_Workflows = {
  name: "التحقق من صحة سير العمل"
};
const Comfy_WidgetControlMode = {
  name: "وضع التحكم في الودجت",
  options: {
    after: "بعد",
    before: "قبل"
  },
  tooltip: "يتحكم في متى يتم تحديث قيم الودجت (توليد عشوائي/زيادة/نقصان)، إما قبل إدراج الطلب في الطابور أو بعده."
};
const Comfy_Window_UnloadConfirmation = {
  name: "عرض تأكيد عند إغلاق النافذة"
};
const Comfy_Workflow_AutoSave = {
  name: "الحفظ التلقائي",
  options: {
    "after delay": "بعد تأخير",
    off: "إيقاف"
  }
};
const Comfy_Workflow_AutoSaveDelay = {
  name: "تأخير الحفظ التلقائي (بالملي ثانية)",
  tooltip: 'ينطبق فقط إذا تم تعيين الحفظ التلقائي إلى "بعد تأخير".'
};
const Comfy_Workflow_ConfirmDelete = {
  name: "عرض تأكيد عند حذف سير العمل"
};
const Comfy_Workflow_Persist = {
  name: "الاحتفاظ بحالة سير العمل واستعادتها عند (إعادة) تحميل الصفحة"
};
const Comfy_Workflow_ShowMissingModelsWarning = {
  name: "عرض تحذير النماذج المفقودة"
};
const Comfy_Workflow_ShowMissingNodesWarning = {
  name: "عرض تحذير العقد المفقودة"
};
const Comfy_Workflow_SortNodeIdOnSave = {
  name: "ترتيب معرفات العقد عند حفظ سير العمل"
};
const Comfy_Workflow_WorkflowTabsPosition = {
  name: "موضع تبويبات سير العمل المفتوحة",
  options: {
    Sidebar: "الشريط الجانبي",
    Topbar: "شريط الأعلى"
  }
};
const LiteGraph_Canvas_MaximumFps = {
  name: "الحد الأقصى للإطارات في الثانية",
  tooltip: "الحد الأقصى لعدد الإطارات في الثانية التي يسمح للرسم أن يعرضها. يحد من استخدام GPU على حساب السلاسة. إذا كانت 0، يتم استخدام معدل تحديث الشاشة. الافتراضي: 0"
};
const LiteGraph_Canvas_MinFontSizeForLOD = {
  name: "مستوى تفاصيل عقدة التكبير - حد حجم الخط",
  tooltip: "يتحكم في وقت تبديل العقد إلى عرض LOD منخفض الجودة. يستخدم حجم الخط بالبكسل لتحديد وقت التبديل. اضبط على 0 للتعطيل. القيم 1-24 تحدد الحد الأدنى لحجم الخط لـ LOD - القيم الأعلى (24 بكسل) = التبديل إلى عرض مبسط عند التصغير مبكراً، القيم الأقل (1 بكسل) = الحفاظ على جودة العقدة الكاملة لفترة أطول."
};
const LiteGraph_ContextMenu_Scaling = {
  name: "تغيير مقياس قوائم ودجت كومبو العقدة عند التكبير"
};
const LiteGraph_Node_DefaultPadding = {
  name: "تصغير العقد الجديدة دائمًا",
  tooltip: "تغيير حجم العقد إلى أصغر حجم ممكن عند الإنشاء. عند التعطيل، يتم توسيع العقدة المضافة حديثًا قليلاً لإظهار قيم الودجت."
};
const LiteGraph_Node_TooltipDelay = {
  name: "تأخير التلميح"
};
const LiteGraph_Reroute_SplineOffset = {
  name: "إزاحة منحنى إعادة التوجيه",
  tooltip: "إزاحة نقطة تحكم بيزير من نقطة مركز إعادة التوجيه"
};
const pysssss_SnapToGrid = {
  name: "الالتصاق بالشبكة دائمًا"
};
const settings = {
  "Comfy-Desktop_AutoUpdate": {
    name: "التحقق تلقائيًا من التحديثات"
  },
  "Comfy-Desktop_SendStatistics": {
    name: "إرسال إحصائيات الاستخدام المجهولة"
  },
  "Comfy-Desktop_UV_PypiInstallMirror": {
    name: "مرآة تثبيت Pypi",
    tooltip: "مرآة التثبيت الافتراضية لـ pip"
  },
  "Comfy-Desktop_UV_PythonInstallMirror": {
    name: "مرآة تثبيت بايثون",
    tooltip: "يتم تحميل تثبيتات بايثون المدارة من مشروع Astral python-build-standalone. يمكن تعيين هذا المتغير إلى عنوان مرآة لاستخدام مصدر مختلف لتثبيتات بايثون. سيحل العنوان المقدم محل https://github.com/astral-sh/python-build-standalone/releases/download في، مثلاً، https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz. يمكن قراءة التوزيعات من دليل محلي باستخدام نظام ملفات file://."
  },
  "Comfy-Desktop_UV_TorchInstallMirror": {
    name: "مرآة تثبيت Torch",
    tooltip: "مرآة تثبيت pip لـ pytorch"
  },
  "Comfy-Desktop_WindowStyle": {
    name: "نمط النافذة",
    options: {
      custom: "مخصص",
      "default": "افتراضي"
    },
    tooltip: "مخصص: استبدال شريط عنوان النظام بالقائمة العلوية لـ ComfyUI"
  },
  Comfy_Canvas_BackgroundImage,
  Comfy_Canvas_NavigationMode,
  Comfy_Canvas_SelectionToolbox,
  Comfy_ConfirmClear,
  Comfy_DOMClippingEnabled,
  Comfy_DevMode,
  Comfy_DisableFloatRounding,
  Comfy_DisableSliders,
  Comfy_EditAttention_Delta,
  Comfy_EnableTooltips,
  Comfy_EnableWorkflowViewRestore,
  Comfy_FloatRoundingPrecision,
  Comfy_Graph_CanvasInfo,
  Comfy_Graph_CanvasMenu,
  Comfy_Graph_CtrlShiftZoom,
  Comfy_Graph_LinkMarkers,
  Comfy_Graph_ZoomSpeed,
  Comfy_GroupSelectedNodes_Padding,
  Comfy_Group_DoubleClickTitleToEdit,
  Comfy_LinkRelease_Action,
  Comfy_LinkRelease_ActionShift,
  Comfy_LinkRenderMode,
  Comfy_Load3D_3DViewerEnable,
  Comfy_Load3D_BackgroundColor,
  Comfy_Load3D_CameraType,
  Comfy_Load3D_LightAdjustmentIncrement,
  Comfy_Load3D_LightIntensity,
  Comfy_Load3D_LightIntensityMaximum,
  Comfy_Load3D_LightIntensityMinimum,
  Comfy_Load3D_ShowGrid,
  Comfy_Locale,
  Comfy_MaskEditor_BrushAdjustmentSpeed,
  Comfy_MaskEditor_UseDominantAxis,
  Comfy_MaskEditor_UseNewEditor,
  Comfy_ModelLibrary_AutoLoadAll,
  Comfy_ModelLibrary_NameFormat,
  Comfy_NodeBadge_NodeIdBadgeMode,
  Comfy_NodeBadge_NodeLifeCycleBadgeMode,
  Comfy_NodeBadge_NodeSourceBadgeMode,
  Comfy_NodeBadge_ShowApiPricing,
  Comfy_NodeSearchBoxImpl,
  Comfy_NodeSearchBoxImpl_NodePreview,
  Comfy_NodeSearchBoxImpl_ShowCategory,
  Comfy_NodeSearchBoxImpl_ShowIdName,
  Comfy_NodeSearchBoxImpl_ShowNodeFrequency,
  Comfy_NodeSuggestions_number,
  Comfy_Node_AllowImageSizeDraw,
  Comfy_Node_AutoSnapLinkToSlot,
  Comfy_Node_BypassAllLinksOnDelete,
  Comfy_Node_DoubleClickTitleToEdit,
  Comfy_Node_MiddleClickRerouteNode,
  Comfy_Node_Opacity,
  Comfy_Node_ShowDeprecated,
  Comfy_Node_ShowExperimental,
  Comfy_Node_SnapHighlightsNode,
  Comfy_Notification_ShowVersionUpdates,
  Comfy_Pointer_ClickBufferTime,
  Comfy_Pointer_ClickDrift,
  Comfy_Pointer_DoubleClickTime,
  Comfy_PreviewFormat,
  Comfy_PromptFilename,
  Comfy_QueueButton_BatchCountLimit,
  Comfy_Queue_MaxHistoryItems,
  Comfy_Sidebar_Location,
  Comfy_Sidebar_Size,
  Comfy_Sidebar_UnifiedWidth,
  Comfy_SnapToGrid_GridSize,
  Comfy_TextareaWidget_FontSize,
  Comfy_TextareaWidget_Spellcheck,
  Comfy_TreeExplorer_ItemPadding,
  Comfy_UseNewMenu,
  Comfy_Validation_Workflows,
  Comfy_WidgetControlMode,
  Comfy_Window_UnloadConfirmation,
  Comfy_Workflow_AutoSave,
  Comfy_Workflow_AutoSaveDelay,
  Comfy_Workflow_ConfirmDelete,
  Comfy_Workflow_Persist,
  Comfy_Workflow_ShowMissingModelsWarning,
  Comfy_Workflow_ShowMissingNodesWarning,
  Comfy_Workflow_SortNodeIdOnSave,
  Comfy_Workflow_WorkflowTabsPosition,
  LiteGraph_Canvas_MaximumFps,
  LiteGraph_Canvas_MinFontSizeForLOD,
  LiteGraph_ContextMenu_Scaling,
  LiteGraph_Node_DefaultPadding,
  LiteGraph_Node_TooltipDelay,
  LiteGraph_Reroute_SplineOffset,
  pysssss_SnapToGrid
};
export {
  Comfy_Canvas_BackgroundImage,
  Comfy_Canvas_NavigationMode,
  Comfy_Canvas_SelectionToolbox,
  Comfy_ConfirmClear,
  Comfy_DOMClippingEnabled,
  Comfy_DevMode,
  Comfy_DisableFloatRounding,
  Comfy_DisableSliders,
  Comfy_EditAttention_Delta,
  Comfy_EnableTooltips,
  Comfy_EnableWorkflowViewRestore,
  Comfy_FloatRoundingPrecision,
  Comfy_Graph_CanvasInfo,
  Comfy_Graph_CanvasMenu,
  Comfy_Graph_CtrlShiftZoom,
  Comfy_Graph_LinkMarkers,
  Comfy_Graph_ZoomSpeed,
  Comfy_GroupSelectedNodes_Padding,
  Comfy_Group_DoubleClickTitleToEdit,
  Comfy_LinkRelease_Action,
  Comfy_LinkRelease_ActionShift,
  Comfy_LinkRenderMode,
  Comfy_Load3D_3DViewerEnable,
  Comfy_Load3D_BackgroundColor,
  Comfy_Load3D_CameraType,
  Comfy_Load3D_LightAdjustmentIncrement,
  Comfy_Load3D_LightIntensity,
  Comfy_Load3D_LightIntensityMaximum,
  Comfy_Load3D_LightIntensityMinimum,
  Comfy_Load3D_ShowGrid,
  Comfy_Locale,
  Comfy_MaskEditor_BrushAdjustmentSpeed,
  Comfy_MaskEditor_UseDominantAxis,
  Comfy_MaskEditor_UseNewEditor,
  Comfy_ModelLibrary_AutoLoadAll,
  Comfy_ModelLibrary_NameFormat,
  Comfy_NodeBadge_NodeIdBadgeMode,
  Comfy_NodeBadge_NodeLifeCycleBadgeMode,
  Comfy_NodeBadge_NodeSourceBadgeMode,
  Comfy_NodeBadge_ShowApiPricing,
  Comfy_NodeSearchBoxImpl,
  Comfy_NodeSearchBoxImpl_NodePreview,
  Comfy_NodeSearchBoxImpl_ShowCategory,
  Comfy_NodeSearchBoxImpl_ShowIdName,
  Comfy_NodeSearchBoxImpl_ShowNodeFrequency,
  Comfy_NodeSuggestions_number,
  Comfy_Node_AllowImageSizeDraw,
  Comfy_Node_AutoSnapLinkToSlot,
  Comfy_Node_BypassAllLinksOnDelete,
  Comfy_Node_DoubleClickTitleToEdit,
  Comfy_Node_MiddleClickRerouteNode,
  Comfy_Node_Opacity,
  Comfy_Node_ShowDeprecated,
  Comfy_Node_ShowExperimental,
  Comfy_Node_SnapHighlightsNode,
  Comfy_Notification_ShowVersionUpdates,
  Comfy_Pointer_ClickBufferTime,
  Comfy_Pointer_ClickDrift,
  Comfy_Pointer_DoubleClickTime,
  Comfy_PreviewFormat,
  Comfy_PromptFilename,
  Comfy_QueueButton_BatchCountLimit,
  Comfy_Queue_MaxHistoryItems,
  Comfy_Sidebar_Location,
  Comfy_Sidebar_Size,
  Comfy_Sidebar_UnifiedWidth,
  Comfy_SnapToGrid_GridSize,
  Comfy_TextareaWidget_FontSize,
  Comfy_TextareaWidget_Spellcheck,
  Comfy_TreeExplorer_ItemPadding,
  Comfy_UseNewMenu,
  Comfy_Validation_Workflows,
  Comfy_WidgetControlMode,
  Comfy_Window_UnloadConfirmation,
  Comfy_Workflow_AutoSave,
  Comfy_Workflow_AutoSaveDelay,
  Comfy_Workflow_ConfirmDelete,
  Comfy_Workflow_Persist,
  Comfy_Workflow_ShowMissingModelsWarning,
  Comfy_Workflow_ShowMissingNodesWarning,
  Comfy_Workflow_SortNodeIdOnSave,
  Comfy_Workflow_WorkflowTabsPosition,
  LiteGraph_Canvas_MaximumFps,
  LiteGraph_Canvas_MinFontSizeForLOD,
  LiteGraph_ContextMenu_Scaling,
  LiteGraph_Node_DefaultPadding,
  LiteGraph_Node_TooltipDelay,
  LiteGraph_Reroute_SplineOffset,
  settings as default,
  pysssss_SnapToGrid
};
//# sourceMappingURL=settings-C3vygQN4.js.map
