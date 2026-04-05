declare const _default: ({
    name: string;
    plugins: {
        readonly '@intlify/vue-i18n': any;
    };
    files?: undefined;
    languageOptions?: undefined;
    rules?: undefined;
} | {
    name: string;
    files: string[];
    languageOptions: {
        parser: any;
        parserOptions: {
            parser: any;
        };
    };
    plugins?: undefined;
    rules?: undefined;
} | {
    name: string;
    files: string[];
    languageOptions: {
        parser: any;
        parserOptions: {
            parser: any;
        };
    };
    rules: {
        'no-irregular-whitespace': string;
        'spaced-comment': string;
    };
    plugins?: undefined;
})[];
export = _default;
