import { connection } from "../mysql-config.js";

export async function getGroups() {
  const query = "SELECT * FROM `groups`";
  const [data] = await connection.query(query);
  return data;
}

export async function getGroupMembers(id) {
  const query = `
SELECT u.*
FROM user u
JOIN groupMembership gm ON u.userId = gm.userId
WHERE gm.groupId = ?;
`;

  const data = await connection.query(query, [id]);
  return data;
}

export async function getGroupMembersCount() {
  const query = `
SELECT groupId, COUNT(userId) AS numberOfMembers
FROM groupMembership
GROUP BY groupId;
`;

  const [data] = await connection.query(query);
  return data;
}

export async function getSingleGroupDetails(id) {
  const query =
    "  SELECT g.groupId, g.groupName, u.*, gm.joinDate FROM `groups` g JOIN groupMembership gm ON g.groupId = gm.groupId JOIN user u ON gm.userId = u.userId WHERE g.groupId = ?;";
  const [data] = await connection.query(query, [id]);
  return data;
}


