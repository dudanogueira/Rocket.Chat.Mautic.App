import {
    IAppAccessors,
    IConfigurationExtend,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { ILivechatRoom, IPostLivechatGuestSaved, IPostLivechatRoomSaved, IVisitor } from '@rocket.chat/apps-engine/definition/livechat';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { IPostUserLoggedIn, IUser } from '@rocket.chat/apps-engine/definition/users';
import { settings } from './config/Settings';

export class MauticApp extends App implements IPostLivechatGuestSaved, IPostLivechatRoomSaved, IPostUserLoggedIn {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    public async initialize(configurationExtend: IConfigurationExtend): Promise<void> {
        // extend configuration
        await this.extendConfiguration(configurationExtend);
    }

    public async extendConfiguration(configuration: IConfigurationExtend) {
        await Promise.all(settings.map((setting) => configuration.settings.provideSetting(setting)));
    }

    public async executePostLivechatGuestSaved(data: IVisitor, read: IRead, httpAn: IHttp) {
        this.getLogger().info("PostLiveChatGuestSaved: ", data)
        console.log("TESTE!!! executePostLivechatGuestSaved")
        return;
    }

    public async executePostLivechatRoomSaved(data: ILivechatRoom) {
        this.getLogger().info("executePostLivechatRoomSaved: ", data)
        console.log("TESTE!!! executePostLivechatRoomSaved")
        return;
    }
    public async executePostUserLoggedIn(context: IUser, read: IRead, http: IHttp) {
        this.getLogger().info("User Logged in", context)
        console.log("aeeeeeeeeeeeeeee ")
        return;
    }
    // After saving Visitor, integrate with Mautic


}
