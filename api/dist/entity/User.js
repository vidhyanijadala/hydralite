"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Project_1 = require("./Project");
const UserProfile_1 = __importDefault(require("./UserProfile"));
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "githubId", void 0);
__decorate([
    type_graphql_1.Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    Column("timestamptz"),
    __metadata("design:type", Date)
], User.prototype, "joinDate", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.OneToOne(() => UserProfile_1.default),
    typeorm_1.JoinColumn(),
    __metadata("design:type", UserProfile_1.default)
], User.prototype, "profile", void 0);
__decorate([
    type_graphql_1.Field(),
    Column(),
    __metadata("design:type", Number)
], User.prototype, "marketingCredits", void 0);
__decorate([
    type_graphql_1.Field(),
    Column("text", { nullable: true }),
    __metadata("design:type", String)
], User.prototype, "elonicMemberId", void 0);
__decorate([
    type_graphql_1.Field(() => [Project_1.Project]),
    typeorm_1.OneToMany(() => Project_1.Project, (project) => project.user),
    __metadata("design:type", Array)
], User.prototype, "projects", void 0);
User = __decorate([
    type_graphql_1.ObjectType(),
    Entity("users")
], User);
exports.default = User;
//# sourceMappingURL=User.js.map