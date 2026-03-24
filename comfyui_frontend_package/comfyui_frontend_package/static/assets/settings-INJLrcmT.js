const Comfy_Canvas_BackgroundImage = {
  name: "Фоновое изображение холста",
  tooltip: "URL изображения для фона холста. Вы можете кликнуть правой кнопкой мыши на изображении в панели результатов и выбрать «Установить как фон», чтобы использовать его."
};
const Comfy_Canvas_NavigationMode = {
  name: "Режим навигации по холсту",
  options: {
    "Drag Navigation": "Перетаскивание",
    "Standard (New)": "Стандартный (новый)"
  }
};
const Comfy_Canvas_SelectionToolbox = {
  name: "Показать панель инструментов выбора"
};
const Comfy_ConfirmClear = {
  name: "Требовать подтверждение при очистке рабочего процесса"
};
const Comfy_DOMClippingEnabled = {
  name: "Включить обрезку элементов DOM (включение может снизить производительность)"
};
const Comfy_DevMode = {
  name: "Включить параметры режима разработчика (сохранение API и т. д.)"
};
const Comfy_DisableFloatRounding = {
  name: "Отключить округление по умолчанию для плавающих виджетов.",
  tooltip: "(требуется перезагрузка страницы) Невозможно отключить округление, если оно установлено узлом на сервере."
};
const Comfy_DisableSliders = {
  name: "Отключить ползунки виджетов нод"
};
const Comfy_EditAttention_Delta = {
  name: "Точность Ctrl+вверх/вниз"
};
const Comfy_EnableTooltips = {
  name: "Включить подсказки"
};
const Comfy_EnableWorkflowViewRestore = {
  name: "Сохранять и восстанавливать положение и уровень масштабирования холста в рабочих процессах"
};
const Comfy_FloatRoundingPrecision = {
  name: "Количество знаков после запятой для округления плавающего виджета [0 = авто].",
  tooltip: "(требуется перезагрузка страницы)"
};
const Comfy_Graph_CanvasInfo = {
  name: "Показать информацию о холсте в нижнем левом углу (fps и т.д.)"
};
const Comfy_Graph_CanvasMenu = {
  name: "Показать меню холста графа"
};
const Comfy_Graph_CtrlShiftZoom = {
  name: "Включить быстрый зум с помощью сочетания клавиш (Ctrl + Shift + Колёсико мыши)"
};
const Comfy_Graph_LinkMarkers = {
  name: "Маркер середины ссылки",
  options: {
    Arrow: "Стрелка",
    Circle: "Круг",
    None: "Нет"
  }
};
const Comfy_Graph_ZoomSpeed = {
  name: "Скорость зума холста"
};
const Comfy_GroupSelectedNodes_Padding = {
  name: "Отступ для выбранных нод группы"
};
const Comfy_Group_DoubleClickTitleToEdit = {
  name: "Дважды щёлкните по заголовку группы, чтобы редактировать"
};
const Comfy_LinkRelease_Action = {
  name: "Действие при отпускании ссылки (без модификатора)",
  options: {
    "context menu": "контекстное меню",
    "no action": "без действия",
    "search box": "поисковая строка"
  }
};
const Comfy_LinkRelease_ActionShift = {
  name: "Действие при отпускании ссылки (Shift)",
  options: {
    "context menu": "контекстное меню",
    "no action": "без действия",
    "search box": "поисковая строка"
  }
};
const Comfy_LinkRenderMode = {
  name: "Режим рендеринга ссылки",
  options: {
    Hidden: "Скрытый",
    Linear: "Линейный",
    Spline: "Сплайн",
    Straight: "Прямой"
  }
};
const Comfy_Load3D_3DViewerEnable = {
  name: "Включить 3D-просмотрщик (Бета)",
  tooltip: "Включает 3D-просмотрщик (Бета) для выбранных узлов. Эта функция позволяет визуализировать и взаимодействовать с 3D-моделями прямо в полноразмерном 3D-просмотрщике."
};
const Comfy_Load3D_BackgroundColor = {
  name: "Начальный цвет фона",
  tooltip: "Управляет цветом фона по умолчанию для 3D-сцены. Этот параметр определяет внешний вид фона при создании нового 3D-виджета, но может быть изменён индивидуально для каждого виджета после создания."
};
const Comfy_Load3D_CameraType = {
  name: "Тип камеры",
  options: {
    orthographic: "ортографическая",
    perspective: "перспективная"
  },
  tooltip: "Управляет тем, является ли камера перспективной или ортографической по умолчанию при создании нового 3D-виджета. Это значение по умолчанию все еще может быть переключено индивидуально для каждого виджета после его создания."
};
const Comfy_Load3D_LightAdjustmentIncrement = {
  name: "Шаг регулировки освещения",
  tooltip: "Определяет размер шага при регулировке интенсивности освещения в 3D-сценах. Меньшее значение шага позволяет более точно настраивать освещение, а большее значение приводит к более заметным изменениям при каждой регулировке."
};
const Comfy_Load3D_LightIntensity = {
  name: "Начальная интенсивность освещения",
  tooltip: "Устанавливает уровень яркости освещения по умолчанию в 3D-сцене. Это значение определяет, насколько сильно источники света освещают объекты при создании нового 3D-виджета, но может быть изменено для каждого виджета отдельно после создания."
};
const Comfy_Load3D_LightIntensityMaximum = {
  name: "Максимальная интенсивность света",
  tooltip: "Устанавливает максимальное допустимое значение интенсивности света для 3D-сцен. Определяет верхний предел яркости, который можно задать при настройке освещения в любом 3D-виджете."
};
const Comfy_Load3D_LightIntensityMinimum = {
  name: "Минимальная интенсивность света",
  tooltip: "Устанавливает минимально допустимое значение интенсивности света для 3D-сцен. Определяет нижний предел яркости, который можно установить при настройке освещения в любом 3D-виджете."
};
const Comfy_Load3D_ShowGrid = {
  name: "Показать сетку",
  tooltip: "Переключиться, чтобы показывать сетку по умолчанию"
};
const Comfy_Locale = {
  name: "Язык"
};
const Comfy_MaskEditor_BrushAdjustmentSpeed = {
  name: "Множитель скорости регулировки кисти",
  tooltip: "Управляет тем, как быстро изменяются размер и жёсткость кисти при регулировке. Более высокие значения означают более быстрые изменения."
};
const Comfy_MaskEditor_UseDominantAxis = {
  name: "Закрепить регулировку кисти по доминирующей оси",
  tooltip: "При включении регулировки кисти будет влиять только на размер или жёсткость в зависимости от того, в каком направлении вы двигаетесь больше"
};
const Comfy_MaskEditor_UseNewEditor = {
  name: "Использовать новый редактор масок",
  tooltip: "Переключиться на новый интерфейс редактора масок"
};
const Comfy_ModelLibrary_AutoLoadAll = {
  name: "Автоматически загружать все папки моделей",
  tooltip: "Если true, все папки будут загружены, как только вы откроете библиотеку моделей (это может вызвать задержки при загрузке). Если false, корневые папки моделей будут загружены только после нажатия на них."
};
const Comfy_ModelLibrary_NameFormat = {
  name: "Какое название отображать в древовидном представлении библиотеки моделей",
  options: {
    filename: "название файла",
    title: "название"
  },
  tooltip: 'Выберите "название файла", чтобы отобразить упрощённый вид сырого названия файла (без директории или расширения ".safetensors") в списке моделей. Выберите "название", чтобы отобразить настраиваемое название метаданных модели.'
};
const Comfy_NodeBadge_NodeIdBadgeMode = {
  name: "Режим значка ID ноды",
  options: {
    None: "Нет",
    "Show all": "Показать все"
  }
};
const Comfy_NodeBadge_NodeLifeCycleBadgeMode = {
  name: "Режим значка жизненного цикла ноды",
  options: {
    None: "Нет",
    "Show all": "Показать все"
  }
};
const Comfy_NodeBadge_NodeSourceBadgeMode = {
  name: "Режим значка источника ноды",
  options: {
    "Hide built-in": "Скрыть встроенные",
    None: "Нет",
    "Show all": "Показать все"
  }
};
const Comfy_NodeBadge_ShowApiPricing = {
  name: "Показать значок стоимости узла API"
};
const Comfy_NodeSearchBoxImpl = {
  name: "Реализация поискового поля нод",
  options: {
    "default": "по умолчанию",
    "litegraph (legacy)": "litegraph (устаревший)"
  }
};
const Comfy_NodeSearchBoxImpl_NodePreview = {
  name: "Предварительный просмотр ноды",
  tooltip: "Применяется только к стандартной реализации"
};
const Comfy_NodeSearchBoxImpl_ShowCategory = {
  name: "Показать категорию ноды в результатах поиска",
  tooltip: "Применяется только к стандартной реализации"
};
const Comfy_NodeSearchBoxImpl_ShowIdName = {
  name: "Показать название ID ноды в результатах поиска",
  tooltip: "Применяется только к стандартной реализации"
};
const Comfy_NodeSearchBoxImpl_ShowNodeFrequency = {
  name: "Показать частоту ноды в результатах поиска",
  tooltip: "Применяется только к стандартной реализации"
};
const Comfy_NodeSuggestions_number = {
  name: "Количество предложенных нод",
  tooltip: "Только для поля поиска litegraph/контекстного меню"
};
const Comfy_Node_AllowImageSizeDraw = {
  name: "Показывать ширину × высоту под предварительным просмотром изображения"
};
const Comfy_Node_AutoSnapLinkToSlot = {
  name: "Автоматически привязывать ссылку к слоту ноды",
  tooltip: "При перетаскивании ссылки над нодой ссылка автоматически привязывается к подходящему входному слоту ноды"
};
const Comfy_Node_BypassAllLinksOnDelete = {
  name: "Сохранить все ссылки при удалении нод",
  tooltip: "При удалении ноды попытаться переподключить все её входные и выходные ссылки (обходя удалённую ноду)"
};
const Comfy_Node_DoubleClickTitleToEdit = {
  name: "Дважды щёлкните по заголовку ноды, чтобы редактировать"
};
const Comfy_Node_MiddleClickRerouteNode = {
  name: "Средний щелчок создаёт новую ноду перенаправления"
};
const Comfy_Node_Opacity = {
  name: "Непрозрачность ноды"
};
const Comfy_Node_ShowDeprecated = {
  name: "Показать устаревшие ноды в поиске",
  tooltip: "Устаревшие ноды по умолчанию скрыты в интерфейсе, но остаются функциональными в существующих рабочих процессах, которые их используют."
};
const Comfy_Node_ShowExperimental = {
  name: "Показать экспериментальные ноды в поиске",
  tooltip: "Экспериментальные ноды помечены как таковые в интерфейсе и могут подвергаться значительным изменениям или удалению в будущих версиях. Используйте с осторожностью в производственных рабочих процессах"
};
const Comfy_Node_SnapHighlightsNode = {
  name: "Подсветка ноды при привязке",
  tooltip: "При перетаскивании ссылки над нодой с подходящим входным слотом, нода подсвечивается"
};
const Comfy_Notification_ShowVersionUpdates = {
  name: "Показывать обновления версий",
  tooltip: "Показывать обновления новых моделей и основные новые функции."
};
const Comfy_Pointer_ClickBufferTime = {
  name: "Задержка дрейфа щелчка указателя",
  tooltip: "После нажатия кнопки указателя, это максимальное время (в миллисекундах), в течение которого движение указателя может быть проигнорировано.\n\nПомогает предотвратить непреднамеренное смещение объектов, если указатель перемещается во время щелчка."
};
const Comfy_Pointer_ClickDrift = {
  name: "Дрейф щелчка указателя (максимальное расстояние)",
  tooltip: "Если указатель перемещается более чем на это расстояние, удерживая кнопку, это считается перетаскиванием (а не щелчком).\n\nПомогает предотвратить непреднамеренное смещение объектов, если указатель перемещается во время щелчка."
};
const Comfy_Pointer_DoubleClickTime = {
  name: "Интервал двойного щелчка (максимум)",
  tooltip: "Максимальное время в миллисекундах между двумя щелчками двойного щелчка. Увеличение этого значения может помочь, если двойные щелчки иногда не регистрируются."
};
const Comfy_PreviewFormat = {
  name: "Формат изображения предварительного просмотра",
  tooltip: "При отображении предварительного просмотра в виджете изображения, преобразуйте его в легковесное изображение, например, webp, jpeg, webp;50 и т.д."
};
const Comfy_PromptFilename = {
  name: "Запрос названия файла при сохранении рабочего процесса"
};
const Comfy_QueueButton_BatchCountLimit = {
  name: "Ограничение количества партий",
  tooltip: "Максимальное количество задач, добавляемых в очередь за одно нажатие кнопки"
};
const Comfy_Queue_MaxHistoryItems = {
  name: "Размер истории очереди",
  tooltip: "Максимальное количество задач, отображаемых в истории очереди."
};
const Comfy_Sidebar_Location = {
  name: "Расположение боковой панели",
  options: {
    left: "слева",
    right: "справа"
  }
};
const Comfy_Sidebar_Size = {
  name: "Размер боковой панели",
  options: {
    normal: "нормальный",
    small: "маленький"
  }
};
const Comfy_Sidebar_UnifiedWidth = {
  name: "Унифицированная ширина боковой панели"
};
const Comfy_SnapToGrid_GridSize = {
  name: "Размер сетки привязки",
  tooltip: "При перетаскивании и изменении размера нод, удерживая shift, они будут выровнены по сетке, это контролирует размер этой сетки."
};
const Comfy_TextareaWidget_FontSize = {
  name: "Размер шрифта виджета текстовой области"
};
const Comfy_TextareaWidget_Spellcheck = {
  name: "Проверка орфографии виджета текстовой области"
};
const Comfy_TreeExplorer_ItemPadding = {
  name: "Отступ элемента в проводнике дерева"
};
const Comfy_UseNewMenu = {
  name: "Использовать новое меню",
  options: {
    Disabled: "Отключено",
    Top: "Вверху"
  },
  tooltip: "Расположение панели меню. На мобильных устройствах меню всегда отображается вверху."
};
const Comfy_Validation_Workflows = {
  name: "Проверка рабочих процессов"
};
const Comfy_WidgetControlMode = {
  name: "Режим управления виджетом",
  options: {
    after: "после",
    before: "до"
  },
  tooltip: "Управляет тем, когда обновляются значения виджета (случайные/увеличение/уменьшение), либо до того, как запрос будет поставлен в очередь, либо после."
};
const Comfy_Window_UnloadConfirmation = {
  name: "Показать подтверждение при закрытии окна"
};
const Comfy_Workflow_AutoSave = {
  name: "Автосохранение",
  options: {
    "after delay": "после задержки",
    off: "выключено"
  }
};
const Comfy_Workflow_AutoSaveDelay = {
  name: "Задержка автосохранения (мс)",
  tooltip: 'Применяется только если автосохранение установлено на "после задержки".'
};
const Comfy_Workflow_ConfirmDelete = {
  name: "Показать подтверждение при удалении рабочих процессов"
};
const Comfy_Workflow_Persist = {
  name: "Сохранить состояние рабочего процесса и восстановить при (пере)загрузке страницы"
};
const Comfy_Workflow_ShowMissingModelsWarning = {
  name: "Показать предупреждение об отсутствующих моделях"
};
const Comfy_Workflow_ShowMissingNodesWarning = {
  name: "Показать предупреждение об отсутствующих нодах"
};
const Comfy_Workflow_SortNodeIdOnSave = {
  name: "Сортировать ID нод при сохранении рабочего процесса"
};
const Comfy_Workflow_WorkflowTabsPosition = {
  name: "Положение открытых рабочих процессов",
  options: {
    Sidebar: "Боковая панель",
    Topbar: "Верхняя панель"
  }
};
const LiteGraph_Canvas_MaximumFps = {
  name: "Максимум FPS",
  tooltip: "Максимальное количество кадров в секунду, которое холст может рендерить. Ограничивает использование GPU за счёт плавности. Если 0, используется частота обновления экрана. По умолчанию: 0"
};
const LiteGraph_Canvas_MinFontSizeForLOD = {
  name: "Порог размера шрифта для уровня детализации ноды при масштабировании",
  tooltip: "Управляет переключением нод на рендеринг с низким уровнем детализации. Использует размер шрифта в пикселях для определения момента переключения. Установите 0 для отключения. Значения 1-24 задают минимальный порог размера шрифта для уровня детализации - более высокие значения (24px) = переключение нод на упрощённый рендеринг раньше при уменьшении масштаба, более низкие значения (1px) = сохранение полного качества ноды дольше."
};
const LiteGraph_ContextMenu_Scaling = {
  name: "Масштабирование комбинированных виджетов меню узлов (списков) при увеличении"
};
const LiteGraph_Node_DefaultPadding = {
  name: "Всегда сжимать новые узлы",
  tooltip: "Изменять размер узлов до минимально возможного при создании. Если отключено, новый узел будет немного расширен для отображения значений виджетов."
};
const LiteGraph_Node_TooltipDelay = {
  name: "Задержка всплывающей подсказки"
};
const LiteGraph_Reroute_SplineOffset = {
  name: "Перераспределение смещения сплайна",
  tooltip: "Смещение контрольной точки Безье от центральной точки перераспределения"
};
const pysssss_SnapToGrid = {
  name: "Всегда привязываться к сетке"
};
const settings = {
  "Comfy-Desktop_AutoUpdate": {
    name: "Автоматически проверять обновления"
  },
  "Comfy-Desktop_SendStatistics": {
    name: "Отправлять анонимную статистику использования"
  },
  "Comfy-Desktop_UV_PypiInstallMirror": {
    name: "Pypi Установить Зеркало",
    tooltip: "Зеркало установки pip по умолчанию"
  },
  "Comfy-Desktop_UV_PythonInstallMirror": {
    name: "Зеркало для установки Python",
    tooltip: "Управляемые установки Python загружаются из проекта Astral python-build-standalone. Эта переменная может быть установлена на URL-адрес зеркала для использования другого источника для установок Python. Предоставленный URL заменит https://github.com/astral-sh/python-build-standalone/releases/download в, например, https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz. Дистрибутивы могут быть прочитаны из локального каталога, используя схему URL file://."
  },
  "Comfy-Desktop_UV_TorchInstallMirror": {
    name: "Установочное Зеркало Torch",
    tooltip: "Зеркало для установки pip для pytorch"
  },
  "Comfy-Desktop_WindowStyle": {
    name: "Стиль окна",
    options: {
      custom: "пользовательский",
      "default": "по умолчанию"
    },
    tooltip: "Выберите пользовательский вариант, чтобы скрыть системную строку заголовка"
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
//# sourceMappingURL=settings-INJLrcmT.js.map
