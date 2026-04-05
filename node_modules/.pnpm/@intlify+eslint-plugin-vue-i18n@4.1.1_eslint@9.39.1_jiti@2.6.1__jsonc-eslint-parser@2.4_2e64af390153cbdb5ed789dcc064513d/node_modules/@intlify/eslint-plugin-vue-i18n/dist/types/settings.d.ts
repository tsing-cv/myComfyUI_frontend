export type LocaleKeyType = 'file' | 'path' | 'key';
export type SettingsVueI18nLocaleDir = SettingsVueI18nLocaleDirGlob | SettingsVueI18nLocaleDirObject | (SettingsVueI18nLocaleDirGlob | SettingsVueI18nLocaleDirObject)[];
export type SettingsVueI18nLocaleDirGlob = string;
export interface SettingsVueI18nLocaleDirObject {
    pattern: string;
    localeKey: LocaleKeyType;
    localePattern?: string | RegExp;
}
