"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const router = (0, express_1.Router)();
router.get("/contacts", admin_controller_1.getContacts);
router.get("/appointments", admin_controller_1.getAppointments);
exports.default = router;
