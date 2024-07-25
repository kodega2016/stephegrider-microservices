import express from "express";
const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.status(200).json({
    success: true,
    data: null,
    message: "signed in successfully.",
  });
});

export { router as signinRouter };
