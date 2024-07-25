import express from "express";
const router = express.Router();

router.post("/api/users/signup", (req, res) => {
  res.status(200).json({
    success: true,
    data: null,
    message: "signed up successfully.",
  });
});

export { router as signupRouter };
