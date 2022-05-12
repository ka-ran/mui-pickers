"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToCurrency = void 0;
function formatToCurrency(args) {
    return `$${(args / 100).toFixed(2)}`;
}
exports.formatToCurrency = formatToCurrency;
