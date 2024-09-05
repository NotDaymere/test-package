"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentFormatDate = void 0;
var dayjs_1 = __importDefault(require("dayjs"));
var getCurrentFormatDate = function () {
    return "Current Date: " + (0, dayjs_1.default)().format('YYYY-MM-DD / H:mm:s');
};
exports.getCurrentFormatDate = getCurrentFormatDate;
