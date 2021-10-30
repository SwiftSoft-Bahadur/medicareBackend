// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = async () => {
    ac.grant("user")
        .readOwn("profile")
        .updateOwn("profile")

    ac.grant("employee")
        .extend("user")
        .readAny("profile")

    ac.grant("admin")
        .extend("user")
        .extend("employee")
        .updateAny("medicine")
        .deleteAny("medicine")

    return ac;
}