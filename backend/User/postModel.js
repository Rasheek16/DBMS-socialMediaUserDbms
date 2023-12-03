import { connection } from "../mysql-config.js";

export async function getPosts(id) {
  const query1 = `SELECT userId, firstname FROM User WHERE userId=?`;
  const [user] = await connection.query(query1, [id]);
  console.log(user);
  //   if (!user.length) {
  //     // Handle the case where the user with the specified id is not found
  //     return null;
  //   }

  const username = user[0].firstname;
  console.log(username);
  const query2 = `
    SELECT postId, title, content, createdDate, author, formId
    FROM post
    WHERE author =?;
  `;

  const [data] = await connection.query(query2, [username]);
  console.log(data);
  return data;
}

export async function getPostData(id) {
  const commentsQuery = `
SELECT
    c.commentId,
    c.content,
    c.postId,
    c.replyTo,
    c.authorId,
    c.createdAt,
    u.username  -- Adding the username from the users table
FROM comments c
JOIN user u ON c.authorId = u.userId
WHERE c.postId = ?;

`;

  const likesQuery = `
SELECT
    pl.userId AS likedByUserId, u.username AS likedByUsername
FROM postLikes pl
JOIN user u ON pl.userId = u.userId
WHERE pl.postId = ?;
`;

  const [commentData] = await connection.query(commentsQuery, [id]);
  const [likeData] = await connection.query(likesQuery, [id]);
  const data = { commentData, likeData };
  return data;
}

export async function getNoOfGroup(id) {
  const query_1 =
    "SET SESSION sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));";
  await connection.query(query_1);
  const query =
    "SELECT gm.membershipId, g.groupId, g.groupName, g.moderator, g.formId, g.createdAt AS groupCreatedAt, gm.joinDate, COUNT(u.userId) AS numberOfMembers FROM groupMembership gm JOIN `groups` g ON gm.groupId = g.groupId JOIN user u ON gm.userId = u.userId WHERE u.userId = ?  -- Replace '1' with the actual user ID GROUP BY gm.membershipId, g.groupId, g.groupName, g.moderator, g.formId, g.createdAt, gm.joinDate;";

  const [data] = await connection.query(query, [id]);
  return data;
}
export async function getComments(id) {
  const query = `
  SELECT
    c.commentId,
    c.content,
    c.postId,
    c.replyTo,
    c.authorId,
    c.createdAt AS commentCreatedAt,
    p.title AS postTitle,
    p.content AS postContent,
    p.createdDate AS postCreatedDate,
    p.author AS postAuthor,
    p.formId AS postFormId
FROM comments c
JOIN post p ON c.postId = p.postId
WHERE c.authorId = ?; 
  `;
  const [data] = await connection.query(query, [id]);
  return data;
}
