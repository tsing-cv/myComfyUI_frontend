const Comfy_Canvas_BackgroundImage = {
  name: "Image de fond du canevas",
  tooltip: "URL de l'image pour le fond du canevas. Vous pouvez faire un clic droit sur une image dans le panneau de sortie et sélectionner « Définir comme fond » pour l'utiliser."
};
const Comfy_Canvas_NavigationMode = {
  name: "Mode de navigation sur le canvas",
  options: {
    "Drag Navigation": "Navigation par glisser-déposer",
    "Standard (New)": "Standard (Nouveau)"
  }
};
const Comfy_Canvas_SelectionToolbox = {
  name: "Afficher la boîte à outils de sélection"
};
const Comfy_ConfirmClear = {
  name: "Demander une confirmation lors de l'effacement du flux de travail"
};
const Comfy_DOMClippingEnabled = {
  name: "Activer le découpage des éléments DOM (peut réduire les performances)"
};
const Comfy_DevMode = {
  name: "Activer les options du mode développeur (sauvegarde API, etc.)"
};
const Comfy_DisableFloatRounding = {
  name: "Désactiver l'arrondi par défaut du widget flottant.",
  tooltip: "(nécessite le rechargement de la page) Impossible de désactiver l'arrondi lorsque l'arrondi est défini par le nœud dans le backend."
};
const Comfy_DisableSliders = {
  name: "Désactiver les curseurs du widget de nœud"
};
const Comfy_EditAttention_Delta = {
  name: "Précision Ctrl+haut/bas"
};
const Comfy_EnableTooltips = {
  name: "Activer les infobulles"
};
const Comfy_EnableWorkflowViewRestore = {
  name: "Sauvegarder et restaurer la position et le niveau de zoom du canevas dans les flux de travail"
};
const Comfy_FloatRoundingPrecision = {
  name: "Nombre de décimales pour l'arrondi du widget flottant [0 = auto].",
  tooltip: "(nécessite le rechargement de la page)"
};
const Comfy_Graph_CanvasInfo = {
  name: "Afficher les informations du canevas en bas à gauche (fps, etc.)"
};
const Comfy_Graph_CanvasMenu = {
  name: "Afficher le menu du canevas graphique"
};
const Comfy_Graph_CtrlShiftZoom = {
  name: "Activer le raccourci de zoom rapide (Ctrl + Shift + Glisser)"
};
const Comfy_Graph_LinkMarkers = {
  name: "Marqueurs de point médian du lien",
  options: {
    Arrow: "Flèche",
    Circle: "Cercle",
    None: "Aucun"
  }
};
const Comfy_Graph_ZoomSpeed = {
  name: "Vitesse de zoom du canevas"
};
const Comfy_GroupSelectedNodes_Padding = {
  name: "Marge des nœuds sélectionnés dans le groupe"
};
const Comfy_Group_DoubleClickTitleToEdit = {
  name: "Double-cliquer sur le titre du groupe pour le modifier"
};
const Comfy_LinkRelease_Action = {
  name: "Action lors du relâchement du lien (sans modificateur)",
  options: {
    "context menu": "menu contextuel",
    "no action": "aucune action",
    "search box": "boîte de recherche"
  }
};
const Comfy_LinkRelease_ActionShift = {
  name: "Action lors du relâchement du lien (Shift)",
  options: {
    "context menu": "menu contextuel",
    "no action": "aucune action",
    "search box": "boîte de recherche"
  }
};
const Comfy_LinkRenderMode = {
  name: "Mode de rendu du lien",
  options: {
    Hidden: "Caché",
    Linear: "Linéaire",
    Spline: "Spline",
    Straight: "Droit"
  }
};
const Comfy_Load3D_3DViewerEnable = {
  name: "Activer le visualiseur 3D (Bêta)",
  tooltip: "Active le visualiseur 3D (Bêta) pour les nœuds sélectionnés. Cette fonctionnalité vous permet de visualiser et d’interagir avec des modèles 3D directement dans le visualiseur 3D en taille réelle."
};
const Comfy_Load3D_BackgroundColor = {
  name: "Couleur de fond initiale",
  tooltip: "Contrôle la couleur de fond par défaut de la scène 3D. Ce paramètre détermine l'apparence du fond lors de la création d'un nouveau widget 3D, mais peut être ajusté individuellement pour chaque widget après la création."
};
const Comfy_Load3D_CameraType = {
  name: "Type de Caméra",
  options: {
    orthographic: "orthographique",
    perspective: "perspective"
  },
  tooltip: "Contrôle si la caméra est en perspective ou orthographique par défaut lorsqu'un nouveau widget 3D est créé. Ce défaut peut toujours être basculé individuellement pour chaque widget après sa création."
};
const Comfy_Load3D_LightAdjustmentIncrement = {
  name: "Incrément d'ajustement de la lumière",
  tooltip: "Contrôle la taille de l'incrément lors de l'ajustement de l'intensité lumineuse dans les scènes 3D. Une valeur de pas plus petite permet un contrôle plus précis des ajustements de lumière, tandis qu'une valeur plus grande entraîne des changements plus visibles à chaque ajustement."
};
const Comfy_Load3D_LightIntensity = {
  name: "Intensité lumineuse initiale",
  tooltip: "Définit le niveau de luminosité par défaut de l’éclairage dans la scène 3D. Cette valeur détermine l’intensité avec laquelle les lumières illuminent les objets lors de la création d’un nouveau widget 3D, mais peut être ajustée individuellement pour chaque widget après la création."
};
const Comfy_Load3D_LightIntensityMaximum = {
  name: "Intensité lumineuse maximale",
  tooltip: "Définit la valeur maximale autorisée pour l’intensité lumineuse dans les scènes 3D. Cela fixe la limite supérieure de luminosité pouvant être réglée lors de l’ajustement de l’éclairage dans tout widget 3D."
};
const Comfy_Load3D_LightIntensityMinimum = {
  name: "Intensité lumineuse minimale",
  tooltip: "Définit la valeur minimale autorisée de l’intensité lumineuse pour les scènes 3D. Cela définit la limite inférieure de luminosité pouvant être réglée lors de l’ajustement de l’éclairage dans tout widget 3D."
};
const Comfy_Load3D_ShowGrid = {
  name: "Afficher la Grille",
  tooltip: "Basculer pour afficher la grille par défaut"
};
const Comfy_Locale = {
  name: "Langue"
};
const Comfy_MaskEditor_BrushAdjustmentSpeed = {
  name: "Multiplicateur de vitesse d'ajustement du pinceau",
  tooltip: "Contrôle la rapidité de changement de la taille et de la dureté du pinceau lors de l'ajustement. Des valeurs plus élevées signifient des changements plus rapides."
};
const Comfy_MaskEditor_UseDominantAxis = {
  name: "Verrouiller l'ajustement du pinceau sur l'axe dominant",
  tooltip: "Lorsqu'il est activé, les ajustements du pinceau n'affecteront que la taille OU la dureté en fonction de la direction dans laquelle vous bougez le plus"
};
const Comfy_MaskEditor_UseNewEditor = {
  name: "Utiliser le nouvel éditeur de masque",
  tooltip: "Passer à la nouvelle interface de l'éditeur de masque"
};
const Comfy_ModelLibrary_AutoLoadAll = {
  name: "Charger automatiquement tous les dossiers de modèles",
  tooltip: "Si vrai, tous les dossiers seront chargés dès que vous ouvrez la bibliothèque de modèles (cela peut causer des retards pendant le chargement). Si faux, les dossiers de modèles de niveau racine ne seront chargés que lorsque vous cliquerez dessus."
};
const Comfy_ModelLibrary_NameFormat = {
  name: "Quel nom afficher dans l'arborescence de la bibliothèque de modèles",
  options: {
    filename: "nom de fichier",
    title: "titre"
  },
  tooltip: 'Sélectionnez "filename" pour afficher une vue simplifiée du nom de fichier brut (sans répertoire ou extension ".safetensors") dans la liste des modèles. Sélectionnez "title" pour afficher le titre configurable des métadonnées du modèle.'
};
const Comfy_NodeBadge_NodeIdBadgeMode = {
  name: "Mode de badge d'identifiant de nœud",
  options: {
    None: "Aucun",
    "Show all": "Afficher tout"
  }
};
const Comfy_NodeBadge_NodeLifeCycleBadgeMode = {
  name: "Mode de badge de cycle de vie du nœud",
  options: {
    None: "Aucun",
    "Show all": "Afficher tout"
  }
};
const Comfy_NodeBadge_NodeSourceBadgeMode = {
  name: "Mode de badge de source de nœud",
  options: {
    "Hide built-in": "Cacher intégré",
    None: "Aucun",
    "Show all": "Afficher tout"
  }
};
const Comfy_NodeBadge_ShowApiPricing = {
  name: "Afficher l’insigne de tarification API du nœud"
};
const Comfy_NodeSearchBoxImpl = {
  name: "Implémentation de la boîte de recherche de nœud",
  options: {
    "default": "par défaut",
    "litegraph (legacy)": "litegraph (héritage)"
  }
};
const Comfy_NodeSearchBoxImpl_NodePreview = {
  name: "Aperçu du nœud",
  tooltip: "S'applique uniquement à l'implémentation par défaut"
};
const Comfy_NodeSearchBoxImpl_ShowCategory = {
  name: "Afficher la catégorie de nœud dans les résultats de recherche",
  tooltip: "S'applique uniquement à l'implémentation par défaut"
};
const Comfy_NodeSearchBoxImpl_ShowIdName = {
  name: "Afficher le nom de l'identifiant du nœud dans les résultats de recherche",
  tooltip: "S'applique uniquement à l'implémentation par défaut"
};
const Comfy_NodeSearchBoxImpl_ShowNodeFrequency = {
  name: "Afficher la fréquence du nœud dans les résultats de recherche",
  tooltip: "S'applique uniquement à l'implémentation par défaut"
};
const Comfy_NodeSuggestions_number = {
  name: "Nombre de suggestions de nœuds",
  tooltip: "Uniquement pour la boîte de recherche/contexte du menu litegraph"
};
const Comfy_Node_AllowImageSizeDraw = {
  name: "Afficher la largeur × la hauteur sous l'aperçu de l'image"
};
const Comfy_Node_AutoSnapLinkToSlot = {
  name: "Lien d'ancrage automatique à l'emplacement du nœud",
  tooltip: "Lorsque vous faites glisser un lien sur un nœud, le lien se fixe automatiquement à une fente d'entrée viable sur le nœud"
};
const Comfy_Node_BypassAllLinksOnDelete = {
  name: "Conserver tous les liens lors de la suppression de nœuds",
  tooltip: "Lors de la suppression d'un nœud, tentez de reconnecter tous ses liens d'entrée et de sortie (en contournant le nœud supprimé)"
};
const Comfy_Node_DoubleClickTitleToEdit = {
  name: "Double-cliquez sur le titre du nœud pour le modifier"
};
const Comfy_Node_MiddleClickRerouteNode = {
  name: "Le clic du milieu crée un nouveau nœud de réacheminement"
};
const Comfy_Node_Opacity = {
  name: "Opacité du nœud"
};
const Comfy_Node_ShowDeprecated = {
  name: "Afficher les nœuds obsolètes dans la recherche",
  tooltip: "Les nœuds obsolètes sont cachés par défaut dans l'interface utilisateur, mais restent fonctionnels dans les flux de travail existants qui les utilisent."
};
const Comfy_Node_ShowExperimental = {
  name: "Afficher les nœuds expérimentaux dans la recherche",
  tooltip: "Les nœuds expérimentaux sont marqués comme tels dans l'interface utilisateur et peuvent être sujets à des modifications importantes ou à une suppression dans les versions futures. À utiliser avec prudence dans les flux de travail de production"
};
const Comfy_Node_SnapHighlightsNode = {
  name: "Le snap met en évidence le nœud",
  tooltip: "Lorsque vous faites glisser un lien sur un nœud avec une fente d'entrée viable, mettez en évidence le nœud"
};
const Comfy_Notification_ShowVersionUpdates = {
  name: "Afficher les mises à jour de version",
  tooltip: "Afficher les mises à jour pour les nouveaux modèles et les nouvelles fonctionnalités majeures."
};
const Comfy_Pointer_ClickBufferTime = {
  name: "Délai de dérive du clic du pointeur",
  tooltip: "Après avoir appuyé sur un bouton de pointeur, c'est le temps maximum (en millisecondes) que le mouvement du pointeur peut être ignoré.\n\nAide à prévenir que les objets soient déplacés involontairement si le pointeur est déplacé lors du clic."
};
const Comfy_Pointer_ClickDrift = {
  name: "Dérive du clic du pointeur (distance maximale)",
  tooltip: "Si le pointeur se déplace plus que cette distance en maintenant un bouton enfoncé, il est considéré comme un glissement (plutôt qu'un clic).\n\nAide à prévenir que les objets soient déplacés involontairement si le pointeur est déplacé lors du clic."
};
const Comfy_Pointer_DoubleClickTime = {
  name: "Intervalle de double clic (maximum)",
  tooltip: "Le temps maximum en millisecondes entre les deux clics d'un double-clic. Augmenter cette valeur peut aider si les double-clics ne sont parfois pas enregistrés."
};
const Comfy_PreviewFormat = {
  name: "Format de l'image de prévisualisation",
  tooltip: "Lors de l'affichage d'une prévisualisation dans le widget d'image, convertissez-la en une image légère, par exemple webp, jpeg, webp;50, etc."
};
const Comfy_PromptFilename = {
  name: "Demander le nom du fichier lors de l'enregistrement du flux de travail"
};
const Comfy_QueueButton_BatchCountLimit = {
  name: "Limite du nombre de lots",
  tooltip: "Le nombre maximum de tâches ajoutées à la file d'attente en un seul clic de bouton"
};
const Comfy_Queue_MaxHistoryItems = {
  name: "Taille de l'historique de la file d'attente",
  tooltip: "Le nombre maximum de tâches qui s'affichent dans l'historique de la file d'attente."
};
const Comfy_Sidebar_Location = {
  name: "Emplacement de la barre latérale",
  options: {
    left: "gauche",
    right: "droite"
  }
};
const Comfy_Sidebar_Size = {
  name: "Taille de la barre latérale",
  options: {
    normal: "normal",
    small: "petit"
  }
};
const Comfy_Sidebar_UnifiedWidth = {
  name: "Largeur unifiée de la barre latérale"
};
const Comfy_SnapToGrid_GridSize = {
  name: "Taille de la grille d'alignement",
  tooltip: "Lors du déplacement et du redimensionnement des nœuds tout en maintenant shift, ils seront alignés sur la grille, cela contrôle la taille de cette grille."
};
const Comfy_TextareaWidget_FontSize = {
  name: "Taille de la police du widget de zone de texte"
};
const Comfy_TextareaWidget_Spellcheck = {
  name: "Vérification orthographique du widget de zone de texte"
};
const Comfy_TreeExplorer_ItemPadding = {
  name: "Espacement des éléments de l'explorateur d'arborescence"
};
const Comfy_UseNewMenu = {
  name: "Utiliser le nouveau menu",
  options: {
    Disabled: "Désactivé",
    Top: "Haut"
  },
  tooltip: "Position de la barre de menu. Sur les appareils mobiles, le menu est toujours affiché en haut."
};
const Comfy_Validation_Workflows = {
  name: "Valider les flux de travail"
};
const Comfy_WidgetControlMode = {
  name: "Mode de contrôle du widget",
  options: {
    after: "après",
    before: "avant"
  },
  tooltip: "Contrôle quand les valeurs du widget sont mises à jour (randomize/increment/decrement), soit avant que l'invite ne soit mise en file d'attente, soit après."
};
const Comfy_Window_UnloadConfirmation = {
  name: "Afficher une confirmation lors de la fermeture de la fenêtre"
};
const Comfy_Workflow_AutoSave = {
  name: "Auto Sauvegarde",
  options: {
    "after delay": "après délai",
    off: "désactivé"
  }
};
const Comfy_Workflow_AutoSaveDelay = {
  name: "Délai de l'Auto Sauvegarde (ms)",
  tooltip: `S'applique uniquement si l'Auto Sauvegarde est réglée sur "après délai".`
};
const Comfy_Workflow_ConfirmDelete = {
  name: "Afficher une confirmation lors de la suppression des flux de travail"
};
const Comfy_Workflow_Persist = {
  name: "Persiste l'état du flux de travail et restaure lors du (re)chargement de la page"
};
const Comfy_Workflow_ShowMissingModelsWarning = {
  name: "Afficher l'avertissement des modèles manquants"
};
const Comfy_Workflow_ShowMissingNodesWarning = {
  name: "Afficher l'avertissement des nœuds manquants"
};
const Comfy_Workflow_SortNodeIdOnSave = {
  name: "Trier les ID de nœuds lors de l'enregistrement du flux de travail"
};
const Comfy_Workflow_WorkflowTabsPosition = {
  name: "Position des flux de travail ouverts",
  options: {
    Sidebar: "Barre latérale",
    Topbar: "Barre supérieure"
  }
};
const LiteGraph_Canvas_MaximumFps = {
  name: "FPS maximum",
  tooltip: "Le nombre maximum d'images par seconde que le canevas est autorisé à rendre. Limite l'utilisation du GPU au détriment de la fluidité. Si 0, le taux de rafraîchissement de l'écran est utilisé. Par défaut : 0"
};
const LiteGraph_Canvas_MinFontSizeForLOD = {
  name: "Niveau de détail du zoom des nœuds - seuil de taille de police",
  tooltip: "Contrôle quand les nœuds passent au rendu LOD de faible qualité. Utilise la taille de police en pixels pour déterminer quand basculer. Définir sur 0 pour désactiver. Les valeurs de 1 à 24 définissent le seuil de taille de police minimum pour le LOD - des valeurs plus élevées (24px) = basculer les nœuds vers un rendu simplifié plus tôt lors du zoom arrière, des valeurs plus faibles (1px) = maintenir la qualité complète des nœuds plus longtemps."
};
const LiteGraph_ContextMenu_Scaling = {
  name: "Mise à l'échelle des menus de widgets combinés de nœuds (listes) lors du zoom"
};
const LiteGraph_Node_DefaultPadding = {
  name: "Toujours réduire les nouveaux nœuds",
  tooltip: "Redimensionner les nœuds à la taille minimale possible lors de leur création. Lorsque cette option est désactivée, un nœud nouvellement ajouté sera légèrement élargi pour afficher les valeurs des widgets."
};
const LiteGraph_Node_TooltipDelay = {
  name: "Délai d'infobulle"
};
const LiteGraph_Reroute_SplineOffset = {
  name: "Réacheminement décalage de spline",
  tooltip: "Le point de contrôle de Bézier est décalé par rapport au point central de réacheminement"
};
const pysssss_SnapToGrid = {
  name: "Toujours aligner sur la grille"
};
const settings = {
  "Comfy-Desktop_AutoUpdate": {
    name: "Vérifier automatiquement les mises à jour"
  },
  "Comfy-Desktop_SendStatistics": {
    name: "Envoyer des métriques d'utilisation anonymes"
  },
  "Comfy-Desktop_UV_PypiInstallMirror": {
    name: "Miroir d'installation Pypi",
    tooltip: "Miroir d'installation pip par défaut"
  },
  "Comfy-Desktop_UV_PythonInstallMirror": {
    name: "Miroir d'installation Python",
    tooltip: "Les installations Python gérées sont téléchargées depuis le projet Astral python-build-standalone. Cette variable peut être définie sur une URL de miroir pour utiliser une source différente pour les installations Python. L'URL fournie remplacera https://github.com/astral-sh/python-build-standalone/releases/download dans, par exemple, https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz. Les distributions peuvent être lues à partir d'un répertoire local en utilisant le schéma d'URL file://."
  },
  "Comfy-Desktop_UV_TorchInstallMirror": {
    name: "Miroir d'installation Torch",
    tooltip: "Miroir d'installation Pip pour pytorch"
  },
  "Comfy-Desktop_WindowStyle": {
    name: "Style de fenêtre",
    options: {
      custom: "personnalisé",
      "default": "défaut"
    },
    tooltip: "Choisissez l'option personnalisée pour masquer la barre de titre du système"
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
//# sourceMappingURL=settings-0O6mq5to.js.map
