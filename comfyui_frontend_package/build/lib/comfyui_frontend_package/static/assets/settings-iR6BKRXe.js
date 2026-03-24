const Comfy_Canvas_BackgroundImage = {
  name: "Tuval arka plan resmi",
  tooltip: `Tuval arka planı için resim URL'si. Çıktılar panelindeki bir resme sağ tıklayıp "Arka Plan Olarak Ayarla"yı seçerek kullanabilir veya yükleme düğmesini kullanarak kendi resminizi yükleyebilirsiniz.`
};
const Comfy_Canvas_NavigationMode = {
  name: "Tuval Gezinme Modu",
  options: {
    "Drag Navigation": "Sürükleyerek Gezinme",
    "Standard (New)": "Standart (Yeni)"
  }
};
const Comfy_Canvas_SelectionToolbox = {
  name: "Seçim araç kutusunu göster"
};
const Comfy_ConfirmClear = {
  name: "İş akışını temizlerken onay iste"
};
const Comfy_DOMClippingEnabled = {
  name: "DOM öğesi kırpmayı etkinleştir (etkinleştirmek performansı düşürebilir)"
};
const Comfy_DevMode = {
  name: "Geliştirici modu seçeneklerini etkinleştir (API kaydetme, vb.)"
};
const Comfy_DisableFloatRounding = {
  name: "Varsayılan ondalık sayı widget yuvarlamasını devre dışı bırak.",
  tooltip: "(sayfanın yeniden yüklenmesini gerektirir) Arka uçtaki düğüm tarafından yuvarlama ayarlandığında yuvarlama devre dışı bırakılamaz."
};
const Comfy_DisableSliders = {
  name: "Düğüm widget kaydırıcılarını devre dışı bırak"
};
const Comfy_EditAttention_Delta = {
  name: "Ctrl+yukarı/aşağı hassasiyeti"
};
const Comfy_EnableTooltips = {
  name: "Araç İpuçlarını Etkinleştir"
};
const Comfy_EnableWorkflowViewRestore = {
  name: "İş akışlarında tuval konumunu ve yakınlaştırma seviyesini kaydet ve geri yükle"
};
const Comfy_FloatRoundingPrecision = {
  name: "Ondalık sayı widget yuvarlama ondalık basamakları [0 = otomatik].",
  tooltip: "(sayfanın yeniden yüklenmesini gerektirir)"
};
const Comfy_Graph_CanvasInfo = {
  name: "Sol alt köşede tuval bilgilerini göster (fps, vb.)"
};
const Comfy_Graph_CanvasMenu = {
  name: "Grafik tuval menüsünü göster"
};
const Comfy_Graph_CtrlShiftZoom = {
  name: "Hızlı yakınlaştırma kısayolunu etkinleştir (Ctrl + Shift + Sürükle)"
};
const Comfy_Graph_LinkMarkers = {
  name: "Bağlantı orta nokta işaretçileri",
  options: {
    Arrow: "Ok",
    Circle: "Daire",
    None: "Yok"
  }
};
const Comfy_Graph_ZoomSpeed = {
  name: "Tuval yakınlaştırma hızı"
};
const Comfy_GroupSelectedNodes_Padding = {
  name: "Seçili düğümleri gruplandırma dolgusu"
};
const Comfy_Group_DoubleClickTitleToEdit = {
  name: "Düzenlemek için grup başlığına çift tıkla"
};
const Comfy_LinkRelease_Action = {
  name: "Bağlantı bırakıldığında eylem (Değiştirici yok)",
  options: {
    "context menu": "bağlam menüsü",
    "no action": "eylem yok",
    "search box": "arama kutusu"
  }
};
const Comfy_LinkRelease_ActionShift = {
  name: "Bağlantı bırakıldığında eylem (Shift)",
  options: {
    "context menu": "bağlam menüsü",
    "no action": "eylem yok",
    "search box": "arama kutusu"
  }
};
const Comfy_LinkRenderMode = {
  name: "Bağlantı Oluşturma Modu",
  options: {
    Hidden: "Gizli",
    Linear: "Doğrusal",
    Spline: "Eğri",
    Straight: "Düz"
  }
};
const Comfy_Load3D_3DViewerEnable = {
  name: "3D Görüntüleyiciyi Etkinleştir (Beta)",
  tooltip: "Seçili düğümler için 3D Görüntüleyiciyi (Beta) etkinleştirir. Bu özellik, 3D modelleri doğrudan tam boyutlu 3D görüntüleyici içinde görselleştirmenize ve etkileşimde bulunmanıza olanak tanır."
};
const Comfy_Load3D_BackgroundColor = {
  name: "Başlangıç Arka Plan Rengi",
  tooltip: "3D sahnenin varsayılan arka plan rengini kontrol eder. Bu ayar, yeni bir 3D widget oluşturulduğunda arka plan görünümünü belirler, ancak oluşturulduktan sonra her widget için ayrı ayrı ayarlanabilir."
};
const Comfy_Load3D_CameraType = {
  name: "Başlangıç Kamera Tipi",
  options: {
    orthographic: "ortografik",
    perspective: "perspektif"
  },
  tooltip: "Yeni bir 3D widget oluşturulduğunda kameranın varsayılan olarak perspektif mi yoksa ortografik mi olacağını kontrol eder. Bu varsayılan, oluşturulduktan sonra her widget için ayrı ayrı değiştirilebilir."
};
const Comfy_Load3D_LightAdjustmentIncrement = {
  name: "Işık Ayarlama Artışı",
  tooltip: "3D sahnelerde ışık yoğunluğunu ayarlarken artış boyutunu kontrol eder. Daha küçük bir adım değeri, aydınlatma ayarlamaları üzerinde daha ince kontrol sağlarken, daha büyük bir değer ayarlama başına daha belirgin değişikliklere neden olur."
};
const Comfy_Load3D_LightIntensity = {
  name: "Başlangıç Işık Yoğunluğu",
  tooltip: "3D sahnedeki aydınlatmanın varsayılan parlaklık seviyesini ayarlar. Bu değer, yeni bir 3D widget oluşturulduğunda ışıkların nesneleri ne kadar yoğun aydınlatacağını belirler, ancak oluşturulduktan sonra her widget için ayrı ayrı ayarlanabilir."
};
const Comfy_Load3D_LightIntensityMaximum = {
  name: "Maksimum Işık Yoğunluğu",
  tooltip: "3D sahneler için izin verilen maksimum ışık yoğunluğu değerini ayarlar. Bu, herhangi bir 3D widget'ta aydınlatma ayarlanırken ayarlanabilecek üst parlaklık sınırını tanımlar."
};
const Comfy_Load3D_LightIntensityMinimum = {
  name: "Minimum Işık Yoğunluğu",
  tooltip: "3D sahneler için izin verilen minimum ışık yoğunluğu değerini ayarlar. Bu, herhangi bir 3D widget'ta aydınlatma ayarlanırken ayarlanabilecek alt parlaklık sınırını tanımlar."
};
const Comfy_Load3D_ShowGrid = {
  name: "Başlangıç Izgara Görünürlüğü",
  tooltip: "Yeni bir 3D widget oluşturulduğunda ızgaranın varsayılan olarak görünür olup olmadığını kontrol eder. Bu varsayılan, oluşturulduktan sonra her widget için ayrı ayrı değiştirilebilir."
};
const Comfy_Locale = {
  name: "Dil"
};
const Comfy_MaskEditor_BrushAdjustmentSpeed = {
  name: "Fırça ayar hızı çarpanı",
  tooltip: "Ayarlama sırasında fırça boyutunun ve sertliğinin ne kadar hızlı değiştiğini kontrol eder. Daha yüksek değerler daha hızlı değişiklikler anlamına gelir."
};
const Comfy_MaskEditor_UseDominantAxis = {
  name: "Fırça ayarını baskın eksene kilitle",
  tooltip: "Etkinleştirildiğinde, fırça ayarları yalnızca daha fazla hareket ettiğiniz yöne bağlı olarak boyutu VEYA sertliği etkileyecektir"
};
const Comfy_MaskEditor_UseNewEditor = {
  name: "Yeni maske düzenleyiciyi kullan",
  tooltip: "Yeni maske düzenleyici arayüzüne geç"
};
const Comfy_ModelLibrary_AutoLoadAll = {
  name: "Tüm model klasörlerini otomatik olarak yükle",
  tooltip: "Doğruysa, model kütüphanesini açar açmaz tüm klasörler yüklenecektir (bu, yüklenirken gecikmelere neden olabilir). Yanlışsa, kök düzeyindeki model klasörleri yalnızca üzerlerine tıkladığınızda yüklenecektir."
};
const Comfy_ModelLibrary_NameFormat = {
  name: "Model kütüphanesi ağaç görünümünde hangi adın görüntüleneceği",
  options: {
    filename: "dosyaadı",
    title: "başlık"
  },
  tooltip: 'Model listesinde ham dosya adının (dizin veya ".safetensors" uzantısı olmadan) basitleştirilmiş bir görünümünü oluşturmak için "dosyaadı"nı seçin. Yapılandırılabilir model meta veri başlığını görüntülemek için "başlık"ı seçin.'
};
const Comfy_NodeBadge_NodeIdBadgeMode = {
  name: "Düğüm ID rozeti modu",
  options: {
    None: "Yok",
    "Show all": "Tümünü göster"
  }
};
const Comfy_NodeBadge_NodeLifeCycleBadgeMode = {
  name: "Düğüm yaşam döngüsü rozeti modu",
  options: {
    None: "Yok",
    "Show all": "Tümünü göster"
  }
};
const Comfy_NodeBadge_NodeSourceBadgeMode = {
  name: "Düğüm kaynak rozeti modu",
  options: {
    "Hide built-in": "Yerleşik olanı gizle",
    None: "Yok",
    "Show all": "Tümünü göster"
  }
};
const Comfy_NodeBadge_ShowApiPricing = {
  name: "API düğüm fiyatlandırma rozetini göster"
};
const Comfy_NodeSearchBoxImpl = {
  name: "Düğüm arama kutusu uygulaması",
  options: {
    "default": "varsayılan",
    "litegraph (legacy)": "litegraph (eski)"
  }
};
const Comfy_NodeSearchBoxImpl_NodePreview = {
  name: "Düğüm önizlemesi",
  tooltip: "Yalnızca varsayılan uygulama için geçerlidir"
};
const Comfy_NodeSearchBoxImpl_ShowCategory = {
  name: "Arama sonuçlarında düğüm kategorisini göster",
  tooltip: "Yalnızca varsayılan uygulama için geçerlidir"
};
const Comfy_NodeSearchBoxImpl_ShowIdName = {
  name: "Arama sonuçlarında düğüm kimliği adını göster",
  tooltip: "Yalnızca varsayılan uygulama için geçerlidir"
};
const Comfy_NodeSearchBoxImpl_ShowNodeFrequency = {
  name: "Arama sonuçlarında düğüm sıklığını göster",
  tooltip: "Yalnızca varsayılan uygulama için geçerlidir"
};
const Comfy_NodeSuggestions_number = {
  name: "Düğüm öneri sayısı",
  tooltip: "Yalnızca litegraph arama kutusu/bağlam menüsü için"
};
const Comfy_Node_AllowImageSizeDraw = {
  name: "Görüntü önizlemesinin altında genişlik × yüksekliği göster"
};
const Comfy_Node_AutoSnapLinkToSlot = {
  name: "Bağlantıyı otomatik olarak düğüm yuvasına yapıştır",
  tooltip: "Bir bağlantıyı bir düğümün üzerine sürüklerken, bağlantı otomatik olarak düğüm üzerindeki uygun bir giriş yuvasına yapışır"
};
const Comfy_Node_BypassAllLinksOnDelete = {
  name: "Düğümleri silerken tüm bağlantıları koru",
  tooltip: "Bir düğümü silerken, tüm giriş ve çıkış bağlantılarını yeniden bağlamaya çalışın (silinen düğümü atlayarak)"
};
const Comfy_Node_DoubleClickTitleToEdit = {
  name: "Düzenlemek için düğüm başlığına çift tıkla"
};
const Comfy_Node_MiddleClickRerouteNode = {
  name: "Orta tıklama yeni bir Yeniden Yönlendirme düğümü oluşturur"
};
const Comfy_Node_Opacity = {
  name: "Düğüm opaklığı"
};
const Comfy_Node_ShowDeprecated = {
  name: "Aramada kullanımdan kaldırılmış düğümleri göster",
  tooltip: "Kullanımdan kaldırılmış düğümler arayüzde varsayılan olarak gizlidir, ancak bunları kullanan mevcut iş akışlarında işlevsel kalır."
};
const Comfy_Node_ShowExperimental = {
  name: "Aramada deneysel düğümleri göster",
  tooltip: "Deneysel düğümler arayüzde bu şekilde işaretlenmiştir ve gelecekteki sürümlerde önemli değişikliklere veya kaldırılmaya tabi olabilir. Üretim iş akışlarında dikkatli kullanın"
};
const Comfy_Node_SnapHighlightsNode = {
  name: "Yapıştırma düğümü vurgular",
  tooltip: "Uygun giriş yuvasına sahip bir düğümün üzerine bir bağlantı sürüklerken, düğümü vurgulayın"
};
const Comfy_Notification_ShowVersionUpdates = {
  name: "Sürüm güncellemelerini göster",
  tooltip: "Yeni modeller ve önemli yeni özellikler için güncellemeleri göster."
};
const Comfy_Pointer_ClickBufferTime = {
  name: "İşaretçi tıklama kayma gecikmesi",
  tooltip: "Bir işaretçi düğmesine bastıktan sonra, bu, işaretçi hareketinin göz ardı edilebileceği maksimum süredir (milisaniye cinsinden).\n\nTıklarken işaretçi hareket ettirilirse nesnelerin istemeden dürtülmesini önlemeye yardımcı olur."
};
const Comfy_Pointer_ClickDrift = {
  name: "İşaretçi tıklama kayması (maksimum mesafe)",
  tooltip: "İşaretçi bir düğmeyi basılı tutarken bu mesafeden daha fazla hareket ederse, bu sürükleme olarak kabul edilir (tıklama yerine).\n\nTıklarken işaretçi hareket ettirilirse nesnelerin istemeden dürtülmesini önlemeye yardımcı olur."
};
const Comfy_Pointer_DoubleClickTime = {
  name: "Çift tıklama aralığı (maksimum)",
  tooltip: "Çift tıklamanın iki tıklaması arasındaki milisaniye cinsinden maksimum süre. Bu değeri artırmak, çift tıklamaların bazen kaydedilmemesi durumunda yardımcı olabilir."
};
const Comfy_PreviewFormat = {
  name: "Önizleme görüntü formatı",
  tooltip: "Görüntü widget'ında bir önizleme görüntülerken, onu hafif bir görüntüye dönüştürün, örn. webp, jpeg, webp;50, vb."
};
const Comfy_PromptFilename = {
  name: "İş akışını kaydederken dosya adı iste"
};
const Comfy_QueueButton_BatchCountLimit = {
  name: "Toplu iş sayısı sınırı",
  tooltip: "Tek bir düğme tıklamasıyla kuyruğa eklenen maksimum görev sayısı"
};
const Comfy_Queue_MaxHistoryItems = {
  name: "Kuyruk geçmişi boyutu",
  tooltip: "Kuyruk geçmişinde gösterilen maksimum görev sayısı."
};
const Comfy_Sidebar_Location = {
  name: "Kenar çubuğu konumu",
  options: {
    left: "sol",
    right: "sağ"
  }
};
const Comfy_Sidebar_Size = {
  name: "Kenar çubuğu boyutu",
  options: {
    normal: "normal",
    small: "küçük"
  }
};
const Comfy_Sidebar_UnifiedWidth = {
  name: "Birleşik kenar çubuğu genişliği"
};
const Comfy_SnapToGrid_GridSize = {
  name: "Izgaraya yapıştırma boyutu",
  tooltip: "Shift tuşunu basılı tutarken düğümleri sürükleyip yeniden boyutlandırırken ızgaraya hizalanacaklar, bu o ızgaranın boyutunu kontrol eder."
};
const Comfy_TextareaWidget_FontSize = {
  name: "Metin alanı widget yazı tipi boyutu"
};
const Comfy_TextareaWidget_Spellcheck = {
  name: "Metin alanı widget yazım denetimi"
};
const Comfy_TreeExplorer_ItemPadding = {
  name: "Ağaç gezgini öğe dolgusu"
};
const Comfy_UseNewMenu = {
  name: "Yeni menüyü kullan",
  options: {
    Disabled: "Devre dışı",
    Top: "Üst"
  },
  tooltip: "Menü çubuğu konumu. Mobil cihazlarda menü her zaman üstte gösterilir."
};
const Comfy_Validation_Workflows = {
  name: "İş akışlarını doğrula"
};
const Comfy_WidgetControlMode = {
  name: "Widget kontrol modu",
  options: {
    after: "sonra",
    before: "önce"
  },
  tooltip: "Widget değerlerinin ne zaman güncelleneceğini (rastgele/artırma/azaltma), istem kuyruğa alınmadan önce veya sonra kontrol eder."
};
const Comfy_Window_UnloadConfirmation = {
  name: "Pencereyi kapatırken onay göster"
};
const Comfy_Workflow_AutoSave = {
  name: "Otomatik Kaydet",
  options: {
    "after delay": "gecikmeden sonra",
    off: "kapalı"
  }
};
const Comfy_Workflow_AutoSaveDelay = {
  name: "Otomatik Kaydetme Gecikmesi (ms)",
  tooltip: 'Yalnızca Otomatik Kaydetme "gecikmeden sonra" olarak ayarlandığında geçerlidir.'
};
const Comfy_Workflow_ConfirmDelete = {
  name: "İş akışlarını silerken onay göster"
};
const Comfy_Workflow_Persist = {
  name: "İş akışı durumunu koru ve sayfayı (yeniden) yüklediğinde geri yükle"
};
const Comfy_Workflow_ShowMissingModelsWarning = {
  name: "Eksik model uyarısını göster"
};
const Comfy_Workflow_ShowMissingNodesWarning = {
  name: "Eksik düğüm uyarısını göster"
};
const Comfy_Workflow_SortNodeIdOnSave = {
  name: "İş akışını kaydederken düğüm kimliklerini sırala"
};
const Comfy_Workflow_WorkflowTabsPosition = {
  name: "Açılan iş akışları konumu",
  options: {
    Sidebar: "Kenar Çubuğu",
    Topbar: "Üst Çubuk"
  }
};
const LiteGraph_Canvas_MaximumFps = {
  name: "Maksimum FPS",
  tooltip: "Tuvalin saniyede oluşturmasına izin verilen maksimum kare sayısı. Akıcılık pahasına GPU kullanımını sınırlar. 0 ise, ekran yenileme hızı kullanılır. Varsayılan: 0"
};
const LiteGraph_Canvas_MinFontSizeForLOD = {
  name: "Yakınlaştırma Düğümü Ayrıntı Seviyesi - yazı tipi boyutu eşiği",
  tooltip: "Düğümlerin ne zaman düşük kaliteli LOD oluşturmaya geçeceğini kontrol eder. Ne zaman geçiş yapılacağını belirlemek için piksel cinsinden yazı tipi boyutunu kullanır. Devre dışı bırakmak için 0'a ayarlayın. 1-24 arasındaki değerler LOD için minimum yazı tipi boyutu eşiğini ayarlar - daha yüksek değerler (24 piksel) = uzaklaştırırken düğümleri daha erken basitleştirilmiş oluşturmaya geçirin, daha düşük değerler (1 piksel) = tam düğüm kalitesini daha uzun süre koruyun."
};
const LiteGraph_ContextMenu_Scaling = {
  name: "Yakınlaştırıldığında düğüm birleşik widget menülerini (listeleri) ölçeklendir"
};
const LiteGraph_Node_DefaultPadding = {
  name: "Yeni düğümleri her zaman küçült",
  tooltip: "Oluşturulduğunda düğümleri mümkün olan en küçük boyuta yeniden boyutlandırın. Devre dışı bırakıldığında, yeni eklenen bir düğüm widget değerlerini göstermek için biraz genişletilecektir."
};
const LiteGraph_Node_TooltipDelay = {
  name: "Araç İpucu Gecikmesi"
};
const LiteGraph_Reroute_SplineOffset = {
  name: "Yeniden yönlendirme eğri ofseti",
  tooltip: "Yeniden yönlendirme merkez noktasından bezier kontrol noktası ofseti"
};
const pysssss_SnapToGrid = {
  name: "Her zaman ızgaraya yapıştır"
};
const settings = {
  "Comfy-Desktop_AutoUpdate": {
    name: "Güncellemeleri otomatik olarak kontrol et"
  },
  "Comfy-Desktop_SendStatistics": {
    name: "Anonim kullanım metrikleri gönder"
  },
  "Comfy-Desktop_UV_PypiInstallMirror": {
    name: "Pypi Yükleme Yansısı",
    tooltip: "Varsayılan pip yükleme yansısı"
  },
  "Comfy-Desktop_UV_PythonInstallMirror": {
    name: "Python Yükleme Yansısı",
    tooltip: "Yönetilen Python kurulumları Astral python-build-standalone projesinden indirilir. Bu değişken, Python kurulumları için farklı bir kaynak kullanmak üzere bir yansıma URL'sine ayarlanabilir. Sağlanan URL, örneğin https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz'deki https://github.com/astral-sh/python-build-standalone/releases/download'ın yerini alacaktır. Dağıtımlar, file:// URL şeması kullanılarak yerel bir dizinden okunabilir."
  },
  "Comfy-Desktop_UV_TorchInstallMirror": {
    name: "Torch Yükleme Yansısı",
    tooltip: "Pytorch için Pip yükleme yansısı"
  },
  "Comfy-Desktop_WindowStyle": {
    name: "Pencere Stili",
    options: {
      custom: "özel",
      "default": "varsayılan"
    },
    tooltip: "Özel: Sistem başlık çubuğunu ComfyUI'nin Üst menüsüyle değiştirin"
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
//# sourceMappingURL=settings-iR6BKRXe.js.map
