import SectionTitle from "./SectionTitle";
import SinglePostRow from "./SinglePostRow";
import avatar from "./images/sampleavatar.jpg";
const UserPost = ({ data, id }) => {
  console.log(data);
  return (
    // <h1>h</h1>
    <section className="flex mt-20 ml-40 align-element">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={avatar} />
        </div>
      </div>
      <div className="overflow-x-auto ml-5 ">
        <table className="table">
          <thead>
            <tr>
              <th>Post ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Author</th>
              <th>Form ID</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => {
              const userId = id;
              const { postId, title, content, createdDate, author, formId } =
                post;
              return (
                <SinglePostRow
                  postId={postId}
                  title={title}
                  content={title}
                  createdDate={createdDate}
                  author={author}
                  formId={formId}
                />
              );
            })}
          </tbody>

          <tfoot></tfoot>
        </table>
        <div></div>
      </div>
    </section>
  );
};
export default UserPost;
