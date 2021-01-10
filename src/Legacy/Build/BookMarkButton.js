// import React, { useEffect, useState } from "react";
// import { Button } from "@material-ui/core";
// import {
//   getUserBookmarks,
//   bookmark,
//   removeBookmark,
//   postComment,
// } from "../Fetches/fetches";
// import "./BookMarkButton.css";

// const BookmarkButton = (props) => {
//   const [following, setFollowing] = useState(false);

//   useEffect(() => {
//     const checkFollow = async () => {
//       const res = await getUserBookmarks(props.followerId);
//       if (res) {
//         if (res.includes(parseInt(props.buildId))) {
//           console.log("already bookmarked!");
//           setFollowing(true);
//         } else {
//           console.log("not bookmarked yet!");
//         }
//       }
//     };
//     checkFollow();
//   }, [props]);

//   const addBookMark = async () => {
//     let bid = await parseInt(props.buildId);
//     const info = {
//       buildId: bid,
//       followerId: props.followerId,
//     };

//     console.log(info);

//     const res = await postComment(info);

//     // if (res.ok) {
//     //   setFollowing(true);
//     // } else {
//     //   console.log("something went wrong!");
//     // }
//   };

//   const removeBookMark = () => {
//     setFollowing(false);
//   };

//   return (
//     <>
//       {following ? (
//         <Button
//           variant="contained"
//           className="bookmark"
//           onClick={removeBookMark}
//           color="secondary"
//         >
//           Saved
//         </Button>
//       ) : (
//         <Button
//           variant="contained"
//           className="bookmark-remove"
//           onClick={addBookMark}
//         >
//           Bookmark
//         </Button>
//       )}
//     </>
//   );
// };

// export default BookmarkButton;
