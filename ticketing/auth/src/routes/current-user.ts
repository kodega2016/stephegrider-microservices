import express from "express";
const router = express.Router();

router.get("/api/users/current-user", (req, res) => {
  res.status(200).json({
    success: true,
    data: null,
    message: "current user info is fetched successfully.",
  });
});

export { router as currentUserRouter };
