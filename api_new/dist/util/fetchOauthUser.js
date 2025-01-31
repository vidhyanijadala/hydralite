"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGithubUser = exports.fetchDiscordUser = void 0;
const axios_1 = __importDefault(require("axios"));
function fetchDiscordUser(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield axios_1.default({
            method: "GET",
            url: "https://discordapp.com/api/users/@me",
            headers: {
                Authorization: `${token}`,
            },
        })).data;
    });
}
exports.fetchDiscordUser = fetchDiscordUser;
function fetchGithubUser(token) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield axios_1.default({
            method: "GET",
            url: "https://api.github.com/user",
            headers: {
                Authorization: `bearer ${token}`,
            },
        })).data;
    });
}
exports.fetchGithubUser = fetchGithubUser;
//# sourceMappingURL=fetchOauthUser.js.map