// import { } from "../groups/model.js";
import { getAll, getUser, getFriends } from "./model.js";
import {
  getPosts,
  getPostData,
  getNoOfGroup,
  getComments,
} from "./postModel.js";
export async function listAction(request, response) {
  try {
    const page = parseInt(request.query.page) || 1;
    const pageSize = parseInt(request.query.pageSize) || 10;

    const data = await getAll();
    const paginatedData = paginateData(data, page, pageSize);

    response.send({
      success: true,
      data: paginatedData,
      pageInfo: {
        currentPage: page,
        pageSize,
        totalPages: Math.ceil(data.length / pageSize),
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send({
      success: false,
      error: "Internal Server Error",
    });
  }
}

function paginateData(data, page, pageSize) {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}

export async function getSingleUser(request, response) {
  const id = parseInt(request.params.id, 10);
  const user = await getUser(id);
  const friends = await getFriends(id);
  response.send({
    success: true,
    data: {
      user: user,
      friends: friends,
    },
  });
}

export async function getUserPhotos(request, response) {
  const id = request.params.id;
  console.log(id);
  const data = await getPosts(id);
  response.send({
    success: true,
    data,
  });
}

export async function getSinglePostData(request, response) {
  const id = request.params.id;
  const data = await getPostData(id);
  response.send({
    success: true,
    data,
  });
}

export async function getNoOfGroupsPerUser(request, response) {
  const id = request.params.id;
  const data = await getNoOfGroup(id);
  response.send({
    success: true,
    data,
  });
}

export async function getCommentsData(request, response) {
  const id = request.params.id;
  const data = await getComments(id);
  response.send({
    success: true,
    data,
  });
}
