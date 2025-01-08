const PlatformControllers = require("../controllers/PlatformControllers");
const { Router } = require("express");
const router = Router();

router.get("/", PlatformControllers.platforms);
router.get("/:id", PlatformControllers.platformById);
router.post("/", PlatformControllers.createPlatform);
router.put("/:id", PlatformControllers.updatePlatform);
router.delete("/:id", PlatformControllers.deletePlatform);

module.exports = router;
