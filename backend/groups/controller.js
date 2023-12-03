import { response } from "express";
import {
  getGroupMembers,
  getGroupMembersCount,
  getGroups,
  getSingleGroupDetails,
} from "./model.js";
export async function groupAction(request, response) {
  const groups = await getGroups();
  const memberCount = await getGroupMembersCount();
  console.log(groups);
  response.send({
    success: true,
    groups,
    memberCount,
  });
}

export async function groupMembers(request, response) {
  const id = parseInt(request.params.id, 10);
  const members = await getGroupMembers(id);
  response.send({
    success: true,
    members,
  });
}

export async function groupDetails(request, response) {
  const id = parseInt(request.params.id, 10);
  const data = await getSingleGroupDetails(id);
  response.send({
    success: true,
    data,
  });
}
