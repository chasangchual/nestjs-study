"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserState = exports.UserType = void 0;
var UserType;
(function (UserType) {
    UserType[UserType["Admin"] = 9] = "Admin";
    UserType[UserType["User"] = 3] = "User";
    UserType[UserType["Guest"] = 5] = "Guest";
})(UserType = exports.UserType || (exports.UserType = {}));
var UserState;
(function (UserState) {
    UserState["Active"] = "active";
    UserState["Inactive"] = "inactive";
    UserState["Suspended"] = "suspended";
})(UserState = exports.UserState || (exports.UserState = {}));
//# sourceMappingURL=user-type.js.map