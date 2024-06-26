"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationTokenWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let VerificationTokenWhereInput = class VerificationTokenWhereInput {
};
exports.VerificationTokenWhereInput = VerificationTokenWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [VerificationTokenWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], VerificationTokenWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VerificationTokenWhereInput.prototype, "identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], VerificationTokenWhereInput.prototype, "token", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], VerificationTokenWhereInput.prototype, "expires", void 0);
exports.VerificationTokenWhereInput = VerificationTokenWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("VerificationTokenWhereInput", {})
], VerificationTokenWhereInput);
