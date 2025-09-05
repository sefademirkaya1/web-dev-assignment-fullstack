"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
let PostsService = class PostsService {
    constructor() {
        this.posts = [
            { id: 1, userId: 1, title: 'Post 1', body: 'Hello world' },
            { id: 2, userId: 1, title: 'Post 2' },
            { id: 3, userId: 2, title: 'Another post' }
        ];
        this.nextId = 4;
    }
    findAll() { return this.posts; }
    findOne(id) { return this.posts.find(p => p.id === id); }
    findByUser(userId) { return this.posts.filter(p => p.userId === userId); }
    create(dto) { const p = Object.assign({ id: this.nextId++ }, dto); this.posts.push(p); return p; }
    update(id, dto) {
        const p = this.findOne(id);
        if (!p)
            throw new Error('Post not found');
        Object.assign(p, dto);
        return p;
    }
    remove(id) { this.posts = this.posts.filter(p => p.id !== id); }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
//# sourceMappingURL=posts.service.js.map