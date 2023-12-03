import { Router } from "express";
import {
  listAction,
  getSingleUser,
  getUserPhotos,
  getSinglePostData,
  getNoOfGroupsPerUser,
  getCommentsData,
} from "./User/controller.js";
import {
  groupAction,
  groupDetails,
  groupMembers,
} from "./groups/controller.js";

export const router = Router();

router.get("/api/v1/users", listAction);
router.get("/api/v1/user/:id", getSingleUser);
router.get("/api/v1/groups", groupAction);
router.get("/api/v1/groups/:id", groupMembers);
router.get("/api/v1/group/:id", groupDetails);
router.get("/api/v1/posts/:id", getUserPhotos);
router.get("/api/v1/post/:id", getSinglePostData);
router.get("/api/v1/user/group/:id", getNoOfGroupsPerUser);
router.get("/api/v1/user/comments/:id", getCommentsData);
