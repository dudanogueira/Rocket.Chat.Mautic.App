import { ISetting, SettingType} from '@rocket.chat/apps-engine/definition/settings';

export enum AppSetting {
    MauticAppApiUrl = 'mauticapp_api_url',
    MauticAppBasicAuthentication = 'mauticapp_basic_authentication'
}

export const settings: Array<ISetting> = [
    {
        id: AppSetting.MauticAppApiUrl,
        public: true,
        type: SettingType.STRING,
        value: null,
        packageValue: null,
        hidden: false,
        i18nLabel: 'MauticApp_ApiUrl',
        required: false,
    },
    {
        id: AppSetting.MauticAppBasicAuthentication,
        public: true,
        type: SettingType.STRING,
        value: null,
        packageValue: null,
        hidden: false,
        i18nLabel: 'MauticApp_Basic_Authentication',
        required: false,
    },       
]