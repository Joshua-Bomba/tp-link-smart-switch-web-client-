import { v4 as uuid } from 'uuid'

export default class KasaInterface {
    constructor() {
        this._tpl = {};

        //set these in a config file or prompt for them
        this._tpl.username = "";
        this._tpl.password = "";
    }

    tpl_auth() {
        this._tpl.UUID = uuid();

        var auth_obj = {
            "method": "login", "params": {
                "appType": "Kasa_Android",
                "cloudUserName":this._tpl.username,
                "cloudPassword": this._tpl.password,
                "terminalUUID": this._tpl.UUID
            }
        };
    }

    post_op() {

    }
}