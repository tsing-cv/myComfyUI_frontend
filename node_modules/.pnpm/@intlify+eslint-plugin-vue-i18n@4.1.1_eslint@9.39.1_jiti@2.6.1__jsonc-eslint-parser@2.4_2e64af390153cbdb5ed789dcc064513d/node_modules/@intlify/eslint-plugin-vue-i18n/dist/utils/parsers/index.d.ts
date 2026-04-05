import type { AST as VAST } from 'vue-eslint-parser';
import type { I18nLocaleMessageDictionary } from '../../types';
export declare function parseJsonValuesInI18nBlock(i18nBlock: VAST.VElement): I18nLocaleMessageDictionary | null;
export declare function parseYamlValuesInI18nBlock(i18nBlock: VAST.VElement): I18nLocaleMessageDictionary | null;
