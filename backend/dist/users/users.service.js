"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
            { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
            { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
        ];
        this.nextId = 4;
    }
    findAll() { return this.users; }
    findOne(id) { return this.users.find(u => u.id === id); }
    create(dto) { const u = Object.assign({ id: this.nextId++ }, dto); this.users.push(u); return u; }
    update(id, dto) {
        const u = this.findOne(id);
        if (!u)
            throw new Error('User not found');
        Object.assign(u, dto);
        return u;
    }
    remove(id) { this.users = this.users.filter(u => u.id !== id); }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map